import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { Beer } from '~/types/beers'
import instance from '~/services/instance'

const useBeerStore = defineStore('beer', () => {
  const beers: Ref<Beer[]> = ref([])

  onMounted(() => {
    instance.get('/beers').then((response) => {
      beers.value = response.data
    })
  })

  const createBeer = async (beer: Omit<Beer, '_id'>) => {
    const response = await instance.post('/beers', beer)
    beers.value.push(response.data)
  }

  const removeBeer = async (id: string) => {
    await instance.delete('/beers/' + id)
    beers.value = beers.value.filter((beer) => beer._id !== id)
  }

  const getBeerById = (id: string) => {
    return beers.value.find((beer) => beer._id === id)
  }

  const updateBeer = async (beer: Beer) => {
    await instance.put('/beers/' + beer._id, {
      name: beer.name,
      type: beer.type,
      description: beer.description,
      alcohol: beer.alcohol
    })
    beers.value = beers.value.map((b) => (b._id === beer._id ? beer : b))
  }

  return {
    beers,
    createBeer,
    removeBeer,
    getBeerById,
    updateBeer
  }
})

export default useBeerStore
