const API_BASE = 'https://api.dicionario-aberto.net';
const CACHE_KEY = 'dicionario-aberto-cache-v1';

const normalizeText = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim();

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
};

const writeCache = (cache) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    // ignora falhas de armazenamento local
  }
};

const extractDefinition = (entry) => {
  if (!entry) return '';

  if (Array.isArray(entry.meanings) && entry.meanings.length > 0) {
    const firstMeaning = entry.meanings[0];
    if (typeof firstMeaning === 'string' && firstMeaning.trim()) return firstMeaning.trim();
    if (firstMeaning && typeof firstMeaning.def === 'string' && firstMeaning.def.trim()) return firstMeaning.def.trim();
    if (firstMeaning && typeof firstMeaning.significado === 'string' && firstMeaning.significado.trim()) return firstMeaning.significado.trim();
  }

  if (typeof entry.def === 'string' && entry.def.trim()) return entry.def.trim();
  if (Array.isArray(entry.defs) && entry.defs.length > 0 && typeof entry.defs[0]?.def === 'string') return entry.defs[0].def.trim();

  const xml = entry.xml || '';
  if (typeof xml === 'string' && xml.includes('<def>')) {
    const match = xml.match(/<def>(.*?)<\/def>/i);
    if (match && match[1]) {
      return match[1].replace(/<.*?>/g, '').trim();
    }
  }

  return '';
};

