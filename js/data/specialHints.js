/**
 * Banco de dicas progressivas para 6 tentativas por rodada.
 * Cada palavra possui:
 * - categoria: tema da palavra
 * - facil: array com 6 dicas (da 1ª à 6ª tentativa, ficando mais óbvias)
 * - medio: array com 6 dicas (equilibradas, evoluindo a cada tentativa)
 * - dificil: array com 6 dicas (mais enigmáticas no início, revelando detalhes aos poucos)
 */
const normalizeText = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim();

export const SPECIAL_HINTS = {
  // --- PAÍSES ---
  brasil: {
    categoria: 'País',
    facil: [
      'É o maior país da América do Sul em extensão territorial.',
      'É o único país do continente americano onde o português é o idioma oficial.',
      'Abriga a maior parte da Floresta Amazônica e do rio Amazonas.',
      'É famoso mundialmente pelo Carnaval, pelo samba e pelo Cristo Redentor.',
      'Sua seleção masculina de futebol é a única pentacampeã mundial.',
      'Sua capital é Brasília, mas suas maiores metrópoles são São Paulo e Rio de Janeiro.'
    ],
    medio: [
      'Este país faz fronteira com quase todas as nações sul-americanas, exceto Chile e Equador.',
      'Seu território é cortado tanto pela Linha do Equador quanto pelo Trópico de Capricórnio.',
      'Possui uma das maiores biodiversidades do planeta e uma extensa costa banhada pelo Oceano Atlântico.',
      'Foi colonizado por Portugal a partir do ano 1500 e proclamou sua independência em 1822.',
      'Sua bandeira tem fundo verde, um losango amarelo e um círculo azul com estrelas brancas.',
      'É a terra de Pelé, Ayrton Senna, Machado de Assis e do pão de queijo.'
    ],
    dificil: [
      'Seu nome tem origem em uma árvore de madeira avermelhada muito explorada no século XVI.',
      'A capital atual deste país foi inaugurada em 1960 no Planalto Central, substituindo uma cidade litorânea.',
      'É a quinta maior nação do mundo em área total, ocupando quase metade do seu continente.',
      'Abriga o maior sistema fluvial do mundo e o bioma Pantanal.',
      'Sua moeda atual é o Real, implementada em 1994.',
      'É o país sul-americano com maior população e maior economia.'
    ]
  },
  franca: {
    categoria: 'País',
    facil: [
      'É um famoso país da Europa Ocidental conhecido pelo romance, pela arte e pela alta moda.',
      'Sua capital é Paris, chamada mundialmente de "Cidade Luz".',
      'Abriga a Torre Eiffel, o Museu do Louvre e o Arco do Triunfo.',
      'É famosa pelos queijos, vinhos, baguetes e croissants.',
      'Seu idioma oficial é o francês e sua bandeira tem faixas verticais azul, branca e vermelha.',
      'É o país do famoso clube Paris Saint-Germain e do pintor Claude Monet.'
    ],
    medio: [
      'Este país europeu possui costas banhadas tanto pelo Oceano Atlântico quanto pelo Mar Mediterrâneo.',
      'Foi palco de uma grande revolução em 1789 que derrubou a monarquia absolutista.',
      'Seu território continental tem um formato geométrico que lembra um hexágono.',
      'Sedia anualmente a famosa prova de ciclismo Tour de France.',
      'Abriga o Palácio de Versalhes e a catedral de Notre-Dame.',
      'Sua capital é cortada pelo rio Sena e guarda o quadro Mona Lisa.'
    ],
    dificil: [
      'Este país também possui departamentos ultramarinos na América do Sul, fazendo fronteira com o Brasil.',
      'Foi governado por figuras históricas como Luís XIV, o "Rei Sol", e Napoleão Bonaparte.',
      'É o país mais visitado por turistas no mundo inteiro.',
      'Seu lema nacional é "Liberdade, Igualdade, Fraternidade".',
      'É o berço do cinema dos irmãos Lumière e da literatura de Victor Hugo.',
      'Sua capital é Paris e seu monumento mais famoso é uma torre de ferro construída em 1889.'
    ]
  },
  japao: {
    categoria: 'País',
    facil: [
      'É um país insular localizado no leste da Ásia.',
      'É mundialmente famoso pelos animes, mangás e videogames.',
      'Tem como símbolo natural o majestoso Monte Fuji.',
      'É conhecido pela culinária à base de sushi, sashimi e lámen.',
      'Combina templos antigos e samurais com robótica e trens-bala.',
      'Sua capital é Tóquio, uma das maiores metrópoles do planeta.'
    ],
    medio: [
      'Conhecido como a "Terra do Sol Nascente", tem um círculo vermelho no centro de sua bandeira branca.',
      'Este arquipélago fica situado no Círculo de Fogo do Pacífico, registrando frequentes terremotos.',
      'É a terra natal de marcas gigantes de tecnologia e automóveis como Sony, Nintendo e Toyota.',
      'Preserva tradições como o teatro Kabuki, a arte do origami e o cultivo de bonsais.',
      'Foi sede dos Jogos Olímpicos de Verão de 1964 e de 2020.',
      'Sua moeda é o Iene e sua capital é Tóquio.'
    ],
    dificil: [
      'Este país é formado por um arquipélago com mais de 6.800 ilhas, sendo Honshu a maior delas.',
      'Manteve-se praticamente isolado do resto do mundo durante o período Edo até meados do século XIX.',
      'É a única nação do mundo que possui um monarca com o título oficial de Imperador.',
      'Ficou marcado na história por reconstruir rapidamente sua economia após a Segunda Guerra Mundial.',
      'Possui cidades históricas como Quioto e Nara, além do moderno centro financeiro de Tóquio.',
      'É o país asiático onde surgiram os samurais, o sumô e os animes.'
    ]
  },
  italia: {
    categoria: 'País',
    facil: [
      'É um país europeu famoso pela pizza, pelas massas e pelo gelato.',
      'Seu mapa tem o formato inconfundível de uma bota no Mar Mediterrâneo.',
      'Abriga monumentos históricos como o Coliseu e a Torre de Pisa.',
      'É famosa pelos canais e gôndolas da cidade de Veneza.',
      'É a terra de marcas de carros esportivos como Ferrari e Lamborghini.',
      'Sua capital é Roma, onde também fica localizado o Vaticano.'
    ],
    medio: [
      'Este país do sul da Europa foi o berço do antigo Império Romano.',
      'Foi o centro cultural do Renascimento, movimento liderado por gênios como Leonardo da Vinci e Michelangelo.',
      'Possui vulcões ativos famosos em seu território, como o Vesúvio e o Etna.',
      'Sua bandeira possui três faixas verticais nas cores verde, branca e vermelha.',
      'Milão, Florença, Nápoles e Turim estão entre suas principais cidades.',
      'Sua capital é Roma e sua culinária é uma das mais populares do mundo.'
    ],
    dificil: [
      'Este país encrava dentro de suas fronteiras dois microestados independentes: San Marino e Vaticano.',
      'Unificou-se como um Estado-nação moderno apenas na segunda metade do século XIX (Risorgimento).',
      'É o país com o maior número de sítios declarados Patrimônio Mundial pela UNESCO.',
      'Faz fronteira ao norte com França, Suíça, Áustria e Eslovênia através dos Alpes.',
      'Foi o berço da ópera, do violino e do idioma latim.',
      'Sua capital é Roma e seu território tem o formato geográfico de uma bota.'
    ]
  },
  argentina: {
    categoria: 'País',
    facil: [
      'É um país da América do Sul que faz fronteira com o sul do Brasil.',
      'É mundialmente famoso pela dança do tango e pelo churrasco (asado).',
      'Teve ídolos históricos do futebol como Diego Maradona e Lionel Messi.',
      'Sua seleção conquistou o tricampeonato mundial de futebol em 2022.',
      'Seu idioma oficial é o espanhol e suas cores nacionais são azul-celeste e branco.',
      'Sua capital é Buenos Aires.'
    ],
    medio: [
      'É o segundo maior país da América do Sul em território e o oitavo maior do mundo.',
      'Abriga a região gelada da Patagônia e a geleira Perito Moreno.',
      'Compartilha com o Brasil as famosas Cataratas do Iguaçu.',
      'É conhecida pela produção de vinhos tintos na região de Mendoza, aos pés da Cordilheira dos Andes.',
      'O bairro de La Boca e o teatro Colón são cartões-postais de sua capital.',
      'Sua capital é Buenos Aires e sua moeda é o Peso.'
    ],
    dificil: [
      'O nome deste país deriva do latim "argentum", que significa prata.',
      'Abriga o Monte Aconcágua, o ponto mais alto de todo o continente americano.',
      'Estende-se desde regiões subtropicais ao norte até a Terra do Fogo, no extremo sul.',
      'Foi o berço do escritor Jorge Luis Borges e da personagem de quadrinhos Mafalda.',
      'Conquistou sua independência da Espanha em 9 de julho de 1816.',
      'É o país vizinho ao Brasil cuja capital é Buenos Aires.'
    ]
  },

  // --- FILMES E ANIMAÇÕES ---
  titanic: {
    categoria: 'Filme',
    facil: [
      'É um famoso filme de romance e drama que se passa a bordo de um grande navio.',
      'A história acompanha o amor proibido entre um artista pobre e uma jovem da alta sociedade.',
      'O navio do filme colide com um iceberg durante sua viagem inaugural e afunda.',
      'Foi estrelado por Leonardo DiCaprio e Kate Winslet nos papéis de Jack e Rose.',
      'Ficou marcado pela cena do casal na proa do navio com os braços abertos.',
      'A música tema do longa é "My Heart Will Go On", cantada por Céline Dion.'
    ],
    medio: [
      'Dirigido por James Cameron em 1997, este filme empatou o recorde histórico com 11 prêmios Oscar.',
      'A narrativa é contada através das lembranças de uma sobrevivente idosa que guardava um diamante azul chamado "Coração do Oceano".',
      'O transatlântico britânico da história era considerado "inafundável" pela imprensa da época.',
      'O desastre retratado no filme aconteceu realmente no Oceano Atlântico Norte em abril de 1912.',
      'Jack ganha sua passagem de terceira classe em um jogo de pôquer minutos antes da partida.',
      'O nome do filme é exatamente o mesmo do famoso navio que naufragou.'
    ],
    dificil: [
      'Durante anos, foi o filme de maior bilheteria da história do cinema e o primeiro a ultrapassar 1 bilhão de dólares.',
      'A produção construiu uma réplica quase em tamanho real do lado direito da embarcação em um tanque no México.',
      'A famosa frase "Eu sou o rei do mundo!" foi improvisada pelo protagonista durante as filmagens.',
      'O roteiro mistura personagens fictícios com figuras históricas reais, como o capitão Edward Smith e Molly Brown.',
      'Retrata a tragédia marítima de um navio da companhia White Star Line em 1912.',
      'Estrelado por Leonardo DiCaprio e Kate Winslet, leva o nome do navio que colidiu com um iceberg.'
    ]
  },
  frozen: {
    categoria: 'Filme',
    facil: [
      'É uma animação da Disney sobre duas irmãs princesas em um reino gelado.',
      'Uma das irmãs tem poderes mágicos de criar gelo e neve com as mãos.',
      'Por acidente, ela congela todo o reino de Arendelle e foge para as montanhas.',
      'A história conta com um boneco de neve falante e muito simpático chamado Olaf.',
      'As protagonistas se chamam Elsa e Anna.',
      'Ficou mundialmente famoso pela música "Let It Go" ("Livre Estou").'
    ],
    medio: [
      'Este filme de 2013 é livremente inspirado no conto de fadas "A Rainha da Neve", de Hans Christian Andersen.',
      'A jornada de resgate conta com a ajuda de Kristoff, um vendedor de gelo, e sua rena Sven.',
      'Diferente dos contos tradicionais, o "ato de amor verdadeiro" que salva a história vem do laço entre irmãs.',
      'Elsa constrói um grandioso palácio de cristal no topo da Montanha do Norte.',
      'Venceu dois prêmios Oscar: Melhor Filme de Animação e Melhor Canção Original.',
      'Animação da Disney protagonizada por Elsa, Anna e o boneco de neve Olaf.'
    ],
    dificil: [
      'O visual do reino fictício de Arendelle foi profundamente inspirado nas paisagens, igrejas e fiordes da Noruega.',
      'Originalmente, a personagem com poderes de gelo foi concebida como uma vilã, mas mudou após a composição de sua música principal.',
      'Os trolls da floresta na trama são especialistas em magia da terra e tentam unir o casal secundário.',
      'O vilão da história, Príncipe Hans das Ilhas do Sul, revela suas reais intenções apenas no terceiro ato.',
      'O título original em inglês significa literalmente "Congelado".',
      'É o grande sucesso da Disney de 2013 com as irmãs Elsa e Anna.'
    ]
  },
  shrek: {
    categoria: 'Filme',
    facil: [
      'É uma animação de comédia sobre um ogro verde grande e rabugento.',
      'Ele vive sozinho em um pântano até sua paz ser interrompida por criaturas de contos de fadas.',
      'Seu melhor amigo e companheiro de viagem é um burro muito falante.',
      'Ele aceita a missão de resgatar a princesa Fiona de uma torre guardada por um dragão.',
      'No fim da história, descobre-se que a princesa também se transforma em ogra à noite.',
      'O filme leva o próprio nome do ogro protagonista.'
    ],
    medio: [
      'Lançado pela DreamWorks em 2001, este filme faz uma paródia bem-humorada dos contos de fadas clássicos.',
      'O vilão da trama é o baixinho e arrogante Lorde Farquaad, governante do reino de Duloc.',
      'Foi o primeiro longa-metragem da história a vencer o recém-criado Oscar de Melhor Filme de Animação.',
      'A trilha sonora ficou marcada pela música "All Star", da banda Smash Mouth, logo na abertura.',
      'O protagonista compara os ogros a cebolas, dizendo que ambos têm várias camadas.',
      'Animação protagonizada por um ogro verde, um Burro falante e a princesa Fiona.'
    ],
    dificil: [
      'A obra foi livremente baseada em um livro infantil ilustrado de 1990 escrito por William Steig.',
      'Na versão original em inglês, o protagonista recebeu a voz de Mike Myers e o Burro foi dublado por Eddie Murphy.',
      'A dragão que guardava o castelo da princesa acaba se apaixonando pelo companheiro de quatro patas do herói.',
      'O personagem principal possui uma estrela própria na Calçada da Fama de Hollywood.',
      'Iniciou uma das franquias de animação mais lucrativas do cinema, gerando quatro filmes e derivados como Gato de Botas.',
      'O título do filme é o nome de cinco letras do ogro verde do pântano.'
    ]
  },
  'o rei leao': {
    categoria: 'Filme',
    facil: [
      'É um clássico filme de animação da Disney ambientado na savana africana.',
      'O protagonista é um jovem filhote de leão destinado a herdar o trono do pai.',
      'Após a morte trágica de seu pai Mufasa, o filhote foge achando que foi culpado.',
      'Na selva, ele é criado por um suricato e um javali chamados Timão e Pumba.',
      'O vilão da história é seu tio invejoso, Scar.',
      'O nome do protagonista é Simba e o filme fala sobre o ciclo da vida.'
    ],
    medio: [
      'Lançado em 1994, este filme possui uma trama fortemente inspirada na peça "Hamlet", de William Shakespeare.',
      'O mandril sábio Rafiki apresenta o recém-nascido herdeiro no alto da Pedra do Rei.',
      'Os amigos do protagonista lhe ensinam a filosofia despreocupada "Hakuna Matata".',
      'O pássaro calau Zazu atua como mordomo real do rei da savana.',
      'Contou com músicas compostas por Elton John e trilha instrumental premiada de Hans Zimmer.',
      'Clássico da Disney protagonizado por Simba, Mufasa, Nala, Timão e Pumba.'
    ],
    dificil: [
      'Durante a produção, a equipe de animadores viajou ao Quênia para estudar o comportamento real da fauna africana.',
      'É até hoje o filme de animação tradicional (desenhado à mão) de maior bilheteria da história do cinema.',
      'Ganhou um remake fotorrealista dirigido por Jon Favreau em 2019.',
      'O vilão comanda um exército de hienas famintas lideradas por Shenzi, Banzai e Ed.',
      'A cena da debandada de gnus no desfiladeiro é um dos momentos mais marcantes da animação.',
      'O título em português tem três palavras e identifica o monarca da Pedra do Rei.'
    ]
  },
  'procurando nemo': {
    categoria: 'Filme',
    facil: [
      'É uma animação da Pixar que se passa quase inteiramente no fundo do oceano.',
      'Um peixe-palhaço superprotetor atravessa o mar para resgatar seu filho desaparecido.',
      'O filhote tem uma nadadeira menor que a outra e é capturado por um mergulhador.',
      'Durante a viagem, o pai Marlin recebe a ajuda de Dory, uma peixinha azul esquecida.',
      'O pequeno peixe vai parar no aquário de um consultório odontológico em Sydney.',
      'O título do filme indica a busca pelo pequeno peixe-palhaço.'
    ],
    medio: [
      'Lançado em 2003, este filme venceu o Oscar de Melhor Filme de Animação.',
      'Na jornada pelo oceano, os protagonistas pegam carona na Corrente Leste Australiana com a tartaruga Crush.',
      'O grupo de tubarões liderado por Bruce tenta seguir o lema "Peixes são amigos, não comida".',
      'O endereço escrito na máscara de mergulho perdida é "P. Sherman, 42 Wallaby Way, Sydney".',
      'No aquário, o jovem peixe conhece uma gangue liderada pelo ídolo-mouro Gill.',
      'Animação protagonizada pelos peixes Marlin, Dory e o filhote que dá nome ao filme.'
    ],
    dificil: [
      'Para criar o visual subaquático realista da Grande Barreira de Coral, a equipe estudou iluminação, partículas e correntes marinhas.',
      'Gerou uma continuação em 2016 focada na personagem com perda de memória recente.',
      'O pelicano Nigel ajuda a resgatar o pai e sua amiga de um ataque de gaivotas no porto de Sydney.',
      'A cena inicial do filme mostra o ataque de uma barracuda que deixa Marlin viúvo com apenas um ovo.',
      'Foi o primeiro filme da Pixar a ganhar o Oscar de Melhor Animação.',
      'O título tem duas palavras e começa com o verbo "Procurando".'
    ]
  },
  'jurassic park': {
    categoria: 'Filme',
    facil: [
      'É um famoso filme de aventura e ficção científica sobre dinossauros vivos nos tempos modernos.',
      'Um bilionário cria um parque temático em uma ilha com criaturas pré-históricas clonadas.',
      'Durante uma visita de avaliação, uma tempestade e uma sabotagem desligam as cercas elétricas.',
      'Os visitantes precisam fugir de um gigantesco Tiranossauro Rex e de Velociraptors.',
      'Foi dirigido por Steven Spielberg em 1993.',
      'O nome do filme é o mesmo do parque de dinossauros da história.'
    ],
    medio: [
      'No enredo, cientistas conseguem recriar dinossauros extraindo DNA de mosquitos preservados em âmbar.',
      'O elenco principal conta com Sam Neill, Laura Dern e Jeff Goldblum como o matemático Ian Malcolm.',
      'A ilha fictícia onde o empreendimento foi construído chama-se Isla Nublar, na Costa Rica.',
      'O filme revolucionou o cinema ao combinar animatrônicos em tamanho real com computação gráfica pioneira.',
      'A trilha sonora icônica foi composta por John Williams.',
      'Clássico de 1993 sobre um parque temático pré-histórico que dá errado.'
    ],
    dificil: [
      'O roteiro foi adaptado do livro homônimo de ficção científica escrito por Michael Crichton em 1990.',
      'Para preencher lacunas no código genético dos animais extintos, os cientistas utilizaram DNA de sapos.',
      'A famosa cena do copo de água vibrando no painel do carro anuncia a aproximação do predador.',
      'O programador corrupto Dennis Nedry desativa a segurança para tentar roubar embriões congelados.',
      'Venceu três prêmios Oscar nas categorias técnicas (Efeitos Visuais, Som e Edição de Som).',
      'O título original em inglês significa "Parque dos Dinossauros" (ou Parque Jurássico).'
    ]
  },
  avatar: {
    categoria: 'Filme',
    facil: [
      'É um filme de ficção científica ambientado em um mundo alienígena exuberante chamado Pandora.',
      'Os habitantes nativos desse planeta são seres altos, ágeis e de pele azul chamados Na’vi.',
      'Um ex-fuzileiro naval paraplégico controla um corpo híbrido para explorar a floresta alienígena.',
      'Ele se apaixona pela guerreira nativa Neytiri e decide defender o planeta contra os humanos.',
      'Foi dirigido por James Cameron e lançado em 2009.',
      'O título do filme é uma palavra de seis letras que designa o corpo controlado remotamente.'
    ],
    medio: [
      'Tornou-se o filme de maior bilheteria da história do cinema, superando o recorde anterior de Titanic.',
      'Os humanos estão em Pandora para minerar um minério valioso chamado Unobtainium.',
      'Os nativos Na’vi conectam suas tranças neurais às criaturas voadoras chamadas Banshees e à natureza.',
      'A árvore sagrada que conecta toda a rede biológica do planeta é chamada de Eywa.',
      'Popularizou mundialmente as projeções em cinema 3D e a captura de movimento facial avançada.',
      'Protagonizado por Jake Sully e Neytiri no planeta Pandora.'
    ],
    dificil: [
      'O diretor começou a escrever o tratamento inicial da história ainda em 1994, aguardando a evolução da tecnologia.',
      'O linguista Paul Frommer criou um idioma completo e funcional com mais de mil palavras para os nativos do filme.',
      'O coronel Miles Quaritch comanda as forças militares privadas da corporação RDA contra a Árvore-Lar.',
      'Venceu três estatuetas do Oscar: Direção de Arte, Fotografia e Efeitos Visuais.',
      'Ganhou uma sequência em 2022 intitulada "O Caminho da Água".',
      'O título do filme vem do termo sânscrito que significa encarnação ou manifestação.'
    ]
  },
  'toy story': {
    categoria: 'Filme',
    facil: [
      'É uma famosa animação da Pixar onde os brinquedos ganham vida quando os humanos não estão olhando.',
      'O protagonista é um boneco caubói de pano chamado Woody.',
      'A rotina do quarto muda quando o menino Andy ganha um moderno patrulheiro espacial de aniversário.',
      'O novo brinquedo se chama Buzz Lightyear e no início acha que é um herói espacial de verdade.',
      'Depois de muitas brigas e aventuras fora de casa, os dois se tornam melhores amigos.',
      'O título em inglês significa literalmente "História de Brinquedos".'
    ],
    medio: [
      'Lançado em 1995, foi o primeiro longa-metragem da história totalmente feito por computação gráfica.',
      'Entre os amigos do quarto estão o Sr. Cabeça de Batata, o porquinho Porquinho, o dinossauro Rex e o cão Slinky.',
      'Os protagonistas acabam presos na casa do vizinho cruel Sid, que gosta de destruir e remontar brinquedos.',
      'O bordão mais famoso do astronauta de plástico é "Ao infinito e além!".',
      'A canção tema do filme, "Amigo Estou Aqui", foi composta por Randy Newman.',
      'Primeira animação da Pixar, estrelada por Woody e Buzz Lightyear.'
    ],
    dificil: [
      'O diretor John Lasseter recebeu um Oscar honorário especial pela criação técnica pioneira desta obra.',
      'O nome do brinquedo espacial foi uma homenagem direta ao astronauta da Apollo 11, Buzz Aldrin.',
      'A caminhonete de entregas da pizzaria "Pizza Planet" aparece como easter egg em quase todos os filmes do estúdio.',
      'Deu origem a uma das franquias mais aclamadas do cinema, com quatro filmes principais lançados entre 1995 e 2019.',
      'Woody possui o nome "Andy" escrito com caneta na sola de uma de suas botas.',
      'O título original em inglês tem duas palavras: Toy + Story.'
    ]
  },
  'bela e a fera': {
    categoria: 'Filme',
    facil: [
      'É um conto de fadas clássico da Disney sobre uma jovem apaixonada por leitura.',
      'Para salvar seu pai prisioneiro, ela aceita morar em um castelo encantado.',
      'O dono do castelo é um príncipe que foi transformado em um monstro por uma feiticeira.',
      'Os empregados do castelo viraram objetos falantes, como um candelabro, um relógio e um bule de chá.',
      'O feitiço só pode ser quebrado se o monstro amar e for correspondido antes que a última pétala de uma rosa caia.',
      'O título do filme contrasta a aparência da protagonista com a do príncipe amaldiçoado.'
    ],
    medio: [
      'Lançado em 1991, foi o primeiro filme de animação da história indicado ao Oscar de Melhor Filme.',
      'O vilão da aldeia é o arrogante e musculoso Gaston, que quer se casar com a protagonista à força.',
      'A cena da dança no salão dourado ao som da música tema é uma das mais icônicas da Disney.',
      'Lumière, Horloge e Madame Samovar são os nomes dos personagens encantados do castelo.',
      'Ganhou uma adaptação em live-action estrelada por Emma Watson em 2017.',
      'Clássico da Disney sobre o romance entre uma jovem leitora e uma criatura encantada.'
    ],
    dificil: [
      'A história tem origem no conto francês "La Belle et la Bête", publicado no século XVIII.',
      'A trilha sonora assinada por Alan Menken e Howard Ashman venceu dois prêmios Oscar.',
      'O pai da protagonista, Maurice, é um inventor excêntrico que se perde na floresta a caminho de uma feira.',
      'O objeto mágico que permite ver qualquer coisa do mundo exterior no castelo é um espelho.',
      'Faz parte da chamada era do "Renascimento da Disney" nos anos 1990.',
      'O título em português menciona os dois protagonistas unidos pela conjunção "e".'
    ]
  },
  madagascar: {
    categoria: 'Filme',
    facil: [
      'É uma animação sobre quatro animais que viviam confortavelmente em um zoológico de Nova York.',
      'Os protagonistas são o leão Alex, a zebra Marty, a girafa Melman e a hipopótamo Glória.',
      'Após uma fuga do zoológico, eles acabam sendo enviados de navio e vão parar em uma ilha tropical.',
      'Na ilha, eles conhecem uma comunidade de lêmures festeiros liderada pelo Rei Julien.',
      'Um grupo de quatro pinguins muito espertos também faz parte da aventura.',
      'O título do filme é o nome da grande ilha africana onde eles desembarcam.'
    ],
    medio: [
      'Lançado pela DreamWorks em 2005, mostra o choque de animais acostumados ao cativeiro diante da natureza selvagem.',
      'Sem receber seus bifes diários no zoológico, o leão Alex luta contra seu instinto predador.',
      'A festa dos lêmures ficou famosa pela versão animada da música "I Like to Move It" ("Eu Me Remexo Muito").',
      'Os predadores naturais dos lêmures na ilha do filme são as fossas.',
      'Os pinguins Capitão, Kowalski, Rico e Recruta roubam um navio cargueiro rumo à Antártida.',
      'Animação protagonizada por Alex, Marty, Melman, Glória e o Rei Julien.'
    ],
    dificil: [
      'A ilha que dá nome ao longa é a quarta maior ilha do mundo, localizada no Oceano Índico, na costa sudeste da África.',
      'Na dublagem original em inglês, os protagonistas têm as vozes de Ben Stiller, Chris Rock, David Schwimmer e Jada Pinkett Smith.',
      'O humorista Sacha Baron Cohen deu vida ao excêntrico Rei Julien na versão original.',
      'Gerou duas sequências principais e uma série derivada focada nos pinguins.',
      'A história começa no Zoológico do Central Park, em Manhattan.',
      'O título é uma única palavra: o nome do país insular africano.'
    ]
  },
  minions: {
    categoria: 'Filme',
    facil: [
      'São pequenas criaturas amarelas em formato de cápsula que usam óculos de proteção e macacão jeans.',
      'Adoram bananas, são muito atrapalhados e falam uma mistura engraçada de vários idiomas.',
      'Ficaram famosos originalmente como os ajudantes do vilão Gru em "Meu Malvado Favorito".',
      'Ganharam seu próprio filme solo contando suas aventuras antes de conhecerem seu mestre atual.',
      'Os três protagonistas do filme solo se chamam Kevin, Stuart e Bob.',
      'O título do filme é exatamente o nome dessas criaturinhas amarelas.'
    ],
    medio: [
      'Segundo o filme de 2015, esses seres existem desde o início da vida na Terra com o objetivo de servir ao maior vilão.',
      'Ao longo da história, acabam causando acidentalmente a queda de mestres como um T-Rex, um Faraó e Drácula.',
      'Na trama de 2015, o trio viaja até Londres para trabalhar para a supervilã Scarlet Overkill.',
      'Durante a aventura na Inglaterra, o pequeno Bob acaba retirando a espada Excalibur da pedra e vira rei.',
      'Produzido pelo estúdio Illumination, ultrapassou 1 bilhão de dólares nas bilheterias mundiais.',
      'Animação estrelada por Kevin, Stuart e Bob.'
    ],
    dificil: [
      'O idioma falado pelos personagens, chamado "Minionese", mistura palavras de espanhol, inglês, francês, italiano e japonês.',
      'Os diretores Pierre Coffin e Kyle Balda dublaram pessoalmente dezenas dessas criaturas no filme.',
      'A história principal do longa solo se passa no ano de 1968, 42 anos antes de conhecerem Gru.',
      'A vilã Scarlet Overkill deseja roubar a Coroa Imperial da Rainha Elizabeth II.',
      'O título original em inglês significa literalmente "lacaios" ou "capangas".',
      'Nome de sete letras dos famosos ajudantes amarelos de Gru.'
    ]
  },
  interestelar: {
    categoria: 'Filme',
    facil: [
      'É um filme de ficção científica sobre astronautas que viajam pelo espaço para salvar a humanidade.',
      'Na história, a Terra está sofrendo com tempestades de poeira e pragas que estão acabando com as plantações.',
      'Um ex-piloto da NASA precisa deixar seus dois filhos para liderar uma missão através de um buraco de minhoca.',
      'A equipe explora planetas distantes em outra galáxia em busca de um novo lar para os humanos.',
      'Foi dirigido por Christopher Nolan e estrelado por Matthew McConaughey.',
      'O título do filme significa "entre as estrelas".'
    ],
    medio: [
      'Lançado em 2014, o filme retrata com rigor científico os efeitos da relatividade e da dilatação do tempo.',
      'Em um planeta coberto por água próximo a um buraco negro, cada hora passada equivale a sete anos na Terra.',
      'A astronauta Amelia Brand (Anne Hathaway) e os robôs articulados TARS e CASE acompanham a expedição.',
      'O buraco negro supermassivo central da trama foi batizado de Gargantua.',
      'O protagonista tenta se comunicar com sua filha Murph através da gravidade em uma dimensão chamada tesserato.',
      'Ficção científica de Christopher Nolan sobre viagens espaciais e o amor transcendendo o tempo.'
    ],
    dificil: [
      'O físico teórico ganhador do Nobel Kip Thorne trabalhou como consultor científico para calcular as equações visuais do buraco negro.',
      'A renderização de alguns quadros do buraco negro levou até 100 horas cada e gerou artigos científicos reais sobre astrofísica.',
      'Venceu o Oscar de Melhores Efeitos Visuais em 2015 e teve trilha sonora composta por Hans Zimmer com órgão de tubos.',
      'Os poemas de Dylan Thomas ("Não entre dócil nessa noite linda") são recitados várias vezes ao longo do filme.',
      'A missão espacial da trama é dividida em Projeto Lázaro e Plano A / Plano B.',
      'O título em português é uma palavra de 12 letras ligada a viagens entre sistemas estelares.'
    ]
  },
  'a chegada': {
    categoria: 'Filme',
    facil: [
      'É um filme de ficção científica sobre doze naves espaciais misteriosas que pousam em diferentes lugares da Terra.',
      'Em vez de uma guerra espacial, o foco do filme é tentar conversar com os alienígenas.',
      'Uma renomada professora de linguística é contratada pelo exército para decifrar o idioma extraterrestre.',
      'Os alienígenas se comunicam projetando círculos complexos de tinta no ar.',
      'Foi estrelado por Amy Adams e dirigido por Denis Villeneuve.',
      'O título do filme refere-se à vinda dessas naves ao nosso planeta.'
    ],
    medio: [
      'Lançado em 2016, o longa mostra como aprender a escrita dos seres chamados heptápodes altera a mente da protagonista.',
      'Ao compreender a linguagem não linear dos visitantes, a linguista Louise Banks passa a ter visões do futuro.',
      'O físico Ian Donnelly (Jeremy Renner) trabalha ao lado dela dentro da nave em Montana.',
      'A tensão global aumenta quando países como China e Rússia interpretam mal uma mensagem sobre "usar uma arma".',
      'O título original em inglês é "Arrival".',
      'Filme de ficção científica sobre linguística, tempo e comunicação alienígena.'
    ],
    dificil: [
      'O roteiro foi adaptado do premiado conto "História da Sua Vida" ("Story of Your Life"), publicado por Ted Chiang em 1998.',
      'O conceito linguístico central do filme é inspirado na Hipótese de Sapir-Whorf, segundo a qual o idioma molda o pensamento.',
      'As naves extraterrestres têm formato alongado que lembra uma concha ou pedra oval flutuando verticalmente.',
      'A filha da protagonista na história chama-se Hannah, um palíndromo que simboliza a estrutura circular do tempo no filme.',
      'Venceu o Oscar de Melhor Edição de Som e recebeu oito indicações no total.',
      'O título em português começa com o artigo "A" seguido de um substantivo de sete letras.'
    ]
  },
  'os vingadores': {
    categoria: 'Filme',
    facil: [
      'É um filme de super-heróis que reúne os principais personagens da Marvel em uma única equipe.',
      'Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro lutam juntos.',
      'Eles se unem para impedir que Loki invada a Terra com um exército alienígena.',
      'A grande batalha final do filme acontece nas ruas de Nova York.',
      'Nick Fury, diretor da S.H.I.E.L.D., é quem reúne os heróis.',
      'O título do filme é o nome oficial desse grupo de heróis.'
    ],
    medio: [
      'Lançado em 2012 e dirigido por Joss Whedon, este longa encerrou a "Fase 1" do Universo Cinematográfico Marvel.',
      'O vilão Loki utiliza o cubo cósmico chamado Tesseract para abrir um portal no céu de Manhattan.',
      'A equipe precisa superar desentendimentos internos após a morte do agente Phil Coulson.',
      'A cena pós-créditos apresentou pela primeira vez o titã louco Thanos.',
      'Foi o primeiro filme da Marvel a ultrapassar 1,5 bilhão de dólares em bilheteria.',
      'Reunião de Homem de Ferro, Capitão América, Thor e Hulk contra Loki.'
    ],
    dificil: [
      'A famosa tomada contínua girando em 360 graus ao redor dos seis heróis reunidos em Nova York tornou-se marco do gênero.',
      'Na cena pós-créditos exclusiva dos cinemas americanos, os heróis aparecem comendo shawarma em silêncio após a batalha.',
      'O exército alienígena utilizado na invasão de Nova York pertence à raça Chitauri.',
      'O porta-aviões voador da S.H.I.E.L.D. (Helicarrier) sofre um ataque sabotado por Gavião Arqueiro sob controle mental.',
      'Nos quadrinhos originais de Stan Lee e Jack Kirby de 1963, a formação inicial incluía Homem-Formiga e Vespa.',
      'O título em português tem duas palavras e designa "Os Heróis Mais Poderosos da Terra".'
    ]
  },
  zootopia: {
    categoria: 'Filme',
    facil: [
      'É uma animação da Disney ambientada em uma cidade moderna habitada apenas por animais falantes.',
      'A protagonista é Judy Hopps, uma coelha otimista que realiza o sonho de se tornar policial.',
      'Para resolver um caso, ela precisa trabalhar junto com Nick Wilde, uma raposa esperta e vigarista.',
      'Eles investigam o misterioso desaparecimento de vários animais predadores na cidade.',
      'Uma das cenas mais engraçadas mostra preguiças trabalhando muito devagar no departamento de trânsito.',
      'O título do filme é o nome dessa metrópole animal.'
    ],
    medio: [
      'Lançado em 2016, o filme venceu o Oscar de Melhor Filme de Animação.',
      'A cidade é dividida em diferentes bairros climáticos, como Praça Saara, Tundralândia e Distrito Florestal.',
      'A cantora pop mais famosa desse universo animal é Gazelle, dublada pela cantora Shakira.',
      'O prefeito da cidade é um leão chamado Leodore Lionheart, enquanto a vice-prefeita é a ovelha Bellwether.',
      'Os predadores desaparecidos estavam voltando ao estado selvagem por causa de flores tóxicas chamadas Uivadores da Noite.',
      'Animação protagonizada pela coelha policial Judy Hopps e a raposa Nick Wilde.'
    ],
    dificil: [
      'A história funciona como uma alegoria social sobre preconceito, estereótipos e convivência entre grupos diferentes.',
      'A preguiça chefe do departamento de veículos automotores chama-se Flecha (Flash, no original).',
      'Em alguns países europeus, o filme foi lançado com o título "Zootropolis".',
      'A música tema da animação chama-se "Try Everything".',
      'O pequeno mafioso temido na Tundralândia é na verdade um musaranho-ártico chamado Sr. Big.',
      'O título mistura as palavras "Zoo" e "Utopia".'
    ]
  },
  'a vida e bela': {
    categoria: 'Filme',
    facil: [
      'É um emocionante filme italiano ambientado durante a Segunda Guerra Mundial.',
      'Um pai judeu muito bem-humorado e criativo é levado com seu filho pequeno para um campo de concentração.',
      'Para proteger o menino do horror da guerra, o pai inventa que tudo faz parte de um grande jogo.',
      'Ele diz ao filho que quem somar mil pontos primeiro ganhará um tanque de guerra de verdade.',
      'Foi dirigido e estrelado pelo ator italiano Roberto Benigni.',
      'O título do filme afirma de forma poética a beleza da existência.'
    ],
    medio: [
      'Lançado em 1997, este drama cômico venceu três prêmios Oscar, incluindo Melhor Filme Estrangeiro e Melhor Ator.',
      'Na primeira metade do filme, o protagonista Guido conquista sua esposa Dora, a quem chama de "Principessa".',
      'Roberto Benigni ficou famoso pela comemoração eufórica caminhando sobre as poltronas na cerimônia do Oscar.',
      'Guido se oferece para traduzir as ordens dos guardas alemães no alojamento, transformando ameaças em regras de brincadeira.',
      'O título original em italiano é "La vita è bella".',
      'Clássico italiano sobre o amor de um pai que transforma um campo de prisioneiros em um jogo para o filho.'
    ],
    dificil: [
      'O pai de Roberto Benigni havia sido prisioneiro em um campo de trabalho na Segunda Guerra e contava histórias com humor para não assustar os filhos.',
      'Foi o primeiro filme de língua não inglesa a vencer o Oscar de Melhor Ator para uma atuação masculina.',
      'O pequeno personagem do filho chama-se Giosuè e passa boa parte do filme escondido dentro de uma caixa metálica.',
      'O médico alemão Lessing, conhecido de Guido antes da guerra, mostra-se obcecado apenas por charadas em vez de ajudá-lo.',
      'Venceu o Grande Prêmio do Júri no Festival de Cannes de 1998.',
      'O título em português possui quatro palavras e começa com o artigo "A".'
    ]
  },
  'o senhor dos aneis': {
    categoria: 'Filme',
    facil: [
      'É uma famosa trilogia de filmes de fantasia baseada nos livros de J.R.R. Tolkien.',
      'A história se passa na Terra-média, um mundo habitado por humanos, elfos, anões, magos e hobbits.',
      'O jovem hobbit Frodo Bolseiro herda um anel mágico muito perigoso.',
      'Ele precisa viajar até a Montanha da Perdição para destruir o anel no fogo onde foi forjado.',
      'O mago Gandalf, o guerreiro Aragorn e o elfo Legolas ajudam nessa missão.',
      'A criatura Gollum chama o anel constantemente de "Meu Precioso".'
    ],
    medio: [
      'Dirigida por Peter Jackson e filmada na Nova Zelândia, a trilogia foi lançada entre 2001 e 2003.',
      'Os três filmes são "A Sociedade do Anel", "As Duas Torres" e "O Retorno do Rei".',
      'O terceiro filme conquistou 11 estatuetas do Oscar, vencendo todas as categorias em que foi indicado.',
      'O vilão principal é o Senhor do Escuro Sauron, que busca recuperar seu Um Anel.',
      'O fiel jardineiro Samwise Gamgee acompanha o protagonista até o fim da jornada.',
      'Saga épica da Terra-média sobre a destruição do Um Anel.'
    ],
    dificil: [
      'Toda a trilogia foi filmada simultaneamente ao longo de mais de 430 dias de gravação na Nova Zelândia.',
      'Na inscrição élfica gravada no artefato lê-se: "Um Anel para a todos governar...".',
      'O ator Viggo Mortensen quebrou dois dedos do pé durante uma cena em "As Duas Torres", mas manteve o grito de dor na filmagem.',
      'A banda sonora composta por Howard Shore utilizou dezenas de leitmotivs distintos para cada povo e região.',
      'Juntamente com Ben-Hur e Titanic, detém o recorde absoluto de vitórias em uma única noite do Oscar.',
      'O título em português tem quatro palavras e refere-se ao criador das joias de poder.'
    ]
  },
  'senhor dos aneis': {
    categoria: 'Filme',
    facil: [
      'É uma famosa trilogia de filmes de fantasia baseada nos livros de J.R.R. Tolkien.',
      'A história se passa na Terra-média, um mundo habitado por humanos, elfos, anões, magos e hobbits.',
      'O jovem hobbit Frodo Bolseiro herda um anel mágico muito perigoso.',
      'Ele precisa viajar até a Montanha da Perdição para destruir o anel no fogo onde foi forjado.',
      'O mago Gandalf, o guerreiro Aragorn e o elfo Legolas ajudam nessa missão.',
      'A criatura Gollum chama o anel constantemente de "Meu Precioso".'
    ],
    medio: [
      'Dirigida por Peter Jackson e filmada na Nova Zelândia, a trilogia foi lançada entre 2001 e 2003.',
      'Os três filmes são "A Sociedade do Anel", "As Duas Torres" e "O Retorno do Rei".',
      'O terceiro filme conquistou 11 estatuetas do Oscar, vencendo todas as categorias em que foi indicado.',
      'O vilão principal é o Senhor do Escuro Sauron, que busca recuperar seu Um Anel.',
      'O fiel jardineiro Samwise Gamgee acompanha o protagonista até o fim da jornada.',
      'Saga épica da Terra-média sobre a destruição do Um Anel.'
    ],
    dificil: [
      'Toda a trilogia foi filmada simultaneamente ao longo de mais de 430 dias de gravação na Nova Zelândia.',
      'Na inscrição élfica gravada no artefato lê-se: "Um Anel para a todos governar...".',
      'O ator Viggo Mortensen quebrou dois dedos do pé durante uma cena em "As Duas Torres", mas manteve o grito de dor na filmagem.',
      'A banda sonora composta por Howard Shore utilizou dezenas de leitmotivs distintos para cada povo e região.',
      'Juntamente com Ben-Hur e Titanic, detém o recorde absoluto de vitórias em uma única noite do Oscar.',
      'O título em português tem três palavras (sem artigo inicial) e refere-se às joias forjadas por Sauron.'
    ]
  },
  'a rede social': {
    categoria: 'Filme',
    facil: [
      'É um filme biográfico que conta a história da criação do Facebook.',
      'A trama começa em 2003, quando o protagonista ainda era estudante da Universidade de Harvard.',
      'Mostra como um site criado em um dormitório universitário se transformou em um fenômeno mundial.',
      'Retrata também os processos judiciais movidos pelos antigos colegas e cofundadores.',
      'Jesse Eisenberg interpreta o jovem criador Mark Zuckerberg.',
      'O título do filme é o termo usado para definir plataformas como Facebook e Instagram.'
    ],
    medio: [
      'Dirigido por David Fincher em 2010, o filme teve roteiro premiado escrito por Aaron Sorkin.',
      'Andrew Garfield interpreta o brasileiro Eduardo Saverin, cofundador e primeiro diretor financeiro da empresa.',
      'Justin Timberlake vive Sean Parker, criador do Napster, que influencia os rumos da plataforma.',
      'Os irmãos gêmeos Winklevoss acusam o protagonista de ter roubado sua ideia original.',
      'Venceu três prêmios Oscar, incluindo Melhor Roteiro Adaptado e Melhor Trilha Sonora Original.',
      'Filme sobre a origem do Facebook e a disputa entre Mark Zuckerberg e Eduardo Saverin.'
    ],
    dificil: [
      'O roteiro foi adaptado do livro de não ficção "Bilionários por Acaso", escrito por Ben Mezrich.',
      'A trilha sonora eletrônica minimalista foi composta por Trent Reznor (do Nine Inch Nails) e Atticus Ross.',
      'A frase promocional oficial nos cartazes do filme era: "Você não faz 500 milhões de amigos sem fazer alguns inimigos".',
      'A cena de abertura em um bar universitário contém quase dez páginas de diálogo rápido filmadas em dezenas de tomadas.',
      'O longa intercala a criação da empresa com depoimentos simultâneos de dois processos judiciais distintos.',
      'O título em português possui três palavras e designa o tipo de site criado em Harvard.'
    ]
  },
  'o poderoso chefao': {
    categoria: 'Filme',
    facil: [
      'É um dos filmes de máfia e drama mais famosos da história do cinema.',
      'A história acompanha a poderosa família criminosa Corleone, em Nova York.',
      'O patriarca e líder da família é Don Vito Corleone, interpretado por Marlon Brando.',
      'Seu filho caçula, Michael, volta da guerra sem querer se envolver nos negócios ilegais, mas acaba assumindo o poder.',
      'Foi dirigido por Francis Ford Coppola em 1972.',
      'Ficou famoso pela frase: "Vou fazer a ele uma oferta que ele não poderá recusar".'
    ],
    medio: [
      'Baseado no livro homônimo de Mario Puzo, o filme venceu o Oscar de Melhor Filme e Melhor Ator.',
      'A longa cena de abertura mostra o casamento da filha de Don Corleone enquanto ele atende pedidos em seu escritório.',
      'Al Pacino interpreta Michael Corleone, enquanto James Caan vive o impulsivo irmão mais velho Sonny.',
      'Uma das cenas mais chocantes mostra um produtor de cinema acordando com a cabeça de um cavalo na cama.',
      'A trilha sonora melancólica foi composta por Nino Rota.',
      'Clássico absoluto sobre a família mafiosa Corleone.'
    ],
    dificil: [
      'O estúdio Paramount inicialmente resistiu à escalação de Marlon Brando e Al Pacino para os papéis principais.',
      'O gato que aparece no colo de Marlon Brando na cena inicial era um animal vadio encontrado pelo diretor no estúdio.',
      'Sua continuação, lançada em 1974, tornou-se a primeira sequência na história a vencer o Oscar de Melhor Filme.',
      'O termo italiano "Consigliere" é usado no filme para designar o conselheiro jurídico de confiança do chefe.',
      'A sequência do batismo no final do filme intercala a cerimônia religiosa com a eliminação dos chefes rivais.',
      'O título original em inglês é "The Godfather".'
    ]
  },
  'o lobo de wall street': {
    categoria: 'Filme',
    facil: [
      'É um filme baseado na história real de um corretor da bolsa de valores de Nova York.',
      'O protagonista enriquece rapidamente aplicando golpes financeiros e vendendo ações de baixo valor.',
      'Ele vive uma rotina marcada por festas extravagantes, iates, carros de luxo e muitos excessos.',
      'Foi estrelado por Leonardo DiCaprio e dirigido por Martin Scorsese.',
      'O personagem principal chama-se Jordan Belfort.',
      'O título do filme compara o protagonista a um predador da famosa rua financeira de Nova York.'
    ],
    medio: [
      'Lançado em 2013, o longa retrata a ascensão e queda da corretora fraudulenta Stratton Oakmont nos anos 1990.',
      'Jonah Hill interpreta Donnie Azoff, o excêntrico sócio e braço direito do protagonista.',
      'Margot Robbie ganhou destaque mundial interpretando Naomi Lapaglia, a segunda esposa de Jordan.',
      'Matthew McConaughey faz uma participação marcante ensinando o ritual de bater no peito e cantarolar.',
      'Ficou famoso pela cena em que o protagonista pede para alguém lhe vender uma caneta.',
      'Drama biográfico de Martin Scorsese sobre ganância e fraudes financeiras em Nova York.'
    ],
    dificil: [
      'O roteiro foi adaptado do livro de memórias escrito pelo próprio Jordan Belfort após cumprir pena na prisão.',
      'Com três horas de duração, deteve o recorde do Guinness de maior quantidade de palavrões em um filme comercial.',
      'O agente do FBI Patrick Denham investiga o protagonista ao longo de anos sem aceitar subornos em um iate.',
      'Recebeu cinco indicações ao Oscar, incluindo Melhor Filme, Melhor Diretor e Melhor Ator.',
      'O verdadeiro Jordan Belfort faz uma breve ponta no final do filme apresentando o protagonista em uma palestra.',
      'O título em português tem cinco palavras e cita a sede do mercado financeiro americano.'
    ]
  },
  gladiador: {
    categoria: 'Filme',
    facil: [
      'É um filme épico histórico ambientado no antigo Império Romano.',
      'O protagonista é um respeitado general romano traído pelo filho corrupto do imperador.',
      'Após ter sua família assassinada, ele é capturado e vendido como escravo.',
      'Ele se torna um lutador famoso nas arenas, chegando a combater no grande Coliseu de Roma.',
      'Foi estrelado por Russell Crowe no papel de Maximus.',
      'O título do filme é o nome dado aos guerreiros que lutavam nas arenas romanas.'
    ],
    medio: [
      'Dirigido por Ridley Scott em 2000, este épico conquistou cinco prêmios Oscar, incluindo Melhor Filme e Melhor Ator.',
      'Joaquin Phoenix interpreta o cruel e invejoso imperador Cômodo, antagonista da história.',
      'Antes de morrer, o velho imperador Marco Aurélio desejava devolver o poder ao Senado Romano.',
      'A famosa frase "O que fazemos em vida ecoa na eternidade" é dita pelo protagonista antes da batalha.',
      'Proximo é o ex-lutador que compra o protagonista e o treina para as arenas.',
      'Épico romano estrelado por Russell Crowe e Joaquin Phoenix.'
    ],
    dificil: [
      'O sucesso deste longa reviveu o gênero dos épicos históricos de "espada e sandália" em Hollywood no início do século XXI.',
      'Uma réplica de cerca de um terço do Coliseu romano foi construída fisicamente na ilha de Malta para as filmagens.',
      'O ator Oliver Reed faleceu durante as gravações, exigindo o uso pioneiro de dublês digitais para concluir suas cenas.',
      'A trilha sonora envolvente foi composta por Hans Zimmer e Lisa Gerrard.',
      'Na cena de abertura, as legiões romanas enfrentam tribos germânicas na floresta de Vindobona.',
      'O título é uma única palavra de nove letras que designa o combatente do Coliseu.'
    ]
  },
  ratatouille: {
    categoria: 'Filme',
    facil: [
      'É uma animação da Pixar sobre um rato que sonha em se tornar um grande chef de cozinha.',
      'A história se passa na cidade de Paris, capital da gastronomia.',
      'O ratinho Remy possui um olfato e um paladar extraordinários.',
      'Ele faz amizade com Linguini, um jovem ajudante de cozinha muito atrapalhado.',
      'Escondido sob o chapéu de chef, o rato controla os movimentos do rapaz puxando seus cabelos.',
      'O título do filme é o nome de um prato tradicional francês feito com legumes.'
    ],
    medio: [
      'Lançado em 2007 e dirigido por Brad Bird, venceu o Oscar de Melhor Filme de Animação.',
      'O lema do falecido chef Gusteau, ídolo do protagonista, é "Qualquer um pode cozinhar".',
      'O rigoroso e temido crítico gastronômico Anton Ego se emociona ao provar o prato preparado pelo rato.',
      'O vilão da cozinha é o pequeno e ganancioso chef Skinner, que tenta descobrir o segredo de Linguini.',
      'A cozinheira Colette ensina os segredos da alta gastronomia parisiense ao protagonista.',
      'Animação sobre o rato chef Remy em um restaurante de Paris.'
    ],
    dificil: [
      'Para criar os pratos animados com aparência apetitosa, a equipe da Pixar consultou o renomado chef francês Thomas Keller.',
      'O prato servido ao crítico no clímax do filme é uma variação sofisticada chamada "Confit Byaldi".',
      'Ao provar o prato, o crítico tem uma lembrança instantânea de sua infância, em referência à obra de Marcel Proust.',
      'O nome do filme termina com "-ouille", mas pronuncia-se aproximadamente "ratatui".',
      'Foi o oitavo longa-metragem produzido pelos estúdios Pixar.',
      'O título leva o nome do famoso cozido de berinjela, abobrinha, pimentão e tomate da Provença.'
    ]
  },
  'viva a vida': {
    categoria: 'Filme',
    facil: [
      'É um drama emocionante sobre superação e a busca pelo sentido da existência.',
      'A história acompanha um personagem que enfrenta grandes desafios e escolhas difíceis.',
      'Mostra a importância dos laços familiares, da esperança e de aproveitar cada instante.',
      'Mistura momentos de reflexão profunda com mensagens positivas sobre resiliência.',
      'Incentiva o espectador a valorizar o presente diante das adversidades da vida.',
      'O título do filme é uma expressão otimista de celebração à existência.'
    ],
    medio: [
      'A narrativa coloca o protagonista diante de situações limites que transformam sua visão de mundo.',
      'Explora o equilíbrio entre responsabilidades do cotidiano e a realização de sonhos pessoais.',
      'Destaca como pequenas atitudes e conexões humanas podem mudar destinos.',
      'É uma obra voltada para emocionar e inspirar o público com uma mensagem de coragem.',
      'A trama gira em torno de decisões que definem o legado de uma vida bem vivida.',
      'O título em português possui três palavras e começa com o verbo "Viva".'
    ],
    dificil: [
      'Tematicamente, aborda a finitude humana e a urgência de ressignificar prioridades.',
      'Constrói sua carga dramática através de conflitos íntimos e reconciliações.',
      'Apela para o otimismo realista mesmo em cenários de perda e recomeço.',
      'Pertence ao gênero dramático com foco em desenvolvimento pessoal e superação.',
      'O título funciona como um imperativo de celebração e entusiasmo.',
      'Composto por três palavras curtas: "Viva" + "a" + "Vida".'
    ]
  },
  divertidamente: {
    categoria: 'Filme',
    facil: [
      'É uma animação da Pixar que se passa dentro da mente de uma menina de 11 anos chamada Riley.',
      'Os personagens principais são cinco emoções que trabalham em uma sala de controle.',
      'As emoções são Alegria, Tristeza, Raiva, Medo e Nojinho.',
      'A história começa quando Riley precisa se mudar de cidade com seus pais e sente dificuldade para se adaptar.',
      'Alegria e Tristeza acabam se perdendo longe da sala de comando e precisam voltar antes que tudo desmorone.',
      'O título em português faz um trocadilho entre diversão e mente.'
    ],
    medio: [
      'Lançado em 2015 e dirigido por Pete Docter, venceu o Oscar de Melhor Filme de Animação.',
      'Na mente da garota, as experiências mais marcantes formam esferas brilhantes chamadas "memórias-base".',
      'As "Ilhas de Personalidade" incluem a Ilha da Família, da Amizade, da Honestidade, da Bobeira e do Hóquei.',
      'Durante a jornada pela memória de longo prazo, elas encontram Bing Bong, o amigo imaginário de infância.',
      'O filme mostra que a Tristeza também tem um papel essencial para gerar empatia e acolhimento.',
      'Animação protagonizada por Alegria, Tristeza, Raiva, Medo e Nojinho.'
    ],
    dificil: [
      'Os roteiristas consultaram psicólogos e neurocientistas para representar como as emoções organizam memórias.',
      'O título original em inglês é "Inside Out" ("De Dentro para Fora").',
      'No filme, existe uma fábrica responsável por produzir os sonhos noturnos como se fossem filmes de Hollywood.',
      'Ganhou uma continuação de enorme sucesso em 2024, introduzindo novas emoções na puberdade, como a Ansiedade.',
      'Cada emoção foi desenhada com base em uma forma geométrica: estrela, lágrima, tijolo, nervo e brócolis.',
      'O título em português é uma única palavra de 14 letras.'
    ]
  },

  // --- UNIVERSO HARRY POTTER ---
  'harry potter': {
    categoria: 'Personagem / Saga',
    facil: [
      'É o jovem bruxo protagonista de uma das sagas literárias e cinematográficas mais famosas do mundo.',
      'Possui uma cicatriz em forma de raio na testa e usa óculos redondos.',
      'Foi criado por seus tios trouxas até descobrir aos 11 anos que era um bruxo famoso.',
      'Estuda na Escola de Magia e Bruxaria de Hogwarts, na casa Grifinória.',
      'Seus dois melhores amigos são Ron Weasley e Hermione Granger.',
      'Sobreviveu ainda bebê ao ataque do bruxo das trevas Lord Voldemort.'
    ],
    medio: [
      'É conhecido no mundo mágico como "O Menino que Sobreviveu".',
      'Tornou-se o apanhador mais jovem da equipe de Quadribol da Grifinória em um século.',
      'Sua varinha é feita de azevinho com núcleo de pena de fênix, gêmea da varinha de seu maior inimigo.',
      'Possui uma coruja branca chamada Edwiges e herdou uma Capa da Invisibilidade de seu pai.',
      'Tem a habilidade rara de falar Ofidioglossia (a língua das cobras).',
      'Protagonista criado pela autora britânica J.K. Rowling.'
    ],
    dificil: [
      'Nasceu em 31 de julho de 1980, filho de Tiago e Lílian Potter, em Godric’s Hollow.',
      'Tornou-se involuntariamente uma das Horcruxes de Voldemort na noite em que seus pais foram mortos.',
      'Na idade adulta, tornou-se Auror e posteriormente Chefe do Departamento de Execução das Leis da Magia.',
      'Seu Patrono assume a forma corpórea de um cervo, em homenagem ao apelido de seu pai ("Pontas").',
      'Foi interpretado nos oito filmes da franquia principal pelo ator Daniel Radcliffe.',
      'O nome completo do protagonista tem duas palavras: Harry + Potter.'
    ]
  },
  hogwarts: {
    categoria: 'Lugar Fictício',
    facil: [
      'É a famosa escola de magia e bruxaria onde Harry Potter estuda.',
      'Fica localizada em um enorme castelo antigo na Grã-Bretanha.',
      'Os alunos chegam até lá embarcando em um trem vermelho na Plataforma 9 ¾.',
      'A escola é dividida em quatro casas: Grifinória, Sonserina, Corvinal e Lufa-Lufa.',
      'É dirigida pelo sábio bruxo Alvo Dumbledore.',
      'O nome da escola começa com a letra H e tem oito letras.'
    ],
    medio: [
      'Foi fundada há mais de mil anos por Godrico Gryffindor, Salazar Slytherin, Rowena Ravenclaw e Helga Hufflepuff.',
      'Os alunos são selecionados para suas casas pelo Chapéu Seletor durante o banquete de boas-vindas.',
      'O castelo possui escadarias que mudam de lugar, quadros que se movem e fantasmas residentes.',
      'Fica ao lado da Floresta Proibida e às margens do Lago Negro.',
      'Para os trouxas (pessoas sem magia), o castelo parece apenas uma ruína perigosa com placas de aviso.',
      'Nome da escola de magia frequentada por Harry, Ron e Hermione.'
    ],
    dificil: [
      'Seu lema oficial em latim é "Draco dormiens nunquam titillandus" ("Nunca faça cócegas em um dragão adormecido").',
      'Fica situada nas terras altas da Escócia e é protegida por antigos encantamentos antiaparatação.',
      'Abriga a lendária Câmara Secreta, construída por um de seus fundadores.',
      'Foi palco da batalha final contra Lord Voldemort e os Comensais da Morte em maio de 1998.',
      'Os alunos aprendem matérias como Poções, Transfiguração, Feitiços e Herbologia.',
      'Nome de oito letras da escola de bruxaria da saga Harry Potter.'
    ]
  },
  hedwig: {
    categoria: 'Criatura / Personagem',
    facil: [
      'É o animal de estimação fiel de Harry Potter.',
      'É uma coruja-das-neves completamente branca.',
      'Foi comprada por Hagrid como presente de aniversário para Harry no Beco Diagonal.',
      'Além de companhia, ela entrega cartas e encomendas para o jovem bruxo.',
      'No Brasil, também é muito conhecida pelo nome adaptado Edwiges.',
      'Seu nome original em inglês tem seis letras e começa com H.'
    ],
    medio: [
      'Harry escolheu esse nome após lê-lo em um de seus livros escolares, "História da Magia".',
      'Costuma dar beliscões afetuosos nos dedos de Harry quando quer atenção ou petiscos.',
      'Ficou presa em sua gaiola na Rua dos Alfeneiros durante as férias de verão dos Dursley.',
      'Era uma das poucas ligações de Harry com o mundo mágico quando estava longe da escola.',
      'Morreu tragicamente protegendo Harry durante a Batalha dos Sete Potters.',
      'Nome original da coruja branca de Harry Potter.'
    ],
    dificil: [
      'Na vida real, a personagem foi interpretada nos filmes por várias corujas-das-neves machos, pois são mais brancos que as fêmeas.',
      'Seu nome tem origem em Santa Edviges da Silésia, padroeira dos órfãos na tradição histórica.',
      'Foi adquirida na loja Empório das Corujas antes do primeiro ano letivo de Harry.',
      'Em "O Prisioneiro de Azkaban", ela encontra Harry no Caldeirão Furado antes mesmo de ele chegar lá.',
      'É o equivalente em inglês para o nome "Edwiges".',
      'Coruja branca de estimação do Menino que Sobreviveu (grafia original em inglês).'
    ]
  },
  'ron weasley': {
    categoria: 'Personagem',
    facil: [
      'É o melhor amigo ruivo de Harry Potter.',
      'Vem de uma família grande, humilde e muito acolhedora de bruxos.',
      'Conheceu Harry no Expresso de Hogwarts ao dividirem doces na cabine.',
      'Pertence à casa Grifinória e forma o trio principal ao lado de Harry e Hermione.',
      'Tem um medo terrível de aranhas.',
      'Seu nome completo é Ronald Bilius Weasley.'
    ],
    medio: [
      'É o sexto dos sete filhos de Arthur e Molly Weasley, sendo irmão mais novo de Fred e Jorge.',
      'Costuma usar vestes, livros e varinhas herdados de seus irmãos mais velhos.',
      'É um excelente estrategista no xadrez de bruxo, vencendo uma partida gigante no primeiro livro.',
      'Teve como primeiro animal de estimação o rato Perebas, que na verdade era Pedro Pettigrew disfarçado.',
      'Tornou-se goleiro da equipe de Quadribol da Grifinória.',
      'Melhor amigo de Harry Potter e marido de Hermione Granger no epílogo da saga.'
    ],
    dificil: [
      'Foi interpretado nos cinemas pelo ator britânico Rupert Grint.',
      'No Espelho de Ojesed, viu a si mesmo como Monitor-Chefe e Capitão de Quadribol superando todos os irmãos.',
      'Destruiu a Horcrux do medalhão de Salazar Sonserina usando a espada de Godrico Gryffindor.',
      'Seu Patrono assume a forma corpórea de um cão da raça Jack Russell Terrier.',
      'Cresceu na casa torta da família chamada "A Toca", próxima ao vilarejo de Ottery St. Catchpole.',
      'Nome completo do amigo ruivo de Harry Potter (2 palavras).'
    ]
  },
  'hermione granger': {
    categoria: 'Personagem',
    facil: [
      'É a melhor amiga de Harry Potter e Ron Weasley.',
      'É conhecida por ser a aluna mais inteligente, estudiosa e dedicada de sua turma.',
      'Sempre sabe a resposta para qualquer pergunta dos professores e conhece inúmeros feitiços.',
      'Seus pais são dentistas trouxas (pessoas sem poderes mágicos).',
      'Pertence à casa Grifinória.',
      'Seu nome completo tem duas palavras e começa com H.'
    ],
    medio: [
      'No terceiro ano, usou um artefato mágico chamado Vira-Tempo para conseguir assistir a várias aulas ao mesmo tempo.',
      'Fundou a F.A.L.E. (Fundo de Apoio à Liberação dos Elfos) para defender os direitos dos elfos domésticos.',
      'Tem um gato alaranjado de rosto achatado chamado Bichento.',
      'Foi petrificada pelo Basilisco no segundo ano, mas deixou uma pista vital escrita em um pedaço de papel.',
      'Foi interpretada nos filmes pela atriz Emma Watson.',
      'A bruxa mais brilhante de sua geração em Hogwarts.'
    ],
    dificil: [
      'Seu nome do meio é Jean, e ela nasceu em 19 de setembro de 1979.',
      'Alterou as memórias de seus próprios pais para protegê-los dos Comensais da Morte antes de partir em busca das Horcruxes.',
      'Seu Patrono assume a forma de uma lontra, o animal favorito da autora J.K. Rowling.',
      'Foi inicialmente considerada pelo Chapéu Seletor para a casa Corvinal antes de ser enviada para a Grifinória.',
      'Na idade adulta, chegou a ocupar o cargo de Ministra da Magia.',
      'Nome e sobrenome da amiga mais estudiosa de Harry Potter.'
    ]
  },
  voldemort: {
    categoria: 'Personagem',
    facil: [
      'É o grande vilão e bruxo das trevas da saga Harry Potter.',
      'É tão temido que a maioria dos bruxos evita pronunciar seu nome, chamando-o de "Você-Sabe-Quem".',
      'Foi o responsável por assassinar os pais de Harry Potter.',
      'Tem aparência pálida, olhos vermelhos e rosto semelhante ao de uma serpente, sem nariz.',
      'Lidera um grupo de seguidores chamados Comensais da Morte.',
      'Seu título completo é Lord Voldemort.'
    ],
    medio: [
      'Seu nome verdadeiro de nascimento era Tom Marvolo Riddle.',
      'Dividiu sua própria alma em sete partes ocultas em objetos chamados Horcruxes para tentar vencer a morte.',
      'Estudou em Hogwarts na casa Sonserina e é descendente direto de Salazar Slytherin.',
      'Tem uma enorme cobra venenosa de estimação chamada Nagini.',
      'É o único bruxo que realmente teme Alvo Dumbledore.',
      'Principal antagonista da saga Harry Potter.'
    ],
    dificil: [
      'A frase "Tom Marvolo Riddle" é um anagrama em inglês para "I am Lord Voldemort".',
      'Nasceu em um orfanato trouxa em Londres no dia 31 de dezembro de 1926, filho de Mérope Gaunt.',
      'Ao tentar matar Harry ainda bebê, sua maldição "Avada Kedavra" ricocheteou devido ao sacrifício de amor de Lílian.',
      'Foi interpretado na fase adulta nos filmes pelo ator Ralph Fiennes.',
      'Tentou obter a Varinha das Varinhas violando o túmulo de Alvo Dumbledore.',
      'Nome de nove letras do maior bruxo das trevas da história.'
    ]
  },
  dumbledore: {
    categoria: 'Personagem',
    facil: [
      'É o idoso e sábio diretor da Escola de Magia e Bruxaria de Hogwarts.',
      'Tem uma longa barba prateada, cabelos brancos e usa óculos em formato de meia-lua.',
      'Atua como o principal mentor e protetor de Harry Potter.',
      'É considerado o maior bruxo dos tempos modernos.',
      'Tem uma fênix de estimação chamada Fawkes.',
      'Seu nome completo é Alvo Dumbledore.'
    ],
    medio: [
      'É o único bruxo que Lord Voldemort realmente teme.',
      'Fundou e liderou a Ordem da Fênix para combater os Comensais da Morte.',
      'Ficou famoso por derrotar o bruxo das trevas Gerardo Grindelwald em um duelo lendário em 1945.',
      'Descobriu os doze usos do sangue de dragão e trabalhou em alquimia com Nicolau Flamel.',
      'Guarda suas lembranças em uma bacia de pedra mágica chamada Penseira.',
      'Sobrenome do diretor mais famoso de Hogwarts.'
    ],
    dificil: [
      'Seu nome completo possui cinco nomes: Alvo Percival Wulfrico Brian Dumbledore.',
      'Antes de se tornar diretor, lecionou a disciplina de Transfiguração em Hogwarts.',
      'Sua mão direita ficou permanentemente enegrecida e amaldiçoada ao destruir o anel de Servolo Gaunt.',
      'Foi interpretado nos dois primeiros filmes por Richard Harris e nos seguintes por Michael Gambon.',
      'Adora doces trouxas, usando nomes de guloseimas como "Sorvete de Limão" como senha de seu escritório.',
      'Sobrenome de dez letras do mentor de Harry Potter.'
    ]
  },
  'sirius black': {
    categoria: 'Personagem',
    facil: [
      'É o padrinho de Harry Potter.',
      'Ficou preso injustamente durante doze anos na prisão de Azkaban.',
      'Fugiu da prisão para proteger Harry e provar sua inocência.',
      'É um animago capaz de se transformar em um grande cão preto.',
      'Era o melhor amigo de Tiago Potter, o pai de Harry.',
      'Seu nome completo tem duas palavras e começa com S.'
    ],
    medio: [
      'Na juventude em Hogwarts, fazia parte do grupo dos Marotos ao lado de Tiago, Remo Lupin e Pedro Pettigrew.',
      'Seu apelido entre os amigos era "Almofadinhas".',
      'Foi acusado falsamente de ter traído os pais de Harry e assassinado doze trouxas.',
      'Pertencia a uma antiga família purista de bruxos, mas rompeu com eles e foi para a Grifinória.',
      'Deixou para Harry a casa de sua família no Largo Grimmauld, número 12, que serviu de sede da Ordem da Fênix.',
      'Padrinho de Harry Potter interpretado por Gary Oldman nos filmes.'
    ],
    dificil: [
      'Tornou-se o primeiro bruxo conhecido a escapar de Azkaban sem ajuda externa, usando sua forma animal.',
      'Foi o responsável por presentear Harry com a vassoura de corrida Firebolt no terceiro livro.',
      'Morreu após atravessar o véu na Câmara da Morte do Ministério da Magia durante um duelo com sua prima Belatriz Lestrange.',
      'Seu nome próprio é uma referência à estrela mais brilhante do céu noturno, na constelação do Cão Maior.',
      'Foi um dos quatro criadores do Mapa do Maroto.',
      'Nome e sobrenome do padrinho de Harry Potter.'
    ]
  },
  hagrid: {
    categoria: 'Personagem',
    facil: [
      'É o gigante bondoso e barbudo que trabalha em Hogwarts.',
      'Atua como guarda-caça e guardião das chaves e terrenos da escola.',
      'Foi ele quem contou a Harry Potter pela primeira vez que ele era um bruxo.',
      'Tem uma paixão perigosa por criaturas mágicas gigantes e assustadoras.',
      'Mora em uma cabana de madeira na entrada da Floresta Proibida.',
      'Seu nome completo é Rúbeo Hagrid.'
    ],
    medio: [
      'É um meio-gigante, filho de um pai bruxo humano e de uma giganta chamada Fridwulfa.',
      'Foi expulso de Hogwarts no terceiro ano após Tom Riddle culpá-lo pela abertura da Câmara Secreta.',
      'Esconde os pedaços de sua varinha quebrada dentro de um guarda-chuva cor-de-rosa.',
      'Tornou-se professor da disciplina Trato das Criaturas Mágicas.',
      'Criou um dragão bebê chamado Norberto e tinha um cão de caça chamado Canino.',
      'Sobrenome do guarda-caça amigo de Harry, Ron e Hermione.'
    ],
    dificil: [
      'Resgatou o bebê Harry das ruínas de Godric’s Hollow usando a motocicleta voadora emprestada de Sirius Black.',
      'Cuidou de uma acromântula gigante chamada Aragogue desde que ela saiu de um ovo.',
      'Tem um meio-irmão gigante chamado Grope, a quem tentou ensinar boas maneiras na Floresta Proibida.',
      'Foi interpretado nos cinemas pelo ator escocês Robbie Coltrane.',
      'Apresentou o hipogrifo Bicuço aos alunos em sua primeira aula como professor.',
      'Sobrenome de seis letras do meio-gigante de Hogwarts.'
    ]
  },
  muggle: {
    categoria: 'Termo Fictício',
    facil: [
      'É uma palavra usada no universo de Harry Potter para se referir a pessoas comuns.',
      'Designa quem nasceu sem nenhum poder mágico.',
      'Os tios de Harry Potter, Válter e Petúnia Dursley, são exemplos disso.',
      'Nas traduções brasileiras dos livros, essa palavra foi adaptada como "trouxa".',
      'É o termo original em inglês criado por J.K. Rowling.',
      'Tem seis letras e começa com a letra M.'
    ],
    medio: [
      'Os bruxos utilizam o Ministério da Magia para esconder a existência do mundo mágico dessas pessoas.',
      'Em Hogwarts existe uma matéria optativa dedicada a estudar os costumes e objetos desse grupo.',
      'O pai de Ron Weasley, Arthur, é fascinado pelas invenções e eletricidade criadas por eles.',
      'Bruxos preconceituosos usam a expressão "sangue-ruim" para ofender quem tem pais desse grupo.',
      'Nos Estados Unidos, no universo de Animais Fantásticos, o termo equivalente usado é "No-Maj".',
      'Termo em inglês para pessoas não mágicas em Harry Potter.'
    ],
    dificil: [
      'A palavra tornou-se tão popular que foi oficialmente incluída no Dicionário Oxford da Língua Inglesa em 2003.',
      'J.K. Rowling explicou que criou o termo a partir da palavra inglesa "mug", que significa alguém facilmente enganado.',
      'O Estatuto Internacional de Sigilo em Magia de 1692 proibiu o uso de feitiços diante dessas pessoas.',
      'Hermione Granger é uma bruxa nascida de pais pertencentes a esse grupo.',
      'Corresponde ao termo "trouxa" na tradução de Lia Wyler.',
      'Palavra em inglês com duas letras G no meio.'
    ]
  },
  quidditch: {
    categoria: 'Esporte Fictício',
    facil: [
      'É o esporte mais famoso e popular do mundo bruxo de Harry Potter.',
      'É jogado no ar com os jogadores montados em vassouras voadoras.',
      'Cada equipe possui sete jogadores e tenta marcar pontos passando uma bola pelos aros.',
      'O jogo só termina quando um jogador chamado apanhador captura o pomo de ouro.',
      'Nas traduções brasileiras, esse esporte recebeu o nome de "Quadribol".',
      'É o nome original em inglês do esporte mágico.'
    ],
    medio: [
      'Uma partida utiliza quatro bolas diferentes: a Goles, dois Balaços e o Pomo de Ouro.',
      'As posições dos jogadores são: três artilheiros, dois batedores, um goleiro e um apanhador.',
      'Capturar a pequena bola dourada com asas vale 150 pontos e encerra o jogo.',
      'Harry Potter jogava na posição de apanhador pelo time da Grifinória.',
      'A Copa Mundial desse esporte é o evento mais aguardado pelos bruxos a cada quatro anos.',
      'Nome original em inglês do Quadribol.'
    ],
    dificil: [
      'Segundo os livros fictícios de Hogwarts, o esporte surgiu no século XI no brejo de Queerditch.',
      'Uma partida profissional pode durar dias ou até meses caso nenhum apanhador consiga capturar o pomo.',
      'Em 1994, a final da Copa Mundial foi disputada entre Irlanda e Bulgária (com o apanhador Vítor Krum).',
      'A goles vale 10 pontos cada vez que é arremessada através de um dos três aros adversários.',
      'Os balaços são bolas de ferro enfeitiçadas que tentam derrubar os jogadores de suas vassouras.',
      'Termo em inglês de nove letras que começa com Q e termina com H.'
    ]
  },
  azkaban: {
    categoria: 'Lugar Fictício',
    facil: [
      'É a temida prisão do mundo bruxo na saga Harry Potter.',
      'Fica localizada em uma fortaleza isolada no meio do gelado Mar do Norte.',
      'É vigiada pelos Dementadores, criaturas sombrias que sugam toda a felicidade.',
      'Os criminosos mais perigosos, como os Comensais da Morte, são enviados para lá.',
      'Sirius Black ficou preso nesse lugar durante doze anos.',
      'O nome da prisão começa e termina com vogal e tem sete letras.'
    ],
    medio: [
      'Sirius Black tornou-se famoso por ser o primeiro bruxo a escapar de lá sem ajuda externa.',
      'Muitos prisioneiros perdem a sanidade e a vontade de viver devido à presença constante dos guardas.',
      'Rúbeo Hagrid foi enviado brevemente para lá no segundo livro como medida preventiva.',
      'Belatriz Lestrange fugiu dessa prisão durante uma fuga em massa no quinto livro.',
      'Após a derrota de Voldemort, o Ministro Kingsley Shacklebolt removeu os Dementadores da guarda do local.',
      'Nome da fortaleza prisão dos bruxos em Harry Potter.'
    ],
    dificil: [
      'Originalmente, a ilha foi habitada no século XV por um bruxo sombrio chamado Ekrizdis, que atraía marinheiros trouxas.',
      'O local não aparece em nenhum mapa trouxa e é considerado imapeável.',
      'Os prisioneiros vestem uniformes listrados com números de identificação gravados no peito.',
      'Barty Crouch Jr. conseguiu escapar de lá trocando de lugar com sua mãe moribunda usando Poção Polissuco.',
      'O nome do lugar foi inspirado em parte na famosa prisão americana de Alcatraz.',
      'Palavra de sete letras: A-z-k-a-b-a-n.'
    ]
  },
  gringotes: {
    categoria: 'Lugar Fictício',
    facil: [
      'É o único banco do mundo bruxo na saga Harry Potter.',
      'Fica localizado em um imponente edifício de mármore branco no Beco Diagonal.',
      'É administrado e operado inteiramente por duendes.',
      'Para chegar aos cofres subterrâneos, é preciso andar em vagonetes sobre trilhos em alta velocidade.',
      'É onde Harry guarda a fortuna deixada por seus pais.',
      'O nome do banco tem nove letras e começa com G.'
    ],
    medio: [
      'Os cofres mais antigos e profundos do banco são protegidos por feitiços complexos e até por dragões.',
      'Hagrid retirou do cofre 713 um pequeno embrulho que continha a Pedra Filosofal.',
      'Na entrada há um poema gravado alertando sobre o castigo para ladrões gananciosos.',
      'No último livro, Harry, Ron e Hermione invadem o cofre da família Lestrange e fogem montados em um dragão cego.',
      'O duende Grampo trabalha nessa instituição.',
      'Nome do banco dos duendes no Beco Diagonal.'
    ],
    dificil: [
      'Segundo a história mágica, o banco foi fundado por um duende chamado Gringott em 1474.',
      'Os duendes consideram que qualquer objeto fabricado por eles pertence legitimamente ao criador após a morte do comprador.',
      'Nos cofres mais profundos há uma cascata encantada chamada "Queda do Ladrão", que desfaz qualquer disfarce mágico.',
      'Os tesouros do cofre de Belatriz Lestrange possuíam as maldições Geminio e Flagrante para queimar e multiplicar objetos tocados.',
      'A moeda bruxa armazenada lá divide-se em Galeões de ouro, Sicles de prata e Nuques de bronze.',
      'Nome em português do banco bruxo (no original inglês: Gringotts).'
    ]
  },

  // --- PERSONAGENS BÍBLICOS ---
  noe: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um famoso personagem do livro de Gênesis na Bíblia.',
      'Recebeu uma ordem de Deus para construir uma enorme embarcação de madeira.',
      'Colocou dentro da arca sua família e casais de todas as espécies de animais.',
      'Sobreviveu a um grande dilúvio que inundou toda a Terra.',
      'Ao final das chuvas, soltou uma pomba que voltou com um ramo de oliveira no bico.',
      'Seu nome tem apenas três letras.'
    ],
    medio: [
      'Construiu uma arca de madeira de gofer medindo trezentos côvados de comprimento.',
      'Choveu sobre a Terra durante quarenta dias e quarenta noites enquanto ele estava na embarcação.',
      'Seus três filhos chamavam-se Sem, Cam e Jafé.',
      'Após sair da arca, Deus colocou o arco-íris nas nuvens como sinal de sua aliança com a humanidade.',
      'A arca repousou sobre os montes de Ararate quando as águas começaram a baixar.',
      'Patriarca bíblico que salvou os animais do dilúvio.'
    ],
    dificil: [
      'Era filho de Lameque e neto de Matusalém, tendo vivido um total de 950 anos.',
      'A Bíblia o descreve como um homem justo e íntegro entre os seus contemporâneos, que andava com Deus.',
      'Antes de enviar a pomba pela primeira vez, soltou um corvo pela janela da arca.',
      'Após o dilúvio, tornou-se agricultor e plantou a primeira vinha mencionada nas Escrituras.',
      'Seu nome em hebraico está relacionado à ideia de "descanso" ou "consolação".',
      'Nome de três letras do construtor da arca.'
    ]
  },
  moises: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É o grande profeta que libertou o povo hebreu da escravidão no Egito.',
      'Quando bebê, foi colocado por sua mãe em um cesto no rio Nilo e encontrado pela filha do Faraó.',
      'Conduziu os israelitas pelo deserto durante quarenta anos rumo à Terra Prometida.',
      'Estendeu seu cajado e abriu as águas do Mar Vermelho para o povo passar a pé enxuto.',
      'Subiu ao Monte Sinai e recebeu de Deus as tábuas dos Dez Mandamentos.',
      'Seu nome tem seis letras e começa com M.'
    ],
    medio: [
      'Ouviu Deus falar com ele no meio de uma sarça ardente que pegava fogo sem se queimar.',
      'Contou com a ajuda de seu irmão Arão para anunciar as dez pragas ao Faraó do Egito.',
      'Foi o responsável por instituir a primeira Páscoa judaica antes da saída do Egito.',
      'Quebrou as primeiras tábuas da Lei ao descer do monte e ver o povo adorando um bezerro de ouro.',
      'Avistou a Terra Prometida do alto do Monte Nebo, mas não chegou a entrar nela.',
      'Líder bíblico que abriu o Mar Vermelho.'
    ],
    dificil: [
      'Pertencia à tribo de Levi, filho de Anrão e Joquebede, e irmão de Miriã e Arão.',
      'Fugiu do Egito para a terra de Midiã após matar um egípcio que agredia um hebreu, casando-se com Zípora.',
      'Tradicionalmente é considerado o autor dos cinco primeiros livros da Bíblia (o Pentateuco ou Torá).',
      'Seu nome significa "tirado das águas", dado pela princesa egípcia que o adotou.',
      'Durante a travessia do deserto, feriu uma rocha em Meribá para fazer jorrar água para o povo.',
      'Nome de seis letras do profeta dos Dez Mandamentos.'
    ]
  },
  davi: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um dos reis mais famosos da história de Israel na Bíblia.',
      'Quando ainda era um jovem pastor de ovelhas, venceu um guerreiro gigante.',
      'Derrotou o gigante filisteu Golias usando apenas uma funda e uma pedra.',
      'Tocava harpa muito bem para acalmar o rei Saul.',
      'Tornou-se o segundo rei de Israel e pai do sábio rei Salomão.',
      'Seu nome tem quatro letras e começa com D.'
    ],
    medio: [
      'Nasceu em Belém, sendo o filho mais novo entre os oito filhos de Jessé.',
      'Foi ungido em segredo pelo profeta Samuel ainda na juventude.',
      'Teve uma amizade profunda e leal com Jônatas, filho do rei Saul.',
      'Conquistou a cidade de Jerusalém e levou para lá a Arca da Aliança.',
      'Compôs grande parte dos Salmos da Bíblia.',
      'Rei de Israel que derrotou Golias na juventude.'
    ],
    dificil: [
      'É descrito nas Escrituras como "um homem segundo o coração de Deus".',
      'Antes de assumir o trono sobre todo Israel, reinou por sete anos e meio na cidade de Hebrom.',
      'Cometeu um grave pecado envolvendo Bate-Seba e seu marido Urias, sendo confrontado pelo profeta Natã.',
      'Segundo os Evangelhos, Jesus Cristo nasceu de sua linhagem real.',
      'Recusou-se a tirar a vida de Saul em duas ocasiões mesmo sendo perseguido por ele no deserto.',
      'Nome de quatro letras do rei salmista de Israel.'
    ]
  },
  daniel: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um profeta bíblico famoso por sua fidelidade a Deus na Babilônia.',
      'Por continuar orando três vezes ao dia mesmo quando uma lei proibiu, foi castigado.',
      'Foi lançado dentro de uma cova cheia de leões famintos.',
      'Sobreviveu sem nenhum arranhão porque Deus enviou um anjo para fechar a boca das feras.',
      'Também ficou conhecido por interpretar sonhos misteriosos de reis.',
      'Seu nome tem seis letras e começa com D.'
    ],
    medio: [
      'Foi levado cativo de Jerusalém para a Babilônia ainda jovem pelo rei Nabucodonosor.',
      'Recusou comer as iguarias do rei para não se contaminar, pedindo apenas legumes e água.',
      'Interpretou o sonho da grande estátua feita de ouro, prata, bronze, ferro e barro.',
      'Decifrou a escrita misteriosa feita por uma mão na parede durante o banquete de Belsazar ("Mene, Mene, Tequel, Parsim").',
      'Seus três amigos hebreus eram Sadraque, Mesaque e Abednego.',
      'Profeta bíblico lançado na cova dos leões.'
    ],
    dificil: [
      'Na corte babilônica, recebeu o nome caldeu de Beltessazar.',
      'Serviu como alto governador sob vários monarcas, incluindo Nabucodonosor, Dario e Ciro.',
      'Seu livro profético contém visões apocalípticas sobre quatro animais e a profecia das setenta semanas.',
      'O rei Dario passou a noite em jejum e sem dormir preocupado com o destino dele na cova.',
      'Seu nome em hebraico significa "Deus é o meu juiz".',
      'Nome de seis letras do profeta que sobreviveu aos leões.'
    ]
  },
  jonas: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um profeta bíblico conhecido por tentar fugir de uma missão dada por Deus.',
      'Em vez de obedecer, embarcou em um navio indo para a direção oposta.',
      'Durante uma grande tempestade, foi lançado ao mar pelos marinheiros.',
      'Foi engolido por um grande peixe no fundo do oceano.',
      'Ficou três dias e três noites dentro da barriga do peixe até ser vomitado na praia.',
      'Seu nome tem cinco letras e começa com J.'
    ],
    medio: [
      'Deus havia ordenado que ele fosse pregar na grande e perversa cidade de Nínive.',
      'Tentou fugir embarcando em um navio no porto de Jope com destino a Társis.',
      'Dentro do ventre do grande peixe, fez uma oração de arrependimento e agradecimento.',
      'Após pregar em Nínive, o rei e todo o povo jejuaram e se arrependeram, e Deus poupou a cidade.',
      'Ficou aborrecido com a misericórdia de Deus e sentou-se sob uma planta que secou no dia seguinte.',
      'Profeta bíblico engolido por um grande peixe.'
    ],
    dificil: [
      'Era filho de Amitai e natural de Gate-Hefer, no reino norte de Israel.',
      'No Novo Testamento, Jesus cita os três dias dele no ventre do peixe como um sinal de sua própria ressurreição.',
      'Enquanto a tempestade quase afundava o navio, ele dormia profundamente no porão da embarcação.',
      'Nínive era a capital do poderoso Império Assírio, inimigo histórico de Israel.',
      'Seu nome em hebraico significa literalmente "pomba".',
      'Nome de cinco letras do profeta que pregou em Nínive.'
    ]
  },
  ester: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É uma famosa rainha da Bíblia que salvou o povo judeu da destruição.',
      'Era uma jovem judia órfã que foi criada por seu primo Mardoqueu.',
      'Foi escolhida para se tornar rainha do poderoso Império Persa, casando-se com o rei Assuero.',
      'Arriscou a própria vida ao entrar na sala do trono sem ser chamada para falar com o rei.',
      'Desmascarou os planos cruéis do perverso oficial Hamã.',
      'Seu nome tem cinco letras e dá nome a um livro do Antigo Testamento.'
    ],
    medio: [
      'Seu nome hebraico original era Hadassa, que significa "murta".',
      'Escondeu sua origem judaica no palácio de Susã a conselho de Mardoqueu até o momento certo.',
      'Pediu que todos os judeus fizessem um jejum de três dias antes de se apresentar ao monarca.',
      'Hamã acabou sendo enforcado na mesma forca que havia preparado para Mardoqueu.',
      'A festa judaica de Purim celebra até hoje o livramento ocorrido em sua história.',
      'Rainha bíblica que intercedeu pelo seu povo diante do rei Assuero.'
    ],
    dificil: [
      'O livro que leva seu nome é uma das duas únicas obras da Bíblia onde o nome de Deus não aparece explicitamente citado.',
      'Substituiu a rainha Vasti após esta se recusar a comparecer a um banquete real.',
      'O rei Assuero (identificado historicamente como Xerxes I) estendeu seu cetro de ouro para poupar a vida dela.',
      'Convidou o rei e Hamã para dois banquetes consecutivos antes de revelar a conspiração.',
      'Seu nome persa está associado à palavra "estrela".',
      'Nome de cinco letras da rainha judia da Pérsia.'
    ]
  },
  zaqueu: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um personagem do Novo Testamento conhecido por sua baixa estatura.',
      'Trabalhava como chefe dos cobradores de impostos na cidade de Jericó.',
      'Como não conseguia ver Jesus por causa da multidão, correu à frente e subiu em uma árvore.',
      'Jesus olhou para cima, chamou-o pelo nome e disse que precisava se hospedar em sua casa.',
      'Arrependido de seus erros, prometeu devolver quatro vezes mais a quem tivesse enganado.',
      'Seu nome tem seis letras e começa com Z.'
    ],
    medio: [
      'Subiu em uma figueira-brava chamada sicômoro para contemplar a passagem de Jesus.',
      'Era muito rico, mas desprezado pelos judeus por recolher tributos para o Império Romano.',
      'Prometeu dar metade de todos os seus bens aos pobres durante o encontro com Cristo.',
      'Após sua conversão, Jesus declarou: "Hoje houve salvação nesta casa".',
      'Seu relato aparece exclusivamente no Evangelho de Lucas, capítulo 19.',
      'Cobrador de impostos de Jericó que subiu em uma árvore para ver Jesus.'
    ],
    dificil: [
      'Seu nome deriva do hebraico "Zakkai", que ironicamente significa "puro" ou "inocente".',
      'A multidão murmurava criticando Jesus por ter entrado na casa de um "homem pecador".',
      'A restituição quádrupla prometida por ele superava até mesmo a exigência da Lei de Moisés para furtos.',
      'Jericó era um importante centro comercial e alfandegário na região do vale do Jordão.',
      'Sua história ilustra o ensinamento de que o Filho do Homem veio buscar e salvar o que se havia perdido.',
      'Nome de seis letras: Z-a-q-u-e-u.'
    ]
  },
  pedro: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um dos doze apóstolos mais conhecidos e próximos de Jesus.',
      'Antes de seguir Jesus, trabalhava como pescador no Mar da Galileia.',
      'Andou sobre as águas em direção a Jesus durante uma tempestade, mas começou a afundar ao sentir medo.',
      'Negou conhecer Jesus três vezes antes que o galo cantasse na noite da prisão.',
      'Tornou-se um dos maiores líderes da igreja cristã primitiva.',
      'Seu nome tem cinco letras e significa "pedra" ou "rocha".'
    ],
    medio: [
      'Seu nome original era Simão, filho de Jonas, e seu irmão também era apóstolo (André).',
      'Jesus lhe disse: "Tu és Pedro, e sobre esta pedra edificarei a minha igreja".',
      'No jardim do Getsêmani, puxou uma espada e cortou a orelha direita de um servo chamado Malco.',
      'Pregou um poderoso sermão no dia de Pentecostes, quando quase três mil pessoas se converteram.',
      'Recebeu as "chaves do Reino dos Céus" segundo o Evangelho de Mateus.',
      'Apóstolo pescador que negou Jesus três vezes antes do galo cantar.'
    ],
    dificil: [
      'Era natural de Betsaida e morava em Cafarnaum, onde Jesus curou sua sogra que estava com febre.',
      'Teve uma visão em Jope com um lençol descendo do céu, abrindo a pregação do evangelho aos gentios (Cornélio).',
      'Foi libertado milagrosamente da prisão por um anjo enquanto a igreja orava por ele em Jerusalém.',
      'Escreveu duas epístolas gerais que fazem parte do Novo Testamento.',
      'Segundo a tradição histórica cristã, foi martirizado em Roma crucificado de cabeça para baixo.',
      'Nome de cinco letras do líder dos doze apóstolos.'
    ]
  },
  paulo: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É o maior missionário e escritor de cartas do Novo Testamento.',
      'Antes de se converter, chamava-se Saulo e perseguia violentamente os cristãos.',
      'Teve um encontro com Jesus em uma luz brilhante na estrada para Damasco e ficou cego por três dias.',
      'Após recuperar a visão, passou a viajar por todo o Império Romano pregando o cristianismo.',
      'Escreveu cartas famosas como Romanos, Coríntios, Gálatas e Efésios.',
      'Seu nome tem cinco letras e começa com P.'
    ],
    medio: [
      'Nasceu na cidade de Tarso, na Cilícia, e possuía cidadania romana de nascimento.',
      'Era um fariseu muito culto, instruído aos pés do renomado mestre Gamaliel.',
      'Trabalhava fazendo tendas para sustentar a si mesmo durante suas viagens missionárias.',
      'Esteve presente e consentiu no apedrejamento de Estêvão, o primeiro mártir cristão.',
      'Sobreviveu a prisões, açoites, naufrágios e à picada de uma víbora na ilha de Malta.',
      'Apóstolo dos gentios convertido na estrada para Damasco.'
    ],
    dificil: [
      'Realizou três grandes viagens missionárias pelo Mediterrâneo antes de ser levado preso para Roma.',
      'Pregou no Areópago de Atenas falando aos filósofos gregos sobre o altar "Ao Deus Desconhecido".',
      'É tradicionalmente atribuída a ele a autoria de 13 epístolas do Novo Testamento.',
      'Mencionou em suas cartas ter um "espinho na carne" pelo qual orou três vezes.',
      'Seu nome romano significa "pequeno".',
      'Nome de cinco letras do antigo Saulo de Tarso.'
    ]
  },
  rute: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É uma personagem bíblica famosa por sua lealdade e amor à sua sogra.',
      'Era uma mulher estrangeira da terra de Moabe que ficou viúva.',
      'Recusou-se a abandonar sua sogra Noemi, dizendo: "O teu povo é o meu povo, e o teu Deus é o meu Deus".',
      'Foi morar em Belém e trabalhou colhendo espigas de cevada nos campos.',
      'Casou-se com o bondoso Boaz e tornou-se bisavó do rei Davi.',
      'Seu nome tem quatro letras e dá título a um livro do Antigo Testamento.'
    ],
    medio: [
      'Sua história se passa na época turbulenta dos Juízes de Israel, durante um período de fome.',
      'Noemi havia perdido seu marido Elimeleque e seus dois filhos, Malom e Quiliom, em Moabe.',
      'Boaz era um parente próximo de Elimeleque que atuou como "resgatador" da família.',
      'Deu à luz um filho chamado Obede, que foi o pai de Jessé e avô de Davi.',
      'Faz parte da genealogia de Jesus Cristo registrada no Evangelho de Mateus.',
      'Mulher moabita que se casou com Boaz em Belém.'
    ],
    dificil: [
      'Seu livro é uma das duas únicas obras da Bíblia que carregam o nome de uma mulher (junto com Ester).',
      'Na tradição judaica, seu livro é lido publicamente durante a festa de Shavuot (Pentecostes).',
      'A outra nora de Noemi, chamada Orfa, decidiu retornar para sua família em Moabe.',
      'Boaz realizou a cerimônia legal do resgate na porta da cidade de Belém envolvendo a troca de uma sandália.',
      'Seu nome em hebraico significa "amiga" ou "companheira".',
      'Nome de quatro letras da nora fiel de Noemi.'
    ]
  },
  samuel: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um grande profeta e o último juiz de Israel na Bíblia.',
      'Quando ainda era um menino servindo no templo, ouviu a voz de Deus chamando-o durante a noite.',
      'Instruído pelo sacerdote Eli, respondeu: "Fala, Senhor, porque o teu servo ouve".',
      'Foi o profeta responsável por ungir os dois primeiros reis de Israel: Saul e Davi.',
      'Sua mãe, Ana, orou muito por um filho e o dedicou a Deus desde bebê.',
      'Seu nome tem seis letras e dá nome a dois livros da Bíblia.'
    ],
    medio: [
      'Cresceu no tabernáculo na cidade de Siló sob os cuidados do sumo sacerdote Eli.',
      'Anunciou o juízo de Deus sobre a casa de Eli devido à corrupção de seus filhos Hofni e Fineias.',
      'Após uma vitória contra os filisteus, ergueu uma pedra chamada Ebenézer ("Até aqui nos ajudou o Senhor").',
      'Advertiu o povo de Israel sobre os problemas de terem um rei humano, mas obedeceu à ordem divina de ungir Saul.',
      'Mais tarde, foi enviado à casa de Jessé em Belém para ungir o jovem pastor Davi.',
      'Profeta bíblico que ungiu Saul e Davi como reis.'
    ],
    dificil: [
      'Sua mãe Ana entoou um cântico profético de louvor que serviu de inspiração para o Magnificat de Maria.',
      'Pertencia à tribo de Efraim (com ascendência levítica), filho de Elcana, natural de Ramataim-Zofim.',
      'Julgava Israel fazendo um circuito anual entre Betel, Gilgal, Mispa e sua cidade natal Ramá.',
      'Seu nome em hebraico significa "ouvido por Deus" ou "seu nome é Deus".',
      'Marcou a transição histórica do período tribal dos Juízes para a monarquia unida de Israel.',
      'Nome de seis letras: S-a-m-u-e-l.'
    ]
  },
  gideao: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um famoso juiz e líder militar do Antigo Testamento.',
      'Liderou um pequeno exército de apenas 300 homens para vencer um exército gigantesco.',
      'Seus soldados não usaram espadas no ataque inicial, mas sim trombetas, cântaros de barro e tochas.',
      'Antes de ir para a guerra, pediu a Deus dois sinais usando um pedaço de lã de ovelha.',
      'Libertou Israel da opressão dos midianitas.',
      'Seu nome tem seis letras e começa com G.'
    ],
    medio: [
      'Quando o anjo do Senhor lhe apareceu, ele estava malhando trigo escondido em um lagar de uvas.',
      'O anjo o saudou dizendo: "O Senhor é contigo, homem valente".',
      'Deus reduziu seu exército inicial de 32 mil homens para 300 observando como bebiam água no rio.',
      'Os únicos escolhidos foram os 300 que lamberam a água levando-a à boca com a mão, mantendo-se alertas.',
      'Recusou tornar-se rei de Israel após a vitória, dizendo que apenas o Senhor governaria o povo.',
      'Juiz de Israel famoso pela batalha dos 300 homens com tochas e cântaros.'
    ],
    dificil: [
      'Recebeu o apelido de "Jerubaal" após derrubar o altar de Baal e o poste-ídolo de seu próprio pai Joás.',
      'Pertencia à tribo de Manassés, ao clã de Abiezer, considerado por ele mesmo o menor de sua tribo.',
      'No primeiro sinal pedido a Deus, apenas a lã ficou molhada de orvalho enquanto o chão permaneceu seco.',
      'Com os 300 homens, cercou o acampamento midianita à meia-noite gritando: "A espada do Senhor e de Gideão!".',
      'Sua história encontra-se nos capítulos 6 a 8 do livro de Juízes.',
      'Nome de seis letras do líder dos 300 guerreiros bíblicos.'
    ]
  },
  abigail: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É uma mulher bíblica lembrada por sua grande sabedoria, inteligência e beleza.',
      'Era casada com Nabal, um homem muito rico, porém rude e insensato.',
      'Quando seu marido insultou os mensageiros de Davi, ela agiu rápido para evitar uma tragédia.',
      'Preparou um grande carregamento de alimentos e foi ao encontro de Davi pedir paz.',
      'Sua atitude sensata impediu Davi de derramar sangue inocente.',
      'Após a morte de seu marido, tornou-se esposa do futuro rei Davi.'
    ],
    medio: [
      'Sua história é narrada no capítulo 25 do primeiro livro de Samuel.',
      'Levou pães, odres de vinho, ovelhas preparadas, trigo torrado, passas e bolos de figo para os homens de Davi.',
      'Davi elogiou seu bom senso e agradeceu a Deus por tê-la enviado ao seu encontro.',
      'Ao saber do risco que havia corrido, Nabal sofreu um mal súbito e morreu dez dias depois.',
      'Teve um filho com Davi chamado Quileabe (também chamado Daniel).',
      'Mulher sábia que apaziguou a fúria de Davi contra Nabal.'
    ],
    dificil: [
      'O nome de seu primeiro marido, Nabal, significa literalmente "louco" ou "insensato" em hebraico.',
      'Seu próprio nome em hebraico significa "alegria do pai" ou "meu pai é alegria".',
      'Morava na região de Maom e possuía grandes rebanhos de ovelhas e cabras no Carmelo de Judá.',
      'É considerada na tradição bíblica uma das grandes mulheres pacificadoras e estrategistas do Antigo Testamento.',
      'Acompanhou Davi durante seu exílio em Ziclag antes de ele ser coroado rei em Hebrom.',
      'Nome feminino de sete letras que começa e termina com consoante (A-b-i-g-a-i-l).'
    ]
  },
  ezequiel: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um dos grandes profetas do Antigo Testamento.',
      'Profetizou durante o período em que o povo judeu estava exilado na Babilônia.',
      'É muito famoso pela visão de um vale cheio de ossos secos que ganham carne e voltam à vida.',
      'Teve visões misteriosas de anjos com quatro rostos e rodas cheias de olhos.',
      'Costumava fazer encenações simbólicas para alertar o povo sobre Jerusalém.',
      'Seu nome tem oito letras e começa com E.'
    ],
    medio: [
      'Era sacerdote, filho de Buzi, e foi levado cativo pelo rei Nabucodonosor junto com o rei Joaquim.',
      'Recebeu seu chamado profético às margens do rio Quebar, na Babilônia.',
      'Em uma de suas visões, engoliu um rolo de livro escrito com lamentações que tinha gosto doce como mel.',
      'Sua profecia dos ossos secos simbolizava a restauração espiritual e nacional de Israel.',
      'Anunciou que Deus daria ao povo um coração novo e um espírito novo, tirando o coração de pedra.',
      'Profeta do exílio babilônico conhecido pelo Vale de Ossos Secos.'
    ],
    dificil: [
      'Ficou mudo por longos períodos por ordem divina, falando apenas quando recebia uma palavra específica do Senhor.',
      'Ficou viúvo no exato dia em que começou o cerco final de Nabucodonosor contra Jerusalém.',
      'Os últimos nove capítulos de seu livro descrevem com medidas exatas a visão de um novo Templo glorioso.',
      'Seu nome em hebraico significa "Deus fortalece".',
      'Foi contemporâneo dos profetas Jeremias e Daniel.',
      'Nome de oito letras: E-z-e-q-u-i-e-l.'
    ]
  },
  isaias: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um dos maiores profetas do Antigo Testamento.',
      'Escreveu um dos livros mais longos e citados da Bíblia, com 66 capítulos.',
      'Anunciou com séculos de antecedência o nascimento e o sofrimento do Messias.',
      'Teve uma visão gloriosa do trono de Deus cercado por serafins clamando "Santo, Santo, Santo".',
      'Quando Deus perguntou "A quem enviarei?", ele respondeu: "Eis-me aqui, envia-me a mim".',
      'Seu nome tem seis letras e começa com I.'
    ],
    medio: [
      'Profetizou no reino de Judá durante o reinado de quatro reis: Uzias, Jotão, Acaz e Ezequias.',
      'Durante sua visão no templo, um serafim tocou seus lábios com uma brasa viva tirada do altar.',
      'Escreveu a famosa profecia: "Porque um menino nos nasceu, um filho se nos deu... Maravilhoso Conselheiro".',
      'O capítulo 53 de seu livro descreve detalhadamente o sofrimento do "Servo Sofredor".',
      'Aconselhou o rei Ezequias quando Jerusalém foi cercada pelo exército assírio de Senaqueribe.',
      'Profeta messiânico que escreveu "Eis-me aqui, envia-me a mim".'
    ],
    dificil: [
      'Era filho de Amoz e exercia seu ministério principalmente na corte real de Jerusalém.',
      'Deu nomes simbólicos aos seus dois filhos: Sear-Jasube ("Um remanescente voltará") e Maer-Salal-Hás-Baz.',
      'O livro que leva seu nome é frequentemente chamado de "O Quinto Evangelho" devido às suas profecias sobre Cristo.',
      'Seu nome em hebraico significa "O Senhor é salvação".',
      'Um rolo completo de seu livro encontrado em Qumran é um dos manuscritos mais famosos do Mar Morto.',
      'Nome de seis letras: I-s-a-í-a-s.'
    ]
  },
  salomao: {
    categoria: 'Personagem Bíblico',
    facil: [
      'Foi o rei mais rico e sábio da história de Israel na Bíblia.',
      'Era filho do rei Davi e de Bate-Seba.',
      'Quando Deus lhe apareceu em sonho oferecendo qualquer pedido, ele pediu sabedoria para governar.',
      'Ficou famoso pelo julgamento de duas mulheres que disputavam um bebê, propondo dividi-lo ao meio.',
      'Construiu o primeiro grande e luxuoso Templo de Jerusalém.',
      'Seu nome tem sete letras e começa com S.'
    ],
    medio: [
      'Recebeu a visita da rainha de Sabá, que veio de longe testar sua sabedoria com enigmas difíceis.',
      'Escreveu milhares de provérbios e cânticos, sendo o principal autor dos livros de Provérbios e Eclesiastes.',
      'Seu reinado marcou o auge da paz, do comércio e da prosperidade de Israel.',
      'Na velhice, seu coração desviou-se de Deus por influência de suas muitas esposas estrangeiras.',
      'Após sua morte, o reino de Israel dividiu-se em dois: Israel (Norte) e Judá (Sul).',
      'Rei sábio filho de Davi que construiu o Templo de Jerusalém.'
    ],
    dificil: [
      'Ao nascer, recebeu do profeta Natã o nome de Jedidias, que significa "amado do Senhor".',
      'Contou com a ajuda do rei Hirão de Tiro, que enviou madeira de cedro do Líbano para a construção do Templo.',
      'É também o autor tradicional do livro poético Cântico dos Cânticos.',
      'Seu nome deriva da palavra hebraica "Shalom", que significa paz.',
      'Seu trono era feito de marfim revestido de ouro puro com doze leões nos degraus.',
      'Nome de sete letras: S-a-l-o-m-ã-o.'
    ]
  },
  lazaro: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um amigo próximo de Jesus mencionado no Novo Testamento.',
      'Morava no povoado de Betânia junto com suas duas irmãs, Marta e Maria.',
      'Ficou muito doente e morreu antes que Jesus chegasse à sua cidade.',
      'Já estava sepultado em um túmulo havia quatro dias.',
      'Jesus chorou diante de seu sepulcro e gritou: "Vem para fora!".',
      'Foi ressuscitado por Jesus, saindo do túmulo ainda enrolado em faixas.'
    ],
    medio: [
      'Este milagre está registrado no capítulo 11 do Evangelho de João e foi um dos maiores sinais de Jesus.',
      'Ao chegarem ao túmulo, Marta avisou que já havia mau cheiro por causa dos quatro dias.',
      'Após voltar à vida, muitos judeus passaram a crer em Jesus, fazendo os sacerdotes planejarem matá-lo também.',
      'Sua irmã Maria foi quem ungiu os pés de Jesus com perfume caro de nardo puro.',
      'Betânia ficava a cerca de três quilômetros de Jerusalém, perto do Monte das Oliveiras.',
      'Amigo de Jesus em Betânia ressuscitado após quatro dias morto.'
    ],
    dificil: [
      'Seu nome é a forma grega do nome hebraico Eleazar, que significa "Deus ajudou".',
      'Antes de ir para Betânia, Jesus disse aos discípulos: "Nosso amigo adormeceu, mas vou para despertá-lo".',
      'O versículo mais curto da Bíblia ("Jesus chorou") ocorre justamente durante este episódio.',
      'Não deve ser confundido com o mendigo homônimo da parábola do Rico e Lázaro contada por Jesus.',
      'Tornou-se símbolo bíblico de ressurreição e vida após a morte.',
      'Nome de seis letras: L-á-z-a-r-o.'
    ]
  },
  maria: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É a mulher escolhida por Deus para ser a mãe de Jesus.',
      'Era uma jovem humilde que vivia na cidade de Nazaré, na Galileia.',
      'Recebeu a visita do anjo Gabriel anunciando que ela daria à luz o Filho de Deus.',
      'Estava noiva de um carpinteiro chamado José.',
      'Deu à luz o menino Jesus em uma estrebaria em Belém, colocando-o em uma manjedoura.',
      'Seu nome tem cinco letras e começa com M.'
    ],
    medio: [
      'Concebeu Jesus milagrosamente pelo poder do Espírito Santo.',
      'Ao visitar sua prima Isabel (mãe de João Batista), entoou um cântico de louvor conhecido como Magnificat.',
      'Esteve presente no primeiro milagre de Jesus, nas bodas de Caná, dizendo aos serventes: "Fazei tudo quanto ele vos disser".',
      'Permaneceu fielmente ao pé da cruz durante a crucificação de Jesus em Jerusalém.',
      'Na cruz, Jesus confiou os cuidados dela ao apóstolo João.',
      'Mãe de Jesus de Nazaré.'
    ],
    dificil: [
      'Após o nascimento de Jesus, fugiu com José para o Egito para escapar da perseguição do rei Herodes.',
      'Quando Jesus tinha doze anos, procurou-o angustiada por três dias até encontrá-lo no Templo entre os doutores da Lei.',
      'Aparece pela última vez no livro de Atos dos Apóstolos orando no cenáculo com os discípulos antes do Pentecostes.',
      'Seu nome corresponde ao hebraico "Miriã".',
      'O idoso Simeão profetizou no templo que uma espada transpassaria a sua própria alma.',
      'Nome feminino de cinco letras: M-a-r-i-a.'
    ]
  },
  judas: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É o apóstolo que traiu Jesus entregando-o aos líderes religiosos.',
      'Aceitou entregar Jesus em troca de trinta moedas de prata.',
      'Identificou Jesus para os soldados no jardim do Getsêmani com um beijo.',
      'Era um dos doze discípulos escolhidos originalmente por Cristo.',
      'Depois que Jesus foi condenado, arrependeu-se, devolveu o dinheiro e tirou a própria vida.',
      'Seu sobrenome bíblico era Iscariotes.'
    ],
    medio: [
      'Atuava como tesoureiro do grupo dos doze apóstolos, cuidando da bolsa de dinheiro.',
      'Reclamou quando Maria de Betânia derramou perfume caro nos pés de Jesus, alegando que deveria ser vendido.',
      'Durante a Última Ceia, Jesus indicou quem o trairia dando-lhe um pedaço de pão molhado.',
      'As trinta moedas devolvidas por ele no templo foram usadas para comprar o Campo do Oleiro.',
      'Seu lugar entre os doze apóstolos foi posteriormente ocupado por Matias.',
      'Apóstolo traidor que entregou Jesus por trinta moedas de prata.'
    ],
    dificil: [
      'Era filho de Simão Iscariotes; o termo "Iscariotes" provavelmente significa "homem de Queriote", uma cidade da Judeia.',
      'Foi o único dos doze apóstolos que não era natural da região da Galileia.',
      'O valor de trinta moedas de prata correspondia na Lei antiga ao preço de indenização de um escravo.',
      'Tornou-se historicamente sinônimo universal de traição.',
      'O campo comprado com o dinheiro de sua traição ficou conhecido como Aceldama ("Campo de Sangue").',
      'Nome de cinco letras do discípulo que beijou Jesus no Getsêmani.'
    ]
  },
  rebeca: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É uma importante matriarca do Antigo Testamento, esposa de Isaque.',
      'Foi encontrada junto a um poço após oferecer água ao servo de Abraão e a todos os seus camelos.',
      'Deu à luz os filhos gêmeos Esaú e Jacó.',
      'Preferia seu filho mais novo, Jacó, enquanto Isaque preferia Esaú.',
      'Ajudou Jacó a se disfarçar para receber a bênção de primogênito de seu pai já cego.',
      'Seu nome tem seis letras e começa com R.'
    ],
    medio: [
      'Era neta de Naor (irmão de Abraão) e irmã de Labão, natural da região de Harã.',
      'Antes de seus gêmeos nascerem, sentia-os lutando dentro de seu ventre e consultou a Deus.',
      'Deus lhe revelou que duas nações estavam em seu ventre e que o mais velho serviria ao mais novo.',
      'Cobriu as mãos e o pescoço de Jacó com pele de cabrito para enganar o tato de Isaque.',
      'Foi sepultada na caverna de Macpela, em Hebrom, ao lado de Abraão, Sara e Isaque.',
      'Esposa de Isaque e mãe dos gêmeos Esaú e Jacó.'
    ],
    dificil: [
      'O servo Eliezer orou pedindo a Deus que a moça que lhe desse água e também desse de beber aos camelos fosse a escolhida.',
      'Deu de beber a dez camelos sedentos, o que exigiu tirar centenas de litros de água do poço.',
      'Enviou Jacó para a casa de seu irmão Labão em Padã-Arã para protegê-lo da vingança de Esaú.',
      'Seu nome em hebraico significa "cativante" ou "laço que une".',
      'Sua história é narrada nos capítulos 24 a 27 do livro de Gênesis.',
      'Nome de seis letras: R-e-b-e-c-a.'
    ]
  },
  matusalem: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É o homem mais velho mencionado em toda a Bíblia.',
      'Segundo o livro de Gênesis, ele viveu incríveis 969 anos.',
      'Era o avô de Noé, o construtor da arca.',
      'Seu nome virou uma expressão popular para algo ou alguém muito antigo.',
      'Viveu antes do grande dilúvio.',
      'Seu nome tem nove letras e começa com M.'
    ],
    medio: [
      'Era filho de Enoque, o homem que andou com Deus e foi levado sem experimentar a morte.',
      'Seu filho chamava-se Lameque, que por sua vez foi o pai de Noé.',
      'Pertence à oitava geração descendente de Adão através de Sete.',
      'Pela cronologia bíblica, ele morreu no exato ano em que começou o dilúvio.',
      'Aparece na genealogia de Jesus no Evangelho de Lucas.',
      'Patriarca antediluviano que atingiu 969 anos de idade.'
    ],
    dificil: [
      'Seu pai Enoque tinha 65 anos quando o gerou, e depois andou com Deus por mais trezentos anos.',
      'Uma interpretação tradicional de seu nome hebraico significa "quando ele morrer, virá" (referindo-se ao dilúvio).',
      'Superou em sete anos a longevidade de Jarede, o segundo homem mais longevo da Bíblia (962 anos).',
      'Sua história resume-se a poucos versículos em Gênesis capítulo 5.',
      'Costuma ser citado na expressão popular "mais velho que...".',
      'Nome de nove letras: M-a-t-u-s-a-l-é-m.'
    ]
  },
  jeremias: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um dos principais profetas do Antigo Testamento.',
      'É conhecido como o "profeta chorão" por lamentar profundamente a destruição de Jerusalém.',
      'Quando Deus o chamou para ser profeta, ele disse: "Ah, Senhor Deus! Eis que não sei falar; porque ainda sou um menino".',
      'Sofreu muita perseguição por avisar que a cidade seria conquistada pela Babilônia.',
      'Chegou a ser jogado dentro de um poço profundo cheio de lama.',
      'Seu nome tem oito letras e começa com J.'
    ],
    medio: [
      'Exerceu seu ministério durante os últimos anos do reino de Judá até a queda de Jerusalém em 586 a.C.',
      'Além do livro profético que leva seu nome, é considerado o autor do livro de Lamentações.',
      'Visitou a casa de um oleiro para ilustrar como Deus pode moldar novamente uma nação.',
      'Teve um fiel escriba e secretário chamado Baruque, que escrevia suas profecias em rolos.',
      'Profetizou que o cativeiro do povo judeu na Babilônia duraria exatamente setenta anos.',
      'Profeta de Judá conhecido pelas lamentações sobre Jerusalém.'
    ],
    dificil: [
      'Era filho do sacerdote Hilquias e natural da aldeia sacerdotal de Anatote, na terra de Benjamim.',
      'Foi resgatado da cisterna de lama por um oficial etíope do palácio chamado Ebede-Meleque.',
      'Anunciou a promessa de uma "Nova Aliança" escrita no coração e na mente do povo.',
      'Após a destruição do Templo, foi levado contra a vontade para o Egito por judeus fugitivos.',
      'Recebeu ordem de Deus para não se casar nem ter filhos como sinal dos tempos difíceis que viriam.',
      'Nome de oito letras: J-e-r-e-m-i-a-s.'
    ]
  },
  eli: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um sacerdote e juiz de Israel no início do livro de 1 Samuel.',
      'Foi o responsável por criar e ensinar o menino Samuel no templo.',
      'Quando viu Ana orando em silêncio mexendo apenas os lábios, pensou que ela estivesse embriagada.',
      'Orientou Samuel a responder quando ouvisse a voz de Deus durante a noite.',
      'Tinha dois filhos desobedientes chamados Hofni e Fineias.',
      'Seu nome é muito curto, tendo apenas três letras.'
    ],
    medio: [
      'Serviu como sumo sacerdote no tabernáculo na cidade de Siló por quarenta anos.',
      'Já estava muito idoso, pesado e quase cego no final de sua vida.',
      'Não repreendeu com firmeza seus filhos, que roubavam as ofertas sagradas e desrespeitavam o templo.',
      'Morreu ao cair para trás de sua cadeira e quebrar o pescoço ao saber que a Arca da Aliança fora capturada pelos filisteus.',
      'Abençoou Ana para que Deus lhe desse mais filhos além de Samuel.',
      'Sumo sacerdote de Siló que criou o jovem Samuel.'
    ],
    dificil: [
      'Pertencia à linhagem sacerdotal de Itamar, o filho mais novo de Arão.',
      'No mesmo dia de sua morte, sua nora deu à luz um menino chamado Icabode ("Foi-se a glória de Israel").',
      'Um homem de Deus anônimo profetizou que todos os homens de sua família morreriam jovens como juízo divino.',
      'Seu nome em hebraico significa "elevado" ou "meu Deus".',
      'Sua história abrange os primeiros quatro capítulos do primeiro livro de Samuel.',
      'Nome de três letras: E-l-i.'
    ]
  },
  sara: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É a esposa do patriarca Abraão na Bíblia.',
      'Não podia ter filhos e já era muito idosa quando recebeu uma promessa de Deus.',
      'Riu descrente ao ouvir que teria um bebê na velhice.',
      'Deu à luz seu filho Isaque quando tinha 90 anos de idade.',
      'Seu nome original era Sarai, mas Deus mudou seu nome como parte da aliança.',
      'Seu nome tem quatro letras e começa com S.'
    ],
    medio: [
      'Acompanhou Abraão desde Ur dos Caldeus e Harã até a terra de Canaã.',
      'O nome de seu filho, Isaque, significa literalmente "riso", lembrando sua reação diante da promessa.',
      'Antes de ter seu próprio filho, deu sua serva egípcia Agar a Abraão, nascendo Ismael.',
      'É mencionada no Novo Testamento como exemplo de fé e mãe espiritual de todos os crentes.',
      'Faleceu aos 127 anos em Quiriate-Arba (Hebrom), sendo sepultada na caverna de Macpela.',
      'Esposa de Abraão e mãe de Isaque na velhice.'
    ],
    dificil: [
      'Seu nome significa "princesa" em hebraico, simbolizando que dela descenderiam reis e nações.',
      'É a única mulher na Bíblia cuja idade exata da morte é registrada nas Escrituras.',
      'Era meio-irmã de Abraão por parte de pai (Terá), antes de a Lei de Moisés proibir tais casamentos.',
      'Três visitantes angelicais apareceram nos carvalhais de Manre anunciando que ela teria um filho no ano seguinte.',
      'Sua beleza chamou a atenção tanto do Faraó do Egito quanto do rei Abimeleque de Gerar.',
      'Nome feminino de quatro letras: S-a-r-a.'
    ]
  },
  susana: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É uma mulher justa e fiel cuja história aparece no livro de Daniel (nas Bíblias católica e ortodoxa).',
      'Foi falsamente acusada de adultério por dois juízes idosos e corruptos.',
      'Os dois homens tentaram chantageá-la após espioná-la enquanto tomava banho em seu jardim.',
      'Ela preferiu arriscar a condenação injusta a pecar contra Deus.',
      'Foi salva na hora da execução pela sabedoria do jovem profeta Daniel.',
      'Seu nome tem seis letras e começa com S.'
    ],
    medio: [
      'Era esposa de Joaquim, um homem muito rico e respeitado entre os judeus exilados na Babilônia.',
      'Daniel provou sua inocência interrogando os dois acusadores separadamente.',
      'Um juiz afirmou que o suposto crime ocorreu debaixo de uma aroeira, enquanto o outro disse ser debaixo de um carvalho.',
      'Desmascarados pela contradição, os dois falsos juízes receberam a pena que haviam planejado para ela.',
      'Sua história é um clássico relato bíblico sobre justiça, integridade e investigação.',
      'Personagem bíblica inocentada pela investigação inteligente de Daniel.'
    ],
    dificil: [
      'Seu relato compõe o capítulo 13 do livro de Daniel na tradução grega da Septuaginta.',
      'Seu nome em hebraico ("Shoshannah") significa literalmente "lírio".',
      'É considerada uma das primeiras histórias da literatura mundial baseadas em interrogatório cruzado de testemunhas.',
      'Era filha de Helquias e havia sido educada rigorosamente na Lei de Moisés.',
      'Tornou-se um tema muito retratado na pintura renascentista e barroca europeia.',
      'Nome feminino de seis letras: S-u-s-a-n-a.'
    ]
  },
  benaia: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um dos guerreiros mais valentes e corajosos do rei Davi na Bíblia.',
      'Ficou famoso por ter entrado em uma cova e matado um leão em um dia de neve.',
      'Também enfrentou um guerreiro egípcio gigante armado apenas com um cajado.',
      'Arrancou a própria lança das mãos do gigante egípcio e o derrotou com ela.',
      'Tornou-se o comandante da guarda pessoal do rei Davi.',
      'Mais tarde, foi nomeado chefe de todo o exército pelo rei Salomão.'
    ],
    medio: [
      'Era filho do sacerdote Joiada e natural da cidade de Cabzeel, no sul de Judá.',
      'Também derrotou dois guerreiros famosos da terra de Moabe.',
      'Comandou os quereteus e peleteus, a tropa de elite de guarda-costas de Davi.',
      'Permaneceu leal a Davi durante a rebelião de Adonias e ajudou a escoltar Salomão para ser ungido rei.',
      'Substituiu Joabe como comandante supremo dos exércitos de Israel.',
      'Valente de Davi que matou um leão em uma cova num dia de neve.'
    ],
    dificil: [
      'Embora não pertencesse ao grupo restrito dos "Três Primeiros" valentes, era mais honrado que os Trinta.',
      'Sua história de bravura é registrada em 2 Samuel capítulo 23 e 1 Crônicas capítulo 11.',
      'Executou as sentenças reais de Salomão contra Adonias, Joabe e Simei no início do novo reinado.',
      'Seu nome em hebraico significa "o Senhor edificou".',
      'Na grafia de algumas traduções antigas aparece também como Benaias.',
      'Nome de seis letras: B-e-n-a-i-a.'
    ]
  },
  simeao: {
    categoria: 'Personagem Bíblico',
    facil: [
      'É um homem justo e idoso de Jerusalém mencionado no início do Evangelho de Lucas.',
      'O Espírito Santo lhe havia revelado que ele não morreria antes de ver o Messias.',
      'Quando José e Maria levaram o bebê Jesus ao Templo, ele reconheceu imediatamente o Salvador.',
      'Tomou o menino Jesus nos braços e louvou a Deus dizendo que agora podia partir em paz.',
      'Profetizou a Maria que aquele menino causaria a queda e o levantamento de muitos em Israel.',
      'Seu nome tem seis letras e começa com S.'
    ],
    medio: [
      'Estava presente na cerimônia de apresentação do primogênito e purificação no Templo, quarenta dias após o nascimento de Jesus.',
      'Chamou o bebê Jesus de "luz para revelação aos gentios e glória do teu povo de Israel".',
      'Alertou Maria dizendo: "Uma espada transpassará também a tua própria alma".',
      'Logo após sua fala, a profetisa idosa Ana também deu graças a Deus pelo menino.',
      'Sua oração no templo é conhecida na tradição cristã como o cântico "Nunc Dimittis".',
      'Idoso piedoso que segurou o menino Jesus nos braços no Templo.'
    ],
    dificil: [
      'O relato de seu encontro com a Sagrada Família aparece exclusivamente em Lucas capítulo 2.',
      'Não deve ser confundido com o segundo filho de Jacó nem com o apóstolo Simão Pedro.',
      'A liturgia das horas cristã utiliza suas palavras tradicionalmente nas orações antes de dormir.',
      'A Bíblia o descreve como um homem justo e piedoso que aguardava a "consolação de Israel".',
      'Seu nome em hebraico ("Shimon") significa "aquele que ouve".',
      'Nome de seis letras: S-i-m-e-ã-o.'
    ]
  },

  // --- COMIDAS E CULINÁRIA ---
  pao: {
    categoria: 'Alimento',
    facil: [
      'É um alimento básico presente diariamente no café da manhã de milhões de pessoas.',
      'É feito tradicionalmente com farinha de trigo, água, fermento e sal.',
      'Pode ser comprado quentinho na padaria ou assado em casa.',
      'Combina muito bem com manteiga, requeijão, queijo e presunto.',
      'Existem versões como francês, de forma, integral, australiano e sovado.',
      'Seu nome tem apenas três letras.'
    ],
    medio: [
      'É um dos alimentos preparados mais antigos da história da humanidade, existindo há milênios.',
      'Durante o preparo, o fermento biológico libera gás carbônico que faz a massa crescer e ficar macia.',
      'É a base essencial para preparar qualquer sanduíche, hambúrguer ou bruschetta.',
      'Na França, sua versão alongada e crocante é chamada de baguete.',
      'Possui casca dourada e miolo macio após sair do forno.',
      'Alimento essencial das padarias feito de farinha assada.'
    ],
    dificil: [
      'Os antigos egípcios foram os primeiros a dominar a fermentação natural para produzir versões fofas deste alimento.',
      'A reação química de Maillard durante o forneamento é responsável pela cor dourada e aroma de sua crosta.',
      'Tem forte simbolismo cultural e religioso ao longo da história, representando sustento e partilha.',
      'O glúten formado pela mistura de farinha de trigo e água dá elasticidade à sua massa.',
      'Quando fatiado e aquecido, transforma-se em torrada.',
      'Palavra de três letras: P-ã-o.'
    ]
  },
  pizza: {
    categoria: 'Alimento',
    facil: [
      'É uma comida muito popular em todo o mundo, geralmente redonda e cortada em fatias triangulares.',
      'Consiste em uma base de massa assada coberta com molho de tomate e muito queijo derretido.',
      'Pode levar diversos sabores de cobertura, como calabresa, muçarela, portuguesa e frango com catupiry.',
      'Costuma ser assada em forno a lenha e entregue em caixas de papelão quadradas.',
      'É um dos pratos mais famosos da culinária italiana.',
      'Seu nome tem cinco letras e possui duas letras Z.'
    ],
    medio: [
      'Sua versão moderna nasceu na cidade italiana de Nápoles no século XVIII.',
      'O sabor tradicional Marguerita leva tomate, muçarela e manjericão, representando as cores da bandeira da Itália.',
      'No Brasil, comemora-se oficialmente o dia dedicado a esse prato em 10 de julho.',
      'A cidade de São Paulo é considerada uma das maiores consumidoras desse prato no mundo.',
      'Pode ter borda recheada com catupiry ou cheddar.',
      'Disco de massa assada com molho de tomate e queijo.'
    ],
    dificil: [
      'Em 2017, a arte tradicional dos pizzaiolos napolitanos foi declarada Patrimônio Cultural Imaterial da Humanidade pela UNESCO.',
      'Segundo a tradição histórica, a versão Marguerita foi criada em 1889 em homenagem à rainha Margarida de Saboia.',
      'Antigamente, pães achatados com ervas e azeite já eram consumidos por gregos, fenícios e romanos no Mediterrâneo.',
      'A palavra italiana tem origem provável no latim medieval ou no grego "pitta" (torta/pão achatado).',
      'Um fato curioso: é redonda, vem em uma caixa quadrada e é comida em triângulos.',
      'Palavra de cinco letras: P-i-z-z-a.'
    ]
  },
  sushi: {
    categoria: 'Alimento',
    facil: [
      'É um prato típico e muito famoso da culinária japonesa.',
      'É feito principalmente com arroz temperado e peixe cru ou frutos do mar.',
      'Muitas versões são enroladas em uma folha escura de alga marinha chamada nori.',
      'Costuma ser comido com hashis (palitinhos) e mergulhado no molho shoyu.',
      'Pode ser acompanhado por pasta verde picante de wasabi e gengibre em conserva.',
      'Seu nome tem cinco letras e começa com S.'
    ],
    medio: [
      'O arroz utilizado no preparo é temperado com uma mistura de vinagre de arroz, açúcar e sal.',
      'Possui vários formatos populares, como niguiri, hossomaki, uramaki e o cone chamado temaki.',
      'Salmão, atum, camarão, pepino e manga estão entre os ingredientes mais usados no Brasil.',
      'Diferente do sashimi (que é apenas o peixe fatiado), este prato sempre leva arroz avinagrado.',
      'É o carro-chefe dos restaurantes de comida japonesa.',
      'Prato japonês de arroz avinagrado, alga e peixe.'
    ],
    dificil: [
      'Surgiu originalmente no Sudeste Asiático como um método de conservar peixes dentro de arroz fermentado com sal.',
      'A versão moderna rápida de ser consumida (nigirizushi) foi popularizada em Tóquio (antiga Edo) no século XIX.',
      'Na culinária japonesa tradicional, o termo refere-se especificamente ao sabor ácido do arroz temperado, e não ao peixe cru.',
      'A esteira de bambu usada para enrolar as peças chama-se makisu.',
      'O gengibre em conserva servido junto chama-se gari e serve para limpar o paladar entre as peças.',
      'Palavra de cinco letras: S-u-s-h-i.'
    ]
  },
  lasanha: {
    categoria: 'Alimento',
    facil: [
      'É um prato assado no forno muito tradicional da culinária italiana.',
      'É montado em várias camadas intercaladas de folhas largas de massa, molho e queijo.',
      'Os recheios mais comuns são carne moída à bolonhesa, presunto e queijo ou frango.',
      'Sai do forno borbulhando com uma deliciosa camada gratinada por cima.',
      'É a comida favorita do famoso gato laranja preguiçoso dos quadrinhos, Garfield.',
      'Seu nome tem sete letras e começa com L.'
    ],
    medio: [
      'Combina frequentemente o molho vermelho de tomate com o molho branco bechamel.',
      'É preparada em uma travessa refratária retangular e servida cortada em quadrados.',
      'Na região italiana de Bolonha, a versão tradicional utiliza massa verde feita com espinafre.',
      'É um prato clássico dos almoços de domingo em família.',
      'Pode ser feita também em versões vegetarianas com berinjela ou abobrinha.',
      'Massa em camadas intercaladas com molho, recheio e queijo assado.'
    ],
    dificil: [
      'A palavra deriva originalmente do grego "lasanon" ou do latim "lasanum", que designava a panela larga usada para cozinhar.',
      'Receitas antigas de camadas de massa cozida já aparecem em livros culinários medievais italianos do século XIV.',
      'No plural em italiano, o prato é chamado de "lasagne".',
      'O que diferencia este prato de outras massas é a estrutura estratificada assada ao forno.',
      'Ganhando fama mundial através da imigração italiana, tornou-se um dos pratos de forno mais populares.',
      'Palavra de sete letras: L-a-s-a-n-h-a.'
    ]
  }
};

