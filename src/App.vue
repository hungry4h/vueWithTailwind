<template>
  <div id="app" class="bg-gray-100">
    <Header/>
    <div class="container min-h-screen my-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
