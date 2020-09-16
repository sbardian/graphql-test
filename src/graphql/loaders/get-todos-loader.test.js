import createDB from '../../database/database'
import { getTodosLoader } from './get-todos-loader'
import { returnTodo } from '../../database/utils/utils'
import Todo from '../../database/models/todo'
import { insertMockTodos } from '../../database/mocks'

let mockTodos
let server
let loaders

beforeAll(async (done) => {
  server = await createDB()
  done()
})

afterAll(() => {
  server.mongoose.disconnect()
})

beforeEach(async () => {
  mockTodos = await Todo.insertMany(insertMockTodos(1))
  loaders = { getTodosLoader: getTodosLoader({ Todo }) }
})

afterEach(async () => {
  await Todo.deleteMany()
})

describe('getTodoLoader tests', () => {
  it('DataLoader returns todo it receives', async () => {
    expect.assertions(1)
    return Promise.all(
      mockTodos.map(async (todo) => {
        const returnedUser = await loaders.getTodosLoader.load(todo.id)
        expect(returnTodo(returnedUser)).toEqual(returnTodo(todo))
      }),
    )
  })
})
