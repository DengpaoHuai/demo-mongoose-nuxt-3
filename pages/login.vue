<script lang="ts" setup>
import useAuth from '../store/useAuth'
definePageMeta({
  layout: 'unlogged'
})

const { setUser } = useAuth()

const loginForm = reactive({
  email: '',
  password: ''
})

const submitForm = async () => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginForm)
  })

  const data = await response.json()

  if (data.error) {
    alert(data.error)
  } else {
    localStorage.setItem('token', data.id)
    setUser(data.id)
    navigateTo('/dashboard')
  }
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
