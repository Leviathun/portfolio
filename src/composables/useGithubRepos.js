import { ref, onMounted } from 'vue'

const GITHUB_USERNAME = 'Leviathun'
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
const EXCLUDE_REPOS = ['Leviathun']

const CATEGORY_MAP = {
  'Spooky_Housemaid_Game': 'game',
  'Frist-appium-project': 'mobile',
  'Backend-Medal-Olympic-Project': 'backend',
  'Compo-Lab07-11-backend': 'backend',
  'Frontend-Medal-Olympic-Project': 'web',
  'Component-Lab2-6-Vue-dev-with-Vite-and-TypeScript': 'web',
  'Component-Passender-of-airline-Project': 'web',
  'Component-Lab01-Intro-to-vue': 'web',
  'Ned-Compo-fontend': 'web',
  'vue3-realworld-example-app': 'web',
  'Calamity_book_clone': 'web',
  'DatabaseJason': 'backend',
  'Lab07': 'web',
  'Lab3-repo': 'web',
  'Lab3-repo-3.3': 'web',
  'se234-lab12-automate-test-frontend': 'other',
  'Katalon-Sample-Test': 'other',
  'Lab10-2-katalon': 'other',
  'Lab4-repo': 'other',
  'Lab2-repo1': 'other',
  'Lab2-repo2': 'other',
}

const FRIENDLY_NAMES = {
  'Spooky_Housemaid_Game': 'Spooky Housemaid Game 👻',
  'Backend-Medal-Olympic-Project': 'Olympic Medal Tracker (Backend)',
  'Frontend-Medal-Olympic-Project': 'Olympic Medal Tracker (Frontend)',
  'Component-Lab2-6-Vue-dev-with-Vite-and-TypeScript': 'Vue + Vite + TypeScript App',
  'Component-Passender-of-airline-Project': 'Airline Passenger System',
  'Compo-Lab07-11-backend': 'Component Lab Backend API',
  'Calamity_book_clone': 'Calamity Book Clone',
  'Frist-appium-project': 'Appium Mobile Testing',
  'DatabaseJason': 'Database JSON Project',
  'vue3-realworld-example-app': 'Vue 3 RealWorld App',
}

const DESCRIPTIONS = {
  'Spooky_Housemaid_Game': 'A spooky horror game built with JavaScript — navigate the haunted house!',
  'Backend-Medal-Olympic-Project': 'Backend API for tracking Olympic medals, built with Java & Spring Boot.',
  'Frontend-Medal-Olympic-Project': 'Vue.js frontend for the Olympic Medal tracking system.',
  'Component-Lab2-6-Vue-dev-with-Vite-and-TypeScript': 'Vue 3 component development with Vite and TypeScript.',
  'Component-Passender-of-airline-Project': 'Airline passenger management system built with Vue.js.',
  'Compo-Lab07-11-backend': 'Java backend API for component-based architecture labs.',
  'Calamity_book_clone': 'Book management web app clone using EJS and Node.js.',
  'Frist-appium-project': 'Mobile testing automation with Appium framework.',
  'DatabaseJason': 'Database project with JSON data management.',
  'vue3-realworld-example-app': 'Real-world app implementation using Vue 3 Composition API.',
}

export const LANG_COLORS = {
  'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Java': '#b07219',
  'Vue': '#41b883', 'HTML': '#e34c26', 'CSS': '#563d7c',
  'EJS': '#a91e50', 'Python': '#3572A5',
}

export const LANG_ICONS = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'EJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
}

export function useGithubRepos() {
  const repos = ref([])
  const loading = ref(true)
  const error = ref(null)
  const activeFilter = ref('all')

  function getCategory(name) { return CATEGORY_MAP[name] || 'other' }
  function getFriendlyName(name) { return FRIENDLY_NAMES[name] || name.replace(/[-_]/g, ' ') }
  function getDescription(repo) {
    if (repo.description) return repo.description
    if (DESCRIPTIONS[repo.name]) return DESCRIPTIONS[repo.name]
    const cat = getCategory(repo.name)
    return `A ${cat} project built with ${repo.language || 'various technologies'}.`
  }

  const filteredRepos = ref([])

  function filterRepos(filter) {
    activeFilter.value = filter
    if (filter === 'all') { filteredRepos.value = [...repos.value] }
    else { filteredRepos.value = repos.value.filter(r => getCategory(r.name) === filter) }
  }

  async function fetchRepos() {
    try {
      loading.value = true
      const res = await fetch(GITHUB_API)
      const data = await res.json()
      const filtered = data.filter(r =>
        !r.private && !EXCLUDE_REPOS.includes(r.name) && (!r.fork || CATEGORY_MAP[r.name])
      )
      filtered.sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
      repos.value = filtered
      filteredRepos.value = [...filtered]
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchRepos)

  return { repos, filteredRepos, loading, error, activeFilter, filterRepos, getCategory, getFriendlyName, getDescription }
}
