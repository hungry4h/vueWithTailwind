import Vue from 'vue'
import Router from 'vue-router'
import Blogs from './views/blog/List.vue'
import Blog from './views/blog/Show.vue'
import BlogAdd from './views/blog/Add.vue'
import BlogEdit from './views/blog/Edit.vue'

import Files from './views/fileuploader/List.vue'

import Versions from './views/version/List.vue'
import Version from './views/version/Show.vue'
import VersionAdd from './views/version/Add.vue'
import VersionEdit from './views/version/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: "/blog/add",
      name: "blogAdd",
      component: BlogAdd
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: Blog
    },
    {
      path: "/blog/:blogId/edit",
      name: "blogEdit",
      component: BlogEdit
    },

    // file-strage route
    {
      path: "/files",
      name: "files",
      component: Files
    },

    //version route
    {
      path: '/versions',
      name: 'versions',
      component: Versions
    },
    {
      path: "/version/add",
      name: "versionAdd",
      component: VersionAdd
    },
    {
      path: '/version/:versionId',
      name: 'version',
      component: Version
    },
    {
      path: "/version/:versionId/edit",
      name: "versionEdit",
      component: VersionEdit
    },
  ]
})