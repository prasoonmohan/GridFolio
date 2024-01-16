<script setup>
import Card from '../components/Cards/Card.vue'
</script>
<template>
<main class="main-section">
  <section class="page-container container about-us-container">
<h2 class="section-title">About Me</h2>
<div class="grid">
  <Card :cover="true" :className="' picture-card'" :arrow="true">
<div class="fully-cover-card">
</div>
  </Card>
  <Card  :arrow="true" :className="' name-card'">
<div class="flex-column-end profile-card">
  <h4 class="name">Hey, I'm <br> Prasoon 👋</h4>
  <p class="desc m-0">Front End Developer at AufaitUX</p>
</div>
  </Card>
  <Card  :arrow="true" :className="' about-card'">
  <div class="flex-column-end">
<h4 class="title-normal">About me</h4>
<p class="title-medium font-22 text">I’m a product designer based in Sydney specialising in web design, illustration and visual development. I have worked in multidisciplinary fields, in both large and small companies, startups and as a freelancer.</p>
  </div></Card>
  <Card  :arrow="true" :className="' experience-card'">
  <div class="flex-column-end profile-card experience-card">
<h4 class="title-normal">Experience</h4>
<div class="experience-wrapper">

<div class="experience-container">
<h5 class="desc m-0">Revolution</h5>
<div class="line"></div>
<div class="designation-container">
<h5 class="desc m-0">Design Lead</h5>
<h6 class="title-medium font-22 year">2019 - </h6>
</div>
</div>
<div class="experience-container">
<h5 class="desc m-0">Circle</h5>
<div class="line"></div>
<div class="designation-container">
<h5 class="desc m-0">UX Designer</h5>
<h6 class="title-medium font-22 year">2015 - 2019</h6>
</div>
</div>
<div class="experience-container">
<h5 class="desc m-0">360degree</h5>
<div class="line"></div>
<div class="designation-container">
<h5 class="desc m-0">Designer</h5>
<h6 class="title-medium font-22 year">2012 - 2015</h6>
</div>
</div>
</div>
  </div></Card>
  <Card>
        <div class="social-icon-card flex-center-center">
            <span class="icon">
<img src="/svg/twitter.svg" alt="">
            </span>
        </div>
    </Card>
    <Card :className="' lets-work-card'"> 
        <div class="flex-column-end">
<h4 class="title-normal">Let's work together ⚒️</h4>
<h2 class="get-in-touch">Get in touch now</h2>
        </div>
    </Card>
    <Card :className="' resume-card'">
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
</div>
  </section>
</main>
</template>

