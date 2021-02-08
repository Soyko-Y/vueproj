import { render, fireEvent, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import News from "../../src/views/News.vue";
import fetchMock from "jest-fetch-mock";
import router from "../../src/router";
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../../src/views/Home.vue";
import { flushPromises } from '@vue/test-utils'

fetchMock.enableMocks();

describe("viewsNews", () => {
  const news = [
    { id: 1, title: "title", body: "body", isViewed: "false" },
    { id: 2, title: "title2", body: "body2", isViewed: "false" },
    { id: 3, title: "title3", body: "body3", isViewed: "false" }
  ];

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(news));
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it("add news", async () => {
    router.push('/news')
    await router.isReady()
    const { getByText } = render(News, {
      global: {
        plugins: [router]
      }
    });

    await waitFor(() => fireEvent.click(getByText("Add news")));
    await flushPromises();
    expect(getByText("Add news")).toHaveTextContent("Add news");
  });

  it("show news", async () => {
    router.push('/news')
    await router.isReady()
    const { getAllByText } = render(News, {
      global: {
        plugins: [router]
      }
    });

    await waitFor(() => fireEvent.click(getAllByText("Show news")[0]));
    await flushPromises();
    expect(getAllByText("Show news")[0]).toHaveTextContent("Show news");
  });

  it("edit news", async () => {
    router.push('/news')
    await router.isReady()
    const { getAllByText } = render(News, {
      global: {
        plugins: [router]
      }
    });

    await waitFor(() => fireEvent.click(getAllByText("Edit news")[0]));
    await flushPromises();
    expect(getAllByText("Edit news")[0]).toHaveTextContent("Edit news");
  });
});
