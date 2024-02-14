<template>
  <div>
    welcome
    <div v-for="item in data">
      <h1>{{ item.title }}</h1>
      <p>{{ item.content }}</p>
      <p>{{ item.created_at }}</p>
      <p>{{ item.likes.length }}</p>
      <p>{{ item.dislikes.length }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface DataModel {
  id: number
  title: string
  content: string
  created_at: string
  dislikes: Array<number>
  likes: Array<number>
  user: {
    id: number
    name: string
  }
}

//@ts-ignore
import layer8_interceptor from 'layer8_interceptor'
//console.log('interceptor', interceptor)
console.log('Frontend: main.ts init Encrypted tunel')


const endpoint = "https://api-wevegotpoems.up.railway.app/v1"
const data = ref()
const loading = ref(false)

onBeforeMount(async () => {
  layer8_interceptor.initEncryptedTunnel({
    SP_Backend: 'api-wevegotpoems.up.railway.app',
    Layer8Scheme: 'https',
    //Layer8Host: 'aws-container-service-t1.gej3a3qi2as1a.ca-central-1.cs.amazonlightsail.com',
    Layer8Host: 'layer8devproxy.net',
    Layer8Port: ''
  })
})
onMounted(async () => {
  loading.value = true
  // TODO: remove this timeout
  setTimeout(async () => {
    console.log('Frontend: going to try now 1...')

    // TODO: remove this ts-ignore
    const response = await layer8_interceptor.fetch(endpoint + '/poems', { method: 'GET' })

    console.log('Frontend: going to try now 2...')
    // log response body
    // console.log('Frontend: response body', response.body)
    data.value = await response.json()
    console.log('data value', data.value)

    console.log('try layer8')
    loading.value = false
  }, 5000)
})
</script>

<style scoped></style>
