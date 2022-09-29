<template>
    <div class="container">
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
