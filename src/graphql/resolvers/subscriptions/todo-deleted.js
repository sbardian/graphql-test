import { withFilter } from 'apollo-server'
import { pubsub } from '../../../server/pubsub'
import { TODO_DELETED } from '../iterators'

export default {
  resolve: (payload) => payload.todoDeleted,
  subscribe: withFilter(
    () => pubsub.asyncIterator([TODO_DELETED]),
    (payload, variables) => payload.todoDeleted.todo === variables.id,
  ),
}
