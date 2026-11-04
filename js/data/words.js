export const CATEGORY_META = [
  { key: 'animais', label: 'Animais', icon: '🐾' },
  { key: 'paises', label: 'Países', icon: '🌍' },
  { key: 'cidades', label: 'Cidades', icon: '🏙️' },
  { key: 'filmes', label: 'Filmes', icon: '🎬' },
  { key: 'series', label: 'Séries', icon: '📺' },
  { key: 'super-herois', label: 'Super-heróis', icon: '🦸' },
  { key: 'jogos', label: 'Jogos', icon: '🎮' },
  { key: 'esportes', label: 'Esportes', icon: '⚽' },
  { key: 'comidas', label: 'Comidas', icon: '🍔' },
  { key: 'profissoes', label: 'Profissões', icon: '🧑‍💼' },
  { key: 'tecnologia', label: 'Tecnologia', icon: '💻' },
  { key: 'historia', label: 'História', icon: '🏛️' },
  { key: 'musica', label: 'Música', icon: '🎵' },
  { key: 'biblia', label: 'Bíblia', icon: '📖' },
  { key: 'conhecimentos-gerais', label: 'Conhecimentos gerais', icon: '🧠' },
  { key: 'carros', label: 'Carros', icon: '🚗' },
  { key: 'natureza', label: 'Natureza', icon: '🌿' },
  { key: 'personalidades', label: 'Personalidades', icon: '⭐' }
];

