<template>
  <div id="app">
    <BubbleCanvas />
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import BubbleCanvas from '@/components/ocean/BubbleCanvas.vue'
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useScrollAnimation()
</script>
