<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/poems">Poems</nuxt-link></li>
      </ul>
    </nav>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import layer8_interceptor from 'layer8_interceptor'


onBeforeMount(async () => {
  console.log('Frontend: app.vue init Encrypted tunel')
  layer8_interceptor.initEncryptedTunnel({
    SP_Backend: 'api-wevegotpoems.up.railway.app',
    Layer8Scheme: 'https',
    //Layer8Host: 'aws-container-service-t1.gej3a3qi2as1a.ca-central-1.cs.amazonlightsail.com',
    Layer8Host: 'layer8devproxy.net',
    Layer8Port: ''
  })
})
</script>

<style scoped></style>
