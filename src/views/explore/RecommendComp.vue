<template>
  <div class="portfolio-grid">
    <div
        class="portfolio-card"
        v-for="(item, index) in paginatedItems"
        :key="index"
    >
      <div class="thumbnail">
        <img :src="item.image" :alt="item.title" />
      </div>

      <div class="info">
        <div class="author">
          <img class="avatar" :src="item.avatar" alt="avatar" />
          <span class="name">{{ item.author }}</span>
        </div>

        <div class="stats">
          <span class="stat">
            <font-awesome-icon icon="fa-solid fa-heart" />
            {{ item.likes }}
          </span>
          <span class="stat">
            <font-awesome-icon icon="fa-solid fa-comment-dots" />
            {{ item.comments }}
          </span>
        </div>
      </div>
    </div>
  </div>
    <div class="pagination">
      <el-pagination
          class="background-pagination"
          layout="prev, pager, next"
          :total="items.length"
          :page-size="pageSize"
          @current-change="handlePageChange"
      />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface PortfolioItem {
  title: string
  image: string
  author: string
  avatar: string
  comments: number
  likes: number
}

const items: PortfolioItem[] = [
  {
    title: "Portfolio",
    image: "https://picsum.photos/id/1018/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=1",
    comments: 132,
    likes: 36,
  },
  {
    title: "The Quiz",
    image: "https://picsum.photos/id/1015/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=2",
    comments: 154,
    likes: 28,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1024/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=3",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1025/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1026/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1027/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1028/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1029/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1045/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1011/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1012/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1013/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1039/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1042/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1035/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1050/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
    // page 2
  {
    title: "Portfolio",
    image: "https://picsum.photos/id/1051/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=1",
    comments: 132,
    likes: 36,
  },
  {
    title: "The Quiz",
    image: "https://picsum.photos/id/1052/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=2",
    comments: 154,
    likes: 28,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1053/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=3",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1054/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/1055/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/990/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/991/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/992/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/950/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 1000,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/969/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/952/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/953/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/954/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/955/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/966/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },
  {
    title: "Neon Light Poster",
    image: "https://picsum.photos/id/957/600/400",
    author: "Minh Anh Nguyen",
    avatar: "https://i.pravatar.cc/40?img=4",
    comments: 203,
    likes: 50,
  },

]

const currentPage = ref(1);
const pageSize = ref(16);

// Tính toán danh sách ảnh theo trang
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return items.slice(start, start + pageSize.value);
});

// Khi đổi trang
const handlePageChange = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" }); // tự cuộn lên đầu khi đổi trang
};
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px 40px;
}

.portfolio-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}

.thumbnail {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.portfolio-card:hover img {
  transform: scale(1.05);
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  font-size: 13px;
  color: #333;
}

.author {
  display: flex;
  align-items: center;
  gap: 6px;
}

.avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-weight: 600;
  color: #222;
}

.stats {
  display: flex;
  gap: 12px;
  color: #666;
}

.stat {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}

.stat svg {
  font-size: 11px;
  opacity: 0.8;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 16px 0;
}

.background-pagination {
  background: #333333;
}

</style>
