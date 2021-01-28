<template>
  <section>
    <h2>Add news</h2>
    <form @submit.prevent="submit">
      <label for="title">News Title:</label>
      <input id="title" v-model="form.title" />
      <label for="body">Content:</label>
      <textarea id="body" v-model="form.body" />
      <button
        type="submit"
        :disabled="!valid"
        class="btn btn--primary btn--medium btn--save"
      >
        Save News
      </button>
    </form>
  </section>
</template>

<script>
import { useForm } from "../compositions/form";
export default {
  props: {
    onSave: Function,
    news: {
      id: Number,
      title: String,
      body: String,
      isViewed: Boolean
    }
  },

  setup(props) {
    return {
      ...useForm(props)
    };
  }
};
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
  height: 10vh;
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
