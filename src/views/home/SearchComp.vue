<template>
  <div class="container">
    <div class="block1">
      <img src="../../assets/pic1.png" alt="logo" />
    </div>
    <div class="block2">
      <div class="first-sec">
        <div class="heading">
          <h3 class="subtitle">LOOKING FOR</h3>
          <h1 class="title">ARTISTS?</h1>
          <div class="search-bar">
            <div class="line"></div>
            <h5 class="small-text">Search by role, skills or keywords</h5>
            <el-input v-model="search" class="input-search" >
              <template #suffix>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#74D300" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M13 17.75a4.75 4.75 0 1 1 8.74 2.578l1.674 1.671l-1.413 1.415l-1.675-1.673A4.75 4.75 0 0 1 13 17.75M17.75 15a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-5-1a6.22 6.22 0 0 0-1.25 3.75c0 1.641.633 3.135 1.667 4.25H2v-2a6 6 0 0 1 6-6z"/></svg>
              </template>
            </el-input>
          </div>
        </div>
      </div>
    </div>

    <div class="block3">
      <div class="second-sec">
        <div class="heading">
          <h3 class="subtitle">LOOKING FOR</h3>
          <h1 class="title">JOBS?</h1>
          <div class="search-bar">
            <div class="line"></div>
            <h5 class="small-text">Search by role, skills or keywords</h5>
            <el-input v-model="jobs" class="input-search" >
              <template #suffix>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#E21E5C" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M13 17.75a4.75 4.75 0 1 1 8.74 2.578l1.674 1.671l-1.413 1.415l-1.675-1.673A4.75 4.75 0 0 1 13 17.75M17.75 15a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-5-1a6.22 6.22 0 0 0-1.25 3.75c0 1.641.633 3.135 1.667 4.25H2v-2a6 6 0 0 1 6-6z"/></svg>
              </template>
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="block4">c1
      <img src="../../assets/pic2.png" alt="logo" />
    </div>
  </div>
</template>





<script setup lang="ts">
// import { useRouter } from 'vue-router';
import { ref } from 'vue'

const search = ref('');
const jobs = ref('');
// const router = useRouter();


</script>

<style scoped>
.container{
  font-family: 'Unbounded',sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 14px;
}

.subtitle {
  font-weight: 500;
  font-size: 24px;
  color: var(--color-white);
  text-shadow: 0 0 3px var(--color-white);
}

.first-sec .heading,
.second-sec .heading {
    width: 605px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding-left: 40px;
}

.first-sec .title {
  margin-top: 6px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 75px;
  color: var(--main-color-green);
  background: linear-gradient(90deg, var(--main-color-green) 0%, var(--main-color-lightgreen) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  text-align: left;
}

.second-sec .title {
  margin-top: 6px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 75px;
  color: var(--main-color-red);
  background: linear-gradient(180deg, var(--main-color-red) 0%, var(--main-color-lightred) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.line {
  width: 555px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
}

.small-text {
  margin: 15px 0;
  font-size: 12px;
  opacity: 56%;
}

.input-search >>> .el-input__wrapper {
  padding-left: 25px;
  width: 100%;
  height: 42px;
  border-radius: 40px;
  background-color: var(--color-white);
  font-family: Montserrat,sans-serif;
  font-size: 18px;
}

</style>