export const fetchWordDefinition = async (word) => {
  const normalized = normalizeText(word);
  if (!normalized) return null;

  const cache = readCache();
  if (cache[normalized]) {
    return cache[normalized];
  }

  try {
    const response = await fetch(`${API_BASE}/word/${encodeURIComponent(normalized)}`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const entry = Array.isArray(data) ? data[0] : data;
    if (!entry || !entry.word) {
      return null;
    }

    const definition = extractDefinition(entry);
    const payload = {
      word: entry.word,
      definition: definition || 'Palavra registrada no dicionário, mas sem descrição detalhada disponível.'
    };

    cache[normalized] = payload;
    writeCache(cache);
    return payload;
  } catch (error) {
    console.warn('Falha ao consultar o Dicionário Aberto:', error);
    return null;
  }
};

const normalizeWord = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim();

const difficultyPrefix = {
  facil: 'Pista fácil: ',
  medio: 'Pense nisso: ',
  dificil: 'Desafio: '
};

const SPECIAL_HINTS = {
  titanic: {
    facil: 'Uma jovem da alta sociedade se apaixona durante uma viagem em um navio luxuoso que termina em tragédia marítima.',
    medio: 'O romance entre Jack e Rose acontece a bordo do famoso navio que virou símbolo de uma catástrofe histórica.',
    dificil: 'O filme retrata a viagem inaugural de um transatlântico britânico que naufragou no oceano Atlântico em 1912.'
  },
  frozen: {
    facil: 'A princesa com poderes sobre o gelo precisa aprender a controlar uma habilidade que pode causar caos no reino.',
    medio: 'A história gira em torno de duas irmãs, uma delas com o dom de criar gelo e neve, e de um drama que coloca o reino em perigo.',
    dificil: 'A trama acompanha Elsa, que tem medo de seu poder mágico e precisa enfrentar a realidade de um reino congelado pela própria magia.'
  },
  shrek: {
    facil: 'O personagem vive em um pântano e acaba sendo arrastado para uma missão que o obriga a sair de sua rotina.',
    medio: 'O ogro verde precisa lidar com um cavaleiro, uma princesa e uma jornada que mistura comédia, aventura e fantasia.',
    dificil: 'A narrativa combina paródia de contos de fada com uma aventura em que um ogro e uma princesa mudam a dinâmica do reino.'
  },
  'o rei leao': {
    facil: 'O protagonista é um jovem leão que precisa enfrentar o passado para recuperar o lugar que lhe pertence na savana.',
    medio: 'A história acompanha Simba, que cresce entre a vida e a responsabilidade de herdar o lugar do pai no reino.',
    dificil: 'A trama gira em torno da disputa pelo trono, da culpa do passado e da volta de um herdeiro ao lugar de sua família.'
  },
  'procurando nemo': {
    facil: 'Um peixe-palhaço percorre o oceano em busca do filho, que foi levado por mergulhadores durante o passeio.',
    medio: 'A jornada do pai Marlin atravessa a imensidão do mar enquanto ele tenta reencontrar o filho sequestrado.',
    dificil: 'A história segue a busca de Nemo pelo oceano, com uma sequência de encontros perigosos e muita determinação do pai.'
  },
  'jurassic park': {
    facil: 'Um parque temático com dinossauros criados em laboratório acaba se tornando um enorme risco para todos ali.',
    medio: 'A trama acontece em uma ilha onde cientistas recriam espécies extintas, mas a natureza se revela muito mais perigosa do que o planejado.',
    dificil: 'O filme mostra um complexo de entretenimento em que a engenharia genética reintroduz criaturas pré-históricas e o caos toma conta do local.'
  },
  avatar: {
    facil: 'A história se passa em Pandora, um mundo alienígena repleto de vida e mistério, com uma protagonista ligada ao planeta.',
    medio: 'O enredo acompanha um soldado que se conecta a um corpo alienígena em um planeta exótico dominado por conflitos humanos e nativos.',
    dificil: 'A trama se passa no planeta Pandora e explora a relação entre exploração humana, biodiversidade e a luta por sobrevivência dos Na’vi.'
  },
  'harry potter': {
    facil: 'O protagonista é um menino que descobre que é um bruxo e entra em um mundo mágico cheio de mistérios.',
    medio: 'A história acompanha Harry desde a escola de magia até a batalha contra forças sombrias que ameaçam o mundo bruxo.',
    dificil: 'O protagonista cresce em um universo de magia, feitiços, criaturas fantásticas e uma luta contra o maior vilão do mundo bruxo.'
  },
  'toy story': {
    facil: 'Os personagens são brinquedos que vivem uma rotina de convivência e têm sentimentos muito parecidos com os de pessoas.',
    medio: 'A história mostra que o mundo dos brinquedos muda quando um novo e muito popular item ganha destaque no quarto.',
    dificil: 'O filme combina animação, fantasia e uma dinâmica em que brinquedos pensam, sentem e disputam atenção com o dono.'
  },
  'bela e a fera': {
    facil: 'A história envolve uma jovem que se apaixona por um príncipe amaldiçoado e precisa ver além da aparência.',
    medio: 'Uma princesa diante de uma maldição e de um castelo encantado vive uma jornada de amor e transformação profunda.',
    dificil: 'A trama se passa em um castelo encantado em que a aparência da fera esconde uma história de amor capaz de quebrar uma maldição antiga.'
  },
  'madagascar': {
    facil: 'A aventura começa em um zoológico e se transforma em uma viagem por uma ilha tropical cheia de desafios.',
    medio: 'Os personagens vivem uma fuga inesperada e acabam em uma ilha onde encontram novas aventuras e uma rotina muito diferente.',
    dificil: 'A história segue animais de zoológico que chegam a Madagascar e precisam lidar com liberdade, sobrevivência e amizades inesperadas.'
  },
  'minions': {
    facil: 'Os personagens são pequenos seres amarelados que se destacam por sua energia e por cometerem trapalhadas.',
    medio: 'A trama acompanha criaturas baixas, amarelas e muito engraçadas em uma jornada cheia de confusão e caos.',
    dificil: 'A narrativa mostra os minions em sua busca por servir ao vilão mais forte, sempre com humor, caos e grandes falhas de estratégia.'
  },
  'interestelar': {
    facil: 'A história leva a humanidade a enfrentar um problema enorme no espaço em busca de uma possibilidade de sobrevivência.',
    medio: 'A trama acompanha uma equipe espacial em uma missão para encontrar um novo lar para a Terra em meio a um cenário crítico.',
    dificil: 'O filme explora viagens pelo espaço, buracos de minhoca e a responsabilidade de manter a vida humana diante do fim do planeta.'
  },
  'a chegada': {
    facil: 'Uma linguista tenta decifrar a linguagem de seres estrangeiros que chegam à Terra em grandes naves.',
    medio: 'A narrativa foca em uma mulher que precisa entender uma comunicação alienígena de forma intensa e decisiva para o futuro da humanidade.',
    dificil: 'O filme trata de linguagem, comunicação e a escolha de interpretar sinais de uma visita extraterrestre antes que seja tarde demais.'
  },
  'os vingadores': {
    facil: 'Uma equipe de heróis se reúne para impedir uma ameaça gigantesca e muito perigosa para o planeta.',
    medio: 'A trama reúne diversos personagens poderosos em uma missão que exige coragem, estratégia e união para salvar o mundo.',
    dificil: 'O enredo depende da aliança entre heróis com habilidades distintas para enfrentar uma invasão global de proporções extremas.'
  },
  'zootopia': {
    facil: 'Uma cidade onde animais de todas as espécies convivem é o cenário de uma história de investigação e mistério.',
    medio: 'O filme mistura aventura, mistério e humor em uma metrópole em que diferentes animais vivem juntos em um contexto urbano.',
    dificil: 'A trama segue uma coelha policial e um raposa que descobrem segredos dentro de uma cidade onde a convivência animal é a regra.'
  },
  'a vida e bela': {
    facil: 'A narrativa mostra a relação entre pai e filho em meio a um mundo em que a sobrevivência exige muita coragem.',
    medio: 'A história acompanha um homem e seu filho tentando escapar de uma realidade cruel durante anos de guerra e caos.',
    dificil: 'O filme combina emoção profunda e um enorme contraste entre a brutalidade do mundo e o esforço de proteger a inocência de uma criança.'
  },
  'o senhor dos aneis': {
    facil: 'Uma jornada épica leva um grupo de aventureiros a atravessar terras perigosas para destruir um objeto poderoso.',
    medio: 'A trama gira em torno de uma sociedade em perigo, de lugares fantásticos e de um anel que pode mudar o destino do mundo.',
    dificil: 'O grande objetivo da aventura é destruir um artefato capaz de dar poder absoluto a quem o possuir, em um mundo repleto de magia.'
  },
  'senhor dos aneis': {
    facil: 'Uma jornada épica leva um grupo de aventureiros a atravessar terras perigosas para destruir um objeto poderoso.',
    medio: 'A trama gira em torno de uma sociedade em perigo, de lugares fantásticos e de um anel que pode mudar o destino do mundo.',
    dificil: 'O grande objetivo da aventura é destruir um artefato capaz de dar poder absoluto a quem o possuir, em um mundo repleto de magia.'
  },
  'a rede social': {
    facil: 'A história mostra como um jovem empreendedor revolucionou a forma de conectar pessoas na internet.',
    medio: 'O filme acompanha a criação de uma rede social que transformou a comunicação digital e a cultura do mundo contemporâneo.',
    dificil: 'A trama foca na ascensão de uma plataforma digital e nas disputas legais, financeiras e pessoais que a cercaram.'
  },
  'o poderoso chefao': {
    facil: 'A história acompanha uma família de poder e a influência que ela exerce na cidade e nos negócios.',
    medio: 'O filme mostra ambição, lealdade e violência dentro de uma organização mafiosa e muito influente na sociedade.',
    dificil: 'A trama gira em torno da família Corleone e da disputa por poder em um mundo de crime organizado e decisões difíceis.'
  },
  'o lobo de wall street': {
    facil: 'A história acompanha um operador financeiro brilhante que vive em um mundo de fortuna, risco e exagero.',
    medio: 'O filme mostra a ascensão de um empresário muito habilidoso em Wall Street, com sucesso, excessos e consequências graves.',
    dificil: 'A narrativa explora o mundo das finanças, da ambição desenfreada e dos efeitos devastadores do excesso de poder e dinheiro.'
  },
  'gladiador': {
    facil: 'O protagonista é um guerreiro que vive uma jornada de vingança e redenção em um império.',
    medio: 'A trama acompanha um general romano brutalmente traído e que busca justiça no meio de um cenário de poder e violência.',
    dificil: 'O filme se passa no Império Romano e reúne disputa por poder, violência e a busca de um homem por honra e vingança.'
  },
  'ratatouille': {
    facil: 'A história segue um rato que sonha em cozinhar e surpreender um chef famoso.',
    medio: 'O filme combina humor, gastronomia e talento, com um personagem improvável se tornando criativo dentro da cozinha.',
    dificil: 'A trama gira em torno de um rato apaixonado por culinária e de sua tentativa de transformar a cozinha de um restaurante famoso.'
  },
  'viva a vida': {
    facil: 'O enredo acompanha a vida de um homem que precisa enfrentar desafios e decidir o que realmente importa.',
    medio: 'O filme mistura dramas pessoais e momentos de esperança em uma história sobre a rotina, os sonhos e o peso da existência.',
    dificil: 'A narrativa foca na coragem de viver plenamente, em meio a dificuldades e decisões que moldam a trajetória de um personagem.'
  },
  'divertidamente': {
    facil: 'A história mostra emoções em forma de personagens que convivem no mundo dos sentimentos.',
    medio: 'O filme explora a mente de uma menina e os sentimentos que ela vive enquanto cresce e enfrenta mudanças.',
    dificil: 'A animação se passa dentro da mente de uma criança, em um mundo em que emoções e memórias dão forma à personalidade.'
  },
  noe: {
    facil: 'Ele recebeu uma ordem divina para construir uma grande embarcação antes de uma inundação que cobriria a Terra.',
    medio: 'A história de Noé está ligada à construção de uma arca e à sobrevivência de sua família durante um dilúvio.',
    dificil: 'Noé foi instruído por Deus a preservar a vida animal e humana em uma arca antes do julgamento por águas que cobriram a terra.'
  },
  moises: {
    facil: 'Ele liderou a saída dos israelitas do Egito e conduziu o povo através de um grande trecho de água.',
    medio: 'Moisés recebeu a missão de libertar seu povo da escravidão e guiá-lo por um período de migração e provações.',
    dificil: 'O profeta conduziu os israelitas para fora do Egito, atravessou diante de uma divisão de águas e recebeu a Lei de Deus no Sinai.'
  },
  davi: {
    facil: 'Ainda jovem, ele venceu um gigante usando uma funda e uma pedra.',
    medio: 'Davi, que mais tarde se tornou rei, ficou famoso por enfrentar Golias em um duelo que marcou sua infância e sua história.',
    dificil: 'O futuro rei de Israel se destacou ao desafiar um gigantesco guerreiro filisteu com uma funda e uma única pedra certeira.'
  },
  daniel: {
    facil: 'Foi lançado em uma cova com leões, mas permaneceu protegido.',
    medio: 'Daniel ficou conhecido por sua fidelidade e por um episódio em que foi abandonado em um lugar com feras, mas ficou em segurança.',
    dificil: 'O profeta permaneceu firme diante da perseguição e foi preservado em uma cova onde leões estavam presentes, sem sofrer dano.'
  },
  jonas: {
    facil: 'Ele tentou fugir de uma missão divina e acabou sendo engolido por um grande peixe.',
    medio: 'Jonas teve dificuldade para obedecer a uma ordem de Deus e foi levado a uma experiência de profunda reflexão no interior do mar.',
    dificil: 'O profeta tentou escapar da missão de anunciar uma mensagem de arrependimento, mas foi surpreendido por um grande peixe e levado à obediência.'
  },
  ester: {
    facil: 'Ela se tornou rainha e teve papel decisivo na proteção do povo judeu.',
    medio: 'Ester, uma mulher judia que ascendeu ao posto de rainha, enfrentou um grande risco para salvar seu povo da destruição.',
    dificil: 'A história de Ester se destaca pela coragem de uma rainha que usou seu lugar de influência para interceder em favor do povo de Israel.'
  },
  'zaqueu': {
    facil: 'Ele era cobrador de impostos e subiu em uma árvore para conseguir ver Jesus passar.',
    medio: 'Zaqueu, conhecido por sua profissão e por sua curiosidade, se destacou ao escalar uma árvore para contemplar o Mestre.',
    dificil: 'Esse personagem bíblico era um cobrador de impostos e teve sua vida transformada ao encontrar Jesus em um encontro inesperado.'
  },
  pedro: {
    facil: 'Ele negou conhecer Jesus três vezes antes do canto do galo, mas depois tornou-se um grande líder.',
    medio: 'Pedro foi um dos discípulos mais próximos de Jesus e ficou marcado por uma negação antes da crucificação e por sua coragem depois.',
    dificil: 'O apóstolo foi um dos primeiros seguidores de Jesus, mas sua confiança falhou em um momento de medo e, mais tarde, se tornou uma base da igreja primitiva.'
  },
  paulo: {
    facil: 'Ele foi um dos principais missionários do cristianismo e antes era conhecido por perseguir os seguidores de Jesus.',
    medio: 'Paulo mudou radicalmente de vida, passou a pregar a mensagem cristã e percorreu diversas regiões para espalhar o evangelho.',
    dificil: 'O apóstolo foi um grande defensor da fé cristã, e sua conversão mudou completamente o rumo de sua trajetória antes de se tornar missionário.'
  },
  rute: {
    facil: 'Ela era uma mulher moabita que seguiu com sua sogra e se destacou por lealdade e trabalho.',
    medio: 'Rute entrou na história bíblica como uma mulher de grande fidelidade, casando-se com um israelita e tornando-se parte da linhagem de Davi.',
    dificil: 'A narrativa de Rute mostra uma mulher que permaneceu fiel, trabalhou com dedicação e se tornou ancestral de uma das famílias mais importantes do povo de Israel.'
  },
  samuel: {
    facil: 'Ele foi um dos mais importantes profetas e juízes de Israel, chamado desde a infância por Deus.',
    medio: 'Samuel desempenhou papel central na transição entre os juízes e os reis de Israel, e recebeu chamadas de Deus com grande autoridade.',
    dificil: 'O profeta, identificado como um dos grandes líderes espirituais do povo hebreu, serviu como guia de uma geração de mudança política e religiosa.'
  },
  gideao: {
    facil: 'Ele foi escolhido por Deus para liderar um povo em meio a uma grande guerra.',
    medio: 'Gideão recebeu uma missão de libertar Israel de um inimigo poderoso, com um exército reduzido e uma estratégia inesperada.',
    dificil: 'O juiz de Israel foi chamado para vencer uma formidable ameaça com uma força pequena, mostrando que a vitória vinha da confiança em Deus.'
  },
  abigail: {
    facil: 'Ela era uma mulher sábia que evitou uma grande confusão ao interceder por seu marido.',
    medio: 'Abigail ficou conhecida por sua inteligência e por agir com calma em uma situação de grande risco e conflito.',
    dificil: 'A história de Abigail mostra uma mulher de discernimento que conseguiu evitar um ataque violento por meio de sabedoria e intervenção.'
  },
  'ezequiel': {
    facil: 'Ele foi um profeta cuja mensagem envolvia visões e advertências sobre Jerusalém.',
    medio: 'Ezequiel se destacou por relatos simbólicos e visões profundas que alertavam o povo de Israel sobre sua situação espiritual.',
    dificil: 'O profeta recebeu revelações de caráter simbólico e visionário, incluindo imagens que expressavam juízo e esperança para o povo de Deus.'
  },
  isaias: {
    facil: 'Ele foi um dos principais profetas do Antigo Testamento e anunciou mensagens de juízo e esperança.',
    medio: 'Isaías ficou conhecido por suas profecias sobre o povo de Israel, sobre a restauração e sobre a promessa de um futuro messiânico.',
    dificil: 'O profeta do reino de Judá deixou um legado de mensagens que misturam condenação, conforto e promessas de redenção.'
  },
  salomao: {
    facil: 'Ele foi um rei muito sábio e, segundo a tradição, recebeu conhecimento divino em abundância.',
    medio: 'Salomão governou Israel com grande sabedoria e construiu um templo monumental que ficou marcado na história do povo judeu.',
    dificil: 'O rei destacou-se por sua sabedoria, pelo grande projeto do templo e por uma liderança que consolidou a monarquia israelita.'
  },
  lazaro: {
    facil: 'Ele foi ressuscitado por Jesus depois de permanecer morto por quatro dias.',
    medio: 'Lázaro ficou famoso por uma manifestação extraordinária de poder em um episódio em que voltou à vida em Betânia.',
    dificil: 'A história de Lázaro é marcada por um milagre em que Jesus chamou alguém morto de volta à vida diante de muitos testemunhas.'
  },
  maria: {
    facil: 'Ela foi a mãe de Jesus e se destacou por sua fé e papel central no relato do nascimento do Messias.',
    medio: 'Maria, considerada mãe de Jesus, é uma figura central na narrativa do Novo Testamento.',
    dificil: 'A figura de Maria aparece no coração do relato do nascimento e da missão de Jesus, com um papel espiritual e histórico decisivo.'
  },
  judas: {
    facil: 'Ele foi um dos discípulos de Jesus, mas ficou conhecido por entregar o Mestre.',
    medio: 'Judas Iscariotes se tornou uma figura de grande contraste: discípulo e traidor, responsável por um ato que marcou a paixão de Cristo.',
    dificil: 'A história do discípulo que traiu Jesus é um dos episódios mais conhecidos da narrativa cristã e tem peso central na Paixão.'
  },
  'rebecca': {
    facil: 'Ela foi esposa de Isaque e tornou-se parte da história do povo de Israel por meio de sua família.',
    medio: 'Rebecca destacou-se na tradição bíblica por sua ligação com a linhagem de Abraão e por sua importância na vida do povo escolhido.',
    dificil: 'A figura de Rebecca é importante na narrativa do Antigo Testamento e aparece como parte central da história de Isaque e dos patriarcas.'
  },
  matusalem: {
    facil: 'Ele é conhecido por seu longo período de vida na tradição bíblica.',
    medio: 'Matusalém aparece na linha genealógica do Antigo Testamento e é lembrado por sua longevidade.',
    dificil: 'O personagem figura entre os patriarcas antigos e é lembrado como um dos mais longevos mencionados no relato bíblico.'
  },
  jeremias: {
    facil: 'Ele foi um profeta que anunciou mensagens de alerta e esperança ao povo de Judá.',
    medio: 'Jeremias se destacou por sua coragem ao transmitir mensagens de juízo e consolo durante tempos difíceis.',
    dificil: 'O profeta Jeremias ficou conhecido por denunciar a situação do povo e chamar Israel a arrepender-se diante de Deus.'
  },
  'eli': {
    facil: 'Ele foi um sacerdote e juiz de Israel, conhecido por sua posição de liderança espiritual.',
    medio: 'Eli é lembrado como um dos líderes religiosos do povo de Israel e seu papel foi decisivo na formação de jovens profetas.',
    dificil: 'A história de Eli está ligada às funções sacerdotais e à preparação de Samuel, um dos personagens centrais da tradição bíblica.'
  },
  sara: {
    facil: 'Ela foi esposa de Abraão e ficou conhecida pela promessa de ter um filho em idade avançada.',
    medio: 'Sara teve um papel central na história do povo de Israel e se tornou símbolo de fé e espera.',
    dificil: 'A figura de Sara aparece como parte da aliança de Deus com Abraão e é lembrada pela promessa de uma descendência tão grande quanto as estrelas.'
  },
  susana: {
    facil: 'Ela é lembrada em uma história de fidelidade e coragem diante de uma grande ameaça.',
    medio: 'Susana ficou conhecida pelo episódio em que sua integridade foi testada e por sua coragem diante de injustiça.',
    dificil: 'A narrativa de Susana está ligada a um episódio de injustiça e a sua defesa diante de acusações falsas.'
  },
  benias: {
    facil: 'Ele aparece na história de Davi como um homem valente e guerreiro.',
    medio: 'Benias foi um dos grandes guerreiros do reinado de Davi, conhecido por sua coragem e força.',
    dificil: 'O personagem Benias se destaca como um dos homens mais corajosos e valorosos na história do reino de Davi.'
  },
  simeao: {
    facil: 'Ele é conhecido por reconhecer Jesus quando o menino foi levado ao templo.',
    medio: 'Simeão ficou famoso por sua alegria ao ver o Messias e por sua profecia ao receber o menino Jesus.',
    dificil: 'O velho Simeão, no templo, identificou o Messias e declarou uma profecia marcante sobre a missão de Jesus.'
  },
  'pao': {
    facil: 'É um alimento base em muitas mesas e pode ser servido simples, tostado ou com recheio.',
    medio: 'Esse alimento é feito com farinha, água e fermento e é indispensável em refeições do cotidiano.',
    dificil: 'A preparação tradicional combina massa, fermentação e forno; o resultado é um alimento versátil e muito consumido ao redor do mundo.'
  },
  pizza: {
    facil: 'É uma massa assada coberta com molho, queijo e diversos ingredientes, muito popular em países do mundo.',
    medio: 'A pizza surgiu como um prato de massa com cobertura variada, e o formato redondo e a crosta assada a tornaram famosa.',
    dificil: 'A base de massa, o molho de tomate e os recheios em camadas fazem da pizza um dos alimentos mais reconhecidos da culinária internacional.'
  },
  sushi: {
    facil: 'É uma preparação japonesa baseada em arroz temperado, que pode levar peixe, frutos do mar ou vegetais.',
    medio: 'O sushi combina arroz aromático com ingredientes como peixe cru, frutos do mar, legumes e molhos específicos.',
    dificil: 'A técnica japonesa de preparo do sushi valoriza o arroz temperado, a textura e os cortes dos ingredientes, além do equilíbrio dos sabores.'
  },
  lasanha: {
    facil: 'É um prato montado em camadas de massa intercaladas com molho e recheio.',
    medio: 'A lasanha é conhecida por suas camadas alternadas de massa, molho, queijo e ingredientes variados.',
    dificil: 'A receita tradicional de lasanha consiste em uma sequência de camadas que se sobrepõem e se fundem no forno em um prato reconfortante.'
  },
  feijoada: {
    facil: 'É um prato brasileiro feito com feijão preto e diferentes tipos de carne, normalmente acompanhado de arroz.',
    medio: 'A feijoada é um dos grandes clássicos da culinária brasileira, especialmente associada a festas e almoço completo.',
    dificil: 'O prato combina feijão preto cozido com vários cortes de carne, geralmente servido com farofa, laranja e arroz.'
  },
  brigadeiro: {
    facil: 'É um doce brasileiro feito com leite condensado, chocolate e manteiga, geralmente coberto com granulado.',
    medio: 'O brigadeiro é um doce muito popular no Brasil, conhecido por sua textura cremosa e sabor intenso de chocolate.',
    dificil: 'A receita clássica do brigadeiro leva leite condensado, chocolate em pó, manteiga e um toque final de granulado na superfície.'
  },
  coxinha: {
    facil: 'É um salgado brasileiro muito famoso, com massa crocante por fora e recheio de frango.',
    medio: 'A coxinha é de origem paulista e se destaca pela massa de farinha de trigo envolvendo um recheio úmido e saboroso.',
    dificil: 'A receita tradicional da coxinha tem a forma de um pequeno cone, com massa crocante e recheio de frango em um clássico da culinária brasileira.'
  },
  moqueca: {
    facil: 'É um prato baiano feito com peixe ou frutos do mar cozidos em molho aromático.',
    medio: 'A moqueca é uma receita tradicional da Bahia, famosa pelo sabor intenso de alho, cebola, tomate e azeite de dendê.',
    dificil: 'O prato baiano leva peixe ou frutos do mar preparados em um caldo rico, com panela de barro e presença marcante de dendê no sabor.'
  },
  'pao de queijo': {
    facil: 'É um quitute mineiro feito com polvilho e queijo, muito conhecido por sua textura macia e esfarelada.',
    medio: 'O pão de queijo é um clássico da culinária mineira, com massa à base de polvilho e queijo derretido.',
    dificil: 'A receita tradicional do pão de queijo combina polvilho azedo, queijo e um preparo rápido em forno, resultando em um centro macio e crosta leve.'
  },
  paella: {
    facil: 'É um prato espanhol preparado em panela grande, com arroz e ingredientes como frutos do mar e legumes.',
    medio: 'A paella é um clássico da culinária espanhola, conhecido por trazer arroz e sabores de mar e campo em uma única panela.',
    dificil: 'A paella tradicional é um prato de arroz de origem valenciana, preparado em panela larga e servido em grande quantidade com ingredientes variados.'
  },
  guacamole: {
    facil: 'É um acompanhamento mexicano feito principalmente com abacate, tomate e cebola.',
    medio: 'O guacamole é uma pasta cremosa muito usada em pratos mexicanos, destacando-se pelo sabor do abacate.',
    dificil: 'A preparação do guacamole combina abacate amassado com tomate, cebola, coentro e limão, criando uma textura cremosa e refrescante.'
  },
  yakisoba: {
    facil: 'É um prato japonês de macarrão com legumes, carne ou frutos do mar e molho saboroso.',
    medio: 'O yakisoba é popular na culinária japonesa e se destaca pela mistura de macarrão com legumes e um molho salgado.',
    dificil: 'A receita de yakisoba envolve massas cozidas rapidamente com vegetais, carne ou frutos do mar e molho aromático de soja e outros temperos.'
  },
  tacos: {
    facil: 'São preparações mexicanas em que a massa ou a tortilha serve como base para recheios variados.',
    medio: 'Os tacos são tradicionais do México e podem ser recheados com carne, feijão, queijo, legumes e molhos.',
    dificil: 'Esse prato mexicano usa tortilhas para receber recheios quentes e saborosos, sendo muito popular por sua versatilidade e praticidade.'
  },
  quiche: {
    facil: 'É uma torta salgado bastante apreciada, com massa crocante e recheio de ovos e outros ingredientes.',
    medio: 'A quiche é conhecida por sua massa de torta com recheio geralmente à base de ovos, queijo e legumes ou carnes.',
    dificil: 'A torta francesa combina massa quebrada com um creme de ovos e ingredientes como queijo, cebola, cogumelos ou legumes.'
  },
  pudim: {
    facil: 'É uma sobremesa cremosa e doce, conhecida por sua textura suave e sabor de leite condensado.',
    medio: 'O pudim é um doce muito apreciado por sua cremosidade e por ser servido gelado ou em temperatura ambiente.',
    dificil: 'A sobremesa de pudim é feita com leite, ovos e açúcar e fica com textura molinha e sabor adocicado muito reconhecível.'
  },
  sorvete: {
    facil: 'É uma sobremesa gelada muito consumida em diferentes sabores e formatos.',
    medio: 'O sorvete é preparado com base cremosa ou de água, congelada e servida em cones, taças ou copos.',
    dificil: 'A sobremesa gelada pode ser feita com leite, creme ou água, e é conhecida por sua textura fria e seus diversos sabores.'
  },
  donut: {
    facil: 'É um doce em formato redondo com massa frita e geralmente coberto com cobertura ou açúcar.',
    medio: 'O donut é um tipo de bolo frito, muito popular em padarias e cafés, com textura macia e sabor adocicado.',
    dificil: 'O doce redondo e frito é conhecido pela massa leve e pelo acabamento com cobertura, glaseado ou açúcar cristal.'
  },
  omelete: {
    facil: 'É um prato feito com ovos batidos e preparado em frigideira, podendo levar outros ingredientes.',
    medio: 'A omelete costuma ser preparada com ovos e recheios como queijo, cogumelos, legumes ou carnes.',
    dificil: 'Esse prato é preparado com ovos batidos, que são cozidos rapidamente em uma panela e podem receber diversos recheios.'
  },
  churrasco: {
    facil: 'É um tipo de comida assada em brasa, muito associada a encontros e festas em família.',
    medio: 'O churrasco se destaca pela carne assada em grelha ou brasa, com temperatura e cortes muito valorizados.',
    dificil: 'A preparação do churrasco envolve cortes de carne assados sobre fogo ou brasas, em uma tradição fortemente ligada à cultura brasileira.'
  },
  'nhoque': {
    facil: 'É uma massa feita com batata e servida normalmente com molho de tomate ou manteiga.',
    medio: 'O nhoque é uma massa tradicional que pode ser servida com molhos diversos, com destaque para os feitos com pesto ou tomate.',
    dificil: 'A massa de nhoque geralmente faz uso de batata e tem formato de pequenos bolinhos ou pedaços, muito apreciados com molhos encorpados.'
  },
  'tiramisu': {
    facil: 'É uma sobremesa italiana com camadas de biscoito, café e creme.',
    medio: 'O tiramisu é famoso por sua textura cremosa e pelo sabor marcante de café e chocolate.',
    dificil: 'A sobremesa italiana combina biscoitos embebidos em café, mascarpone e uma camada final de cacau em pó.'
  },
  'cuscuz': {
    facil: 'É um prato muito conhecido no Brasil e em outros países, feito com farinha e preparado em panela ou xícara.',
    medio: 'O cuscuz se destaca por sua textura leve e por ser acompanhado de manteiga, leite, queijo ou outros ingredientes.',
    dificil: 'A receita de cuscuz combina farinha com água ou leite e um processo de cozimento que resulta em um prato reconhecido pela textura macia.'
  },
  'hamburguer': {
    facil: 'É um lanche muito consumido, feito com carne moída e servido em pão com diversos acompanhamentos.',
    medio: 'O hambúrguer é um clássico dos lanches, conhecido pela carne grelhada e pelo formato de sanduíche.',
    dificil: 'O lanche de hambúrguer combina carne moída, pão, queijo e molhos, sendo servido em versões simples ou sofisticadas.'
  },
  'acaraje': {
    facil: 'É um prato típico da Bahia, feito com massa de feijão-fradinho frita em azeite de dendê.',
    medio: 'O acarajé é muito conhecido pela massa de feijão-fradinho, frita e servida com recheios tradicionais baianos.',
    dificil: 'A preparação do acarajé usa feijão-fradinho, azeite de dendê e é um dos símbolos mais reconhecidos da culinária baiana.'
  },
  'strogonoff': {
    facil: 'É um prato de origem russa ligado a carne em molho cremoso e sabor intenso.',
    medio: 'O strogonoff é conhecido por uma preparação de carne em molho suave e rico, normalmente servida com arroz ou massa.',
    dificil: 'A receita tradicional combina carne, creme de leite e molho encorpado, criando um prato muito popular em várias cozinhas.'
  },
  'bolo de chocolate': {
    facil: 'É um doce feito com massa de chocolate, muito comum em festas e sobremesas caseiras.',
    medio: 'O bolo de chocolate é conhecido pela massa úmida, sabor intenso e cobertura ou recheio de cacau.',
    dificil: 'A base de chocolate, a textura macia e o gosto intenso fazem desse bolo um clássico das sobremesas brasileiras.'
  }
};

const categoryShapes = {
  animais: [
    'Muita gente conhece esse animal em zoológicos, filmes de natureza ou em casas.',
    'Ele costuma estar associado a um ambiente natural, como florestas, savanas ou rios.',
    'Esse nome lembra um ser vivo que se move, respira e vive em contato com a natureza.'
  ],
  paises: [
    'É um lugar com identidade própria, cultura e fronteiras bem definidas.',
    'Esse nome pode remeter a uma nação com história, cidades e tradições próprias.',
    'Pense em um território reconhecido internacionalmente, com governo e população.'
  ],
  cidades: [
    'Esse nome costuma levar à lembrança de ruas, monumentos e muita gente circulando.',
    'Ele pode ser uma capital ou uma cidade grande, conhecida por sua história ou paisagem.',
    'Pense em um local com bairros, avenidas e grande movimento urbano.'
  ],
  filmes: [
    'Esse título costuma aparecer em discussões sobre cinema, histórias emocionantes ou cenas marcantes.',
    'Pense em uma obra que ficou famosa pelo roteiro, personagens ou visual.',
    'É um nome que muitas pessoas conhecem mesmo sem lembrar todos os detalhes da história.'
  ],
  series: [
    'Esse nome pode lembrar capítulos, personagens e histórias que continuam ao longo do tempo.',
    'Pense em uma produção muito assistida, com episódios e enredos recorrentes.',
    'É algo que pode ser visto em plataformas de streaming ou em canais de TV.'
  ],
  'super-herois': [
    'Esse nome lembra alguém com poderes, identidade secreta ou missão para salvar a cidade.',
    'Pense em um personagem que costuma aparecer em histórias de fantasia e ação.',
    'É um nome que remete a superforça, tecnologia ou coragem fora do comum.'
  ],
  jogos: [
    'É um nome muito associado a diversão, desafios e conquistas dentro de um mundo virtual.',
    'Pense em uma experiência que pode envolver aventura, estratégia ou competição.',
    'Esse termo costuma aparecer em conversas sobre videogame, consoles ou PC.'
  ],
  esportes: [
    'Esse nome remete a uma modalidade praticada em campos, quadras ou piscinas.',
    'Pense em uma atividade que envolve treino, competição e muita habilidade.',
    'É algo que pode ser visto em Olimpíadas, campeonatos e torneios.'
  ],
  comidas: [
    'Esse nome lembra um prato ou ingrediente muito apreciado em mesas e cozinhas.',
    'Pense em algo que pode ser servido em casa, em festas ou em restaurantes.',
    'É uma ideia ligada a sabor, cheiro e receitas muito conhecidas.'
  ],
  profissoes: [
    'Esse nome remete a uma atividade profissional com responsabilidade, técnica ou cuidado.',
    'Pense em alguém que trabalha com pessoas, objetos, ideias ou serviços específicos.',
    'É uma função que exige treino, estudo ou experiência prática.'
  ],
  tecnologia: [
    'Esse termo está ligado ao uso de telas, redes, software ou ferramentas digitais.',
    'Pense em algo que faz parte do mundo da informática, do celular ou da internet.',
    'É algo que pode aparecer em programas, sites, computadores e gadgets.'
  ],
  historia: [
    'Esse nome lembra acontecimentos, povos, monumentos ou personagens do passado.',
    'Pense em um termo ligado ao estudo do que aconteceu antes de hoje.',
    'É algo que pode estar relacionado a civilizações, guerras, reis ou descobertas.'
  ],
  musica: [
    'Esse nome remete a sons, instrumentos, artistas ou melodias que marcam a memória.',
    'Pense em algo ligado a ritmo, harmonia e expressão criativa.',
    'É uma palavra que pode aparecer em canções, concertos e produções musicais.'
  ],
  biblia: [
    'Esse termo está ligado a histórias, personagens e lugares importantes da tradição religiosa.',
    'Pense em um nome que aparece em narrativas antigas e muito citadas ao longo da história.',
    'É algo que pode estar relacionado a fé, ensinamentos e relatos antigos.'
  ],
  'conhecimentos-gerais': [
    'Esse nome remete a algo que pode aparecer em estudos, curiosidades e cultura geral.',
    'Pense em um conceito ligado a ciência, geografia, história ou conhecimento diário.',
    'É uma ideia que costuma aparecer em perguntas de trivia, escola e curiosidade.'
  ],
  carros: [
    'Esse nome lembra veículos, motores, pistas e movimento na rua.',
    'Pense em um automóvel, modelo ou marca que faz parte do mundo automobilístico.',
    'É um termo que costuma aparecer em anúncios, garagens e estradas.'
  ],
  natureza: [
    'Esse nome está ligado a paisagens, clima, água, árvores ou elementos do planeta.',
    'Pense em algo que faz parte do ambiente natural e do mundo ao redor.',
    'É uma ideia que pode lembrar rios, montanhas, praias, florestas ou céu.'
  ],
  personalidades: [
    'Esse nome remete a alguém reconhecido por talento, impacto ou influência histórica.',
    'Pense em uma pessoa famosa por sua arte, liderança ou contribuição para o mundo.',
    'É um nome que costuma aparecer em histórias, cultura e referências populares.'
  ]
};

const buildDefinitionHint = (definition = '', category, difficulty) => {
  if (!definition) return '';

  const cleaned = definition
    .replace(/\[[^\]]*\]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(?:significa|é|são|designa|denota|designam|denotam)\s+/i, '')
    .replace(/[.;:]/g, ' ')
    .trim();

  if (!cleaned) return '';

  const phrase = cleaned.split(' ').slice(0, 12).join(' ');
  if (!phrase) return '';

  const categoryBase = categoryShapes[category]?.[0] || 'Pense em um detalhe marcante dessa categoria.';
  const prefix = difficultyPrefix[difficulty] || 'Dica: ';
  return `${prefix}${categoryBase} A ideia também lembra ${phrase.toLowerCase()}.`;
};

export const buildHint = ({ category, difficulty = 'medio', word = '', definition = '' }) => {
  const cleanWord = normalizeWord(word);
  const exactHint = SPECIAL_HINTS[cleanWord];

  if (exactHint) {
    if (typeof exactHint === 'string') {
      return exactHint;
    }

    const selectedDifficulty = exactHint[difficulty] || exactHint.medio || exactHint.facil || Object.values(exactHint)[0];
    return selectedDifficulty || '';
  }

  const categoryHints = categoryShapes[category] || categoryShapes.animais;
  const baseHint = definition
    ? buildDefinitionHint(definition, category, difficulty)
    : `${difficultyPrefix[difficulty] || 'Dica: '}${categoryHints[Math.abs(cleanWord.length) % categoryHints.length]}`;

  return baseHint.length > 220 ? `${baseHint.slice(0, 210)}...` : baseHint;
};
