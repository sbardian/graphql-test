// import log from 'console';
import express from 'express'
import { PubSub } from 'apollo-server-express'
import { createServer } from 'http'
import { connectDB } from '../database'
import createApolloServer from './createApolloServer'
import { insertMockTodos } from '../database/mocks'
import Todo from '../database/models/todo'
import log from './logging'

export const pubsub = new PubSub()

export default async () => {
  const app = express()
  await connectDB()

  Todo.insertMany(insertMockTodos(10))
  log.info('Records inserted into DB')

  const apolloServer = createApolloServer()

  apolloServer.applyMiddleware({ app })
  const httpServer = createServer(app)

  // apolloServer.installSubscriptionHandlers(httpServer);

  return { httpServer }
}
