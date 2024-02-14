<template>
    <div>
        <h1>Home Pages</h1>
        <p>Layer8 is already availabe</p>

        <div v-if="loading">Loading...</div>
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
import { onMounted, ref } from 'vue';
//@ts-ignore
import layer8_interceptor from 'layer8_interceptor'

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

const endpoint = "https://api-wevegotpoems.up.railway.app/v1"
const data = ref()
const loading = ref(false)
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