<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center items-center w-full gap-2.5">
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/dashboard">dashboard</RouterLink>
  </div>

  <RouterView />
</template>
