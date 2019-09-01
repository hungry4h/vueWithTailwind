<template>

    <div>

        <div class="mt-4">
            <div class="btn btn-orange">
                <router-link to="/version/add">Add Version</router-link>
            </div>
        </div>

        <div class="my-4">
            <input 
                type="text" 
                class="border py-1 pl-3 w-full rounded border-orange-300"
                placeholder="Search..." 
                v-model="search">
        </div>
        
        
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
                        <th class="text-sm font-semibold text-gray-700 p-2">View Detail</th>
                    </tr></thead>
                <tbody class="align-baseline">
                    <tr v-for="version in versions" :key="version.id">
                        <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.manufacturer }}</td>
                        <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.model }}</td>
                        <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.type }}</td>
                        <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.unit }}</td>
                        <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.ltsVersion }}</td>
                        <td class="p-2 border-t border-gray-300 font-mono text-xs">{{ version.latestVersion }}</td>
                        <td class="p-2 border-t border-gray-300 font-mono text-xs"><router-link v-bind:to="`/version/${version.id}`"><span class="border-b-2 border-orange-700 pb-2">View Detail</span></router-link></td>
                    </tr> 
                </tbody>
            </table>
        </div>

    </div>

</template>

<script>
    import VersionService from '@/services/VersionService'

    export default {
    data: () => ({
        versions: [],
        version: {},
        search: ""
    }),

    watch: {
        search (value) {
            const route = {
                name: 'versions'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        },
        '$route.query.search': {
            immediate: true,
            async handler (value) {
                this.search = value
                this.versions = (await VersionService.index(value)).data
            }
        }
    }
}
</script>

<style scoped>
</style>

