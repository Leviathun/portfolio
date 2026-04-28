<template>
  <div class="coral-reef-wrapper">
    <img :src="coralImg" alt="Coral reef" class="coral-reef-img" />
  </div>
</template>

<script setup>
import coralImg from '@/assets/images/coral-reef.png'
</script>

<style scoped>
.coral-reef-wrapper {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 160px;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.coral-reef-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0.5;
  filter: brightness(0.7) saturate(1.2);
}
</style>
