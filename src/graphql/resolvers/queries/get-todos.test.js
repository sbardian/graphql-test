import createDB from '../../../database/database'
import { getTodos } from './get-todos'
import { returnTodo } from '../../../database/utils/utils'
import Todo from '../../../database/models/todo'
import { getTodosLoader } from '../../loaders/get-todos-loader'
import { insertMockTodos } from '../../../database/mocks'

let server
let todosFalse
let actualFalseTodos
let todosTrue
let actualTrueTodos
let loaders

beforeAll(async (done) => {
  server = await createDB()
  done()
})

afterAll(() => {
  server.mongoose.disconnect()
})

beforeEach(async () => {
  loaders = { getTodosLoader: getTodosLoader({ Todo }) }
  todosFalse = await Todo.insertMany(insertMockTodos(3))
  todosTrue = await Todo.insertMany(insertMockTodos(2, true))
  actualFalseTodos = todosFalse.map((todo) => returnTodo(todo))
  actualTrueTodos = todosTrue.map((todo) => returnTodo(todo))
})

afterEach(async () => {
  await Todo.deleteMany()
})

describe('getTodos test', () => {
  it('Returns todos', async () => {
    const todoResults = await getTodos(
      'root',
      {},
      {
        loaders: { getTodosLoader: loaders.getTodosLoader },
        models: { Todo },
      },
    )
    const results = await Promise.all(todoResults.map((result) => result))
    expect(results.map((result) => returnTodo(result))).toEqual(
      actualFalseTodos.concat(actualTrueTodos),
    )
  })
  it('Returns todos, completed true only', async () => {
    const todoResults = await getTodos(
      'root',
      { completed: true },
      {
        loaders: { getTodosLoader: loaders.getTodosLoader },
        models: { Todo },
      },
    )
    const results = await Promise.all(todoResults.map((result) => result))
    expect(results.map((result) => returnTodo(result))).toEqual(actualTrueTodos)
  })
  it('Returns todos, completed false only', async () => {
    const todoResults = await getTodos(
      'root',
      { completed: false },
      {
        loaders: { getTodosLoader: loaders.getTodosLoader },
        models: { Todo },
      },
    )
    const results = await Promise.all(todoResults.map((result) => result))
    expect(results.map((result) => returnTodo(result))).toEqual(
      actualFalseTodos,
    )
  })
  it('Returns todos with completed true, and sorted by description', async () => {
    const todoResults = await getTodos(
      'root',
      { orderBy: [{ description: 'DESC' }], completed: true },
      {
        loaders: { getTodosLoader: loaders.getTodosLoader },
        models: { Todo },
      },
    )
    const results = await Promise.all(todoResults.map((result) => result))
    expect(results.map((result) => returnTodo(result))[0].description).toEqual(
      actualTrueTodos.sort((a, b) => a.description - b.description)[0]
        .description,
    )
  })
  it('Returns todos with completed true, and sorted by createdAt', async () => {
    const todoResults = await getTodos(
      'root',
      { orderBy: [{ createdAt: 'ASC' }], completed: true },
      {
        loaders: { getTodosLoader: loaders.getTodosLoader },
        models: { Todo },
      },
    )
    const results = await Promise.all(todoResults.map((result) => result))
    expect(results.map((result) => returnTodo(result))[0].createdAt).toEqual(
      actualTrueTodos.sort((a, b) => a.createdAt - b.createdAt)[0].createdAt,
    )
  })
})
