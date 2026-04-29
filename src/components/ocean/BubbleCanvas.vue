<template>
  <canvas ref="canvasRef" class="bubble-canvas" :style="{ opacity: canvasOpacity }"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
const canvasOpacity = ref(0)
let animId = null
let resizeHandler = null
let scrollHandler = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let bubbles = []
  const count = window.innerWidth < 768 ? 18 : 35

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  resizeHandler = resize
  window.addEventListener('resize', resizeHandler)

  scrollHandler = () => {
    const heroH = window.innerHeight
    canvasOpacity.value = Math.min(1, Math.max(0, (window.scrollY - heroH * 0.3) / (heroH * 0.5)))
  }
  window.addEventListener('scroll', scrollHandler)

  class Bubble {
    constructor() { this.reset(true) }
    reset(init = false) {
      this.x = Math.random() * canvas.width
      this.y = init
        ? Math.random() * canvas.height
        : canvas.height + Math.random() * 50
      this.r = Math.random() * 8 + 3
      this.speed = Math.random() * 0.5 + 0.15
      this.wobble = Math.random() * 1.5
      this.wobbleSpeed = Math.random() * 0.015 + 0.005
      this.opacity = Math.random() * 0.4 + 0.2
      this.t = Math.random() * Math.PI * 2
    }
    update() {
      this.y -= this.speed
      this.t += this.wobbleSpeed
      this.x += Math.sin(this.t) * this.wobble * 0.25
      if (this.y < -20) this.reset()
    }
    draw() {
      // White bubble body
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.35})`
      ctx.fill()

      // White stroke outline
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Highlight dot
      ctx.beginPath()
      ctx.arc(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r * 0.25, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
      ctx.fill()
    }
  }

  for (let i = 0; i < count; i++) bubbles.push(new Bubble())

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    bubbles.forEach(b => { b.update(); b.draw() })
    animId = requestAnimationFrame(animate)
  }
  animate()
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
})
</script>

<style scoped>
.bubble-canvas {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1; pointer-events: none;
  transition: opacity 0.5s ease;
}
</style>
