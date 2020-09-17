import createLoaders from './create-loaders'

describe('createLoaders tests', () => {
  it('Returns an object of loaders', () => {
    expect(createLoaders()).toEqual(
      expect.objectContaining({
        getTodosLoader: expect.any(Object),
      }),
    )
  })
})
