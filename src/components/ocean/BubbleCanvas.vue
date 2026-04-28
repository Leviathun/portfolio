<template>
  <canvas ref="canvasRef" class="bubble-canvas" :style="{ opacity: canvasOpacity }"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
const canvasOpacity = ref(0)
let animId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let bubbles = []
  const count = window.innerWidth < 768 ? 10 : 18

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
  resize()
  window.addEventListener('resize', resize)

  // Show bubbles only when scrolled past hero
  function onScroll() {
    const heroH = window.innerHeight
    const scrollY = window.scrollY
    canvasOpacity.value = Math.min(1, Math.max(0, (scrollY - heroH * 0.5) / (heroH * 0.5)))
  }
  window.addEventListener('scroll', onScroll)

  class Bubble {
    constructor() { this.reset() }
    reset() {
      this.x = Math.random() * canvas.width
      this.y = canvas.height + Math.random() * 200
      this.r = Math.random() * 4 + 1.5
      this.speed = Math.random() * 0.6 + 0.2
      this.wobble = Math.random() * 1.5
      this.wobbleSpeed = Math.random() * 0.02 + 0.008
      this.opacity = Math.random() * 0.25 + 0.08
      this.t = Math.random() * Math.PI * 2
    }
    update() {
      this.y -= this.speed
      this.t += this.wobbleSpeed
      this.x += Math.sin(this.t) * this.wobble * 0.2
      if (this.y < -20) this.reset()
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`
      ctx.fill()
      ctx.beginPath()
      ctx.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.25, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.4})`
      ctx.fill()
    }
  }

  for (let i = 0; i < count; i++) {
    const b = new Bubble()
    b.y = Math.random() * canvas.height
    bubbles.push(b)
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    bubbles.forEach(b => { b.update(); b.draw() })
    animId = requestAnimationFrame(animate)
  }
  animate()
})

onUnmounted(() => { if (animId) cancelAnimationFrame(animId) })
</script>

<style scoped>
.bubble-canvas {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
  transition: opacity 0.5s ease;
}
</style>
