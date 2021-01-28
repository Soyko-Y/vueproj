<template>
  <section>
    <h2>Add news</h2>
    <form @submit.prevent="submit">
      <input id="title" placeholder="title" v-model="form.title" />
      <textarea id="body" placeholder="body" v-model="form.body" />
      <button
        type="submit"
        :disabled="!valid"
        class="btn btn--primary btn--medium btn--save"
      >
        Create News
      </button>
    </form>
  </section>
</template>

<script>
import { useFormx } from "../compositions/formx";
export default {
  setup() {
    return {
      ...useFormx()
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
