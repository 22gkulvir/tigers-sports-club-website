<template>
  <div class="sponsors-page">
    <section class="page-header">
      <h1>Sponsors</h1>
      <p>Our valued partners and supporters</p>
    </section>

    <div class="container">
      <SponsorCarousel />

      <section class="sponsorship-section">
        <h2>Become a Sponsor</h2>
        <p>Interested in sponsoring Tigers Sports Club? Get in touch with us to learn about sponsorship opportunities.</p>
        <button class="btn btn-primary">Contact Us</button>
      </section>
    </div>
  </div>
</template>

<script setup>
import SponsorCarousel from '@/components/sections/SponsorCarousel.vue'
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: var(--text-light);
  padding: 60px var(--spacing-lg);
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.sponsorship-section {
  text-align: center;
  padding: var(--spacing-2xl);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-3xl);
}

.sponsorship-section h2 {
  color: var(--color-primary-orange);
  margin-bottom: var(--spacing-lg);
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary-orange);
  color: var(--text-light);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
}
</style>
