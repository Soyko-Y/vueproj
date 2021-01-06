const state = {
  news: []
};

const actions = {
  async fetchNews({commit}, limit = 3) {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
    );
    const news = await res.json();

    commit('updateNews', news)
  }
}

const mutations = {
  updateNews(state, news) {
    state.news = news;
  },

  createNews(state, news) {
    state.news.unshift(news);
  },

  deleteNews(state, id) {
    state.news = state.news.filter(news => news.id !== id);
  },

  showNews(state, id) {
    state.news = state.news.filter(news => news.id === id);
  },
}

const getters = {
  validNews(state) {
    return state.news.filter(news => {
      return news.title && news.body;
    });
  },

  allNews(state) {
    return state.news;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};
