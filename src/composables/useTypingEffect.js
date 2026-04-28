import { ref, onMounted, onUnmounted } from 'vue'

export function useTypingEffect(titles = ['Web Developer', 'Game Developer', 'Mobile Developer', 'Full-Stack Developer']) {
  const text = ref('')
  let titleIdx = 0, charIdx = 0, deleting = false, timer = null

  function type() {
    const current = titles[titleIdx]
    text.value = deleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++)
    if (!deleting && charIdx > current.length) {
      timer = setTimeout(() => { deleting = true; type() }, 2000)
      return
    }
    if (deleting && charIdx < 0) {
      deleting = false
      titleIdx = (titleIdx + 1) % titles.length
      timer = setTimeout(type, 500)
      return
    }
    timer = setTimeout(type, deleting ? 40 : 80)
  }

  onMounted(() => type())
  onUnmounted(() => clearTimeout(timer))

  return { text }
}
