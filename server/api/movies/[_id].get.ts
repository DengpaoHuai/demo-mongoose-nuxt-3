import movies from '../../mongoose/models/movie.schema'

export default defineEventHandler(async (event) => {
  try {
    return await movies.findOne({ _id: event.context.params?._id })
  } catch (error) {
    return error
  }
})
