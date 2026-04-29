<template>
  <div class="project-card" :style="{ animationDelay: delay + 's' }">
    <div class="project-card-header" :class="'gradient-' + category">
      <div class="project-card-bg">{{ categoryEmoji }}</div>
      <div class="project-lang-icon"><img :src="langIcon" :alt="lang" /></div>
      <span class="project-badge" :class="'badge-' + category">{{ category }}</span>
    </div>
    <div class="project-card-body">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <div class="project-meta">
        <div class="meta-item"><span class="lang-dot" :style="{ background: langColor }"></span>{{ lang }}</div>
        <div class="meta-item">⭐ {{ repo.stargazers_count }}</div>
        <div class="meta-item">🔱 {{ repo.forks_count }}</div>
        <div class="meta-item">📅 {{ formatDate(repo.updated_at) }}</div>
      </div>
      <div class="project-footer">
        <a :href="repo.html_url" target="_blank" rel="noopener" class="proj-link" :class="{ primary: !repo.homepage }">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Code
        </a>
        <a v-if="repo.homepage" :href="repo.homepage" target="_blank" rel="noopener" class="proj-link primary">🌐 Live</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { LANG_COLORS, LANG_ICONS } from '@/composables/useGithubRepos'

const props = defineProps({ repo: Object, category: String, name: String, description: String, delay: { type: Number, default: 0 } })
const lang = computed(() => props.repo.language || 'Unknown')
const langColor = computed(() => LANG_COLORS[lang.value] || '#6b6b80')
const langIcon = computed(() => LANG_ICONS[lang.value] || LANG_ICONS['JavaScript'])
const categoryEmoji = computed(() => ({ game: '🎮', mobile: '📱', web: '🌐', backend: '⚙️', other: '🔧' }[props.category] || '🔧'))
function formatDate(d) { return new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) }
</script>

<style scoped>
.project-card {
  background: rgba(10,30,61,0.6); border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg); overflow: hidden;
  transition: var(--transition); animation: fadeInUp 0.5s ease forwards; opacity: 0;
}
.project-card:hover { transform: translateY(-6px); border-color: var(--teal-dark); box-shadow: 0 12px 40px rgba(6,182,212,.15); }
.project-card-header {
  height: 160px; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.project-card-bg { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 4rem; opacity: .15; }
.project-lang-icon {
  position: relative; z-index: 2; width: 56px; height: 56px;
  padding: 12px; background: rgba(255,255,255,.08);
  border-radius: var(--radius-md); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,.1);
}
.project-lang-icon img { width: 100%; height: 100%; }
.project-badge {
  position: absolute; top: 12px; right: 12px; z-index: 3;
  padding: 4px 12px; border-radius: 20px; font-size: 0.7rem;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
}
.badge-web { background: rgba(0,212,255,.15); color: #00d4ff; border: 1px solid rgba(0,212,255,.3); }
.badge-game { background: rgba(255,107,107,.15); color: #ff6b6b; border: 1px solid rgba(255,107,107,.3); }
.badge-mobile { background: rgba(81,207,102,.15); color: #51cf66; border: 1px solid rgba(81,207,102,.3); }
.badge-backend { background: rgba(255,184,77,.15); color: #ffb84d; border: 1px solid rgba(255,184,77,.3); }
.badge-other { background: rgba(170,140,255,.15); color: #aa8cff; border: 1px solid rgba(170,140,255,.3); }
.project-card-body { padding: 20px; }
.project-card-body h3 { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
.project-card-body p { color: var(--text-secondary); font-size: .85rem; margin-bottom: 14px; line-height: 1.6; min-height: 40px; }
.project-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 14px; }
.meta-item { display: flex; align-items: center; gap: 4px; font-size: .75rem; color: var(--text-muted); }
.lang-dot { width: 10px; height: 10px; border-radius: 50%; }
.project-footer { display: flex; gap: 10px; }
.proj-link {
  flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 9px; border-radius: var(--radius-sm);
  font-size: .82rem; font-weight: 600; transition: var(--transition);
  border: 1px solid var(--glass-border); color: var(--text-secondary);
}
.proj-link:hover { border-color: var(--teal); color: var(--teal); }
.proj-link.primary { background: var(--teal); color: #fff; border-color: var(--teal); }
.proj-link.primary:hover { background: var(--teal-dark); }
.gradient-web { background: linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #0a192f 100%); }
.gradient-game { background: linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0524 100%); }
.gradient-mobile { background: linear-gradient(135deg, #0a2e1b 0%, #1b3a2d 50%, #0a1f15 100%); }
.gradient-backend { background: linear-gradient(135deg, #2e1a0a 0%, #3a2d1b 50%, #1f150a 100%); }
.gradient-other { background: linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 50%, #151524 100%); }
</style>
