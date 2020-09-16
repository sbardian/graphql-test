import { createNewTodo } from './mutations/create-new-todo'
import { getTodos } from './queries/get-todos'
import { updateTodo } from './mutations/update-todo'
import { updateTodoStatus } from './mutations/update-todo-status'
import { deleteTodo } from './mutations/delete-todo'
import todoAdded from './subscriptions/todo-added'
import todoDeleted from './subscriptions/todo-deleted'
import todoUpdated from './subscriptions/todo-updated'
import todoStatusUpdated from './subscriptions/todo-status-updated'

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
    todoStatusUpdated,
  },
}

export default resolvers
