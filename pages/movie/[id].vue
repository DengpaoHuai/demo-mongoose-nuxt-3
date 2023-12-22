<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'unlogged'
})
const route = useRoute()

const movieForm = ref({
  title: '',
  director: ''
})

onMounted(() => {
  fetch(`/api/movies/${route.params.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      movieForm.value = data
    })
    .catch((error) => {
      console.error(error)
    })
})

const submitForm = async () => {
  console.log(movieForm.value)
  fetch(`/api/movies/${route.params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieForm.value)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      navigateTo('/dashboard')
    })
    .catch((error) => {
      console.error(error)
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

      <v-btn type="submit">Edit Movie</v-btn>
    </form>
  </div>
</template>

<style scoped></style>
