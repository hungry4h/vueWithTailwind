<template>

<div class="w-full">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required v-model="blog.title">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Body
      </label>
      <vue-editor v-model="blog.body"></vue-editor>
    </div>
    <div class="flex items-center">
      <button @click="cancle" class="btn btn-orange">
        Back
      </button>
      <button @click="updateBlog" class="btn btn-orange ml-2">
        Save
      </button>
    </div>
</div>

</template>

<script>
    import BlogService from '@/services/BlogService'
    import { VueEditor } from "vue2-editor"

    export default {
    components: {
        VueEditor
    },
    data: () => ({
        blog: {}
    }),
    async mounted() {
      const blogId = this.$route.params.blogId
      this.blog = (await BlogService.show(blogId)).data
    },
    methods: {
        async updateBlog () {
            const blogId = this.$route.params.blogId
            try {
            await BlogService.put(this.blog)
            this.$router.push({
                name: 'blogs'
            })
            } catch(err) {
            console.log(err)
            }
        },
        cancle () {
          this.$router.push({name: 'blogs'})
        }
    }
  }

</script>

<style scoped>

</style>