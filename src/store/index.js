import { createStore } from "vuex";
import news from './modules/news';

export default createStore({
  modules: {
    news
  }
});
