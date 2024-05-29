<template>
  <div v-if="posts.lenght < 0">There are no posts yet...</div>
  <div v-else>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link to="/">{{ post.title }}</router-link
        >({{ displayJaDate(post.created_at) }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
      fetch('http://127.0.0.1:3000/posts')
        .then((response) => response.json())
        .then((data) => {
          this.posts = data.reverse()
        })
        .catch((error) => {
          console.error(error)
        })
    },
    displayJaDate(rawDate) {
      const timestamp = Date.parse(rawDate)
      const date = new Date(timestamp)
      return date.toLocaleDateString('ja-JP')
    }
  }
}
</script>
