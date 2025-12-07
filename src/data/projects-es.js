export const projects = [
  {
    title: 'Servidor MCP del Clima',
    category: 'Python',
    image: '/img/mcp.png',
    tags: ['Python', 'FastMCP', 'API', 'OpenMeteo', 'Clima'],
    description: 'Construí un servidor de Protocolo de Contexto de Modelo que proporciona datos meteorológicos en tiempo real y pronósticos a través de la API Open-Meteo, con funciones de búsqueda de ubicación e información meteorológica completa.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/mcp-example'
  },
  {
    title: 'Panel de Clima',
    category: 'Nube',
    image: '/img//weather.png',
    tags: ['React', 'Node.js', 'AWS', 'API'],
    description: 'Desarrollé un panel meteorológico basado en la nube que obtiene datos meteorológicos en tiempo real de una API externa y los muestra en una interfaz intuitiva.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/weather_app'
  },
  {
    title: 'Bot Agregador de Noticias Automatizado',
    category: 'Python',
    image: '/img/news-robot.png',
    tags: ['Python', 'BeautifulSoup', 'MongoDB', 'Automatización'],
    description: 'Creé un bot en Python para raspar, procesar y almacenar artículos de noticias de varias fuentes, proporcionando un feed de noticias centralizado y categorizado.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/news_bot'
  },
  {
    title: 'Generador de Exámenes',
    category: 'Python',
    image: '/img/exam_generator.png',
    tags: ['Python', 'Flask', 'MongoDB', 'CI/CD', 'GCP', 'IA Generativa', 'Docker'],
    description: '🚀 Generador de exámenes de certificación que raspa preguntas de varias fuentes, las procesa y genera exámenes de práctica para usuarios. ¡Ya está en producción - pruébalo!',
    liveUrl: 'https://exam-generator.ezetina.com/',
    repoUrl: 'https://github.com/ezetina86/exam-generator'
  }
];

export const categories = ['Todos', 'Nube', 'DevOps', 'Big Data', 'Python'];
