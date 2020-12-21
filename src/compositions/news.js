import { ref, computed } from "vue";

export function useNews() {
  const newsList = ref([]);
  const loading = ref(true);
  const filter = ref("all");
 
  const fetchNews = () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          newsList.value = json;
          loading.value = false;
        }, 1000);
      });
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