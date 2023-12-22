<script lang="ts" setup>
definePageMeta({
  layout: 'unlogged'
})

const registerForm = reactive({
  email: '',
  password: '',
  passwordConfirmation: ''
})

const submitForm = async () => {
  console.log(registerForm)
  fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerForm)
  })
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <v-text-field
        v-model="registerForm.email"
        label="Email"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="registerForm.password"
        label="Password"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="registerForm.passwordConfirmation"
        label="Password Confirmation"
        type="password"
      ></v-text-field>

      <v-btn type="submit">Register</v-btn>
    </form>
  </div>
</template>

<style scoped></style>
