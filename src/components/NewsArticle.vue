<template>
  <section :class="{ viewed: news.isViewed }">
    <h3>{{ news.title }}</h3>
    <p class="news-body">{{ news.body }}</p>
    <button
      class="btn btn--primary btn--medium btn--view"
      @click="$emit('show', news.id)"
    >
      Show news
    </button>
    <button
      class="btn btn--primary btn--medium btn--edit"
      @click="$emit('edit', news.id)"
    >
      Edit news
    </button>
    <button
      class="btn btn--primary btn--medium btn--delete"
      @click="$emit('delete', news.id)"
    >
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
.btn {
  text-decoration: none;
}
section {
  box-shadow: 0 0 0.5rem rgba(65, 131, 215, 1);
}

.viewed {
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

.news-body {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
