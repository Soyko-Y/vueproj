<template>
  <AddNews :onAdd="addNews" />

  <select v-model="filter">
    <option value="all">All</option>
    <option value="viewed">Viewed</option>
    <option value="not-viewed">Not viewed</option>
  </select>
  <Loader v-if="loading" />
  <NewsArticle
    v-else-if="newsList.length"
    v-for="news in newsList"
    :key="news.id"
    :news="news"
    @show="showNews"
    @delete="deleteNews"
  />
  <p v-else>No news!</p>
</template>

<script>
import AddNews from "@/components/AddNews";
import NewsArticle from "@/components/NewsArticle";
import Loader from "@/components/Loader";
import { useNews } from "../compositions/news";
import { onMounted } from "vue";
export default {
  name: "News",
  components: {
    AddNews,
    NewsArticle,
    Loader
  },
  setup() {
    onMounted(() => fetchNews());
    const {
      newsList,
      loading,
      filter,
      fetchNews,
      filteredList,
      showNews,
      deleteNews,
      addNews
    } = useNews();
    return {
      newsList,
      loading,
      filter,
      fetchNews,
      filteredList,
      showNews,
      deleteNews,
      addNews
    };
  }
};
</script>
