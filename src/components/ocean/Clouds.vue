<template>
  <div class="clouds">
    <svg v-for="(c, i) in clouds" :key="i" class="cloud" :style="c.style" viewBox="0 0 200 80" fill="white" fill-opacity="0.12">
      <ellipse cx="70" cy="50" rx="50" ry="25"/>
      <ellipse cx="110" cy="45" rx="40" ry="22"/>
      <ellipse cx="90" cy="35" rx="55" ry="28"/>
      <ellipse cx="130" cy="50" rx="35" ry="20"/>
    </svg>
  </div>
</template>

<script setup>
const clouds = [
  { style: { top: '5%', left: '10%', width: '140px', animation: 'cloud-drift 20s ease-in-out infinite alternate' } },
  { style: { top: '12%', right: '15%', width: '100px', animation: 'cloud-drift 25s ease-in-out infinite alternate-reverse' } },
  { style: { top: '3%', left: '55%', width: '80px', animation: 'cloud-drift 30s ease-in-out infinite alternate', opacity: '0.6' } },
]
</script>

<style scoped>
.clouds { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.cloud { position: absolute; }
</style>
