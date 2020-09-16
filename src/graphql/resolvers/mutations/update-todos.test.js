import createDB from '../../../database/database'
import { updateTodo } from './update-todo'
import Todo from '../../../database/models/todo'
import { insertMockTodos } from '../../../database/mocks'

let server
let toUpdate

beforeAll(async (done) => {
  server = await createDB()
  done()
})

afterAll(() => {
  server.mongoose.disconnect()
})

beforeEach(async () => {
  const todos = await Todo.insertMany(insertMockTodos(1))
  toUpdate = await Todo.findById(todos[0].id)
})

afterEach(async () => {
  await Todo.deleteMany()
})

describe('updateTodo tests', () => {
  it('Should update a todo description', async () => {
    await updateTodo(
      'root',
      { TodoInfo: { id: toUpdate.id, description: 'new description test' } },
      { models: { Todo } },
    )
    expect((await Todo.findById(toUpdate.id)).description).toEqual(
      'new description test',
    )
  })
  it('Should return an error', async () => {
    expect.assertions(1)
    try {
      await updateTodo(
        'root',
        { TodoInfo: { id: toUpdate.id, priority: 0 } },
        { models: { Todo } },
      )
    } catch (err) {
      expect(err.message).toMatch(
        'If provided priority must be greater than or equal to one',
      )
    }
  })
})
