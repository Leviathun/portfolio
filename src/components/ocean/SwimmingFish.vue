<template>
  <div class="swimming-fish">
    <img v-for="(f, i) in fishList" :key="i" :src="fishImg" :alt="'Fish ' + (i+1)"
      class="fish" :style="f.style" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import fishImg from '@/assets/images/fish.png'

const fishList = [
  { style: { top: '35%', left: '5%', width: '60px', opacity: '0.4', transform: 'scaleX(1)' } },
  { style: { top: '55%', right: '8%', width: '45px', opacity: '0.3', transform: 'scaleX(-1)' } },
  { style: { top: '75%', left: '15%', width: '50px', opacity: '0.35', transform: 'scaleX(1)' } },
]

onMounted(() => {
  document.querySelectorAll('.fish').forEach((el, i) => {
    gsap.to(el, {
      x: i % 2 === 0 ? 20 : -20,
      y: 8,
      duration: 3 + i * 0.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  })
})
</script>

<style scoped>
.swimming-fish { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
.fish {
  position: absolute;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
  animation: glow-pulse 4s ease-in-out infinite;
}
</style>
