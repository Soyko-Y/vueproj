<template>
  <Loader v-if="loading" />
  <AddNews 
    v-else
    :news="news"
    :onSave="onSave"
  />
</template>

<script>
import AddNews from "@/components/AddNews";
import Loader from "@/components/Loader";
import { useNews } from "../compositions/news";
import { useRoute } from 'vue-router';
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
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
    const router = useRouter();
    const onSave = page => {
      updateNews(page);
      router.push({
        path: '/news'
      });
    }

    return {
      news,
      getNewsById,
      addNews,
      loading,
      updateNews,
      onSave
    };
  }
};
</script>

<style>
section {
  box-shadow: 0 0 0.5rem rgba(65, 131, 215, 1);
}
</style>
