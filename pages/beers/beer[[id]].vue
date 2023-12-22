<script lang="ts" setup>
import { Beer } from '~/types/beers'
const route = useRoute()

import useBeerStore from '@/store/useBeerStore'
const { createBeer, getBeerById, updateBeer } = useBeerStore()

const formData = reactive<Omit<Beer, '_id'>>({
  name: '',
  type: '',
  description: '',
  alcohol: 0
})

const submitForm = async () => {
  if (route.params.id) {
    await updateBeer({
      ...formData,
      _id: route.params.id as string
    })
    console.log('update')
    return navigateTo('/beers')
  }
  await createBeer(formData)
  navigateTo('/beers')
}

onMounted(() => {
  console.log(route)
  if (route.params.id) {
    const beer = getBeerById(route.params.id as string)
    if (beer) {
      formData.name = beer.name
      formData.type = beer.type
      formData.description = beer.description
      formData.alcohol = beer.alcohol
    }
  }
})
</script>

<template>
  <div>
    <h1>Envie de bière ? Créez la votre maintenant :</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Nom de la bière</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nom de la bière"
        v-model="formData.name"
      />
      <label for="type">Type de bière</label>
      <input
        type="text"
        id="type"
        name="type"
        placeholder="Type de bière"
        v-model="formData.type"
      />
      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        v-model="formData.description"
        placeholder="Description de la bière"
      ></textarea>
      <label for="alcohol">Alcool</label>
      <input
        type="number"
        id="alcohol"
        name="alcohol"
        v-model="formData.alcohol"
        placeholder="Alcool"
      />
      <input type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<style scoped></style>