const baseWordMap = {
  animais: [
    'abelha', 'aguia', 'alce', 'alpaca', 'andorinha', 'antilope', 'aranha', 'baleia', 'barata', 'bisonte',
    'boto', 'bufalo', 'cabra', 'camelo', 'canguru', 'capivara', 'caracol', 'castor', 'cavalo', 'coala',
    'cobra', 'codorna', 'condor', 'coruja', 'delfim', 'elefante', 'ema', 'esquilo', 'falcao', 'foca',
    'formiga', 'gafanhoto', 'galo', 'gato', 'gaviao', 'golfinho', 'hamster', 'hipopotamo', 'iaque', 'iguana',
    'jabuti', 'jacare', 'jaguatirica', 'leao', 'lemure', 'lhama', 'lontra', 'macaco', 'mamute', 'morsa',
    'orca', 'ostrich', 'panda', 'papagaio', 'pato', 'peixe', 'pinguim', 'porco', 'puma', 'quati',
    'raposa', 'rinoceronte', 'sagui', 'salamandra', 'sapo', 'sealion', 'serpente', 'tamandua', 'tatu', 'texugo',
    'tigre', 'urso', 'vaca', 'veado', 'wombat', 'zebra', 'narval', 'flamingo', 'guaxinim', 'morcego'
  ],
  paises: [
    'afeganistao', 'albania', 'argentina', 'australia', 'belgica', 'brasil', 'canada', 'chile', 'china', 'colombia',
    'costa rica', 'croacia', 'dinamarca', 'egito', 'equador', 'espanha', 'estados unidos', 'filipinas', 'franca',
    'gana', 'grecia', 'guatemala', 'holanda', 'india', 'indonesia', 'italia', 'japao', 'marrocos', 'mexico',
    'nigeria', 'noruega', 'panama', 'paraguai', 'peru', 'polonia', 'portugal', 'qatar', 'reino unido', 'romenia',
    'russia', 'senegal', 'suica', 'suecia', 'tailandia', 'turquia', 'ucrania', 'uruguai', 'venezuela', 'vietnam',
    'angola', 'arabe', 'azerbaijao', 'bolivia', 'camboja', 'chade', 'coreia do sul', 'dinamarca', 'etiopia',
    'finlandia', 'georgia', 'honduras', 'islandia', 'iran', 'iraque', 'jordania', 'kenia', 'libia', 'malasia',
    'mozambique', 'nepal', 'nova zelandia', 'paquistao', 'peru', 'portugal', 'siria', 'sudao', 'tanzania', 'uganda'
  ],
  cidades: [
    'abidjan', 'amsterda', 'atenas', 'bagda', 'barcelona', 'beijing', 'berlim', 'bogota', 'buenos aires', 'cairo',
    'campinas', 'copenhague', 'curitiba', 'dublin', 'florianopolis', 'fortaleza', 'frankfurt', 'genebra', 'goiania',
    'havana', 'helsinque', 'joao pessoa', 'lisboa', 'londres', 'los angeles', 'madrid', 'manila', 'melbourne',
    'mexico', 'miami', 'montevideo', 'nova york', 'oslo', 'paris', 'pequim', 'porto alegre', 'quebec', 'recife',
    'rio de janeiro', 'roma', 'salvador', 'sao paulo', 'seul', 'singapura', 'sydney', 'tokio', 'toronto', 'vancouver',
    'venice', 'viena', 'warsaw', 'zurique', 'adelaide', 'alta', 'aracaju', 'belo horizonte', 'brasilia', 'cascais',
    'chicago', 'dubai', 'edimburgo', 'guarulhos', 'jequi', 'kyiv', 'maceio', 'natal', 'niteroi', 'porto',
    'quito', 'rabat', 'salta', 'santiago', 'sao francisco', 'santos', 'sofia', 'valencia', 'vitoria', 'zurique'
  ],
  filmes: [
    'avatar', 'titanic', 'frozen', 'shrek', 'coco', 'up', 'toy story', 'jurassic park', 'matrix', 'inception',
    'o rei leao', 'harry potter', 'procurando nemo', 'bela e a fera', 'madagascar', 'minions', 'divertidamente',
    'interestelar', 'viva a vida', 'a chegada', 'os vingadores', 'o poderoso chefao', 'zootopia', 'ratatouille', 'gladiador',
    'a vida e bela', 'o lobo de wall street', 'o senhor dos aneis', 'senhor dos aneis', 'a rede social'
  ],
  series: [
    'breaking bad', 'stranger things', 'the crown', 'the office', 'friends', 'dark', 'house of cards', 'the witcher',
    'sherlock', 'brooklyn nine nine', 'the mandalorian', 'la casa de papel', 'game of thrones', 'vikings', 'black mirror',
    'supernatural', 'arrow', 'lucifer', 'the flash', 'narcos', 'better call saul', 'mr robot', 'westworld', '13 reasons why',
    'the boys', 'young sheldon', 'smallville', 'doctor who', 'cowboy bebop', 'only murders in the building', 'the simpsons',
    'westworld', 'fargo', 'wandavision', 'ragnarok', 'the last of us', 'silo', 'the expanse', 'chernobyl', 'ora', 'banshee'
  ],
  'super-herois': [
    'batman', 'superman', 'mulher maravilha', 'homem aranha', 'thor', 'hulk', 'capitao america', 'flash', 'aquaman',
    'wolverine', 'deadpool', 'pantera negra', 'doutor estranho', 'lanterna verde', 'supergirl', 'capita marvel',
    'feiticeira escarlate', 'viuva negra', 'robin', 'homem de ferro'
  ],
  jogos: [
    'minecraft', 'dota', 'csgo', 'valorant', 'fortnite', 'zelda', 'pokemon', 'super mario', 'metroid', 'portal',
    'tetris', 'doom', 'halo', 'half life', 'resident evil', 'street fighter', 'mortal kombat', 'gta', 'need for speed', 'god of war',
    'final fantasy', 'overwatch', 'league of legends', 'minecraft', 'animal crossing', 'guitar hero', 'super smash', 'fire emblem',
    'counter strike', 'starcraft', 'fifa', 'nba 2k', 'fallout', 'binding of isaac', 'hollow knight', 'dark souls', 'castle crashers',
    'terraria', 'tears of the kingdom', 'red dead redemption', 'bioshock', 'uncharted', 'rayman', 'sonic', 'pacman', 'zelda', 'stardew valley'
  ],
  esportes: [
    'atletismo', 'basquete', 'beisebol', 'boxe', 'ciclismo', 'esgrima', 'futebol', 'golf', 'ginastica', 'handebol',
    'hoquei', 'judô', 'karate', 'natacao', 'polo aquatico', 'rugby', 'surfe', 'tenis', 'volei', 'xadrez',
    'alpino', 'badminton', 'canoagem', 'corrida', 'duatlo', 'esqui', 'futsal', 'halterofilismo', 'judô', 'leparkour',
    'motocross', 'paraquedismo', 'pentatlo', 'skate', 'sumô', 'taekwondo', 'triatlo', 'vela', 'wrestling', 'yoga'
  ],
  comidas: [
    'pao', 'pizza', 'sushi', 'bolo', 'cafe', 'lasanha', 'sorvete', 'coxinha', 'feijoada', 'pudim', 'quiche',
    'risoto', 'moqueca', 'paella', 'guacamole', 'yakisoba', 'tacos', 'brigadeiro', 'acaraje', 'donut', 'omelete',
    'churrasco', 'cuscuz', 'hamburguer', 'nhoque', 'pao de queijo', 'tiramisu', 'bolo de chocolate', 'strogonoff'
  ],
  profissoes: [
    'advogado', 'arquiteto', 'atleta', 'bibliotecario', 'biologo', 'chef', 'cirurgiao', 'contador', 'desenvolvedor', 'dentista',
    'enfermeiro', 'engenheiro', 'farmaceutico', 'fiscal', 'jornalista', 'maquiador', 'medico', 'motorista', 'musico',
    'pedagogo', 'pintor', 'policial', 'professor', 'programador', 'psicologo', 'secretaria', 'soldado', 'taxista', 'veterinario',
    'astronauta', 'bombeiro', 'cantor', 'carpinteiro', 'designer', 'diretor', 'engenheiro', 'fisioterapeuta', 'guarda', 'mecanico',
    'operador', 'pescador', 'pilot', 'produtor', 'promotor', 'redator', 'sacerdote', 'seguranca', 'técnico', 'zelador'
  ],
  tecnologia: [
    'algoritmo', 'api', 'browser', 'cloud', 'codigo', 'computador', 'conexao', 'cpu', 'dados', 'debug', 'dominio',
    'email', 'framework', 'firewall', 'gpu', 'hardware', 'html', 'internet', 'kernel', 'linguagem', 'linux', 'microchip',
    'nuvem', 'php', 'python', 'rede', 'robotica', 'seguranca', 'servidor', 'software', 'sistema', 'tablet', 'token', 'ubuntu',
    'virtualizacao', 'webcam', 'wifi', 'windows', 'automatizacao', 'big data', 'bluetooth', 'criptografia', 'engenharia',
    'iot', 'js', 'machine learning', 'memoria', 'monitor', 'nodejs', 'open source', 'processador', 'protocolo', 'ram', 'sql'
  ],
  historia: [
    'antiguidade', 'batalha', 'cidadania', 'colonia', 'conquista', 'dinastia', 'imperio', 'inquisicao', 'monarquia', 'nobres',
    'revolucao', 'roma', 'civilizacao', 'comercio', 'descobrimento', 'edad media', 'fronteira', 'guerra mundial', 'grécia',
    'republica', 'artefato', 'capitão', 'ditadura', 'imprensa', 'maia', 'mercantilismo', 'muralha', 'navegador', 'povoado',
    'projeto', 'renascimento', 'sistema', 'tribo', 'vassalo', 'vitória', 'colonialismo', 'escravidão', 'farao', 'mitologia'
  ],
  musica: [
    'acorde', 'album', 'balada', 'batida', 'canto', 'choro', 'classica', 'eletronica', 'fado', 'guitarra', 'hiphop',
    'jazz', 'melodia', 'música', 'nota', 'orquestra', 'piano', 'pop', 'rap', 'rock', 'samba', 'saxofone', 'teclado', 'violao', 'vocal',
    'bateria', 'cantora', 'coreografia', 'harmonia', 'improviso', 'instrumento', 'lyric', 'metal', 'partitura', 'reggae',
    'riff', 'soul', 'studio', 'timbre', 'tom', 'trilha', 'vibração', 'baixo', 'festival', 'coro'
  ],
  biblia: [
    'noe', 'moises', 'davi', 'daniel', 'jonas', 'ester', 'zaqueu', 'pedro', 'paulo', 'rute', 'samuel', 'gideao',
    'abigail', 'ezequiel', 'isaias', 'salomao', 'lazaro', 'rebecca', 'judas', 'maria', 'aarao', 'urias', 'naomi',
    'matusalem', 'jeremias', 'eli', 'sara', 'susana', 'benias', 'simeao'
  ],
  'conhecimentos-gerais': [
    'astronomia', 'atomo', 'bioma', 'capital', 'cultura', 'ecologia', 'energia', 'futebol', 'geografia', 'histo', 'inverno',
    'lingua', 'matematica', 'mecanismo', 'metabolismo', 'neurônio', 'oceano', 'planeta', 'politica', 'pressao', 'quimica',
    'relacao', 'sistema solar', 'temperatura', 'universo', 'vulcao', 'clima', 'decibel', 'evolucao', 'física', 'gravidade',
    'hidrografia', 'jurisprudencia', 'luz', 'magnitude', 'organismo', 'pedagogia', 'quasar', 'sustentabilidade', 'teoria', 'velocidade', 'zoologia'
  ],
  carros: [
    'audi', 'bmw', 'bugatti', 'chevrolet', 'citroen', 'ferrari', 'fiat', 'ford', 'honda', 'hyundai', 'jaguar',
    'kia', 'lamborghini', 'lexus', 'mazda', 'mercedes', 'mini', 'mitsubishi', 'nissan', 'peugeot', 'porsche', 'renault',
    'subaru', 'tesla', 'toyota', 'volkswagen', 'volvo', 'mustang', 'civic', 'corolla', 'focus', 'gol', 'uno', 'palio',
    'siena', 'corsa', 'fox', 'voyage', 'onix', 'tucson', 'cruze', 'camaro', 'gtr', 'i30', 'c3', 'fiesta', 'astra'
  ],
  natureza: [
    'agua', 'arvore', 'cachoeira', 'caverna', 'chuva', 'deserto', 'floresta', 'geiser', 'gruta', 'ilha', 'lago',
    'montanha', 'neve', 'oceanos', 'pântano', 'praia', 'rio', 'selva', 'solo', 'tempestade', 'vale', 'ventania', 'aurora',
    'bioma', 'cerrado', 'ecossistema', 'fenda', 'gemada', 'granito', 'horizonte', 'inundacao', 'jardim', 'luz', 'mar', 'nuvem'
  ],
  personalidades: [
    'ada lovelace', 'albert einstein', 'beethoven', 'bruce lee', 'cleopatra', 'diana', 'elon musk', 'frida kahlo', 'gandhi',
    'mahatma gandhi', 'isaac newton', 'marie curie', 'maya angelou', 'michael jackson', 'nelson mandela', 'steve jobs',
    'taylor swift', 'vinicius de moraes', 'zico', 'carlos drummond', 'kevin', 'martin luther king', 'neymar', 'ronaldo fenômeno',
    'mario sergio', 'catarina', 'davinci', 'josephine', 'jesus', 'ny', 'tarantino'
  ]
};

