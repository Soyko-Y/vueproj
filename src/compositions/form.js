import { reactive, computed } from 'vue';

export function useForm(props) {
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

    props.onAdd(news);
  }

  const valid = computed(() => {
    return form.title.trim() && form.body.trim()
  })

  return { form, submit, valid }
}