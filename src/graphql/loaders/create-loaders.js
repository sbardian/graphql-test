import { getTodosLoader } from './get-todos-loader'
import Todo from '../../database/models/todo'

export default () => ({
  getTodosLoader: getTodosLoader({ Todo }),
})
