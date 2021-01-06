import { reactive, computed } from 'vue';
import { useStore } from "vuex";

export function useFormx() {
  const store = useStore();

    const form = reactive({
      title: "",
      body: ""
    })

    const submit = () => {
    const news = {
      id: Date.now().toString(),
      title: form.title,
      body: form.body,
      isViewed: false
    };

    form.title = form.body = "";
    store.commit('createNews', news);
  }

  const valid = computed(() => {
    return form.title.trim() && form.body.trim()
  })

  return { form, submit, valid }
}