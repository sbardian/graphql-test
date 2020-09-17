import { withFilter } from 'apollo-server'
import { pubsub } from '../../../server/pubsub'
import { TODO_UPDATED } from '../events'

export default {
  resolve: (payload) => payload.todoUpdated,
  subscribe: withFilter(
    () => pubsub.asyncIterator([TODO_UPDATED]),
    (payload, variables) => payload.todoUpdated.todo === variables.id,
  ),
}
