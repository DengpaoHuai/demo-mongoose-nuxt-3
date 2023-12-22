type FetchResponse<T> = {
  results: T[]
  next: string | null
  previous: string | null
  count: number
}

const useCustomFetch2 = <T>(url: string) => {
  const planets: Ref<FetchResponse<T>> = ref({
    results: [],
    next: null,
    previous: null,
    count: 0
  })
  const error = ref(null)
  const loading = ref(false)
  const customUrl = ref<string>(url)

  const getData = () => {
    loading.value = true
    fetch(customUrl.value)
      .then((res) => res.json())
      .then((response: FetchResponse<T>) => {
        loading.value = false
        planets.value = response
        console.log(response)
      })
  }

  onMounted(() => {
    getData()
  })

  return {
    planets,
    error,
    loading,
    switchPage: (url: string) => {
      customUrl.value = url
      getData()
    }
  }
}

export default useCustomFetch2
