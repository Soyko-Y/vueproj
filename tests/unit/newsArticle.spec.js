import { render, fireEvent, waitFor } from "@testing-library/vue";
import "@testing-library/jest-dom";
import NewsArticle from "../../src/components/NewsArticle.vue";

describe("NewsArticle", () => {
  let news;
  beforeEach(() => {
    news = { id: 1, title: "title", body: "body", isViewed: "false" };
  });

  it("show news", async () => {
    const { getByText, emitted } = await render(NewsArticle, {
      props: { news }
    });

    await waitFor(() => fireEvent.click(getByText("Show news")));
    expect(emitted()).toHaveProperty("show");
  });

  it("delete news", async () => {
    const { getByText, emitted } = await render(NewsArticle, {
      props: { news }
    });

    await waitFor(() => fireEvent.click(getByText("Delete news")));
    expect(emitted()).toHaveProperty("delete");
  });
});
