<template>
  <footer class="footer">
    <!-- Logo mờ nền -->
    <img src="../assets/logoBlur.png" alt="blur logo" class="logo-blur" />

    <!-- Logo chính -->
    <img src="../assets/logo.png" alt="logo" class="logo" />
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.footer {
  position: absolute;
  width: 100%;
  height: 390px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.logo-blur {
  position: absolute;
  width: 549px;
  pointer-events: none;
  user-select: none;
}

.logo {
  position: relative;
  width: 331px;
  z-index: 2;
}

.logo:hover {
  transform: scale(1.02);
  transition: all 0.3s ease;
}
</style>
