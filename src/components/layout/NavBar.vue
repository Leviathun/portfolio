<template>
  <nav class="navbar" :class="{ scrolled, dark: isDark }" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo" @click.prevent="scrollTo('hero')"><b>< </b>Portfolio<b> /></b></a>
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a :href="'#' + item.id" class="nav-link" :class="{ active: activeSection === item.id }" @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
        </li>
      </ul>
      <button class="nav-toggle" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const scrolled = ref(false)
const isDark = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')


function onScroll() {
  scrolled.value = window.scrollY > 50
  isDark.value = window.scrollY > window.innerHeight * 0.7

  const scrollY = window.scrollY + 120
  document.querySelectorAll('section[id]').forEach(s => {
    if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
      activeSection.value = s.id
    }
  })
}

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 16px 0;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.15);
  transition: all 0.4s ease;
}
.navbar.scrolled { padding: 10px 0; }
.navbar.scrolled:not(.dark) { background: rgba(255,255,255,0.25); }
.navbar.dark {
  background: rgba(4,13,33,0.85);
  border-bottom-color: rgba(6,182,212,0.12);
}
.nav-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }

.nav-logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; color: #0f2b44; transition: color 0.4s ease; }
.dark .nav-logo { color: #e0f2fe; }


.nav-links { display: flex; gap: 8px; }
.nav-link {
  padding: 8px 16px; border-radius: var(--radius-sm);
  color: #1e4d6e; font-size: 0.9rem; font-weight: 500;
  transition: all 0.3s ease; position: relative;
}
.dark .nav-link { color: #7dd3fc; }
.nav-link:hover, .nav-link.active { color: #0369a1; background: rgba(3,105,161,0.1); }
.dark .nav-link:hover, .dark .nav-link.active { color: #e0f2fe; background: rgba(6,182,212,0.1); }
.nav-link.active::after {
  content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
  width: 20px; height: 2px; background: #0891b2; border-radius: 2px;
}
.dark .nav-link.active::after { background: #22d3ee; }

.nav-toggle { display: none; flex-direction: column; gap: 5px; padding: 4px; }
.nav-toggle span { width: 24px; height: 2px; background: #0f2b44; border-radius: 2px; transition: var(--transition); }
.dark .nav-toggle span { background: #e0f2fe; }



@media(max-width:768px) {
  .nav-links {
    position: fixed; top: 0; right: -100%; width: 70%; height: 100vh;
    flex-direction: column; background: rgba(4,13,33,0.95);
    backdrop-filter: blur(20px);
    padding: 80px 32px 32px; gap: 8px;
    transition: right 0.4s cubic-bezier(.4,0,.2,1);
    border-left: 1px solid rgba(6,182,212,0.12);
  }
  .nav-links.open { right: 0; }
  .nav-links .nav-link { color: #7dd3fc; }
  .nav-toggle { display: flex; z-index: 1001; }
  .nav-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .nav-toggle.active span:nth-child(2) { opacity: 0; }
  .nav-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
}
</style>
