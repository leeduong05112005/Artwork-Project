<template>
  <transition name="page-fade" @after-leave="$emit('afterLeave')">
    <div v-if="visible" class="loading-screen">
      <div class="logo-wrapper">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
        <img src="../assets/logoBlur.png" alt="blur logo" class="logo-blur" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ visible: boolean }>()
defineEmits(['afterLeave'])
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

/* Logo */
.logo-wrapper {
  position: relative;
}

.logo {
  height: 150px;
}

.logo-blur {
  position: absolute;
  width: 550px;
  pointer-events: none;
  user-select: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
}

/* Khi ẩn đi */
.page-fade-leave-active {
  animation: fadeOutScreen 1s ease-out forwards;
}

@keyframes fadeOutScreen {
  0% { opacity: 1; }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
