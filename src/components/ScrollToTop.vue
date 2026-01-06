<template>
  <transition name="fade">
    <button
        v-if="isVisible"
        class="scroll-to-top"
        @click="scrollToTop"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-xl"/>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: linear-gradient(135deg, #7b2ff7, #f107a3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  font-size: 18px;
  transition: all 0.3s ease;
  z-index: 999;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.4);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
