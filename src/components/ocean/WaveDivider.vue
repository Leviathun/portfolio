<template>
  <div class="wave-divider">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
      <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" :fill="color"/>
    </svg>
  </div>
</template>

<script setup>
defineProps({ color: { type: String, default: 'var(--ocean-deep)' } })
</script>

<style scoped>
.wave-divider { position: relative; z-index: 2; margin-top: -1px; }
.wave-divider svg { display: block; width: 100%; height: 60px; }
</style>
