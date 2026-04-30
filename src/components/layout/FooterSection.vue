<template>
  <footer class="footer" id="footer">
    <img :src="underwaterImg" alt="" class="footer-bg" aria-hidden="true" />
    <div class="container footer-inner">
      <p class="footer-text">
        <span class="footer-code">&lt;/&gt;</span>
        Built with passion by <strong>Tanabadee Kraitong</strong>
      </p>
      <p class="footer-year">© {{ year }} All Rights Reserved</p>
    </div>
  </footer>
</template>

<script setup>
import underwaterImg from '@/assets/images/footer/under the sea.png'
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  position: relative; z-index: 1;
  padding: 0; min-height: 450px;
  display: flex; align-items: flex-end; justify-content: center;
  overflow: hidden;
  background: var(--depth-5);
}
/* Overlay to blend the image with the section above */
.footer::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 150px;
  background: linear-gradient(180deg, var(--depth-5) 0%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}
.footer-bg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center bottom;
  z-index: 0;
}
.footer-inner {
  position: relative; z-index: 2;
  text-align: center; padding: 30px 24px;
  width: 100%;
  background: linear-gradient(0deg, rgba(4,10,24,0.85) 0%, transparent 100%);
}
.footer-code { color: var(--teal); font-family: var(--font-mono); }
.footer-text { color: rgba(255,255,255,0.8); font-size: 0.88rem; margin-bottom: 4px; }
.footer-year { color: rgba(255,255,255,0.5); font-size: 0.8rem; }
</style>
