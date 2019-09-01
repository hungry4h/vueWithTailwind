<template>

<div>

    <div class="my-4">
        <input 
            type="text" 
            class="border py-1 pl-3 w-full rounded border-orange-300"
            placeholder="Search..." 
            v-model="search">
    </div>

    <button class="btn btn-orange" v-if="!addform" @click="toggleForm">
        Add File
    </button>

    <div class="my-5" v-if="addform">

        <form enctype="multipart/form-data">

            <div v-if="message"
                :value="true"
                :class="[error ? 'error' : 'success']"
                role="alert">
                <strong class="font-bold">{{message}}</strong>
            </div>

            <div v-if="!message">

                <div>
                    <input 
                        type="file"
                        ref="file"
                        @change="selectFile">

                    <span v-if="file" class="file-name">
                        File Name : {{file.name}}
                    </span>
                </div>

                <button class="btn btn-orange mt-3" @click="sendFile">Submit</button>
            </div>
        </form>
    </div>

    <div class="my-5">
        <table class="w-full text-left table-collapse">
            <thead>
                <tr>
                    <th class="text-sm font-semibold text-gray-700 p-2">File Name</th>
                    <th class="text-sm font-semibold text-gray-700 p-2">File Size</th>
                    <th class="text-sm font-semibold text-gray-700 p-2">Upload Date</th>
                </tr></thead>
            <tbody class="align-baseline">
                <tr v-for="item in items" :key="file.id">
                    <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap"><button @click="download(item.id)">{{item.file_name}}</button></td>
                    <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{item.file_size/1000000}}mb</td>
                    <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{item.updatedAt.slice(0,10)}}</td>
                </tr> 
            </tbody>
        </table>
    </div>

</div>

</template>

<script>
    import FileUploadService from '@/services/FileUploadService'

    export default {
        data() {
            return {
                search: "",
                item:{},
                items:[],
                addform: false,
                title: "",
                file: "",
                message: "",
                error: false
            }
        },

        watch: {
            search (value) {
                const route = {
                    name: 'files'
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
                    this.items = (await FileUploadService.index(value)).data
                }
            }
        },

        methods: {
            //async download(fileId) {
                //await FileUploadService.download(fileId)
                //console.log(fileId)
            download(fileId) { 
                window.open(`http://localhost:3000/file-download/${fileId}`)
            }, 
            toggleForm() {
                this.addform = true
            },
            selectFile() {
                this.file = this.$refs.file.files[0]
                this.error = false
                this.message = ""
            },
            async sendFile() {
                const formData = new FormData();
                formData.append('file', this.file)
                //formData.append('desc_title', this.desc_title)
                //formData.append('desc_body', this.desc_body)
                try {
                    await FileUploadService.post(formData)
                    this.message = "Upload is completed"
                    
                } catch(err) {
                    this.message = "Some error occured"
                    this.error = true
                }
            }
        }
    }
</script>

<style scoped>
</style>