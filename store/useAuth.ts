import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

const useAuth = defineStore('auth', () => {
  const user = ref(null)
  const setUser = (newUser: any) => {
    user.value = newUser
  }
  return {
    user,
    setUser
  }
})

export default useAuth
