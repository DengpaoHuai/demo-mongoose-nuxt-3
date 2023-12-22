<template>
  <div>
    <h1>Star Wars People</h1>
    <p v-if="loading">Loading...</p>
    <ul>
      <li v-for="planet in planets.results" :key="planet.name">
        {{ planet.name }} is {{ planet.mass }} AU from the Sun
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
definePageMeta({
  layout: 'demo'
})

type People = {
  name: string
  height: number
  mass: number
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

const { planets, switchPage, loading } = useCustomFetch2<People>(
  'https://swapi.dev/api/people'
)
</script>

<style scoped></style>
