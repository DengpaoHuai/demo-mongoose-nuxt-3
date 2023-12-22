const useCustomFetch = <T>(url: string) => {
  const data = ref<T | null>(null)
  const error = ref(null)
  const loading = ref(false)
  const page = ref(1)

  const getData = () => {
    loading.value = true
    fetch(url + '?page=' + page.value)
      .then((res) => res.json())
      .then((response) => {
        loading.value = false
        data.value = response.results
        console.log(response.results)
      })
  }

  onMounted(() => {
    getData()
  })

  return {
    data,
    error,
    loading,
    updatePage: (newPage: number) => {
      console.log('inside')
      page.value = page.value + newPage
      getData()
    }
  }
}

export default useCustomFetch
