import { pubsub } from '../../../server/pubsub'
import { TODO_UPDATED } from '../iterators'

export default {
  resolve: (payload) => {
    return payload.listDeleted
  },
  subscribe: () => pubsub.asyncIterator([TODO_UPDATED]),
}
