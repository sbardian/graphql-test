import { createServer } from './server'

const server = async () => {
  const { httpServer } = await createServer()
  httpServer.listen({ port: '9999' })
}

server()
