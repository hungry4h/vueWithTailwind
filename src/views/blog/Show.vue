<template>
<div class="flex justify-center">
  <div class="bg-white rounded overflow-hidden shadow-lg my-2">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{blog.title}}</div>
        <div v-html="blog.body"></div>
    </div>
    <div class="flex items-center mb-4 ml-6">
      <button class="btn btn-orange" @click="cancle">Back</button>
      <button class="btn btn-orange ml-2" @click="editBlog">Edit</button>
      <button class="btn btn-orange ml-2" @click="deleteBlog">Delete</button>
    </div>
  </div>
</div>
</template>

<script>
  import BlogService from '@/services/BlogService'
  import { VueEditor } from "vue2-editor"
    
  export default {
    data: () => ({
        blog: {},
        dialog: false
    }),

     components: {
        VueEditor
    },

    async mounted() {
      //console.log(this.$route.params.blogId)
      const blogId = this.$route.params.blogId
      this.blog = (await BlogService.show(blogId)).data
    },

    methods: {
      cancle() {
        this.$router.push({name: 'blogs'})
      },
      async editBlog() {
        const blogId = this.blog.id
        this.$router.push({name: 'blogEdit', params: {blogId : blogId}})
      },
      async deleteBlog() {
        const blogId = this.blog.id
        try {
          await BlogService.delete(blogId)
          this.$router.push({name: 'blogs'})
        } catch(err) {
          console.log(err)
        }      
      }
    }
  }

</script>
