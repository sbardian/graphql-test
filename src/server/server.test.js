import createServer from './server'

describe('Server tests', () => {
  it('Should return a server', async () => {
    const { httpServer } = await createServer()
    expect(httpServer).toBeTruthy()
  })
})
