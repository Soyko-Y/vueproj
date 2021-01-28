<template>
  <Loader v-if="loading" />
  <AddNews 
    v-else
    :news="news"
    :onSave="updateNews" 
  />
</template>

<script>
// import Loader from "@/components/Loader";
import AddNews from "@/components/AddNews";
import Loader from "@/components/Loader";
import { useNews } from "../compositions/news";
import { useRoute } from 'vue-router';
import { onMounted } from "vue";
export default {
  name: "EditNewsPage",
  components: {
    AddNews,
    Loader
  },
  setup() {
    const route = useRoute();
    onMounted(() => getNewsById(route.params.id));
    const {
      news,
      getNewsById,
      addNews,
      loading,
      updateNews
    } = useNews();
    return {
      news,
      getNewsById,
      addNews,
      loading,
      updateNews
    };
  }
};
</script>

<style>
section {
  box-shadow: 0 0 0.5rem rgba(65, 131, 215, 1);
}
</style>
