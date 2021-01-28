import { render, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";
import AddNews from "../../src/components/AddNews.vue";

describe("AddNews", () => {
  it("renders", async () => {
    const fakeNews = {
      title: "Hello",
      body: "World"
    };

    const onAdd = jest.fn();

    const { getByText, getByLabelText } = await render(AddNews, {
      props: { onAdd }
    });

    const submitButton = getByText("Save News");
    expect(submitButton).toBeDisabled();

    const titleInput = getByLabelText("News Title:");
    await fireEvent.update(titleInput, fakeNews.title);

    const bodyTextarea = getByLabelText("Content:");
    await fireEvent.update(bodyTextarea, fakeNews.body);

    expect(submitButton).toBeEnabled();
    expect(submitButton).toHaveAttribute("type", "submit");

    await fireEvent.click(submitButton);
    expect(onAdd).toHaveBeenCalledTimes(1);
  });
});
