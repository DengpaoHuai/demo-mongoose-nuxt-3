<script lang="ts" setup>
definePageMeta({
  layout: 'unlogged'
})

const movieForm = reactive({
  title: '',
  director: '',
  releaseYear: ''
})

const submitForm = async () => {
  console.log(movieForm)
  fetch('/api/movies/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieForm)
  })
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <v-text-field
        v-model="movieForm.title"
        label="Title"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="movieForm.director"
        label="Director"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="movieForm.releaseYear"
        label="Release Year"
        type="number"
      ></v-text-field>

      <v-btn type="submit">Create Movie</v-btn>
    </form>
  </div>
</template>

<style scoped></style>
