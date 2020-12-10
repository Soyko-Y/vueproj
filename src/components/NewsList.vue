<template>
  <main>
    <News
      v-for="news in newsList"
      :key="news.id"
      v-bind:news="news"
      @show-news="showNews"
      @delete-news="deleteNews"
    />
  </main>
</template>

<script>
import News from "@/components/News";
export default {
  props: ["newsList"],
  components: {
    News
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
