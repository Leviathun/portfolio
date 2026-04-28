<template>
  <div class="ocean-waves">
    <svg class="wave wave-1" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 C1680,120 1920,0 2160,60 C2400,120 2640,0 2880,60 L2880,120 L0,120 Z" />
    </svg>
    <svg class="wave wave-2" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,80 C360,20 600,100 960,50 C1320,0 1440,80 1440,80 C1800,20 2040,100 2400,50 C2760,0 2880,80 2880,80 L2880,120 L0,120 Z" />
    </svg>
    <svg class="wave wave-3" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0,90 C180,40 420,110 720,70 C1020,30 1260,100 1440,90 C1620,80 1860,30 2160,70 C2460,110 2700,40 2880,90 L2880,120 L0,120 Z" />
    </svg>
  </div>
</template>

<style scoped>
.ocean-waves {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 120px;
  overflow: hidden;
  z-index: 3;
}
.wave {
  position: absolute;
  bottom: 0; left: 0;
  width: 200%;
  height: 100%;
}
.wave path { fill: var(--wave-far); }
.wave-1 { animation: wave-move 8s linear infinite; opacity: .5; }
.wave-1 path { fill: var(--wave-far); }
.wave-2 { animation: wave-move 6s linear infinite; animation-delay: -2s; opacity: .7; }
.wave-2 path { fill: var(--wave-mid); }
.wave-3 { animation: wave-move 4s linear infinite; animation-delay: -1s; }
.wave-3 path { fill: var(--wave-near); }
</style>
