import { createNewTodo } from './create-new-todo'
import createDB from '../../../database/database'
import Todo from '../../../database/models/todo'

let server

beforeAll(async (done) => {
  server = await createDB()
  done()
})

afterAll(() => {
  server.mongoose.disconnect()
})

afterEach(async () => {
  await Todo.deleteMany()
})

describe('createNewTodo tests', () => {
  it('Returns an error, no description', async () => {
    expect.assertions(1)
    try {
      await createNewTodo('root', { TodoInfo: {} }, { models: { Todo } })
    } catch (err) {
      expect(err.message).toMatch('A description is required')
    }
  })
  it('Returns a new todo, description', async () => {
    expect(
      await createNewTodo(
        'root',
        { TodoInfo: { description: 'new todo description' } },
        { models: { Todo } },
      ),
    ).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        description: 'new todo description',
        priority: 1,
        completed: false,
      }),
    )
  })
  it('Returns a new todo, description and priority', async () => {
    expect(
      await createNewTodo(
        'root',
        { TodoInfo: { description: 'new todo description', priority: 4 } },
        { models: { Todo } },
      ),
    ).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        description: 'new todo description',
        priority: 4,
        completed: false,
      }),
    )
  })
})
