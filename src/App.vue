<template>
  <div id="app">
    <Loading
        :visible="isTransitioning"
        @afterLeave="finishTransition"
        v-if="!isHeroPage && !isLoginPage"
    />
    <NavBar v-if="!isHeroPage && !isLoginPage" />
    <router-view />
    <ScrollToTop />
    <Footer v-if="!isHeroPage && !isLoginPage" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from "./components/ScrollToTop.vue"
import Loading from "./components/Loading.vue"

const route = useRoute()
const router = useRouter()
const isHeroPage = computed(() => route.path === '/hero')
const isLoginPage = computed(() => route.path === '/login')
const isTransitioning = ref(false)

if (!(window as any)._hasShownLoading) {
  (window as any)._hasShownLoading = false
}

const startTransition = () => (isTransitioning.value = true)
const finishTransition = () => {
  isTransitioning.value = false
  ;(window as any)._hasShownLoading = true
}

onMounted(() => {
  if (!(window as any)._hasShownLoading) {
    startTransition()
    setTimeout(() => finishTransition(), 1500)
  }
})

router.beforeEach((_to, _from, next) => next())
</script>
