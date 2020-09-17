import { createServer } from './server'

const server = async () => {
  const { httpServer } = await createServer()
  httpServer.listen({ port: process.env.port || 9999 })
}

server()
