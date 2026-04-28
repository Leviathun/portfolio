import { onMounted } from 'vue'

export function useScrollAnimation() {
  onMounted(() => {
    const elements = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, i * 100)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    elements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })
  })
}
