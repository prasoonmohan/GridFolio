<script setup>
import {RouterLink} from 'vue-router'
import {ref} from 'vue'
const activeRoute = ref("home")
</script>

<template>
<header class="header">
<div class="header-container container">
   <RouterLink to="/" class="logo-text"> GridFolio</RouterLink>
<ul class="link-container">
    <li class="links active">Home</li>
    <li class="links">Works</li>
    <li class="links">About</li>
    <li class="links">Resume</li>
</ul>
<button class="btn get-in-touch">Get in touch</button>
</div>
</header>

</template>