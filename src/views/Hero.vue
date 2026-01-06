<template>
  <div class="hero">
    <div class="hero-content flex justify-between gap-y-60">
      <img src="../assets/logoBlur.png" class="logo" />
      <div class="text-section text-left">
        <h2>Where</h2>
        <h1>
          Elite Creativity <br />
          Meets <br />
          Business Performance<span class="dot">.</span>
        </h1>
      </div>

      <section class="sub-container">
        <p class="subtitle">
          Connect with vetted designers, manage projects,<br> and secure transactions with our Escrow system.
        </p>
        <button class="get-started" @click="goHome">
          Get Started
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow-icon mr-1"/>
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push('/home').then(() => {
    window.location.reload()
  })
}
</script>

<style scoped>
.hero {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(360deg,var(--main-color-blue) 0% , var(--main-color-purple) 100% );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  gap: 180px;
  width: 100%;
  padding: 80px;
  flex-direction: column;
}

.logo {
  max-width: 472px;
  max-height: 399px;
  position: absolute;
  top: 0;
  right: -50px;
}

.text-section h2 {
  font-size: 64px;
  font-weight: 400;
  }

.text-section h1 {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
}

.text-section .dot {
  color: var(--main-color-pink);
}

.sub-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtitle {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 300;
}

.get-started {
  align-self: flex-start;
  padding: 15px 28px;
  margin: auto 0;
  border-radius: 25px;
  background: linear-gradient(125deg,var(--main-color-blue) 25% , var(--main-color-purple) 100% );
   color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 24px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.get-started:hover {
  background: rgba(255, 255, 255);
  color: var(--main-color-pink);
}

.get-started .arrow-icon {
  transition: transform 0.3s ease;
  margin-left: 5px;
}

.get-started:hover .arrow-icon {
  transform: translateX(10px);
}

</style>
