<template>
  <div>
    <h1>Star Wars Planets</h1>
    <p v-if="loading">Loading...</p>
    <ul>
      <li v-for="planet in planets.results" :key="planet.name">
        {{ planet.name }} is {{ planet.distance }} AU from the Sun
      </li>
    </ul>
    <button
      :disabled="!planets.previous"
      @click="planets.previous && switchPage(planets.previous)"
    >
      Previous Page
    </button>
    <button
      :disabled="!planets.next"
      @click="planets.next && switchPage(planets.next)"
    >
      Next Page
    </button>
  </div>
</template>

<script lang="ts" setup>
type Planet = {
  name: string
  distance: number
}

const { planets, switchPage, loading } = useCustomFetch2<Planet>(
  'https://swapi.dev/api/planets'
)
</script>

<style scoped></style>
