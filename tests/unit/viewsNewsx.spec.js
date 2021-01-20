import { render, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Newsx from '../../src/views/Newsx.vue'
import fetchMock from "jest-fetch-mock"
import store from '../../src/store/modules/news'

fetchMock.enableMocks();

describe('viewsNewsx', () => {
  const news = [
      {id: 1, title: 'title', body: 'body'},
      {id: 2, title: 'title2', body: 'body2'},
      {id: 3, title: 'title3', body: 'body3'},
    ];

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(news));
  });

  afterEach(() => {
    fetch.resetMocks();
  })

  it("show and delete first news", async () => {
    const { getAllByText } = await render(Newsx, {store});

    await waitFor(() => fireEvent.click(getAllByText('Delete news')[0]));
    expect(store.state.news.length).toBe(news.length - 1)
    
    await waitFor(() => fireEvent.click(getAllByText('Show news')[0]));
    expect(store.state.news.length).toBe(1)
  });
})
