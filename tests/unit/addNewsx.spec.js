import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import AddNewsx from '../../src/components/AddNewsx.vue'
import store from '../../src/store/modules/news'

describe('AddNewsx', () => {
  it('add news', async () => {
    const fakeNews = {
      title: 'Hello',
      body: 'World'
    }

    const { getByText, getByPlaceholderText } = await render(AddNewsx, {store});
    
    const submitButton = getByText('Create News')
    expect(submitButton).toBeDisabled()

    const titleInput = getByPlaceholderText('title')
    await fireEvent.update(titleInput, fakeNews.title)

    const bodyTextarea = getByPlaceholderText('body')
    await fireEvent.update(bodyTextarea, fakeNews.body)

    expect(submitButton).toBeEnabled()
    expect(submitButton).toHaveAttribute('type', 'submit')

    await fireEvent.click(submitButton)

    expect(store.state.news[0].title).toBe(fakeNews.title)
    expect(store.state.news[0].body).toBe(fakeNews.body)

  });
})
