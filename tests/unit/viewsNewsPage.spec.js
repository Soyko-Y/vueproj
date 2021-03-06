import { render, fireEvent, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import NewsPage from "../../src/views/NewsPage.vue";
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

  it("show news page", async () => {
    router.push('/news')
    await router.isReady()
    const { getByText, debug } = await render(NewsPage, {
      global: {
        plugins: [router]
      }
    });
  });
});