/**
 * Aliases para garantir que variações de escrita ou nomes alternativos
 * encontrem a dica correta mesmo após a normalização.
 */
const WORD_ALIASES = {
  franca: 'franca',
  'frança': 'franca',
  edwiges: 'hedwig',
  quadribol: 'quidditch',
  trouxa: 'muggle',
  rebecca: 'rebeca',
  benias: 'benaia'
};

const getHintEntry = (normalizedWord) => {
  const canonicalKey = WORD_ALIASES[normalizedWord] || normalizedWord;
  return SPECIAL_HINTS[canonicalKey] || null;
};

export const hasSpecialHintsForWord = (word) => {
  const normalized = normalizeText(word);
  return Boolean(normalized && getHintEntry(normalized));
};

/**
 * Gera 6 dicas estruturais progressivas caso a palavra não esteja cadastrada no banco especial.
 */
const buildFallbackHints = (originalWord, normalizedWord, difficulty = 'medio') => {
  const cleanWord = originalWord.trim();
  const lettersOnly = normalizedWord.replace(/[^a-z0-9]/g, '');
  const length = lettersOnly.length;
  const firstLetter = cleanWord.charAt(0).toUpperCase();
  const lastLetter = cleanWord.slice(-1).toUpperCase();
  const wordCount = cleanWord.split(/\s+/).length;
  const vowelsCount = (lettersOnly.match(/[aeiou]/g) || []).length;
  const consonantsCount = length - vowelsCount;

  const structureInfo = wordCount > 1
    ? `É uma expressão composta por ${wordCount} palavras`
    : `É uma palavra única com ${length} letras`;

  if (difficulty === 'facil') {
    return [
      `${structureInfo}.`,
      `Possui ${vowelsCount} vogais e ${consonantsCount} consoantes.`,
      `Começa com a letra "${firstLetter}".`,
      `Termina com a letra "${lastLetter}".`,
      `Começa com "${firstLetter}" e termina com "${lastLetter}".`,
      `Última chance: ${structureInfo} ("${firstLetter}...${lastLetter}").`
    ];
  }

  if (difficulty === 'dificil') {
    return [
      `Observe com atenção a estrutura da palavra secreta.`,
      `${structureInfo}.`,
      `A palavra contém ${vowelsCount} vogais no total.`,
      `A última letra da palavra é "${lastLetter}".`,
      `A primeira letra da palavra é "${firstLetter}".`,
      `Última tentativa: ${structureInfo}, começa com "${firstLetter}" e termina com "${lastLetter}".`
    ];
  }

  // medio
  return [
    `${structureInfo}.`,
    `Contém exatamente ${vowelsCount} vogais.`,
    `Contém exatamente ${consonantsCount} consoantes.`,
    `A primeira letra é "${firstLetter}".`,
    `A última letra é "${lastLetter}".`,
    `Última chance: ${structureInfo} ("${firstLetter}...${lastLetter}").`
  ];
};

/**
 * Retorna a lista completa com as 6 dicas para a palavra e dificuldade escolhidas.
 */
export const getWordHintsList = (word, difficulty = 'medio') => {
  const normalized = normalizeText(word);
  if (!normalized) return [];

  const level = ['facil', 'medio', 'dificil'].includes(difficulty) ? difficulty : 'medio';
  const entry = getHintEntry(normalized);
  if (!entry) return buildFallbackHints(word, normalized, level);

  const hints = entry[level];
  if (!Array.isArray(hints) || hints.length !== 6) {
    throw new Error(`O banco de dicas para "${normalized}" não possui seis dicas de nível "${level}".`);
  }

  return hints;
};