<template>
  <h1>This is Post Detail page.</h1>
  <p>{{ post_id }}</p>
</template>

<script>
export default {
  data() {
    return {
      post_id: this.$route.params.id,
      post: {}
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      const endPoint = 'http://127.0.0.1:3000/posts/' + this.post_id

      fetch(endPoint)
        .then((response) => response.json())
        .then((data) => {
          this.post = data
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
