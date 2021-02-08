<template>
  <AddNews 
    :news="news"
    :onSave="onSave" 
  />
</template>

<script>
import AddNews from "@/components/AddNews";
import { useNews } from "../compositions/news";
import { useRouter } from 'vue-router'
export default {
  name: "AddNewsPage",
  components: {
    AddNews,
  },
  setup() {
    const {
      news,
      saveNews
    } = useNews();
    const router = useRouter();

    const onSave = page => {
      saveNews(page);
      router.push({
        path: '/news'
      });
    }

    return {
      news,
      saveNews,
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
