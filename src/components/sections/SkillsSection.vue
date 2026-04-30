<template>
  <section class="section skills" id="skills">
    <!-- Decorative fish: Dory left (flipped to face right), Nemo right, extra Nemo bottom-left -->
    <img :src="bluefishImg" alt="" class="deco deco-bluefish" ref="bluefishRef" aria-hidden="true" />
    <img :src="nemoImg" alt="" class="deco deco-nemo" ref="nemoRef" aria-hidden="true" />
    <img :src="nemoImg" alt="" class="deco deco-nemo-2" ref="nemo2Ref" aria-hidden="true" />
    <img :src="bluefishImg" alt="" class="deco deco-bluefish-2" ref="bluefish2Ref" aria-hidden="true" />

    <div class="container">
      <div class="section-header">
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import TreasureCard from '@/components/ui/TreasureCard.vue'
import SkillItem from '@/components/ui/SkillItem.vue'

import bluefishImg from '@/assets/images/other/bluefish.png'
import nemoImg from '@/assets/images/other/nemofish.png'

const bluefishRef = ref(null)
const nemoRef = ref(null)
const nemo2Ref = ref(null)
const bluefish2Ref = ref(null)

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

onMounted(() => {
  if (bluefishRef.value) {
    gsap.to(bluefishRef.value, { x: 40, y: -12, duration: 4.5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }
  if (nemoRef.value) {
    gsap.to(nemoRef.value, { x: -30, y: 10, rotation: -6, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }
  if (nemo2Ref.value) {
    gsap.to(nemo2Ref.value, { x: 20, y: 8, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }
  if (bluefish2Ref.value) {
    gsap.to(bluefish2Ref.value, { x: -25, y: 6, duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }
})
</script>

<style scoped>
.skills {
  position: relative;
  background: linear-gradient(180deg, var(--depth-2) 0%, var(--depth-3) 100%);
}

/* Decorative fish - z-index:2 behind container z-index:3 */
.deco {
  position: absolute; pointer-events: none; z-index: 2;
  opacity: 0.85;
}
/* Dory - flipped to face right */
.deco-bluefish {
  left: 1%; top: 25%;
  width: 150px; height: auto;
  transform: scaleX(-1);
}
.deco-bluefish-2 {
  right: 3%; bottom: 15%;
  width: 100px; height: auto;
  opacity: 0.6;
}
.deco-nemo {
  right: 2%; top: 30%;
  width: 130px; height: auto;
}
.deco-nemo-2 {
  left: 4%; bottom: 20%;
  width: 90px; height: auto;
  transform: scaleX(-1);
  opacity: 0.6;
}

.section-title { color: var(--text-primary); }
.section-subtitle { color: var(--text-secondary); }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.skill-cat-title {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-heading); font-size: 1rem; font-weight: 700;
  margin-bottom: 20px; color: var(--metal-gold-light);
}
.skill-cat-title :deep(svg) { stroke: var(--teal); }
.skill-items { display: flex; flex-wrap: wrap; gap: 12px; }

@media(max-width:1024px) {
  .deco-bluefish { width: 120px; }
  .deco-nemo { width: 100px; }
}
@media(max-width:768px) {
  .deco-bluefish { width: 80px; opacity: 0.4; }
  .deco-nemo { width: 70px; opacity: 0.4; }
  .deco-nemo-2, .deco-bluefish-2 { display: none; }
}
</style>
