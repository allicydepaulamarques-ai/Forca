export const DIFFICULTY_LEVELS = {
  facil: { label: 'Fácil', order: 1 },
  medio: { label: 'Médio', order: 2 },
  dificil: { label: 'Difícil', order: 3 }
};

export const CATEGORY_META = [
  { key: 'animais', label: 'Animais', icon: '🐾', emoji: '🐾' },
  { key: 'paises', label: 'Países', icon: '🌎', emoji: '🌎' },
  { key: 'harry-potter', label: 'Harry Potter', icon: '🪄', emoji: '🪄' },
  { key: 'cidades', label: 'Cidades', icon: '🏙️', emoji: '🏙️' },
  { key: 'filmes', label: 'Filmes', icon: '🎬', emoji: '🎬' },
  { key: 'series', label: 'Séries', icon: '📺', emoji: '📺' },
  { key: 'super-herois', label: 'Super-heróis', icon: '🦸', emoji: '🦸' },
  { key: 'jogos', label: 'Jogos', icon: '🎮', emoji: '🎮' },
  { key: 'esportes', label: 'Esportes', icon: '⚽', emoji: '⚽' },
  { key: 'comidas', label: 'Comidas', icon: '🍔', emoji: '🍔' },
  { key: 'profissoes', label: 'Profissões', icon: '👨‍💼', emoji: '👨‍💼' },
  { key: 'tecnologia', label: 'Tecnologia', icon: '💻', emoji: '💻' },
  { key: 'historia', label: 'História', icon: '🏛️', emoji: '🏛️' },
  { key: 'musica', label: 'Música', icon: '🎵', emoji: '🎵' },
  { key: 'biblia', label: 'Bíblia', icon: '📖', emoji: '📖' },
  { key: 'conhecimentos-gerais', label: 'Conhecimentos gerais', icon: '🧠', emoji: '🧠' },
  { key: 'carros', label: 'Carros', icon: '🚘', emoji: '🚘' },
  { key: 'natureza', label: 'Natureza', icon: '🌿', emoji: '🌿' },
  { key: 'personalidades', label: 'Personalidades', icon: '⭐', emoji: '⭐' }
];

