<template>
  <AddNewsx />
  <section v-for="news in validNews" :key="news.id">
    <h3>{{ news.title }}</h3>
    <p>{{ news.body }}</p>
    <button
      class="btn btn--primary btn--medium btn--view"
      @click="() => showNews(news.id)"
    >
      Show news
    </button>
    <button
      class="btn btn--primary btn--medium btn--delete"
      @click="() => deleteNews(news.id)"
    >
      Delete news
    </button>
  </section>
</template>

<script>
import AddNewsx from "@/components/AddNewsx";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    AddNewsx
  },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("fetchNews"));
    const validNews = computed(() => store.getters.validNews);
    const deleteNews = id => store.commit("deleteNews", id);
    const showNews = id => store.commit("showNews", id);

    return { validNews, deleteNews, showNews };
  }
};
</script>

<style scoped>
section {
  box-shadow: 0 0 0.5rem rgba(65, 131, 215, 1);
}
</style>
