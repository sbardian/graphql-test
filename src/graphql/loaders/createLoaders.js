import { getTodosLoader } from './getTodosLoader'
import Todo from '../../database/models/todo'

export default () => ({
  getTodosLoader: getTodosLoader({ Todo }),
})
