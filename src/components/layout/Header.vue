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

const isMenu = ref(false);

const toggleMenu = () => {
  isMenu.value = !isMenu.value;
};


</script>

<template>
  <header class="header">
    <div :class="{ 'header-container': true, 'container': true, 'active': isMenu }">
     <div class="logo-container">
      <RouterLink to="/" class="logo-text">GridFolio</RouterLink>
      <div @click="toggleMenu" :class="{ 'open': isMenu, 'hamburger-icon': true }" id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span> 
</div>
     </div>
      <ul class="link-container">
        <RouterLink @click="toggleMenu" to="/" class="links" :class="{ active: activeRoute === 'home' }">Home</RouterLink>
        <RouterLink @click="toggleMenu" to="/work" class="links" :class="{ active: activeRoute === 'work' }">Works</RouterLink>
        <RouterLink @click="toggleMenu" to="/about" class="links" :class="{ active: activeRoute === 'about' }">About</RouterLink>
        <RouterLink @click="toggleMenu" to="/resume" class="links" :class="{ active: activeRoute === 'resume' }">Resume</RouterLink>
      </ul>
<RouterLink to="/contact" class="get-in">
  <button class="btn get-in-touch">Get in touch</button>
</RouterLink>
    </div>
  </header>
</template>

