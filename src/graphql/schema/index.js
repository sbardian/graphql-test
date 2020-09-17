import { gql, makeExecutableSchema } from 'apollo-server'
import resolvers from '../resolvers/resolvers'
import typeDefs from './typeDefs.graphql'

export default makeExecutableSchema({
  resolvers,
  typeDefs: gql(typeDefs),
})
