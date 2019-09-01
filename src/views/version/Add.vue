<template>

<div>
    <div class="mb-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
        type="text" 
        required 
        placeholder="manufacturer"
        v-model="version.manufacturer">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
        type="text" 
        required 
        placeholder="model"
        v-model="version.model">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
        type="text" 
        required 
        placeholder="type"
        v-model="version.type">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
        type="text" 
        required 
        placeholder="unit"
        v-model="version.unit">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
        type="text" 
        required 
        placeholder="LTS Version"
        v-model="version.ltsVersion">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
        type="text" 
        required 
        placeholder="Latest Version"
        v-model="version.latestVersion">
    </div>
    <div class="flex items-center">
      <button @click="cancle" class="btn btn-orange">
        Back
      </button>
      <button @click="addVersion" class="btn btn-orange ml-2">
        Save
      </button>
    </div>
</div>

</template>

<script>

  import VersionService from '@/services/VersionService'

  export default {
    data: () => ({
        version: {},
        manufacturer:"",
        model:"",
        type:"",
        unit:"",
        ltsVersion:"",
        latestVersion:""
    }),
    methods: {
      async addVersion () {
        try {
          await VersionService.post(this.version)
          this.$router.push({name: 'versions'})
        } catch(err) {
          console.log(err)
        } 
      },
      cancle () {
          this.$router.push({name: 'versions'})
      }
    }
  }
</script>