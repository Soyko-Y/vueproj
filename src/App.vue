<template>
  <h1>News</h1>
  <AddNews
    @news-submitted="addNews"
  />
  <NewsList
    :newsList="newsList"
    @show-news="showNews"
    @delete-news="deleteNews"
  />
</template>

<script>
import NewsList from "@/components/NewsList";
import AddNews from "@/components/AddNews";
export default {
  name: "App",
  data() {
    return {
      newsList: []
    };
  },
  components: {
    NewsList,
    AddNews
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then(json => {
      this.newsList = json
    });
  },

  methods: {
    showNews(id) {
      this.newsList.find(news => news.id === id).isViewed = true;
    },

    deleteNews(id) {
      this.newsList = this.newsList.filter(news => news.id !== id);
    },

    addNews(news) {
      this.newsList.unshift(news);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font: 62.5%/1.5  "Lucida Grande", "Lucida Sans", Tahoma, Verdana, sans-serif; 
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.2rem;
}

h2 {
  font-size: 2.0rem;
}

h3 {
  font-size: 1.8rem;
}

h4 {
  font-size: 1.6rem;
}

h5 {
  font-size: 1.4rem;
}

p {
  font-size: 1.2rem;
}

section {
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
}
</style>
