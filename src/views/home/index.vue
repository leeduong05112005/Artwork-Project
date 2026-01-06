<template>
  <div class="gradient-page">
    <SearchCompView/>
    <ExploreCompView/>
  </div>
</template>

<script setup lang="ts">
import SearchCompView from './SearchComp.vue'
import ExploreCompView from './ExploreComp.vue'
</script>

<style scoped>
.gradient-page {
  width: 100%;
  background: linear-gradient(#000000 0%, var(--main-color-blackpurple) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 100px 0 60px 0;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  gap: 60px;
}

.gradient-page::-webkit-scrollbar {
  display: none;
}

</style>
