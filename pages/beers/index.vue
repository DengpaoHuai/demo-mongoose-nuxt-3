<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useBeerStore from '@/store/useBeerStore'
const { beers } = storeToRefs(useBeerStore())
const { removeBeer } = useBeerStore()
</script>

<template>
  <div>
    <h1>Beers</h1>
    <ul>
      <li v-for="beer in beers" :key="beer._id">
        <div>
          <h2>name : {{ beer.name }}</h2>
          <p>type : {{ beer.type }}</p>
          <p>description : {{ beer.description }}</p>
          <p>alcohol : {{ beer.alcohol }}</p>
          <button @click="removeBeer(beer._id)">supprimer</button>
          <nuxt-link :to="`/beers/beer${beer._id}`"> Modifier </nuxt-link>
        </div>
      </li>
    </ul>
    <nuxt-link to="/beers/beer">Créez votre bière</nuxt-link>
  </div>
</template>

<style scoped></style>
