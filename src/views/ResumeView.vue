<script setup>
import Card from '../components/Cards/Card.vue'

</script>
<template>
<main class="main-section">
<div class="page-container container resume-container">
    <div class="left-section">
<Card :arrow="true" >
    <div  class=" profile-card ">
            <span class="avatar">
                <img src="/img/home/avatar.png" alt="">
            </span>
            <div class="text-container">
<div class="data-container">
    <h3 class="title-normal">Prasoon Mohan</h3>
                <p class="designation">
                    Front End Developer
                </p>
</div>
<div class="data-container">
    <h5 class="title-medium font-22 link">thisismeprasu@gmail.com</h5>
    <h5 class="title-medium font-22 link">prasoonm.com</h5>
</div>
<button class="btn get-in-touch contact-us">Contact Me</button>
            </div>
        </div>
</Card>
<Card :arrow="true" :className="'link-wrapper'"> 
<div class="link-container">
    <h5 class="title-normal social-link">LinkedIn</h5>
    <span class="arrow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
</div>
<div class="line"></div>
<div class="link-container">
    <h5 class="title-normal social-link">Twitter</h5>
    <span class="arrow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
</div>
<div class="line"></div>
<div class="link-container">
    <h5 class="title-normal social-link">instagram</h5>
    <span class="arrow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
</div>
</Card>
    </div>
    <div class="right-section">
        <div class="item-container">
            <h4 class="title-normal">About me</h4>
            <p class="about-desc">I'm a multi-disciplinary Product Designer, specialising in no-code and visual development. Currently Design Lead @ Revolution. Take a look below!</p>
        </div>
        <div class="item-container">
            <h4 class="title-normal">Experience</h4>
            <p class="about-desc">I'm a multi-disciplinary Product Designer, specialising in no-code and visual development. Currently Design Lead @ Revolution. Take a look below!</p>
        </div>
    </div>
</div>
</main>
</template>