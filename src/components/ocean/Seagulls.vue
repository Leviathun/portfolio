<template>
  <div class="seagulls">
    <svg v-for="(bird, i) in birds" :key="i" class="seagull" :style="bird.style" viewBox="0 0 60 20" fill="none">
      <path class="wing-left" d="M30,15 Q20,2 5,8" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path class="wing-right" d="M30,15 Q40,2 55,8" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>
  </div>
</template>

<script setup>
const birds = [
  { style: { top: '15%', right: '20%', width: '40px', animationDuration: '1.8s' } },
  { style: { top: '8%', right: '35%', width: '30px', animationDuration: '2.2s', animationDelay: '0.5s' } },
]
</script>

<style scoped>
.seagulls { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
.seagull { position: absolute; animation: flap var(--dur, 2s) ease-in-out infinite; }
.wing-left { transform-origin: 30px 15px; animation: flap-left 1.8s ease-in-out infinite; }
.wing-right { transform-origin: 30px 15px; animation: flap-right 1.8s ease-in-out infinite; }
@keyframes flap-left { 0%,100%{d:path("M30,15 Q20,2 5,8")} 50%{d:path("M30,15 Q20,12 5,14")} }
@keyframes flap-right { 0%,100%{d:path("M30,15 Q40,2 55,8")} 50%{d:path("M30,15 Q40,12 55,14")} }
</style>
