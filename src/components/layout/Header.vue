<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';

const activeRoute = ref("home");
const route = useRoute();

onMounted(() => {
  activeRoute.value = route.name 
});

watch(() => {
  activeRoute.value = route.name 
});
</script>

<template>
  <header class="header">
    <div class="header-container container">
      <RouterLink to="/" class="logo-text">GridFolio</RouterLink>
      <ul class="link-container">
        <RouterLink to="/" class="links" :class="{ active: activeRoute === 'home' }">Home</RouterLink>
        <RouterLink to="/work" class="links" :class="{ active: activeRoute === 'work' }">Works</RouterLink>
        <RouterLink to="/about" class="links" :class="{ active: activeRoute === 'about' }">About</RouterLink>
        <RouterLink to="/resume" class="links" :class="{ active: activeRoute === 'resume' }">Resume</RouterLink>
      </ul>
      <button class="btn get-in-touch">Get in touch</button>
    </div>
  </header>
</template>

