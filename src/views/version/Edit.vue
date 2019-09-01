<template>

<div>
    <div class="flex items-center">
        <button @click="cancle" class="btn btn-orange">
            Back
        </button>
        <button @click="updateVersion" class="btn btn-orange ml-2">
            Save
        </button>
    </div>

    <div class="my-10">
        <div class="flex w-1/2">
            <label class="inline-block w-1/3 text-gray-700 text-sm font-bold">
                Manufacturer
            </label>
            <input class="text-sm shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
                type="text" 
                required 
                v-model="version.manufacturer">
        </div>
    
        <div class="flex w-1/2">
            <label class="inline-block w-1/3 text-gray-700 text-sm font-bold">
                Model
            </label>    
            <input class="text-sm shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
                type="text" 
                required 
                v-model="version.model">
        </div>
        
        <div class="flex w-1/2">
            <label class="inline-block w-1/3 text-gray-700 text-sm font-bold">
                Type
            </label>          
            <input class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
                type="text" 
                required 
                v-model="version.type">
        </div>

        <div class="flex w-1/2">
            <label class="inline-block w-1/3 text-gray-700 text-sm font-bold">
                Unit
            </label>
            <input class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
                type="text" 
                required 
                v-model="version.unit">
        </div>

        <div class="flex lg:w-1/2">
            <label class="inline-block w-1/3 text-gray-700 text-sm font-bold">
                LTS Version
            </label>
            <input class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
                type="text" 
                required 
                v-model="version.ltsVersion">
        </div>

        <div class="flex w-1/2">
            <label class="inline-block w-1/3 text-gray-700 text-sm font-bold">
                Latest Version
            </label>
            <input class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1" 
                type="text" 
                required 
                v-model="version.latestVersion">
        </div>

        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">
                History
            </label>
            <vue-editor v-model="version.history"></vue-editor>
        </div>
    </div>
</div>
</template>

<script>
    import VersionService from '@/services/VersionService'
    import { VueEditor } from "vue2-editor"

    export default {
    components: {
        VueEditor
    },
    data: () => ({
        version: {}
    }),
    async mounted() {
      const versionId = this.$route.params.versionId
      this.version = (await VersionService.show(versionId)).data
    },
    methods: {
        async updateVersion () {
            const versionId = this.$route.params.versionId
            try {
            await VersionService.put(this.version)
            this.$router.push({
                name: 'versions'
            })
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

<style scoped>

</style>