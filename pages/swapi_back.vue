<template>
  <div>
    <h1>Star Wars Planets</h1>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="planet in data.results" :key="planet.name">
        {{ planet.name }} is {{ planet.distance }} AU from the Sun
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data, pending } = useFetch('https://swapi.dev/api/planets/')
</script>

<style scoped></style>
