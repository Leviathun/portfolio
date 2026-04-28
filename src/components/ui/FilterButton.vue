<template>
  <button class="filter-btn" :class="{ active: isActive }" @click="$emit('filter')">
    <slot />
  </button>
</template>

<script setup>
defineProps({ isActive: Boolean })
defineEmits(['filter'])
</script>

<style scoped>
.filter-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 20px; border-radius: var(--radius-md);
  font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);
  border: 1px solid var(--glass-border); background: var(--glass-bg);
  transition: var(--transition); cursor: pointer;
}
.filter-btn:hover { color: var(--text-primary); border-color: var(--teal-dark); }
.filter-btn.active { background: var(--teal); color: #fff; border-color: var(--teal); }
</style>
