<template>

    <div>

        <div class="mt-4">
            <div class="btn btn-orange">
                <router-link to="/blog/add">Add Blog</router-link>
            </div>
        </div>

        <div class="my-4">
            <input 
                type="text" 
                class="border py-1 pl-3 w-full rounded border-orange-300"
                placeholder="Search..." 
                v-model="search">
        </div>
        
        
        <div v-for="blog in blogs" :key="blog.id">
            <div class="bg-white rounded overflow-hidden shadow-lg my-2">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{blog.title}}</div>
                    <span class="text-gray-700" v-html="`${(blog.body).slice(0, 200)}`"></span>
                    <p class="mt-2 text-xs text-gray-500">updated at : {{(blog.updatedAt).slice(0,10)}}</p>
                </div>
                <div class="flex items-center mb-4 ml-6">
                    <router-link v-bind:to="`/blog/${blog.id}`"><span class="border-b-2 border-orange-700 pb-2">... Veiw Detail</span></router-link>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import BlogService from '@/services/BlogService'

    export default {
    data: () => ({
        blogs: [],
        blog: {},
        search: "",
        dialog: false
    }),

    watch: {
        search (value) {
            const route = {
                name: 'blogs'
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
                this.blogs = (await BlogService.index(value)).data
            }
        }
    }
}
</script>

<style scoped>
</style>

