import { ApolloServer } from 'apollo-server-express'
import Todo from '../database/models/todo'
import createLoaders from '../graphql/loaders/createLoaders'
import schema from '../graphql/schema'
import log from './logging'

// Configure ApolloServer
export default () =>
  new ApolloServer({
    schema,
    context: ({ req, connection }) => {
      if (connection) {
        return {
          models: { Todo },
          user: connection.context.user,
          log,
        }
      }
      return {
        models: {
          Todo,
        },
        user: req.user,
        loaders: createLoaders(),
        log,
      }
    },
    tracing: true,
    cacheControl: true,
    introspection: true,
    formatError: (err) => {
      log.error(err)
      return err
    },
    playground: {
      settings: {
        // temp fix for prismagraphql/graphql-playground#790
        'editor.cursorShape': 'line',
      },
    },
    subscriptions: {
      path: '/subscriptions',
      onConnect: (connectionParams) => {
        log.info('onConnect called: ', connectionParams)
      },
      onDisconnect: () => {
        log.info('onDisconnect called 📫')
      },
    },
  })
