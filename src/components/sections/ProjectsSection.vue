<template>
  <section class="section projects" id="projects">
    <!-- Decorative: Mermaid left (big), Jellyfish multiple on right -->
    <img :src="mermaidImg" alt="" class="deco deco-mermaid" ref="mermaidRef" aria-hidden="true" />
    <img :src="jellyfishImg" alt="" class="deco deco-jelly-1" ref="jelly1Ref" aria-hidden="true" />
    <img :src="jellyfishImg" alt="" class="deco deco-jelly-2" ref="jelly2Ref" aria-hidden="true" />
    <img :src="jellyfishImg" alt="" class="deco deco-jelly-3" ref="jelly3Ref" aria-hidden="true" />

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">My Projects</h2>
        <p class="section-subtitle">Explore my work across different platforms</p>
      </div>
      <div class="projects-filter">
        <FilterButton v-for="f in filters" :key="f.value" :is-active="activeFilter === f.value" @filter="filterRepos(f.value)">
          {{ f.label }}
        </FilterButton>
      </div>
      <div v-if="loading" class="projects-loading">
        <div class="loading-spinner"></div>
        <p>Fetching projects from GitHub...</p>
      </div>
      <div v-else-if="error" class="projects-loading">
        <p style="color:#ff6b6b">Failed to load projects. Please refresh.</p>
      </div>
      <div v-else class="projects-grid">
        <ProjectCard v-for="(repo, i) in filteredRepos" :key="repo.id"
          :repo="repo" :category="getCategory(repo.name)"
          :name="getFriendlyName(repo.name)" :description="getDescription(repo)"
          :delay="i * 0.08" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useGithubRepos } from '@/composables/useGithubRepos'
import FilterButton from '@/components/ui/FilterButton.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

import mermaidImg from '@/assets/images/other/mermaid.png'
import jellyfishImg from '@/assets/images/other/jellyfish.png'

const { filteredRepos, loading, error, activeFilter, filterRepos, getCategory, getFriendlyName, getDescription } = useGithubRepos()

const mermaidRef = ref(null)
const jelly1Ref = ref(null)
const jelly2Ref = ref(null)
const jelly3Ref = ref(null)

const filters = [
  { value: 'all', label: '🗂 All' },
  { value: 'web', label: '🌐 Web' },
  { value: 'game', label: '🎮 Game' },
  { value: 'mobile', label: '📱 Mobile' },
  { value: 'backend', label: '⚙️ Backend' },
  { value: 'other', label: '🔧 Other' },
]

onMounted(() => {
  // Mermaid swims gently
  if (mermaidRef.value) {
    gsap.to(mermaidRef.value, {
      x: 40, y: -15, rotation: 5, duration: 5,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }
  // Jellyfish - each pulsing at different speeds
  if (jelly1Ref.value) {
    gsap.to(jelly1Ref.value, {
      y: -25, scale: 1.06, duration: 3,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }
  if (jelly2Ref.value) {
    gsap.to(jelly2Ref.value, {
      y: -18, scale: 1.04, duration: 3.8,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }
  if (jelly3Ref.value) {
    gsap.to(jelly3Ref.value, {
      y: -12, x: -8, scale: 1.05, duration: 4.2,
      ease: 'sine.inOut', yoyo: true, repeat: -1
    })
  }
})
</script>

<style scoped>
.projects {
  position: relative;
  background: linear-gradient(180deg, var(--depth-3) 0%, var(--depth-4) 100%);
}

/* Decorative characters - z-index:2 behind container z-index:3 */
.deco {
  position: absolute; pointer-events: none; z-index: 2;
}

/* Mermaid - big, left side */
.deco-mermaid {
  left: -24%; top: 10%;
  width: 800px; height: auto;
  opacity: 0.85;
}

/* Jellyfish - 3 at different positions on right, varied sizes */
.deco-jelly-1 {
  right: 1%; top: 15%;
  width: 300px; height: auto;
  opacity: 0.8;
}
.deco-jelly-2 {
  left: 3%; top: 70%;
  width: 250px; height: auto;
  opacity: 0.6;
}
.deco-jelly-3 {
  right: 3%; bottom: 20%;
  width: 150px; height: auto;
  opacity: 0.5;
}

.section-title { color: var(--text-primary); }
.section-subtitle { color: var(--text-secondary); }
.projects-filter { display: flex; justify-content: center; gap: 10px; margin-bottom: 40px; flex-wrap: wrap; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
.projects-loading { text-align: center; padding: 60px 0; color: var(--text-muted); }
.loading-spinner {
  width: 40px; height: 40px; border: 3px solid var(--glass-border);
  border-top-color: var(--teal); border-radius: 50%;
  animation: spin 0.8s linear infinite; margin: 0 auto 16px;
}

@media(max-width:1024px) {
  .deco-mermaid { width: 220px; }
  .deco-jelly-1 { width: 120px; }
  .deco-jelly-2 { width: 80px; }
}
@media(max-width:768px) {
  .deco-mermaid { width: 150px; opacity: 0.4; }
  .deco-jelly-1 { width: 90px; opacity: 0.4; }
  .deco-jelly-2, .deco-jelly-3 { display: none; }
}
</style>
