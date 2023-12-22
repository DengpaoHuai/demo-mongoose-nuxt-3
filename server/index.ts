import mongoose from 'mongoose'

export default async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo')
    console.log('DB connection established.')
  } catch (err) {
    console.error('DB connection failed.', err)
  }
}
