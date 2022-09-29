<template>
    <div class="container">
      <h1>{{ blog.title }}</h1>
      <img v-if="blog.thumbnail" :src="blog.thumbnail" :alt="blog.title" width="100">
      <nuxt-content :document="blog" />
      <pre>
        {{ blog }}
      </pre>
    </div>
  </template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let blog
    try {
      blog = await $content('blog', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Blogpost not found' })
    }
    return {
      blog
    }
  }
}
</script>
