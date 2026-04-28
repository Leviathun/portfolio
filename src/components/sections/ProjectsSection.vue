<template>
  <section class="section projects" id="projects">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">&lt;projects&gt;</span>
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
import { useGithubRepos } from '@/composables/useGithubRepos'
import FilterButton from '@/components/ui/FilterButton.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const { filteredRepos, loading, error, activeFilter, filterRepos, getCategory, getFriendlyName, getDescription } = useGithubRepos()

const filters = [
  { value: 'all', label: '🗂 All' },
  { value: 'web', label: '🌐 Web' },
  { value: 'game', label: '🎮 Game' },
  { value: 'mobile', label: '📱 Mobile' },
  { value: 'backend', label: '⚙️ Backend' },
  { value: 'other', label: '🔧 Other' },
]
</script>

<style scoped>
.projects {
  background: linear-gradient(180deg, var(--depth-3) 0%, var(--depth-4) 100%);
}
.section-tag { color: var(--teal-light); }
.section-title { color: var(--text-dark); }
.section-subtitle { color: var(--text-dark-sub); }
.projects-filter { display: flex; justify-content: center; gap: 10px; margin-bottom: 40px; flex-wrap: wrap; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
.projects-loading { text-align: center; padding: 60px 0; color: var(--text-dark-muted); }
.loading-spinner {
  width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.1);
  border-top-color: var(--teal); border-radius: 50%;
  animation: spin 0.8s linear infinite; margin: 0 auto 16px;
}
</style>
