<template>
  <!-- thanh trên -->
  <div class="search-filter-bar">
    <el-button round class="filter-btn">
      <font-awesome-icon icon="fa-solid fa-sliders" class="filter-icon" />
      <span>Filter</span>
    </el-button>

    <div class="search-box">
      <el-input
          v-model="searchQuery"
          placeholder="Search Artwork..."
      >
        <template #prefix>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </template>

        <template #suffix>
          <div class="tabs">
            <span
                v-for="tab in tabs"
                :key="tab"
                class="tab"
                :class="{ active: activeTab === tab }"
                @click="activeTab = tab"
            >
              {{ tab }}
            </span>
          </div>
        </template>
      </el-input>
    </div>
  </div>

  <!-- thanh dưới -->

  <div class="category-bar">
    <div class="fixed-section">
      <button class="category purple">
        <font-awesome-icon icon="fa-solid fa-award" class="category-icon" />
        Recommend
      </button>

      <button class="category pink">
        <font-awesome-icon icon="fa-solid fa-star" class="category-icon" />
        Favorites
      </button>
    </div>

    <!-- ĐƯỜNG GẠCH DỌC -->
    <div class="divider"></div>

    <!-- BÊN PHẢI (CUỘN NGANG) -->
    <div class="scroll-section" ref="scrollContainer">
      <div class="scroll-content">
        <button
            v-for="(tag, i) in tags"
            :key="i"
            class="category"
        >
          {{ tag }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref,onMounted, onUnmounted } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)
const showLeftFade = ref(false)
const showRightFade = ref(true)
const searchQuery = ref('')
const tabs = ['Projects', 'Peoples', 'Assets']
const activeTab = ref('Projects')

const tags = ref([
  'Graphic Design',
  'Logo',
  'UI/UX',
  '3D Art',
  'Photography',
  'Illustration',
  'Mock Up',
  'Digital Painting',
  'Animation',
  'Branding',
  'Typography'
])

const handleScroll = () => {
  if (!scrollContainer.value) return
  const el = scrollContainer.value
  showLeftFade.value = el.scrollLeft > 0
  showRightFade.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

onMounted(() => {
  scrollContainer.value?.addEventListener('scroll', handleScroll)
  handleScroll() // kiểm tra ban đầu
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.search-filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px auto 0 auto;
  width: 100%;
  padding: 0 50px;
  height: 59px;
  gap: 16px;
}

/* ==== Filter Button ==== */
.filter-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #555;
  border: none;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease;
}

::v-deep .el-button:active {
  background-color: rgba(187, 0, 249, 0.1);
  border-color: #BB00F9;
  color: #BB00F9;
  outline: none;
}

::v-deep .el-button:hover {
  background-color: rgba(187, 0, 249, 0.1);
  border-color: #BB00F9;
  color: #BB00F9;
}

.filter-icon {
  color: rgba(0, 0, 0, 0.25);
  margin-right: 3px;
}

/* ==== Search Box ==== */
.search-box {
  flex: 1;
}

.search-box .el-input {
  width: 100%;
}

::v-deep .search-box .el-input__wrapper {
  box-shadow: -2px 2px 5px 0 rgba(0, 0, 0, 0.25) !important;
  background: #fff;
  border-radius: 40px;
  padding-left: 12px;
  transition: 0.3s ease;
  height: 32px;
  font-size: 13px;
}

.search-box .el-input__wrapper:hover {
  box-shadow:
      inset 2px 2px 5px rgba(0, 0, 0, 0.1),
      0 5px 10px rgba(0, 0, 0, 0.2);
}


/* ==== Tabs bên trong input ==== */
.tabs {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
}

.tab {
  padding: 0 12px;
  max-height: 22px;
  width: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  font-weight: 500;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab:hover {
  color: #111;
  background-color: rgba(0, 0, 0, 0.05);
}

.tab.active {
  background-color: #fff;
  color: #111;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.25);
}


/* thanh dưới */
.category-bar {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 30px;
  height: 59px;
  gap: 13px;
}

.category-icon {
  margin-right: 7px;
  color: rgb(255, 255, 255, 0.35);
  font-size: 16px;
}

.fixed-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.category {
  border: none;
  border-radius: 12px;
  padding: 10px 22px;
  background: linear-gradient(90deg, #310048 0%, #4F0069 100%);
  color: white;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.category.purple {
  background: linear-gradient(90deg, #C73AFF 0%, #772399 100%);
}

.category.pink {
  background: #ED0F89;
}

.divider {
  width: 2px;
  height: 40px;
  background: #B3B3B3;
}

.scroll-section {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scroll-section::-webkit-scrollbar {
  display: none;
}

.scroll-content {
  display: flex;
  gap: 10px;
  align-items: center;
}

.search-filter-bar,
.category-bar {
  position: sticky;
  top: 91px;
  z-index: 20;
  background: #fff;
}
.category-bar {
  top: 150px;
}


</style>
