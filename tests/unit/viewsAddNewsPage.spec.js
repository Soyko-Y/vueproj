import { render, fireEvent, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import AddNewsPage from "../../src/views/AddNewsPage.vue";
import router from "../../src/router";
import { flushPromises } from '@vue/test-utils'

describe("viewsAddNewsPage", () => {
  it("add page", async () => {
    router.push('/news')
    await router.isReady()
    const { getByText, debug } = await render(AddNewsPage, {
      global: {
        plugins: [router]
      },
    });
  });
});
