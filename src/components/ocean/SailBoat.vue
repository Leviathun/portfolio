<template>
  <div class="sailboat" ref="sailboatEl">
    <img :src="sailboatImg" alt="Sailboat with sailor boy" class="sailboat-img" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import sailboatImg from '@/assets/images/sailboat.png'

const sailboatEl = ref(null)

onMounted(() => {
  if (!sailboatEl.value) return
  const img = sailboatEl.value.querySelector('.sailboat-img')
  gsap.fromTo(img, { rotation: -2 }, {
    rotation: 2, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1
  })
})
</script>

<style scoped>
.sailboat {
  width: 180px;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4));
}
.sailboat-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
@media(max-width:768px) {
  .sailboat { width: 120px; }
}
</style>
