<script lang="ts" setup>
definePageMeta({
  layout: 'logged',
  middleware: 'auth'
})
type Movie = {
  title: string
  director: string
  _id: string
}

const { data, refresh } = useAsyncData<Array<Movie>>('movies', async () => {
  const res: Array<Movie> = await $fetch('/api/movies/all')
  return res.map((movie) => ({
    _id: movie._id,
    title: movie.title,
    director: movie.director,
    action: 'edit'
  }))
})

const deleteItem = (id: string) => {
  fetch(`/api/movies/${id}`, {
    method: 'DELETE'
  }).then(() => {
    refresh()
  })
}
</script>

<template>
  <div>Datatable</div>
  <NuxtLink to="/create_movie">Créer un SUPER film</NuxtLink>
  <v-data-table :items="data" v-if="data">
    <template v-slot:item.action="{ value, index }">
      <button @click="navigateTo('/movie/' + data[index]._id)">Editer</button>
      <button @click="deleteItem(data[index]._id)">Supppp</button>
    </template>
  </v-data-table>
</template>

<style scoped></style>
