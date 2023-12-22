<script lang="ts" setup>
definePageMeta({
  layout: 'unlogged'
})

const loginForm = reactive({
  email: '',
  password: ''
})

const submitForm = async () => {
  console.log(loginForm)
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <v-text-field
        v-model="loginForm.email"
        label="Email"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="loginForm.password"
        label="Password"
        type="password"
      ></v-text-field>

      <v-btn type="submit">Login</v-btn>
    </form>
  </div>
</template>

<style scoped></style>
