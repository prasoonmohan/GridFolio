<script setup>
import Card from '../components/Cards/Card.vue'
</script>
<template>
<main class="main-section">
  <section class="page-container container ">
<h2 class="section-title">About Me</h2>
<div class="grid">
  <Card :cover="true" :className="'grid-col-14'" :arrow="true">
<div class="fully-cover-card">
</div>
  </Card>
</div>
  </section>
</main>
</template>

