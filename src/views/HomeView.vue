<script setup>
import Card from '../components/Cards/Card.vue'
import {handleRouter} from '../hooks/useRouter'
</script>
<template>
<main class="main-section">
<div class="page-container container grid">
    <Card :className="'profile-card'" @click="()=>handleRouter('/about')">
        <div  class="flex-column-between profile-card ">
            <span class="avatar">
                <img src="/img/home/avatar.png" alt="">
            </span>
            <div class="text-container">
                <h3 class="name">Hey, I'm Prasoon 👋</h3>
                <p class="desc">
                    Front End Developer at AufaitUX
                </p>
            </div>
        </div>
    </Card>
    <Card >
        <div class="flex-column-end resume-card">
    <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-549636bd-f0eb-48d8-93da-850d06436e46, rgb(241, 180, 62)) /* {&quot;name&quot;:&quot;Yellow&quot;} */" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-549636bd-f0eb-48d8-93da-850d06436e46, rgb(241, 180, 62)); flex-shrink: 0; cursor: auto;"><g color="var(--token-549636bd-f0eb-48d8-93da-850d06436e46, rgb(241, 180, 62)) /* {&quot;name&quot;:&quot;Yellow&quot;} */" weight="fill"><path d="M224,48V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h28A16,16,0,0,1,224,48Zm-8,124a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h28a16,16,0,0,0,16-16V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v28a16,16,0,0,0,16,16H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V76A8,8,0,0,0,40,84Zm61.1,57.5a69.1,69.1,0,0,0-33.3,30.8,7.8,7.8,0,0,0,.3,7.8,7.9,7.9,0,0,0,6.8,3.9H181.1a7.9,7.9,0,0,0,6.8-3.9,7.8,7.8,0,0,0,.3-7.8,69.1,69.1,0,0,0-33.3-30.8A39.5,39.5,0,0,0,168,112a40,40,0,0,0-80,0A39.5,39.5,0,0,0,101.1,141.5Z"></path></g></svg>
        </span>
        <div class="text-container">
            <h3 class="title-medium">LEARN MORE ABOUT ME</h3>
            <p class="title-normal">
                See my resume
            </p>
        </div>
        </div>
    </Card>
    <Card :image="true">
        <div class="work-card">
<span class="">
    <img src="/img/work/work1.png" alt="">
</span>
<div class="text-container">
            <h3 class="title-medium">Mobile app</h3>
            <p class="title-normal">
                Fitt
            </p>
        </div>
        </div>
    </Card>
    <Card :image="true">
        <div class="work-card">
<span class="">
    <img src="/img/work/work2.png" alt="">
</span>
<div class="text-container">
            <h3 class="title-medium">Mobile app</h3>
            <p class="title-normal">
                Jukerr
            </p>
        </div>
        </div>
    </Card>
    <Card>
        <div class="social-icon-card flex-center-center">
            <span class="icon">
<img src="/svg/twitter.svg" alt="">
            </span>
        </div>
    </Card>
    <Card :image="true" :className="' work1-card'">
        <div class="work-card grid-22">
<span class="">
    <img src="/img/work/work3.png" alt="">
</span>
<div class="text-container">
            <h3 class="title-medium">branding</h3>
            <p class="title-normal">
                rotation
            </p>
        </div>
        </div>
    </Card>
    <Card :className="'lets-work-card'"> 
        <div class="flex-column-end">
<h4 class="title-normal">Let's work together ⚒️</h4>
<h2 class="get-in-touch">Get in touch now</h2>
        </div>
    </Card>
    <Card :className="'icon-list-card'">
        <div class="flex-column-end icon-list-card">
            <p class="title-medium">what i do</p>
            <div class="list-container">
<div class="icon-container">
    <span class="icon">
        <img src="/svg/web.svg" alt="">
    </span>
    <h5 class="name">Web</h5>
</div>
<div class="icon-container">
    <span class="icon">
        <img src="/svg/visual.svg" alt="">
    </span>
    <h5 class="name">Web</h5>
</div>
<div class="icon-container">
    <span class="icon">
        <img src="/svg/branding.svg" alt="">
    </span>
    <h5 class="name">Web</h5>
</div>
            </div>
        </div>
    </Card>
</div>
</main>
</template>
