<template>
  <section>
    <h1>Add news</h1>
    <form @submit.prevent="onSubmit">
      <label for="title">News Title:</label>
      <input id="title" v-model="title" />
      <label for="body">Content:</label>
      <textarea id="body" v-model="body"/>
      <button type="submit" class="button">Save News</button>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: "",
        content: "",
      };
    },

    methods: {
      onSubmit() {
        let news = {
          id: Date.now(),
          title: this.title,
          content: this.content,
          isViewed: false
        };
        console.log(news);
        this.$emit('news-submitted', news);

        this.name = "";
        this.content = "";
      }
    }
  }
</script>

<style scoped>
  section {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }

  label {
    font-size: 1rem;
    font-weight: 600;
    max-width: 100%;
    display: block;
  }

  input,
  textarea {
    display: block;
    border: 1px solid #dedede;
    border-radius: 4px;
    padding: 0.75rem;
    outline: none;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
    line-height: 1;
  }

  textarea {
    height: 20vh;
  }

  input:hover,
  textarea:hover {
    border: 1px solid #c5c5c5;
  }

  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    border: 1px solid #0366ee;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #8cbcfe;
  }
</style>