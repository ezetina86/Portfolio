export const projects = [
  {
    title: 'MCP Weather Server',
    category: 'AI',
    image: '/img/mcp.png',
    tags: ['Python', 'FastMCP', 'API', 'OpenMeteo', 'Weather'],
    description: 'Built a Model Context Protocol server providing real-time weather data and forecasts through Open-Meteo API, featuring location search and comprehensive weather information.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/mcp-example'
  },
  {
    title: 'Weather Dashboard',
    category: 'Cloud',
    image: '/img//weather.png',
    tags: ['React', 'Node.js', 'AWS', 'API'],
    description: 'Developed a cloud-based weather dashboard that fetches real-time weather data from an external API and displays it in an intuitive UI.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/weather_app'
  },
  {
    title: 'Automated News Aggregator Bot',
    category: 'Automation',
    image: '/img/news-robot.png',
    tags: ['Python', 'BeautifulSoup', 'MongoDB', 'Automation'],
    description: 'Created a Python bot to scrape, process, and store news articles from various sources, providing a centralized and categorized news feed.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina',
  },
  {
    title: 'Exam Generator',
    category: 'AI',
    image: '/img/exam_generator.png',
    tags: ['Python', 'Flask', 'MongoDB', 'CI/CD', 'GCP', 'Generative AI', 'Docker'],
    description: 'Certification exam generator that scrapes questions from various sources, processes them, and generates practice exams for users. Now live in production - try it out!',
    liveUrl: 'https://exam-generator.ezetina.com',
    repoUrl: 'https://github.com/ezetina86/exam-generator',
  },
  {
    title: 'Teams Active Script',
    category: 'Automation',
    image: '/img/teams_active.png',
    tags: ['Python', 'macOS', 'AppleScript', 'Automation', 'uv'],
    description: 'A macOS utility that prevents Microsoft Teams from switching your status to "Away". Uses AppleScript to simulate safe activity, native caffeinate to block system sleep, and a rich real-time dashboard with pause/resume, auto-shutdown on failures, and session summary reports.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/chteams',
  },
  {
    title: 'Power Cost',
    category: 'Data',
    image: '/img/power_cost.png',
    tags: ['Python', 'Streamlit', 'Plotly', 'Data Analysis', 'uv'],
    description: 'Analyses real laptop power consumption logs (CPU & GPU watts per minute) and forecasts monthly electricity cost. Features descriptive statistics, kWh projections with PSU efficiency, and an interactive Streamlit dashboard with Plotly charts.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/power_cost',
  },
  {
    title: 'Commit — Precision Habit Tracking',
    category: 'Go',
    image: '/img/commit_app.png',
    tags: ['Go', 'SQLite', 'CLI', 'Data Visualization', 'API'],
    description: 'A local-first habit tracker with a developer-friendly terminal interface. Features GitHub-style 52-week contribution graphs, quantitative tracking with custom units, retroactive check-ins, tagging & filtering, and dynamic progress insights via a built-in terminal analysis system.',
    liveUrl: null,
    repoUrl: 'https://github.com/ezetina86/commit-app',
  }
];

export const categories = ['All', 'Cloud', 'AI', 'Automation', 'Data', 'Python', 'Go'];
