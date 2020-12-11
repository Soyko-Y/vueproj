<template>
  <section>
    <AddNews @news-submitted="addNews" />

    <select v-model="filter">
      <option value="all">All</option>
      <option value="viewed">Viewed</option>
      <option value="not-viewed">Not viewed</option>
    </select>
    <Loader v-if="loading" />
    <NewsList
      v-else-if="newsList.length"
      :newsList="filteredNews"
      @show-news="showNews"
      @delete-news="deleteNews"
    />
    <p v-else>No news!</p>
  </section>
</template>

<script>
import NewsList from "@/components/NewsList";
import AddNews from "@/components/AddNews";
import Loader from "@/components/Loader";
export default {
  name: "News",
  data() {
    return {
      newsList: [],
      loading: true,
      filter: "all"
    };
  },
  components: {
    NewsList,
    AddNews,
    Loader
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.newsList = json;
          this.loading = false;
        }, 1000);
      });
  },
  computed: {
    filteredNews() {
      switch (this.filter) {
        case "viewed":
          return this.newsList.filter(news => news.isViewed);
        case "not-viewed":
          return this.newsList.filter(news => !news.isViewed);
        default:
          return this.newsList;
      }
    }
  },
  methods: {
    showNews(id) {
      this.newsList.find(news => news.id === id).isViewed = true;
    },

    deleteNews(id) {
      this.newsList = this.newsList.filter(news => news.id !== id);
    },

    addNews(news) {
      this.newsList.unshift(news);
    }
  }
};
</script>
