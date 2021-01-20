import { render, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import News from '../../src/views/News.vue'
import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks();

describe('viewsNews', () => {
  const news = [
      {id: 1, title: 'title', body: 'body', isViewed: 'false'},
      {id: 2, title: 'title2', body: 'body2', isViewed: 'false'},
      {id: 3, title: 'title3', body: 'body3', isViewed: 'false'},
    ];

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(news));
  });

  afterEach(() => {
    fetch.resetMocks();
  })

  it("show and delete news", async () => {
    const { getAllByText, queryByText } = await render(News);

    await waitFor(() => fireEvent.click(getAllByText('Show news')[0]));

    await waitFor(() => fireEvent.click(getAllByText('Delete news')[0]));
    expect(queryByText('title')).not.toBeInTheDocument()
  });

  it("filter all", async () => {
    const { getByDisplayValue } = await render(News);
    
    const select = getByDisplayValue('All')
    expect(select.value).toBe('all')
  });

  it("filter viewed", async () => {
    let optionElement;
    const { getByDisplayValue, getByText } = await render(News);

    const select = getByDisplayValue('All')
    expect(select.value).toBe('all')

    optionElement = getByText('Viewed')
    await fireEvent.update(optionElement)
    expect(select.value).toBe('viewed')
  });

  it("filter not-viewed", async () => {
    let optionElement;
    const { getByDisplayValue, getByText } = await render(News);

    const select = getByDisplayValue('All')
    expect(select.value).toBe('all')

    optionElement = getByText('Not viewed')
    await fireEvent.update(optionElement)
    expect(select.value).toBe('not-viewed')
  });
})
