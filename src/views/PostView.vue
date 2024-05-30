<template>
  <h1>This is a post page!</h1>
  <router-link :to="{ name: 'home' }">Go to HOME</router-link>
  <form @submit.prevent="submit">
    <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" v-model="title" />
    </div>
    <div>
      <label for="body">Body</label>
      <textarea name="body" id="body" cols="30" rows="10" v-model="body"></textarea>
    </div>
    <div>
      <button>Post</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      post: {}
    }
  },
  methods: {
    submit() {
      if (this.title.trim() === '' || this.body.trim() === '') {
        console.log('Please fill in all fields')
        return
      }

      const requestBody = {
        title: this.title,
        body: this.body
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }

      fetch('http://127.0.0.1:3000/post', options)
        .then((response) => response.json())
        .then((data) => {
          this.post = data
          this.$router.push({ name: 'post-detail', params: { id: this.post.id } })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
