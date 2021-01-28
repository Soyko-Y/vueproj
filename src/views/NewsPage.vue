<template>
  <Loader v-if="loading" />

  <section v-else>
    <h3>{{ news.title }}</h3>
    <p>{{ news.body }}</p>
  </section>
</template>

<script>
import Loader from "@/components/Loader";
import { useNews } from "../compositions/news";
import { useRoute } from 'vue-router';
import { onMounted } from "vue";
export default {
  name: "NewsPage",
  components: {
    Loader
  },
  setup() {
    const route = useRoute();
    onMounted(() => getNewsById(route.params.id));
    const {
      news,
      getNewsById,
      loading
    } = useNews();
    return {
      news,
      getNewsById,
      loading
    };
  }
};
</script>

<style>
section {
  box-shadow: 0 0 0.5rem rgba(65, 131, 215, 1);
}
</style>
