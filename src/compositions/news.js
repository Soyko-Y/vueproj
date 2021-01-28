import { ref, computed } from "vue";
import { client } from "../api/client";
import { apiUrl } from "../api/config";

const news = ref([]);
const loading = ref(true);
const filter = ref("all");

export function useNews() {
  const fetchNews = async () => {
    loading.value = true;
    const response = await client.get(`${apiUrl}/news`);

    news.value = response.reverse();
    loading.value = false;
  };

  const filteredNews = computed(() => {
    switch (filter.value) {
      case "viewed":
        return news.value.filter(page => page.isViewed);
      case "not-viewed":
        return news.value.filter(page => !page.isViewed);
      default:
        return news.value;
    }
  });

  const deleteNews = async id => {
    if(news.value.constructor === Array) {
      news.value = news.value.filter(page => page.id !== id);
    }

    await client.delete(`${apiUrl}/news/${id}`);   
  };

  const addNews = async page => {
    news.value.unshift(page);
    await client.post(`${apiUrl}/news`, page);
  };

  const updateNews = async page => {
    await client.put(`${apiUrl}/news/${page.id}`, page);
  }

  const getNewsById = async id => {
    loading.value = true;
    const response = await client.get(`${apiUrl}/news/${id}`);
    news.value = response;
    loading.value = false;
  };

  return {
    news,
    loading,
    filter,
    fetchNews,
    filteredNews,
    deleteNews,
    addNews,
    getNewsById,
    updateNews
  };
}
