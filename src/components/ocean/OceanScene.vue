<template>
  <div class="ocean-scene" ref="sceneRef">
    <Clouds />
    <Seagulls />
    <div class="boat-container" ref="boatRef">
      <SailBoat />
    </div>
    <OceanWaves />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import SailBoat from './SailBoat.vue'
import OceanWaves from './OceanWaves.vue'
import Seagulls from './Seagulls.vue'
import Clouds from './Clouds.vue'

const sceneRef = ref(null)
const boatRef = ref(null)

onMounted(() => {
  if (boatRef.value) {
    gsap.to(boatRef.value, {
      y: -8, rotation: 3, duration: 2,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }
})
</script>

<style scoped>
.ocean-scene {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 380px;
  flex-shrink: 0;
}
.boat-container {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}
</style>
