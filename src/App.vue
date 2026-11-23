<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import TrustStrip from '@/components/sections/TrustStrip.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import SafetySection from '@/components/sections/SafetySection.vue'
import RoutesSection from '@/components/sections/RoutesSection.vue'
import ClosingBanner from '@/components/sections/ClosingBanner.vue'
import SiteFooter from '@/components/sections/SiteFooter.vue'
import FadeContent from '@/components/motion/FadeContent.vue'
</script>

<template>
  <HeroSection />
  <main>
    <TrustStrip />
    <FadeContent><HowItWorks /></FadeContent>
    <FadeContent><BenefitsSection /></FadeContent>
    <FadeContent><SafetySection /></FadeContent>
    <FadeContent><RoutesSection /></FadeContent>
    <FadeContent><ClosingBanner /></FadeContent>
  </main>
  <SiteFooter />
</template>
