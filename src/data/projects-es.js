export const projects = [
  {
    title: 'Servidor MCP del Clima',
    category: 'IA',
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
    category: 'Automatización',
    image: '/img/news-robot.png',
    tags: ['Python', 'BeautifulSoup', 'MongoDB', 'Automatización'],
    description: 'Creé un bot en Python para raspar, procesar y almacenar artículos de noticias de varias fuentes, proporcionando un feed de noticias centralizado y categorizado.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/news_bot'
  },
  {
    title: 'Generador de Exámenes',
    category: 'IA',
    image: '/img/exam_generator.png',
    tags: ['Python', 'Flask', 'MongoDB', 'CI/CD', 'GCP', 'IA Generativa', 'Docker'],
    description: 'Generador de exámenes de certificación que raspa preguntas de varias fuentes, las procesa y genera exámenes de práctica para usuarios. Ya está en producción - pruébalo.',
    liveUrl: 'https://exam-generator.ezetina.com',
    repoUrl: 'https://github.com/ezetina86/exam-generator'
  },
  {
    title: 'Teams Active Script',
    category: 'Automatización',
    image: '/img/teams_active.png',
    tags: ['Python', 'macOS', 'AppleScript', 'Automatización', 'uv'],
    description: 'Utilidad para macOS que evita que Microsoft Teams cambie tu estado a "Sin conexión". Usa AppleScript para simular actividad de forma segura, caffeinate nativo para bloquear el modo de suspensión, y un dashboard en tiempo real con pausa/reanudación, apagado automático ante fallos y resumen de sesión.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/chteams',
  },
  {
    title: 'Power Cost',
    category: 'Datos',
    image: '/img/power_cost.png',
    tags: ['Python', 'Streamlit', 'Plotly', 'Análisis de Datos', 'uv'],
    description: 'Analiza registros reales de consumo de energía de laptops (vatios de CPU y GPU por minuto) y pronostica el costo mensual de electricidad. Incluye estadísticas descriptivas, proyecciones de kWh con eficiencia de PSU y un dashboard interactivo con gráficos Plotly.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/power_cost',
  },
  {
    title: 'Commit — Seguimiento de Hábitos de Precisión',
    category: 'Go',
    image: '/img/commit_app.png',
    tags: ['Go', 'SQLite', 'CLI', 'Visualización de Datos', 'API'],
    description: 'Rastreador de hábitos local con interfaz de terminal estilo desarrollador. Incluye gráficos de contribución de 52 semanas tipo GitHub, seguimiento cuantitativo con unidades personalizadas, registros retroactivos, etiquetado y filtrado, y análisis dinámico de progreso mediante un sistema de terminal integrado.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/commit-app',
  }
];

export const categories = ['Todos', 'Nube', 'IA', 'Automatización', 'Datos', 'Python', 'Go'];
