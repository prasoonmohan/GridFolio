<script setup>
import Card from '../components/Cards/Card.vue'
const JobExperience = [
    {
        key:1,
        position: 'Design Lead @ Revolution',
        year:'Sep 2019 - Present',
        desc:'Details of your job experience goes here. Briefly showcase what you did and what you have accomplished at this role. You can also talk about the tools you used.'
    },
    {
        key:2,
        position: 'Product Designer @ Circle',
        year:'Jul 2015 - Aug 2019',
        desc:'Details of your job experience goes here. Briefly showcase what you did and what you have accomplished at this role. You can also talk about the tools you used.'
    },
    {
        key:3,
        position: 'Product Designer @ 360degree',
        year:'Jan 2012 - Mar 2015',
        desc:'Details of your job experience goes here. Briefly showcase what you did and what you have accomplished at this role. You can also talk about the tools you used.'
    }
]
const Education = [
    {
        key:1,
        university:'University of Technology Sydney',
        year:'Feb 2008 - Oct 2011',
        desc:'Here is where you can mention what you studied and brief details on what you learnt. You can also mention any extra-curricular activities you did relating to your degree.'
    }
]
const  Skills = [
    "Framer","Web Design","Prototyping","UI Design","Wireframing","UX Design","User Research","Interviews"
]
const Interests = [
    "Illustration","Gaming","No Code Tools","Bike Riding","3D Modelling","Reading","Motion Graphics","Football"
]
</script>
<template>
<main class="main-section">
<div class="page-container container resume-container">
    <div class="left-section">
<Card :arrow="true" :className="'name-card'" >
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
    <RouterLink to="thisismeprasu@gmail.om" class="title-medium font-22 link">thisismeprasu@gmail.com</RouterLink>
    <RouterLink to="prasoonm.com" class="title-medium font-22 link">prasoonm.com</RouterLink>
</div>
<RouterLink to="/contact" >
    <button class="btn get-in-touch contact-us">Contact Me</button></RouterLink>
            </div>
        </div>
</Card>
<Card :arrow="true" :className="'link-wrapper'"> 
<RouterLink to="" class="link-container">
    <h5 class="title-normal social-link">LinkedIn</h5>
    <span class="arrow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
</RouterLink>
<div class="line"></div>
<RouterLink to="" class="link-container">
    <h5 class="title-normal social-link">Twitter</h5>
    <span class="arrow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
</RouterLink>
<div class="line"></div>
<RouterLink to="" class="link-container">
    <h5 class="title-normal social-link">instagram</h5>
    <span class="arrow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9987 36.6667C29.2034 36.6667 36.6654 29.2047 36.6654 20C36.6654 10.7953 29.2034 3.33337 19.9987 3.33337C10.7939 3.33337 3.33203 10.7953 3.33203 20C3.33203 29.2047 10.7939 36.6667 19.9987 36.6667Z" fill="#56585A" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6667L26.6667 20L20 13.3334" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.332 20H26.6654" stroke="#E0DFDC" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </span>
</RouterLink>
</Card>
    </div>
    <div class="right-section">
        <div class="item-container">
            <h4 class="title-normal">About me</h4>
            <p class="about-desc">I'm a multi-disciplinary Product Designer, specialising in no-code and visual development. Currently Design Lead @ Revolution. Take a look below!</p>
        </div>
        <div class="item-container">
            <h4 class="title-normal">Experience</h4>
<div class="item-sub-wrapper">
    <div v-for="job in JobExperience" :key="job.key" class="item-sub-container">
    <h6 class="about-desc position">{{job.position}}</h6>
    <p class="year">{{job.year}}</p>
    <p class="about-desc job-details">
        {{ job.desc }}
    </p>
</div>
</div>
        </div>
        <div class="item-container">
            <h4 class="title-normal">Experience</h4>
<div class="item-sub-wrapper">
    <div v-for="qua in Education" :key="qua.key" class="item-sub-container">
    <h6 class="about-desc position">{{qua.university}}</h6>
    <p class="year">{{qua.year}}</p>
    <p class="about-desc job-details">
        {{ qua.desc }}
    </p>
</div>
</div>
        </div>
        <div class="item-container">
            <h4 class="title-normal">Skills</h4>
           <div class="skill-container">
            <h4 class="about-desc" v-for="skill in Skills" :key="skill">{{ skill }}</h4>
            </div>
        </div>
        <div class="item-container">
            <h4 class="title-normal">Interests</h4>
           <div class="skill-container">
            <h4 class="about-desc" v-for="item in Interests" :key="item">{{ item }}</h4>
            </div>
        </div>
    </div>
</div>
</main>
</template>