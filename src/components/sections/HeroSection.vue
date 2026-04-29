<template>
  <section class="hero" id="hero">
    <!-- Sky background -->
    <img :src="heroBg" alt="" class="hero-bg" aria-hidden="true" />

    <!-- Cloud layers -->
    <img :src="cloudLeft" alt="" class="cloud cloud-left" aria-hidden="true" />
    <img :src="cloudRight" alt="" class="cloud cloud-right" aria-hidden="true" />
    <img :src="miniCloud" alt="" class="cloud mini-cloud" aria-hidden="true" />

    <!-- Hero content -->
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-profile">
          <img src="https://avatars.githubusercontent.com/u/153574902?v=4" alt="Tanabadee Kraitong" class="avatar" />
          <span class="status-badge">
            <span class="status-dot"></span>
            Available for hire
          </span>
        </div>
        <p class="hero-greeting">สวัสดี, I'm</p>
        <h1 class="hero-name">
          <span class="name-line">Tanabadee</span>
          <span class="name-line accent">Kraitong</span>
        </h1>
        <div class="hero-title-wrapper">
          <span class="hero-title-prefix">I'm a</span>
          <span class="hero-title">{{ typedText }}</span>
          <span class="typed-cursor">|</span>
        </div>
        <p class="hero-description">
          A passionate 21-year-old developer who loves crafting digital experiences —
          from interactive websites and thrilling games to sleek mobile applications.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('projects')">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://github.com/Leviathun" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Ocean layers: sea (back) -> boat (mid) -> miniwave (front) -->
    <div class="ocean-layers">
      <img :src="sea" alt="" class="wave-layer sea-surface" ref="seaRef" aria-hidden="true" />
      <div class="boat-wrapper" ref="boatRef">
        <img :src="boyAndBoat" alt="Sailor boy on sailboat" class="sailboat-img" />
        <img :src="wavesFromBoat" alt="" class="mini-wave" ref="miniWaveRef" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useTypingEffect } from '@/composables/useTypingEffect'

import heroBg from '@/assets/images/hero/hero background.png'
import cloudLeft from '@/assets/images/hero/left cloud.png'
import cloudRight from '@/assets/images/hero/right cloud.png'
import miniCloud from '@/assets/images/hero/mini cloud.png'
import wavesFromBoat from '@/assets/images/hero/waves from boat.png'
import boyAndBoat from '@/assets/images/hero/boy and boat.png'
import sea from '@/assets/images/hero/sea.png'

const { text: typedText } = useTypingEffect()
const boatRef = ref(null)
const seaRef = ref(null)

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

