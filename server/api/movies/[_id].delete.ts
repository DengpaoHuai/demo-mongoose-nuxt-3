import movies from '../../mongoose/models/movie.schema'

export default defineEventHandler(async (event) => {
  try {
    const deletedMovie = await movies.findOneAndDelete({
      _id: event.context.params?._id
    })
    if (deletedMovie) {
      return { message: 'Movie deleted successfully' }
    } else {
      return { message: 'Movie not found' }
    }
  } catch (error) {
    return error
  }
})
