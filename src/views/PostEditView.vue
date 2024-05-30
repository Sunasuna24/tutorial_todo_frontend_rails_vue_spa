<template>
  <h1>投稿を編集する</h1>
  <form>
    <div>
      <label for="title">タイトル</label>
      <input type="text" name="title" id="title" v-model="title" />
    </div>
    <div>
      <label for="body">本文</label>
      <textarea name="body" id="body" v-model="body"></textarea>
    </div>
    <div>
      <button>編集する</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
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
          this.title = data.title
          this.body = data.body
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
