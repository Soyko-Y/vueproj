<template>
  <main>
    <NewsArticle
      v-for="news in newsList"
      :key="news.id"
      v-bind:news="news"
      @show-news="showNews"
      @delete-news="deleteNews"
    />
  </main>
</template>

<script>
import NewsArticle from "@/components/NewsArticle";
export default {
  props: ["newsList"],
  components: {
    NewsArticle
  },
  methods: {
    showNews(id) {
      this.$emit("show-news", id);
    },

    deleteNews(id) {
      this.$emit("delete-news", id);
    }
  }
};
</script>
