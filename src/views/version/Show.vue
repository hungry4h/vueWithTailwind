<template>
  <div class="my-5">
      <table class="w-full text-left table-collapse">
          <thead>
            <tr>
                <th class="text-sm font-semibold text-gray-700 p-2">Manufacturer</th>
                <th class="text-sm font-semibold text-gray-700 p-2">Model</th>
                <th class="text-sm font-semibold text-gray-700 p-2">Type</th>
                <th class="text-sm font-semibold text-gray-700 p-2">Unit</th>
                <th class="text-sm font-semibold text-gray-700 p-2">LTS Version</th>
                <th class="text-sm font-semibold text-gray-700 p-2">Latest Version</th>
                <th class="text-sm font-semibold text-gray-700 p-2">Edit</th>
              </tr>
          </thead>
          <tbody class="align-baseline">
            <tr>
                <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.manufacturer }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.model }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.type }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.unit }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.ltsVersion }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.latestVersion }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs"><router-link v-bind:to="`/version/${version.id}/edit`"><span class="border-b-2 border-orange-700 pb-2">Edit</span></router-link></td>
            </tr> 
          </tbody>
      </table>

      <div class="bg-white rounded overflow-hidden shadow-lg my-10">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Version History</div> 
            <p class="my-2 text-xs text-gray-500">updated at : {{(version.updatedAt).slice(0,10)}}</p>
            <p class="p-5 border-t" v-html="`${(version.history)}`"></p>
        </div>
      </div>
  </div>
</template>

<script>
  import VersionService from '@/services/VersionService'
    
  export default {
    data: () => ({
        version: {},
    }),
    async mounted() {
      const versionId = this.$route.params.versionId
      this.version = (await VersionService.show(versionId)).data
    },

  }

</script>
