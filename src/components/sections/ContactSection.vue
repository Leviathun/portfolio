<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">&lt;contact&gt;</span>
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Want to collaborate? Let's connect!</p>
      </div>
      <div class="contact-content">
        <TreasureCard v-for="c in contacts" :key="c.title">
          <div class="contact-icon" v-html="c.svg"></div>
          <h3>{{ c.title }}</h3>
          <p>{{ c.desc }}</p>
          <a v-if="c.href" :href="c.href" :target="c.external ? '_blank' : undefined" rel="noopener noreferrer" class="contact-link">{{ c.linkText }}</a>
          <span v-else class="contact-link">{{ c.linkText }}</span>
        </TreasureCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import TreasureCard from '@/components/ui/TreasureCard.vue'

const contacts = [
  { title: 'GitHub', desc: 'Check out my repositories', href: 'https://github.com/Leviathun', external: true, linkText: '@Leviathun',
    svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
  { title: 'Email', desc: 'Drop me a message', href: 'mailto:contact@leviathun.dev', linkText: 'Say Hello 👋',
    svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' },
  { title: 'Location', desc: 'Based in Thailand', linkText: '🇹🇭 Thailand',
    svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
]
</script>

<style scoped>
.contact {
  background: linear-gradient(180deg, var(--depth-4) 0%, var(--depth-5) 100%);
}
.section-tag { color: var(--teal-light); font-family: var(--font-mono); font-size: 0.85rem; }
.section-title { color: var(--text-primary); }
.section-subtitle { color: var(--text-secondary); }
.contact-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; max-width: 800px; margin: 0 auto; }
.contact-content :deep(.treasure-card) { text-align: center; }
.contact-icon { margin-bottom: 16px; color: var(--teal); }
.contact-link { color: var(--teal-light); font-weight: 600; font-size: 0.9rem; transition: var(--transition); }
.contact-link:hover { color: var(--teal); }
</style>
