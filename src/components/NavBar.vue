<template>
  <nav class="navbar">
    <div class="left-section">
      <img src="../assets/logo.png" alt="Logo" class="logo"  @click="goHome" />
      <ul class="nav-links">
        <li><router-link to="/explore">{{ t('explore') }}</router-link></li>
        <li><router-link to="/jobs">{{ t('jobs') }}</router-link></li>
        <li><router-link to="/hire">{{ t('hire') }}</router-link></li>
      </ul>
    </div>

    <div class="right-section">
      <router-link to="#" class="pricing">{{ t('pricing')}}</router-link>
      <el-row  class="appfooter-language" :gutter="24">
        <el-col :span="12">
          <a type="button" @click="toggleLanguage" class="change-lang">
            <font-awesome-icon icon="fa-solid fa-earth-americas" />
            {{ currentLangLabel }}
          </a>
        </el-col>
      </el-row>
      <router-link to="/login" class="login">{{ t('login')}}</router-link>
      <div class="sign-in">
        <button class="signup">{{ t('signup')}}</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t,locale } = useI18n()
const router = useRouter()
const currentLangLabel = computed(() => (locale.value === 'vi-VN' ? 'EN' : 'VI'))

const toggleLanguage = () => {
  locale.value = locale.value === 'vi-VN' ? 'en-US' : 'vi-VN'
  localStorage.setItem('LANG', locale.value)
}

const goHome = () => {
  router.push('/home').then(() => {
    window.location.reload()
  })
}

</script>

<style scoped>
.navbar {
  width: 100%;
  height: 91px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  font-family: 'Unbounded', sans-serif;
  transition: background-color 0.3s ease;
}


.left-section {
  display: flex;
  align-items: center;
  gap: 55px;
}

.left-section img {
  height: 53px;
  width: auto;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  list-style: none;
  gap: 70px;
  /* transition: all 0.3s ease; */
}

/*
.nav-links:hover {
  gap: 80px;
}
*/

.nav-links li {
  width: auto;
  text-align: center;
}

.nav-links a {
  display: inline-block;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-white);
  transform: scale(1.08 );
  font-weight: 600;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 35px;
}

.pricing {
  display: inline-block;
  width: 80px;
  text-align: center;
  color: #ccc;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.3s ease;
}

.pricing:hover {
  color: var(--color-white);
  transform: scale(1.08);
  font-weight: 600;
}

.change-lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 300;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;
}

.change-lang:hover {
  color: var(--color-white);
  transform: scale(1.08);
  font-weight: 600;
}

.sign-in {
  display: flex;
  align-items: center;
  gap: 20px;
}

.login {
  display: inline-block;
  width: auto;
  text-align: center;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.login:hover {
  color: var(--main-color-purple);
  font-weight: 700;
  transform: scale(1.08);

}

.signup {
  background: linear-gradient(0deg, var(--main-color-blue) 0%, var(--main-color-purple) 100%);
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.signup:hover {
  background: var(--color-white);
  color: var(--main-color-blue)
}
</style>
