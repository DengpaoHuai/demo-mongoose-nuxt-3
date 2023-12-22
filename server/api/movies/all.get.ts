import movies from '../../mongoose/models/movie.schema'

export default defineEventHandler(async (event) => {
  try {
    const movieData = await movies.find()
    return movieData
  } catch (err) {
    console.dir(err)
    event.res.statusCode = 500
    return {
      code: 'ERROR',
      message: 'Something wrong.'
    }
  }
})