const extraWordMap = {
  animais: [
    'narval', 'flamingo', 'guaxinim', 'morcego', 'onça', 'orangotango', 'pavão', 'peixe-boi', 'quokka', 'rã',
    'sagui', 'tamanduá', 'tubarão', 'urso-polar', 'urso', 'zangão', 'xexeu', 'yak', 'ibis', 'hiena',
    'leopardo', 'ocelote', 'pica-pau', 'rinoceronte', 'suricate', 'vulture', 'wolverine', 'rinoceronte', 'mangusto', 'ovis',
    'puma', 'trator', 'coruja', 'falcão', 'pelicano', 'albatros', 'camaleao', 'iguana', 'narwhal', 'zebra',
    'babuino', 'baleia', 'orca', 'morsa', 'foca', 'hipopótamo', 'cervo', 'doninha', 'dingo', 'pinguim',
    'calango', 'marlim', 'papagaio', 'sabiá', 'guará', 'esquilo', 'canguru', 'gambá', 'jabuti', 'lobo'
  ],
  paises: [
    'argélia', 'armenia', 'azerbaijao', 'bielorrussia', 'botsuana', 'brunei', 'bulgaria', 'camaroes', 'chile', 'chipre',
    'colombia', 'coreia do norte', 'cuba', 'eslovaquia', 'estonia', 'etiopia', 'georgia', 'guiana', 'haiti', 'hungaria',
    'israel', 'jordania', 'letonia', 'lituania', 'luxemburgo', 'malta', 'namibia', 'oman', 'uruguai', 'peru', 'suecia',
    'taiwan', 'trinidad', 'turquia', 'uzbequistao', 'zimbabue', 'belarus', 'angola', 'cabo verde', 'slovakia', 'emirados arabes',
    'eslovaquia', 'catar', 'bulgaria', 'laos', 'mianmar', 'guiana', 'equador', 'nicaragua', 'paraguai', 'moçambique',
    'burkina faso', 'andorra', 'sérvia', 'cazaquistao', 'kazajstan', 'anguila', 'noruega', 'grécia', 'sudão', 'gana'
  ],
  cidades: [
    'salvador', 'porto', 'amsterdã', 'berna', 'birmingham', 'cancun', 'delhi', 'dubrovnik', 'firenze', 'genova',
    'lima', 'manchester', 'medellin', 'natal', 'odessa', 'osaka', 'praga', 'quito', 'santiago', 'sevilha', 'tijuana',
    'ulaanbaatar', 'vitoria', 'welington', 'xangai', 'yakarta', 'zhongshan', 'adana', 'bordeaux', 'calgary', 'dakar',
    'el cairo', 'fukuoka', 'hamburgo', 'ibadan', 'jeddah', 'kuala lumpur', 'liverpool', 'marseille', 'nairobi', 'orlando',
    'puebla', 'qingdao', 'rio', 'santos', 'torino', 'uagadugu', 'valparaiso', 'wuhan', 'xalapa', 'yokohama', 'zurique'
  ],
  filmes: [],
  series: [
    'the last kingdom', 'silo', 'the expanse', 'for all mankind', 'resident alien', 'the big bang theory', 'dark', 'the wire',
    'the oa', 'cursed', 'brain dead', 'obx', 'the rookie', 'the parisian', 'souvenir', 'fleabag', 'the white queen', 'boruto',
    'sydney', 'outlander', 'the umbrella academy', '3 body problem', 'arcane', 'feud', 'babylon berlin', 'the nevers', 'px',
    'the handmaids tale', 'killing eve', 'hanna', 'the good doctor', 'rick and morty', 'the boys', 'silo', 'mockingbird'
  ],
  'super-herois': [],
  jogos: [
    'civilization', 'animal crossing', 'krunker', 'diablo', 'hearthstone', 'balatro', 'ages of empires', 'brawl stars', 'hades',
    'simcity', 'assassins creed', 'tom clancy', 'fifa', 'nfs heat', 'forza horizon', 'meatboy', 'subnautica', 'the sims', 'nintendo',
    'undertale', 'hades', 'a plague tale', 'doom eternal', 'destiny', 'neon white', 'warframe', 'sea of thieves', 'smite', 'trackmania',
    'street fighter 6', 'disco elysium', 'little nightmare', 'monster hunter', 'stardew valley', 'bomberman', 'ducktales' 
  ],
  esportes: [
    'arco e flecha', 'beisebol', 'curling', 'esqui alpino', 'golf', 'halterofilismo', 'luta livre', 'motonautica', 'remo', 'patinação',
    'parapente', 'squash', 'taekwondo', 'tiro esportivo', 'vôlei de praia', 'wakanda', 'pentatlo moderno', 'paddle', 'críquete', 'sambo'
  ],
  comidas: [],
  profissoes: [
    'agricultor', 'assessor', 'auditor', 'coordenador', 'especialista', 'guia turistico', 'instrutor', 'inventor', 'médico veterinário',
    'notário', 'patologista', 'pesquisador', 'produtor musical', 'radialista', 'recrutador', 'sociólogo', 'tradutor', 'urbanista', 'xerife',
    'analista', 'consultor', 'delegado', 'fotógrafo', 'geólogo', 'gestor', 'técnico em informática', 'telemarketing', 'escritor', 'gestor de projetos'
  ],
  tecnologia: [
    'algoritmo', 'big data', 'bluetooth', 'deploy', 'docker', 'fluxo', 'github', 'javascript', 'machine learning', 'nosql', 'pipeline',
    'proxy', 'ram', 'react', 'sdk', 'sql', 'ssl', 'typescript', 'variante', 'versão', 'webhook', 'workspace', 'yarn', 'zeroconf',
    'chatgpt', 'prompt', 'neural', 'sistema operacional', 'automação', 'circuito', 'firmware', 'integracao', 'microsservico', 'segurança', 'cache'
  ],
  historia: [
    'alexandre', 'atenas', 'cromwell', 'constantino', 'earp', 'feudalismo', 'grécia antiga', 'julius caesar', 'muralha', 'nazista',
    'olimpíadas', 'perICLES', 'quinhentos', 'renascentista', 'socrates', 'tiberio', 'ulysses', 'vila', 'xenofonte', 'zoroastro',
    'civilizações', 'despotismo', 'expansão', 'imperador', 'legião', 'museu', 'pirataria', 'teocracia', 'trácia', 'unificação'
  ],
  musica: [
    'acapella', 'balada', 'clarinete', 'corneta', 'drum and bass', 'electropop', 'flauta', 'funk', 'harmony', 'indie', 'jingle',
    'k-pop', 'lounge', 'música clássica', 'narrativa', 'ost', 'percussão', 'quarteto', 'riff', 'synthwave', 'ukulele', 'vibrafone',
    'xilofone', 'yo', 'zumba', 'harpa', 'pandeiro', 'triade', 'trilha sonora', 'viola', 'vocalista'
  ],
  biblia: [],
  'conhecimentos-gerais': [
    'anatomia', 'célula', 'dissolve', 'ecosistema', 'fóssil', 'galaxia', 'hidrografia', 'infravermelho', 'jornada', 'kilo', 'litio',
    'mecanismo', 'nanotecnologia', 'orgão', 'platina', 'quasar', 'relé', 'simetria', 'tórax', 'ultrassom', 'vulcão', 'watt',
    'xenon', 'yottabyte', 'zona climática', 'bioquimica', 'cromossomo', 'dendrito', 'energia solar', 'futuro', 'geologia', 'hidroelétrica'
  ],
  carros: [
    'alfa romeo', 'audi rs', 'camaro ss', 'dodge challenger', 'ferrari sf90', 'ford mustang', 'jeep wrangler', 'maserati', 'porsche cayman',
    'range rover', 'tesla model s', 'toyota supra', 'volvo xc60', 'fiat 500', 'chevrolet onix', 'honda civic', 'hyundai hb20',
    'kia sportage', 'mercedes amg', 'nissan skyline', 'seat leon', 'subaru impreza', 'vw golf', 'audi a3', 'bmw m3', 'dacia sandero'
  ],
  natureza: [
    'acácia', 'alagado', 'amapá', 'bambu', 'cicatriz', 'duna', 'eucalipto', 'formiga', 'grama', 'humidade', 'inverno', 'jacarandá',
    'kelp', 'litoral', 'marisma', 'nitrogênio', 'orvalho', 'petróleo', 'quebra-mar', 'região', 'savana', 'tundra', 'umbigo',
    'vulcão', 'waterfall', 'xingu', 'yuca', 'zonal', 'mar de gelo', 'flora', 'fauna', 'piração', 'algas', 'pico' 
  ],
  personalidades: [
    'michael jordan', 'socrates', 'cersei lannister', 'fernando pessoa', 'joão guimarães rosa', 'nina simone', 'darth vader', 'sheila',
    'tim cook', 'alan turing', 'charles darwin', 'meryl streep', 'nicolau maia', 'teodoro', 'serena williams', 'ludwig beethoven', 'shakira',
    'vladimir putin', 'julia roberts', 'cristiano ronaldo', 'neymar', 'pele', 'shay', 'madonna', 'nina simone', 'renato russo'
  ]
};

const buildWordSet = (key) => {
  const baseWords = baseWordMap[key] || [];
  const extraWords = extraWordMap[key] || [];
  return [...new Set([...baseWords, ...extraWords])].filter(Boolean);
};

export const WORD_BANK = Object.fromEntries(
  Object.keys(baseWordMap).map((key) => [key, buildWordSet(key)])
);

export const ALL_WORDS = Object.values(WORD_BANK).flat();
