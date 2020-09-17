import createDB from '../../../database/database'
import { deleteTodo } from './delete-todo'
import Todo from '../../../database/models/todo'
import { insertMockTodos } from '../../../database/mocks'
import { pubsub as mockPubsub } from '../../../server/pubsub'

jest.mock('../../../server/pubsub')

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

describe('delete todo test', () => {
  it('Returns deleted todo', async () => {
    mockPubsub.publish.mockImplementationOnce(() => false)
    const deletedTodo = await deleteTodo(
      'root',
      { id: toUpdate.id },
      {
        models: { Todo },
      },
    )
    expect(deletedTodo.id).toEqual(toUpdate.id)
    expect(await Todo.find()).toHaveLength(0)
  })
  it('Returns an error', async () => {
    mockPubsub.publish.mockImplementationOnce(() => false)
    try {
      await deleteTodo(
        'root',
        { id: '42' },
        {
          models: { Todo },
        },
      )
    } catch (err) {
      expect(err.message).toMatch(
        'Cast to ObjectId failed for value "42" at path "_id" for model "Todo"',
      )
    }
  })
})
