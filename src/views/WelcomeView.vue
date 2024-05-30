<template>
  <h1>This is a welcome page!</h1>
  <router-link :to="{ name: 'home' }">Go to HOME</router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
