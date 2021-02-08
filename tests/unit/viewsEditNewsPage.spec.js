import { render, fireEvent, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import EditNewsPage from "../../src/views/EditNewsPage.vue";
import fetchMock from "jest-fetch-mock";
import router from "../../src/router";
import { flushPromises } from '@vue/test-utils'

fetchMock.enableMocks();

describe("viewsNewsPage", () => {
  const news = { id: 1, title: "title", body: "body", isViewed: "true" };

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(news));
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it("edit news page", async () => {
    router.push('/news')
    await router.isReady()
    const { getByText, debug } = await render(EditNewsPage, {
      global: {
        plugins: [router]
      }
    });
  });
});
