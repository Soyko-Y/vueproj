<template>
  <section :class="{ viewed: news.isViewed }">
    <h3>{{ news.title }}</h3>
    <p>{{ news.body }}</p>
    <button class="button" v-on:click="$emit('show-news', news.id)">
      Show news
    </button>
    <button class="button" v-on:click="$emit('delete-news', news.id)">
      Delete news
    </button>
  </section>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
section {
  box-shadow: 0 0 0.5rem rgba(65, 131, 215, 1);
}

.viewed {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}
</style>
