<template>
  <div class="stat-counter" ref="elRef">
    <span class="stat-number">{{ display }}</span>
    <span class="stat-label"><slot /></span>
  </div>
</template>

<script setup>
import { useCounter } from '@/composables/useCounter'
const props = defineProps({ target: Number, suffix: { type: String, default: '' } })
const { display, elRef } = useCounter(props.target, props.suffix)
</script>

<style scoped>
.stat-counter { text-align: center; }
.stat-number {
  display: block; font-family: var(--font-heading);
  font-size: 2.5rem; font-weight: 900;
  background: var(--gradient-accent);
  -webkit-background-clip: text; background-clip: text;
}
.stat-label { color: var(--text-muted); font-size: 0.85rem; font-weight: 500; margin-top: 4px; }
</style>
