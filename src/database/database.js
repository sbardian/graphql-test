import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

export default async () => {
  const mongod = new MongoMemoryServer({ timestamps: true })
  const uri = await mongod.getUri()

  mongoose.promise = global.Promise

  // Make Mongoose use `findOneAndUpdate()` from MongoDB driver.
  mongoose.set('useFindAndModify', false)

  await mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return { mongoose }
}