onMounted(() => {
  // Boat rocks gently in place (mini-wave follows because it's a child)
  if (boatRef.value) {
    gsap.to(boatRef.value, {
      y: -8, rotation: 3, duration: 2.8,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }

  // Sea surface sways left-right
  if (seaRef.value) {
    gsap.to(seaRef.value, {
      x: 30, duration: 5,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }

  // Clouds drift in-out with longer range
  gsap.to('.cloud-left', { x: 60, duration: 18, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  gsap.to('.cloud-right', { x: -60, duration: 22, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  gsap.to('.mini-cloud', { x: 40, y: -10, duration: 15, ease: 'sine.inOut', yoyo: true, repeat: -1 })
})
</script>

<style scoped>
.hero {
  position: relative; z-index: 1;
  min-height: 100vh; overflow: hidden;
  display: flex; flex-direction: column; justify-content: center;
}

/* Sky background */
.hero-bg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; z-index: 0;
}

/* Clouds - bigger sizes, longer movement */
.cloud { position: absolute; z-index: 1; pointer-events: none; }
.cloud-left { top: -10%; left: -10%; width: 70%; max-width: 1600px; }
.cloud-right { top: -10%; right: -10%; width: 70%; max-width: 1500px; }
.mini-cloud { top: 30%; left: -22%; width: 80%; max-width: 1000px; }

/* Content */
.hero-content {
  position: relative; z-index: 5;
  max-width: 1200px; width: 100%;
  margin: 0 auto; padding: 100px 24px 0;
}
.hero-text { max-width: 600px; }

/* Profile */
.hero-profile { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.avatar {
  width: 64px; height: 64px; border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.8);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.status-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 14px; border-radius: 20px;
  background: rgba(255,255,255,0.25); backdrop-filter: blur(10px);
  font-size: 0.82rem; font-weight: 600; color: #1a5c3a;
  border: 1px solid rgba(255,255,255,0.3);
}
.status-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px rgba(34,197,94,0.6);
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot { 0%,100%{box-shadow:0 0 6px rgba(34,197,94,0.6)} 50%{box-shadow:0 0 12px rgba(34,197,94,0.9)} }

.hero-greeting { font-size: 1.1rem; color: #1e3a5f; margin-bottom: 8px; font-weight: 500; }
.hero-name {
  font-family: var(--font-heading); font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900; line-height: 1.1; margin-bottom: 12px;
}
.name-line { display: block; color: #0f2b44; }
.name-line.accent {
  background: linear-gradient(135deg, #0369a1 0%, #0891b2 50%, #0d9488 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-title-wrapper {
  display: flex; align-items: center; gap: 8px;
  font-size: 1.3rem; margin-bottom: 16px; color: #1e4d6e;
}
.hero-title { color: #0369a1; font-weight: 600; }
.typed-cursor { color: #0369a1; animation: blink 1s infinite; font-weight: 300; }
.hero-description {
  font-size: 1rem; color: #2d5f7e; max-width: 520px;
  margin-bottom: 28px; line-height: 1.8;
}
.hero-buttons { display: flex; gap: 14px; flex-wrap: wrap; }
.btn-primary {
  background: linear-gradient(135deg, #0369a1, #0891b2);
  color: #fff; box-shadow: 0 4px 16px rgba(3,105,161,0.3);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(3,105,161,0.4); }
.btn-outline-light {
  border: 1.5px solid rgba(15,43,68,0.3); color: #0f2b44;
  background: rgba(255,255,255,1); backdrop-filter: blur(6px);
}
.btn-outline-light:hover { background: rgba(255,255,255,0.4); transform: translateY(-2px); }

/* === Ocean layers === */
.ocean-layers {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 50%; z-index: 3; pointer-events: none;
}

/* Sea surface - back layer */
.sea-surface {
  position: absolute; bottom: 0; left: -5%;
  width: 110vw; max-width: none;
  height: auto;
  z-index: 1;
}

/* Boat wrapper - mid layer, contains boat + miniwave */
.boat-wrapper {
  position: absolute;
  bottom: 20%; right: 7%;
  z-index: 3; pointer-events: auto;
}
.sailboat-img {
  width: 1000px; height: auto;
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.2));
  display: block;
}
/* Mini wave - front layer, sits right under the boat */
.mini-wave {
  position: absolute;
  bottom: -230px; left: 51%;
  transform: translateX(-50%);
  width: 180%;
  z-index: 4;
  pointer-events: none;
}

/* === Responsive === */
@media(max-width:1024px) {
  .boat-wrapper { right: 5%; bottom: 10%; }
  .sailboat-img { width: 300px; }
}
@media(max-width:768px) {
  .hero-content { padding: 90px 20px 0; }
  .hero-text { text-align: center; align-items: center; display: flex; flex-direction: column; }
  .hero-profile { justify-content: center; }
  .hero-buttons { justify-content: center; }
  .hero-description { margin-left: auto; margin-right: auto; }
  .boat-wrapper { right: 5%; bottom: 8%; }
  .sailboat-img { width: 250px; }
  .cloud-left { width: 120%; top: 0%; left: -15%; }
  .cloud-right { width: 110%; top: 0%; right: -15%; }
  .mini-cloud { width: 100%; top: 35%; left: -40%; }
}
@media(max-width:480px) {
  .sailboat-img { width: 200px; }
  .boat-wrapper { right: 2%; bottom: 8%; }
  .cloud-left { width: 160%; top: 5%; left: -25%; }
  .cloud-right { width: 150%; top: 5%; right: -25%; }
  .mini-cloud { width: 120%; top: 40%; left: -50%; }
}
</style>
