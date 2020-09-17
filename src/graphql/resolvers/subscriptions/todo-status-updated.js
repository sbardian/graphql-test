import { withFilter } from 'apollo-server'
import { pubsub } from '../../../server/pubsub'
import { TODO_STATUS_UPDATED } from '../events'

export default {
  resolve: (payload) => payload.todoStatusUpdated,
  subscribe: withFilter(
    () => pubsub.asyncIterator([TODO_STATUS_UPDATED]),
    (payload, variables) => payload.todoStatusUpdated.todo === variables.id,
  ),
}
