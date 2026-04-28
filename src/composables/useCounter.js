import { ref, onMounted } from 'vue'

// make animation when scroll to the statistics number
export function useCounter(target, suffix = '') {
  const display = ref('0' + suffix)
  const elRef = ref(null)

  onMounted(() => {
    if (!elRef.value) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let current = 0
          const increment = target / 60
          const timer = setInterval(() => {
            current += increment
            if (current >= target) { current = target; clearInterval(timer) }
            display.value = Math.floor(current) + suffix
          }, 20)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    observer.observe(elRef.value)
  })

  return { display, elRef }
}
