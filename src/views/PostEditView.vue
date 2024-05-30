<template>
  <h1>投稿を編集する</h1>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      console.log('This method was called via mouned hook')
    }
  }
}
</script>
