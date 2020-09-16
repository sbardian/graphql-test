import { withFilter } from 'apollo-server'
import { pubsub } from '../../../server/pubsub'
import { TODO_ADDED } from '../iterators'

export default {
  resolve: (payload) => payload.todoAdded,
  subscribe: withFilter(
    () => pubsub.asyncIterator([TODO_ADDED]),
    (payload, variables) => payload.todoAdded.todo === variables.id,
  ),
}
