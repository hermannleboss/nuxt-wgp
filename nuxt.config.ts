// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-ignore
import layer8_interceptor from "layer8_interceptor";
//console.log('interceptor', interceptor)
console.log("Frontend: main.ts init Encrypted tunel");

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false }
});
