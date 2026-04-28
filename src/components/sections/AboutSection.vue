<template>
  <section class="section about" id="about">
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
import TreasureCard from '@/components/ui/TreasureCard.vue'
import StatCounter from '@/components/ui/StatCounter.vue'

const cards = [
  { icon: '🎯', title: 'Who Am I', text: "Hi, I'm <strong>@Leviathun</strong> — a curious developer who's always looking for the next challenge. I specialize in building digital products across multiple platforms." },
  { icon: '👀', title: 'Interests', text: "I'm deeply interested in developing <strong>websites</strong>, <strong>games</strong>, and <strong>mobile applications</strong>. I love turning ideas into reality through code." },
  { icon: '🌱', title: 'Currently Learning', text: 'Expanding my skills in <strong>Java</strong>, <strong>JavaScript</strong>, <strong>Vue.js</strong>, and <strong>Vite</strong>. Always eager to explore new technologies.' },
  { icon: '💞️', title: 'Collaboration', text: "I'm looking to <strong>collaborate with anyone</strong> on exciting projects. Let's create something amazing together!" },
]
</script>

<style scoped>
.about {
  background: linear-gradient(180deg, var(--depth-1) 0%, var(--depth-2) 100%);
}
.section-tag { color: rgba(255,255,255,0.7); }
.section-title { color: #fff; }
.section-subtitle { color: rgba(255,255,255,0.75); }
.about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 60px; }
.about-stats {
  display: flex; justify-content: center; gap: 48px; flex-wrap: wrap;
  padding: 40px; background: rgba(0,0,0,0.15);
  border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}
</style>
