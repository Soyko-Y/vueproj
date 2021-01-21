import { reactive, computed } from "vue";
import { useField } from "./field";

export function useAuth(init = {}) {
  const form = reactive({});
  const validKey = "valid";

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value);
  }

  const withoutValid = k => k !== validKey;

  form.valid = computed(() => {
    return Object.keys(form)
      .filter(withoutValid)
      .reduce((acc, k) => {
        acc = form[k].valid;
        return acc;
      }, true);
  });

  return form;
}
