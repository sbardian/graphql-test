// import { withFilter, AuthenticationError } from 'apollo-server';
import { createNewTodo } from './mutations/createNewTodo'
import { getTodos } from './queries/getTodos'
import { updateTodo } from './mutations/updateTodo'
import { updateTodoStatus } from './mutations/updateTodoStatus'
import { deleteTodo } from './mutations/deleteTodo'
import todoAdded from './subscriptions/todo-added'
import todoDeleted from './subscriptions/todo-deleted'
import todoUpdated from './subscriptions/todo-updated'

const resolvers = {
  Query: {
    getTodos,
  },
  Mutation: {
    createNewTodo,
    updateTodo,
    updateTodoStatus,
    deleteTodo,
  },
  Subscription: {
    todoAdded,
    todoDeleted,
    todoUpdated,
  },
}

export default resolvers
