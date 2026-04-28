<template>
  <div class="skill-item" :data-skill="name">
    <img :src="icon" :alt="name" :class="{ 'invert-icon': invert }" />
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({ name: String, icon: String, invert: { type: Boolean, default: false } })
</script>

<style scoped>
.skill-item {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 14px; background: rgba(6,182,212,.06);
  border: 1px solid var(--glass-border); border-radius: var(--radius-sm);
  font-size: 0.85rem; font-weight: 500; transition: var(--transition);
}
.skill-item:hover { background: rgba(6,182,212,.12); border-color: var(--teal-dark); transform: translateY(-2px); }
.skill-item img { width: 22px; height: 22px; }
.invert-icon { filter: invert(1); }
</style>
