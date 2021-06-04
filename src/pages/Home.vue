<template>
  <div class="home">
    <hello-world greeting-text="Heading 1" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
