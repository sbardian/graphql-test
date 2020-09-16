import createDB from '../../../database/database'
import { updateTodoStatus } from './update-todo-status'
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
  it('Should update a todo completed to true', async () => {
    await updateTodoStatus(
      'root',
      { TodoInfo: { id: toUpdate.id, completed: true } },
      { models: { Todo } },
    )
    expect((await Todo.findById(toUpdate.id)).completed).toEqual(true)
  })
  it('Should return an error', async () => {
    expect.assertions(1)
    try {
      await updateTodoStatus(
        'root',
        { TodoInfo: { id: toUpdate.id, completed: 'false' } },
        { models: { Todo } },
      )
    } catch (err) {
      expect(err.message).toMatch(
        'Completed must be a boolean value (true/false)',
      )
    }
  })
})
