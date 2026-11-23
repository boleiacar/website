<script setup lang="ts">
// Reveal-on-scroll wrapper modelled on Vue Bits' FadeContent (vue-bits.dev, Animations).
// Content is shown at once for reduced-motion users and where IntersectionObserver is missing.
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{ duration?: number; delay?: number; threshold?: number }>(),
  { duration: 700, delay: 0, threshold: 0.1 },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
const animate = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const reduce =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || typeof window.IntersectionObserver !== 'function') {
    visible.value = true
    return
  }
  animate.value = true
  observer = new window.IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: props.threshold },
  )
  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())

const style = computed(() => ({
  opacity: visible.value ? '1' : '0',
  transform: animate.value && !visible.value ? 'translateY(24px)' : undefined,
  transition: animate.value
    ? `opacity ${props.duration}ms ease-out ${props.delay}ms, transform ${props.duration}ms ease-out ${props.delay}ms`
    : undefined,
}))
</script>

<template>
  <div ref="root" :style="style"><slot /></div>
</template>