export const CATEGORY_BY_KEY = Object.fromEntries(
  CATEGORY_META.map((category) => [category.key, category])
);

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
  'harry-potter': [
    'harry potter', 'hogwarts', 'hedwig', 'dumbledore', 'ron weasley', 'hermione granger', 'snape', 'voldemort',
    'sirius black', 'hagrid', 'neville longbottom', 'draco malfoy', 'minerva mcgonagall', 'luna lovegood',
    'ginny weasley', 'albus dumbledore', 'mago', 'feitico', 'escudo', 'basilisco', 'morgana', 'gringotes',
    'azkaban', 'fawkes', 'casa de hogwarts', 'fenix', 'transformacao'
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
    'fargo', 'wandavision', 'ragnarok', 'the last of us', 'silo', 'the expanse', 'chernobyl', 'ora', 'banshee'
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
  'harry-potter': [
    'hogwarts', 'hedwig', 'muggle', 'gringotes', 'gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'squib',
    'dolores umbridge', 'cho chang', 'cedric diggory', 'bellatrix', 'quidditch', 'patrono', 'felix felicis',
    'potion', 'varinha', 'maldicao', 'horcrux', 'wand', 'owl', 'fenix', 'basilisco'
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

export const GENERIC_HINTS = {
  animais: [
    'É um ser vivo que costuma estar ligado à natureza, ao habitat e à fauna local.',
    'Pense em um animal que vive em florestas, mares, savanas ou ambientes domésticos.',
    'Essa palavra remete a uma criatura que respira, se move e faz parte do ecossistema.'
  ],
  paises: [
    'É um território reconhecido internacionalmente, com cultura, governo e população.',
    'Pense em uma nação com história, cidades e identidade própria.',
    'Esse nome costuma remeter a um país real, com fronteiras e tradições próprias.'
  ],
  'harry-potter': [
    'Pense em Hogwarts, magia, feitiços, criaturas fantásticas e amizades.',
    'Essa palavra está ligada ao universo mágico, às aulas de bruxaria e às aventuras de Harry.',
    'Relacione com personagens como Harry, Ron, Hermione, Voldemort e Dumbledore.'
  ],
  cidades: [
    'Esse nome lembra ruas, monumentos, bairros e grande movimento urbano.',
    'Pense em um lugar com edifícios, avenidas e vida cotidiana intensa.',
    'Essa palavra pode remeter a uma capital, uma metrópole ou uma cidade famosa.'
  ],
  filmes: [
    'Pense em um título famoso, com personagens marcantes e cenas memoráveis.',
    'Essa palavra costuma aparecer em histórias do cinema, com trama e emoção.',
    'Relacione com um filme conhecido por seu enredo, visual ou personagens.'
  ],
  series: [
    'Pense em uma produção com episódios, personagens e enredos que continuam ao longo do tempo.',
    'Essa palavra está ligada a séries, temporada e histórias em capítulos.',
    'Relacione com uma obra muito assistida, conhecida por sua trama e personagens.'
  ],
  'super-herois': [
    'Pense em personagens com poderes, identidade secreta e missão de salvar o mundo.',
    'Essa palavra está ligada a força, coragem e histórias de fantasia.',
    'Relacione com superpoderes, vilões e batalhas épicas.'
  ],
  jogos: [
    'Pense em desafios, diversão, pontuação e mundos virtuais.',
    'Essa palavra remete à experiência de videogame, console ou computador.',
    'Relacione com aventura, estratégia, competição e personagens digitais.'
  ],
  esportes: [
    'Pense em uma modalidade praticada em campo, quadra, piscina ou pista.',
    'Essa palavra está ligada a competição, habilidade e treino.',
    'Relacione com Olimpíadas, torneios, regras e movimento físico.'
  ],
  comidas: [
    'Pense em um prato, doce, salgado ou ingrediente muito consumido.',
    'Essa palavra está ligada a sabor, cozinha, receitas e mesa familiar.',
    'Relacione com comida tradicional, ingredientes e preparo culinário.'
  ],
  profissoes: [
    'Pense em uma atividade profissional com formação, responsabilidade e rotina.',
    'Essa palavra remete a trabalho, serviço, habilidade e especialização.',
    'Relacione com uma área de atuação humana muito reconhecida no cotidiano.'
  ],
  tecnologia: [
    'Pense em software, hardware, redes, dispositivos e sistemas digitais.',
    'Essa palavra está ligada a internet, celular, computadores e ferramentas digitais.',
    'Relacione com programação, dados, conectividade e inovação tecnológica.'
  ],
  historia: [
    'Pense em acontecimentos do passado, civilizações e personagens marcantes.',
    'Essa palavra está ligada ao estudo do que aconteceu antes de hoje.',
    'Relacione com povos, guerras, impérios, descobertas e monumentos.'
  ],
  musica: [
    'Pense em sons, ritmos, instrumentos e artistas muito conhecidos.',
    'Essa palavra está ligada a melodias, composição e expressão artística.',
    'Relacione com música, canções, bandas, instrumentos e cultura sonora.'
  ],
  biblia: [
    'Pense em personagens, histórias e ensinamentos famosos da tradição religiosa.',
    'Essa palavra está ligada a relatos bíblicos, fé e cultura espiritual.',
    'Relacione com narrativas antigas, profetas, reis e momentos importantes da Bíblia.'
  ],
  'conhecimentos-gerais': [
    'Pense em ciência, cultura, curiosidades e informações do cotidiano.',
    'Essa palavra está ligad a conhecimentos gerais, geografia, história e curiosidades.',
    'Relacione com trivia, escola, educação e saber do mundo real.'
  ],
  carros: [
    'Pense em automóveis, marcas, motores e mobilidade urbana.',
    'Essa palavra está ligada a veículos, estradas, velocidade e engenharia.',
    'Relacione com marcas, modelos, garagem e deslocamento diário.'
  ],
  natureza: [
    'Pense em paisagens, clima, elementos do planeta e vida silvestre.',
    'Essa palavra está ligada a rios, árvores, montanhas, mares e ecossistemas.',
    'Relacione com ambiente natural, flora, fauna e fenômenos da natureza.'
  ],
  personalidades: [
    'Pense em alguém muito conhecido pela arte, liderança, ciência ou influência.',
    'Essa palavra remete a figuras importantes do mundo cultural e histórico.',
    'Relacione com personalidades marcantes, reconhecidas por talento ou impacto.'
  ]
};

export const WORD_HINTS = {
  brasil: {
    facil: 'É o país que abriga a maior floresta tropical do mundo e também uma das maiores seleções de futebol da história.',
    medio: 'É uma nação da América do Sul famosa pelo futebol, pela música popular e pela diversidade cultural.',
    dificil: 'É o maior país da América do Sul, conhecido por sua extensão territorial, pela cultura rica e por cidades como Rio e São Paulo.'
  },
  frança: {
    facil: 'É um país europeu conhecido pela Torre Eiffel, pela capital Paris e pela moda internacional.',
    medio: 'É uma nação que concentra arte, cultura e história em cidades como Paris, Lyon e Marselha.',
    dificil: 'É um país europeu de grande influência cultural, famoso por Paris, pela gastronomia e por sua rica história.'
  },
  japao: {
    facil: 'É um país insular do leste da Ásia conhecido por tecnologia, cultura e cidades muito modernas.',
    medio: 'É um arquipélago conhecido pela fusão entre tradição milenar e inovação tecnológica muito avançada.',
    dificil: 'É um dos países mais desenvolvidos do mundo, famoso por Tokyo, tecnologia, anime e uma cultura muito rica e antiga.'
  },
  italia: {
    facil: 'É um país europeu famoso por Roma, pela pizza, pela pasta e por monumentos antigos.',
    medio: 'É uma nação muito ligada à arte, à história antiga e à culinária, com Roma como símbolo principal.',
    dificil: 'É um país da Europa meridional, conhecido por monumentos históricos, cidades como Roma, Florença e Veneza e por sua tradição culinária.'
  },
  argentina: {
    facil: 'É um país da América do Sul muito famoso por futebol, tango e personalidades como Maradona.',
    medio: 'É uma nação sul-americana conhecida pelo futebol, pelo tango e pela cidade de Buenos Aires.',
    dificil: 'É um país da América do Sul que se destaca no futebol, na música e na cultura latino-americana.'
  },
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
    facil: 'É o protagonista da história: um garoto órfão que descobre ser bruxo, entra em Hogwarts e vive aventuras ao lado de Ron e Hermione.',
    medio: 'É o nome do protagonista que cresceu sem conhecer os pais, estudou em Hogwarts e enfrentou desafios junto de Ron, Hermione e o professor Dumbledore.',
    dificil: 'É o nome do garoto que foi criado por tios cruéis, descobriu ser bruxo, viveu a infância em Hogwarts e enfrentou Voldemort em uma guerra de grande risco para o mundo mágico.'
  },
  hogwarts: {
    facil: 'É a escola de magia onde Harry, Ron e Hermione estudam, aprendem feitiços e vivem grandes aventuras entre casas e mistérios.',
    medio: 'É o castelo principal da saga, onde os bruxos aprendem poções, feitiços e enfrentam desafios emocionais, sociais e perigosos em cada ano letivo.',
    dificil: 'É a escola de magia e bruxaria centrada na saga, lar das casas Grifinória, Sonserina, Lufa-Lufa e Corvinal, palco de mistérios, rivalidades e batalhas decisivas.'
  },
  hedwig: {
    facil: 'É a coruja branca de Harry Potter, companheira fiel que o auxilia em mensagens, viagens e momentos de tensão.',
    medio: 'É a ave que acompanha Harry desde sua infância em Hogwarts, funcionando como mensageira e fiel companhia em momentos de risco e emoção.',
    dificil: 'É a coruja que representa apoio e proteção em Harry Potter, sendo uma presença constante em sua jornada e uma das marcas mais reconhecíveis do protagonista.'
  },
  'ron weasley': {
    facil: 'É o melhor amigo de Harry, conhecido por sua família grande e por ser muito leal.',
    medio: 'É o amigo de Harry que cresceu em uma família de bruxos e compartilha com ele muitos momentos difíceis e emocionantes.',
    dificil: 'É o irmão mais jovem de uma família numerosa de bruxos, companheiro fiel de Harry e Hermione e grande aliado em diversos desafios.'
  },
  'hermione granger': {
    facil: 'É a amiga muito inteligente de Harry, sempre preparada e estudiosa.',
    medio: 'É a personagem brilhante que combina inteligência, coragem e dedicação, sendo fundamental para muitas soluções.',
    dificil: 'É a amiga de Harry e Ron, conhecida por sua inteligência, pelo estudo incansável e por ajudar o grupo em momentos decisivos.'
  },
  'voldemort': {
    facil: 'É o vilão principal da história, conhecido por ser um bruxo muito poderoso e temido.',
    medio: 'É o nome do bruxo que busca poder absoluto e provoca medo em todo o mundo mágico.',
    dificil: 'É o maior antagonista da saga, um bruxo que representa medo, ambição e perigo para todos os personagens.'
  },
  dumbledore: {
    facil: 'É o diretor da escola de Hogwarts e uma figura muito sábia.',
    medio: 'É o professor e diretor de Hogwarts, conhecido por sua grande sabedoria e por orientar Harry em momentos críticos.',
    dificil: 'É o mestre de Hogwarts, um dos bruxos mais respeitados da história e um mentor fundamental para Harry.'
  },
  'sirius black': {
    facil: 'É um personagem ligado ao passado de Harry e que vive uma história intensa de fuga e lealdade.',
    medio: 'É um dos personagens mais importantes da trama, conhecido por sua ligação com Harry e por viver uma história marcada por injustiça.',
    dificil: 'É um bruxo que se torna amigo de Harry e tem um papel muito emocional na história, ligado à família e à memória de seu pai.'
  },
  hagrid: {
    facil: 'É um personagem gigante, amigável e muito ligado aos animais fantásticos.',
    medio: 'É o guardião dos animais mágicos e um dos personagens mais carinhosos da história.',
    dificil: 'É o professor e guarda de criaturas mágicas da escola, amado por sua forma tranquila e por sua ligação com a natureza fantástica.'
  },
  muggle: {
    facil: 'É a palavra usada para pessoas comuns, sem magia.',
    medio: 'É um termo para quem não nasceu em um mundo bruxo e vive entre pessoas normais.',
    dificil: 'É a expressão usada para designar pessoas comuns, sem poderes mágicos, em contraste com os bruxos.'
  },
  quidditch: {
    facil: 'É o esporte mais famoso do mundo bruxo, jogado com vassouras no ar.',
    medio: 'É o esporte mágico praticado por bruxos e bruxas, com bolas e arremates muito diferentes do futebol.',
    dificil: 'É o jogo mais conhecido do universo mágico, disputado em vassouras e marcado por agilidade, estratégia e velocidade.'
  },
  azkaban: {
    facil: 'É a prisão dos bruxos, um lugar temido e de difícil fuga.',
    medio: 'É a prisão mágica mais temida do mundo bruxo, conhecida por sua atmosfera sombria e severidade.',
    dificil: 'É o lugar de encarceramento dos bruxos mais perigosos, transformado em símbolo de medo e punição.'
  },
  gringotes: {
    facil: 'É o banco dos bruxos, onde se guarda dinheiro e objetos valiosos.',
    medio: 'É o nome do banco mágico usado por bruxos para guardar riquezas e preservar tesouros importantes.',
    dificil: 'É a instituição financeira do mundo bruxo, conhecida por sua segurança e por guardar bens valiosos.'
  }
};

export const forcaData = {
  difficultyLevels: DIFFICULTY_LEVELS,
  categories: CATEGORY_META,
  wordBank: WORD_BANK,
  genericHints: GENERIC_HINTS,
  specificHints: WORD_HINTS,
  allWords: ALL_WORDS,
  categoryByKey: CATEGORY_BY_KEY
};

export default forcaData;
