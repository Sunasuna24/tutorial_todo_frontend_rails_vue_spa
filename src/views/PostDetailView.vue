<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
  <button @click="confirmDeletingPost">削除する</button>
  <router-link :to="{ name: 'post-edit', params: { id: post_id } }">編集する</router-link>
  <router-link :to="{ name: 'home' }">一覧に戻る</router-link>
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
    },
    deletePost() {
      const options = {
        method: 'DELETE'
      }
      const endPoint = 'http://127.0.0.1:3000/posts/' + this.post_id

      fetch(endPoint, options)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          console.error(error)
        })
    },
    confirmDeletingPost() {
      const confirmation = confirm('本当に削除してよろしいですか？')
      if (confirmation) {
        this.deletePost()
      } else {
        console.log('ユーザーが削除をキャンセルしました')
      }
    }
  }
}
</script>
