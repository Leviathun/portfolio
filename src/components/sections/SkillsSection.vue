<template>
  <section class="section skills" id="skills">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">&lt;skills&gt;</span>
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>
      </div>
      <div class="skills-grid">
        <TreasureCard v-for="cat in categories" :key="cat.title">
          <h3 class="skill-cat-title">
            <span v-html="cat.svg"></span>
            {{ cat.title }}
          </h3>
          <div class="skill-items">
            <SkillItem v-for="s in cat.skills" :key="s.name" :name="s.name" :icon="s.icon" :invert="s.invert || false" />
          </div>
        </TreasureCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import TreasureCard from '@/components/ui/TreasureCard.vue'
import SkillItem from '@/components/ui/SkillItem.vue'

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const categories = [
  { title: 'Languages', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', skills: [
    { name: 'JavaScript', icon: `${D}/javascript/javascript-original.svg` },
    { name: 'TypeScript', icon: `${D}/typescript/typescript-original.svg` },
    { name: 'Java', icon: `${D}/java/java-original.svg` },
    { name: 'HTML5', icon: `${D}/html5/html5-original.svg` },
    { name: 'CSS3', icon: `${D}/css3/css3-original.svg` },
  ]},
  { title: 'Frameworks & Libraries', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>', skills: [
    { name: 'Vue.js', icon: `${D}/vuejs/vuejs-original.svg` },
    { name: 'Bootstrap', icon: `${D}/bootstrap/bootstrap-original.svg` },
    { name: 'Node.js', icon: `${D}/nodejs/nodejs-original.svg` },
  ]},
  { title: 'Tools & Platforms', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>', skills: [
    { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
    { name: 'Git', icon: `${D}/git/git-original.svg` },
    { name: 'GitHub', icon: `${D}/github/github-original.svg`, invert: true },
    { name: 'Docker', icon: `${D}/docker/docker-original.svg` },
    { name: 'NPM', icon: `${D}/npm/npm-original-wordmark.svg` },
  ]},
  { title: 'Database & Design', svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>', skills: [
    { name: 'MySQL', icon: `${D}/mysql/mysql-original.svg` },
    { name: 'Figma', icon: `${D}/figma/figma-original.svg` },
    { name: 'Canva', icon: `${D}/canva/canva-original.svg` },
    { name: 'Notion', icon: `${D}/notion/notion-original.svg`, invert: true },
  ]},
]
</script>

<style scoped>
.skills {
  background: linear-gradient(180deg, var(--depth-2) 0%, var(--depth-3) 100%);
}
.section-tag { color: var(--teal-light); }
.section-title { color: var(--text-dark); }
.section-subtitle { color: var(--text-dark-sub); }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.skill-cat-title {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-heading); font-size: 1rem; font-weight: 700;
  margin-bottom: 20px; color: var(--metal-gold-light);
}
.skill-cat-title :deep(svg) { stroke: var(--teal); }
.skill-items { display: flex; flex-wrap: wrap; gap: 12px; }
</style>
