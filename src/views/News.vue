<template>
  <div class="news">
    <button 
      class="btn btn--primary btn--medium btn--save"
      @click="addNews"
    >
      Add news
    </button>

    <select v-model="filter">
      <option value="all">All</option>
      <option value="viewed">Viewed</option>
      <option value="not-viewed">Not viewed</option>
    </select>
    <Loader v-if="loading" />
    <NewsArticle
      v-else-if="filteredNews.length"
      v-for="news in filteredNews"
      :key="news.id"
      :news="news"
      @show="showNews"
      @edit="editNews"
      @delete="deleteNews"
    />
    <p v-else>No news!</p>
  </div>
</template>

<script>
import NewsArticle from "@/components/NewsArticle";
import Loader from "@/components/Loader";
import { useNews } from "../compositions/news";
import { onMounted } from "vue";
import { useRouter } from 'vue-router'
export default {
  name: "News",
  components: {
    NewsArticle,
    Loader
  },
  setup() {
    onMounted(() => fetchNews());
    const router = useRouter();
    const {
      loading,
      filter,
      fetchNews,
      filteredNews,
      deleteNews,
      updateNews,
      news,
    } = useNews();

    const showNews = id => {
      let viewedNews = news.value.find(page => page.id === id);
      if(!viewedNews.isViewed) {
        viewedNews.isViewed = true;
        updateNews(viewedNews);
      }
      router.push({
        path: `/news/${id}`
      });
    }

    const addNews = () => {
      router.push({
        path: '/news/add'
      });
    }

    const editNews = id => {
      router.push({
        path: `/news/edit/${id}`
      });
    }
    return {
      loading,
      filter,
      fetchNews,
      filteredNews,
      showNews,
      editNews,
      deleteNews,
      addNews,
      updateNews,
      news
    };
  }
};
</script>

<style>
.news {
  text-align: center;
}
</style>
