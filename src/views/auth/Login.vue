<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2 class="title">Sign in</h2>

      <p class="extra-text">New user? <span class="special-text">Create an account</span></p>

      <section>
        <el-form label-position="top">
          <el-form-item label="Username">
            <el-input v-model="username" placeholder="Nhập tên đăng nhập (tùy ý)" />
          </el-form-item>

          <el-form-item label="Password">
            <el-input v-model="password" type="password" placeholder="Nhập mật khẩu (tùy ý)" show-password />
          </el-form-item>

          <div class="login-wrapper">
            <el-button
                type="primary"
                block
                class="btn-login"
                @click="goHome"
            >
              Đăng nhập
            </el-button>
          </div>
        </el-form>
      </section>

      <div class="RuleWithText">Or</div>

      <section class="SocialButtonList flex flex-col justify-between gap-5">
        <el-button class="button-with-icon flex justify-between">
          <div class="icon-wrapper">
            <!-- Google icon -->
            <svg width="20px" height="24px" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" class="icon">
              <g>
                <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4"/>
                <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853"/>
                <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05"/>
                <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335"/>
              </g>
            </svg>
          </div>
          <span>Continue with Google</span>
        </el-button>

        <el-button class="button-with-icon flex justify-between gap-5">
          <div class="icon-wrapper">
            <!-- Facebook icon -->
            <svg width="20px" height="20px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128" fill="#1877F2"/>
              <path d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165" fill="#FFFFFF"/>
            </svg>
          </div>
          <span>Continue with Facebook</span>
        </el-button>
      </section>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const router = useRouter();

const goHome = async () => {
  ElMessage.success('Đăng nhập thành công (giả lập)!');
  await router.push('/home');
};

const username = ref('');
const password = ref('');
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 500px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: left;
  font-weight: 600;
  font-size: 38px;
}

.extra-text {
  text-align: left;
  margin-bottom: 20px;
}

.special-text {
  color: #535bf2;
  text-decoration: underline;
  cursor: pointer;

}

.RuleWithText {
  margin: 20px 0;
  color: #3b3b3b;
  font-weight: 300;
  display: flex;
  align-items: center;
  text-align: center;
}

.RuleWithText::before,
.RuleWithText::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #eaeaea;
  margin: 0 8px;
}

.button-with-icon {
  align-items: center;
  border-radius: 100px;
  border-width: 1px;
  color: #7e7e7e;
  display: flex;
  background: white;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 55px;
  font-size: 16px;
}

.icon {
  margin-right: 10px;
}

.el-button+.el-button {
  margin-left: 0;
}

.login-wrapper {
  display: flex;
  justify-content: end;
}

</style>
