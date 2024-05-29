<template>
  <h1>This is a post page!</h1>
  <router-link to="home">Go to HOME</router-link>
  <form @submit.prevent="submit">
    <div>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" />
    </div>
    <div>
      <label for="body">Body</label>
      <textarea name="body" id="body" cols="30" rows="10"></textarea>
    </div>
    <div>
      <button>Post</button>
    </div>
  </form>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  methods: {
    submit() {
      //
    }
  }
}
</script>
