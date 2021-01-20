import { ref, computed } from "vue";

export function useNews() {
  const newsList = ref([]);
  const loading = ref(true);
  const filter = ref("all");
 
  const fetchNews = async (limit = 3) => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      );

      newsList.value = await res.json();
      loading.value = false;
  }

  const filteredList = computed(() => {
    switch (filter.value) {
      case "viewed":
        return newsList.value.filter(news => news.isViewed);
      case "not-viewed":
        return newsList.value.filter(news => !news.isViewed);
      default:
        return newsList.value;
    }
  });

  const showNews = id => {
    newsList.value.find(news => news.id === id).isViewed = true;
  }

  const deleteNews = id => {
    newsList.value = newsList.value.filter(news => news.id !== id);
  }

  const addNews = news => {
    newsList.value.unshift(news);
  }

  return { newsList, loading, filter, fetchNews, filteredList, showNews, deleteNews, addNews };
}