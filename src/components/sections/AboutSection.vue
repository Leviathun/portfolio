<template>
  <section class="section about" id="about">
    <!-- Water surface transition from hero (limited height) -->
    <img :src="waterSurface" alt="" class="water-surface-top" aria-hidden="true" />

    <!-- Decorative: Diver on the right -->
    <img :src="diverImg" alt="" class="deco deco-diver" ref="diverRef" aria-hidden="true" />

    <div class="container">
      <div class="section-header">
        <span class="section-tag">&lt;about&gt;</span>
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Get to know the person behind the code</p>
      </div>
      <div class="about-grid">
        <TreasureCard v-for="card in cards" :key="card.icon">
          <span class="card-icon">{{ card.icon }}</span>
          <h3>{{ card.title }}</h3>
          <p v-html="card.text"></p>
        </TreasureCard>
      </div>
      <div class="about-stats">
        <StatCounter :target="22">Public Repos</StatCounter>
        <StatCounter :target="3">Years Coding</StatCounter>
        <StatCounter :target="15">Technologies</StatCounter>
        <StatCounter :target="500" suffix="+">Commits+</StatCounter>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import TreasureCard from '@/components/ui/TreasureCard.vue'
import StatCounter from '@/components/ui/StatCounter.vue'

import waterSurface from '@/assets/images/other/to the under.png'
import diverImg from '@/assets/images/other/diver.png'

const diverRef = ref(null)

const cards = [
  { icon: '🎯', title: 'Who Am I', text: "Hi, I'm <strong>@Leviathun</strong> — a curious developer who's always looking for the next challenge. I specialize in building digital products across multiple platforms." },
  { icon: '👀', title: 'Interests', text: "I'm deeply interested in developing <strong>websites</strong>, <strong>games</strong>, and <strong>mobile applications</strong>. I love turning ideas into reality through code." },
  { icon: '🌱', title: 'Currently Learning', text: 'Expanding my skills in <strong>Java</strong>, <strong>JavaScript</strong>, <strong>Vue.js</strong>, and <strong>Vite</strong>. Always eager to explore new technologies.' },
  { icon: '💞️', title: 'Collaboration', text: "I'm looking to <strong>collaborate with anyone</strong> on exciting projects. Let's create something amazing together!" },
]

onMounted(() => {
  if (diverRef.value) {
    gsap.to(diverRef.value, {
      y: -18, rotation: 4, duration: 3.5,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }
})
</script>

<style scoped>
.about {
  position: relative;
  background: linear-gradient(180deg, var(--depth-1) 0%, var(--depth-2) 100%);
  padding-top: 220px;
}

/* Water surface - limited height, not blocking content */
.water-surface-top {
  position: absolute; top: -2px; left: 0;
  width: 100%; height: 180px;
  object-fit: cover; object-position: center top;
  z-index: 2; pointer-events: none;
  transform: rotate(180deg);
  -webkit-mask-image: linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
}

/* Decorative assets - z-index:2, behind container z-index:3 */
.deco {
  position: absolute; pointer-events: none; z-index: 2;
}
.deco-diver {
  right: -8%; top: 45%;
  width: 500px; height: auto;
  opacity: 0.9;
}

.section-tag { color: var(--teal-light); font-family: var(--font-mono); font-size: 0.85rem; }
.section-title { color: var(--text-primary); }
.section-subtitle { color: var(--text-secondary); }
.about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 60px; }
.about-stats {
  position: relative;
  display: flex; justify-content: center; gap: 48px; flex-wrap: wrap;
  padding: 40px; 
  background: linear-gradient(145deg, rgba(20, 40, 70, 0.5) 0%, rgba(6, 15, 35, 0.7) 100%);
  border-radius: var(--radius-lg); 
  border: 1px solid rgba(6, 182, 212, 0.25);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.1), 0 10px 30px rgba(0,0,0,0.4);
  transition: all 0.4s ease;
}
.about-stats:hover {
  transform: translateY(-5px);
  border-color: rgba(6, 182, 212, 0.5);
  background: linear-gradient(145deg, rgba(25, 45, 80, 0.6) 0%, rgba(8, 18, 40, 0.8) 100%);
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.2), 0 15px 40px rgba(0,0,0,0.5), 0 0 24px rgba(6, 182, 212, 0.2);
}

@media(max-width:1024px) {
  .deco-diver { width: 200px; right: 1%; }
}
@media(max-width:768px) {
  .about { padding-top: 160px; }
  .deco-diver { width: 140px; right: 0; opacity: 0.4; }
  .water-surface-top { height: 120px; }
}
</style>
