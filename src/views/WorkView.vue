<script setup>
import Card from '../components/Cards/Card.vue'
</script>
<template>
    <main class="main-section">
  <section class="page-container container ">
<h2 class="section-title">My Works</h2>
<div class="grid">
    <Card :image="true" :className="'grid-col-13'">
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
    <Card :image="true" :className="'grid-col-35'">
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
</div>
  </section>
</main>
</template>