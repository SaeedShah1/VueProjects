<template>
  <div class="home">
  <paycash/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Paycash from '../pages/paycash.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Paycash
  }
}
</script>
