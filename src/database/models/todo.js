import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: Boolean,
    priority: Number,
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true },
)

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo
