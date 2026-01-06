<template>
  <div class="explore-card">
    <div class="container">
      <div class="image-container">
        <img src="../../assets/pictest.png" alt="explore" class="explore-img" />
      </div>

      <div class="title">
        <div class="text">
          <h3 class="lightTitle">
            EXPLORE OUR <br />
            ARTIST’S <br />
            <span class="boldTitle">MASTERPIECES</span>
          </h3>
        </div>

        <div class="btn-wrapper">
          <button class="btn-explore" @click="goExplore">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="fa-icon" />
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const goExplore = () => {
  router.push('/explore').then(() => {
    window.location.reload()
  })
}
</script>


<style scoped>
.explore-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin: 10px 0 50px 0;
  width: 1170px;
  background: linear-gradient(360deg, #8500f9 0%, #580093 100%);
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(170, 0, 255, 0.4);
  padding: 30px;
  backdrop-filter: blur(20px);
  overflow: hidden;
  font-family: "Unbounded", sans-serif;
}

.explore-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 30px;
  padding: 5px;
  background: linear-gradient(360deg, #aa00f9, #fd6eff);
  -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 35px;
}

.lightTitle {
  font-weight: 200;
  text-align: start;
  font-size: 36px;
}

.boldTitle {
  font-weight: 800;
}

.title {
  gap: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.btn-explore {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border-radius: 50px;
  padding: 14px 36px;
  width: 225px;

  cursor: pointer;
  transition: all 0.35s ease;
}


.btn-explore:hover {
  background: rgba(187, 0, 249, 0.35);
}

.fa-icon {
  transition: transform 0.3s ease;
  font-size: 22px;
  margin-right: 10px;
}

.btn-explore:hover .fa-icon {
  transform: translateX(10px);
  transition: transform 0.3s ease;
}
</style>
