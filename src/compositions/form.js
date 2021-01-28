import { reactive, computed } from "vue";

export function useForm(props) {
  const form = reactive({
    title: props.news ? props.news.title : "" ,
    body: props.news ? props.news.body : ""
  });

  const submit = () => {
    const news = {
      id: props.news.id || Date.now().toString(),
      title: form.title,
      body: form.body,
      isViewed: props.news.isViewed || false
    };

    form.title = form.body = "";

    props.onSave(news);
  };

  const valid = computed(() => {
    if(form.title && form.body)
      return form.title.trim() && form.body.trim();
    return false;
  });

  return { form, submit, valid };
}
