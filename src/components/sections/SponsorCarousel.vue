<template>
  <section class="sponsor-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Sponsors</h2>
        <p>Supporting Tigers Sports Club Dallas</p>
      </div>

      <!-- Gold Sponsors -->
      <div class="sponsor-tier">
        <h3 class="tier-title">🏆 Gold Sponsors</h3>
        <div class="carousel-wrapper">
          <div class="carousel-container" ref="goldCarousel">
            <div class="carousel" :style="{ transform: `translateX(${goldOffset}px)` }">
              <div v-for="sponsor in goldSponsors" :key="sponsor.id" class="sponsor-card gold">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
                <p class="sponsor-name">{{ sponsor.name }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-btn prev" @click="scrollGold('left')">❮</button>
          <button class="carousel-btn next" @click="scrollGold('right')">❯</button>
        </div>
      </div>

      <!-- Platinum Sponsors -->
      <div class="sponsor-tier">
        <h3 class="tier-title">💎 Platinum Sponsors</h3>
        <div class="carousel-wrapper">
          <div class="carousel-container" ref="platinumCarousel">
            <div class="carousel" :style="{ transform: `translateX(${platinumOffset}px)` }">
              <div v-for="sponsor in platinumSponsors" :key="sponsor.id" class="sponsor-card platinum">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
                <p class="sponsor-name">{{ sponsor.name }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-btn prev" @click="scrollPlatinum('left')">❮</button>
          <button class="carousel-btn next" @click="scrollPlatinum('right')">❯</button>
        </div>
      </div>

      <!-- Silver Sponsors -->
      <div class="sponsor-tier">
        <h3 class="tier-title">🥈 Silver Sponsors</h3>
        <div class="carousel-wrapper">
          <div class="carousel-container" ref="silverCarousel">
            <div class="carousel" :style="{ transform: `translateX(${silverOffset}px)` }">
              <div v-for="sponsor in silverSponsors" :key="sponsor.id" class="sponsor-card silver">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
                <p class="sponsor-name">{{ sponsor.name }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-btn prev" @click="scrollSilver('left')">❮</button>
          <button class="carousel-btn next" @click="scrollSilver('right')">❯</button>
        </div>
      </div>

      <!-- Proud Sponsors -->
      <div class="sponsor-tier">
        <h3 class="tier-title">⭐ Proud Sponsors</h3>
        <div class="carousel-wrapper">
          <div class="carousel-container" ref="proudCarousel">
            <div class="carousel" :style="{ transform: `translateX(${proudOffset}px)` }">
              <div v-for="sponsor in proudSponsors" :key="sponsor.id" class="sponsor-card proud">
                <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
                <p class="sponsor-name">{{ sponsor.name }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-btn prev" @click="scrollProud('left')">❮</button>
          <button class="carousel-btn next" @click="scrollProud('right')">❯</button>
        </div>
      </div>

      <!-- Become a Sponsor CTA -->
      <div class="sponsor-cta">
        <h3>Interested in Sponsoring?</h3>
        <p>Join us in supporting professional Kabaddi in Dallas</p>
        <button class="cta-button">Learn About Sponsorship</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Sponsor data (to be replaced with real sponsor data)
const goldSponsors = ref([
  { id: 1, name: 'Sponsor Name 1', logo: '/images/sponsors/sponsor-1.png' },
  { id: 2, name: 'Sponsor Name 2', logo: '/images/sponsors/sponsor-2.png' },
  { id: 3, name: 'Sponsor Name 3', logo: '/images/sponsors/sponsor-3.png' },
  { id: 4, name: 'Sponsor Name 4', logo: '/images/sponsors/sponsor-4.png' },
  { id: 5, name: 'Sponsor Name 5', logo: '/images/sponsors/sponsor-5.png' },
])

const platinumSponsors = ref([
  { id: 6, name: 'Platinum Sponsor 1', logo: '/images/sponsors/platinum-1.png' },
  { id: 7, name: 'Platinum Sponsor 2', logo: '/images/sponsors/platinum-2.png' },
  { id: 8, name: 'Platinum Sponsor 3', logo: '/images/sponsors/platinum-3.png' },
])

const silverSponsors = ref([
  { id: 9, name: 'Silver Sponsor 1', logo: '/images/sponsors/silver-1.png' },
  { id: 10, name: 'Silver Sponsor 2', logo: '/images/sponsors/silver-2.png' },
  { id: 11, name: 'Silver Sponsor 3', logo: '/images/sponsors/silver-3.png' },
  { id: 12, name: 'Silver Sponsor 4', logo: '/images/sponsors/silver-4.png' },
])

const proudSponsors = ref([
  { id: 13, name: 'Proud Sponsor 1', logo: '/images/sponsors/proud-1.png' },
  { id: 14, name: 'Proud Sponsor 2', logo: '/images/sponsors/proud-2.png' },
  { id: 15, name: 'Proud Sponsor 3', logo: '/images/sponsors/proud-3.png' },
  { id: 16, name: 'Proud Sponsor 4', logo: '/images/sponsors/proud-4.png' },
])

const goldOffset = ref(0)
const platinumOffset = ref(0)
const silverOffset = ref(0)
const proudOffset = ref(0)
const cardWidth = 220 // Card width + gap

const scrollGold = (direction) => {
  scrollCarousel(goldOffset, direction)
}

const scrollPlatinum = (direction) => {
  scrollCarousel(platinumOffset, direction)
}

const scrollSilver = (direction) => {
  scrollCarousel(silverOffset, direction)
}

const scrollProud = (direction) => {
  scrollCarousel(proudOffset, direction)
}

const scrollCarousel = (offsetRef, direction) => {
  const scrollAmount = cardWidth
  if (direction === 'left') {
    offsetRef.value = Math.min(offsetRef.value + scrollAmount, 0)
  } else {
    offsetRef.value = Math.max(offsetRef.value - scrollAmount, -1000)
  }
}

onMounted(() => {
  // Auto-scroll carousel every 5 seconds
  setInterval(() => {
    scrollGold('right')
  }, 5000)
})
</script>

<style scoped>
.sponsor-section {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--color-primary-orange);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.sponsor-tier {
  margin-bottom: var(--spacing-3xl);
}

.tier-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}

.carousel-container {
  overflow: hidden;
}

.carousel {
  display: flex;
  gap: var(--spacing-lg);
  transition: transform 0.3s ease-in-out;
}

.sponsor-card {
  flex: 0 0 200px;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.sponsor-card.gold {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border: 2px solid var(--color-orange-dark);
}

.sponsor-card.platinum {
  background: linear-gradient(135deg, #E5E4E2 0%, #B8B8B8 100%);
  border: 2px solid #C0C0C0;
}

.sponsor-card.silver {
  background: linear-gradient(135deg, #D3D3D3 0%, #A9A9A9 100%);
  border: 2px solid #B8B8B8;
}

.sponsor-card.proud {
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  border: 2px solid var(--color-primary-orange);
}

.sponsor-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: var(--spacing-md);
}

.sponsor-name {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
}

.sponsor-card.gold .sponsor-name,
.sponsor-card.platinum .sponsor-name {
  color: var(--text-primary);
}

.sponsor-card.proud .sponsor-name {
  color: var(--text-light);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-primary-orange);
  color: var(--text-light);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background: var(--color-orange-dark);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.sponsor-cta {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: var(--text-light);
  padding: var(--spacing-3xl) var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-3xl);
}

.sponsor-cta h3 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
}

.sponsor-cta p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
}

.cta-button {
  background: var(--bg-primary);
  color: var(--color-primary-orange);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.8rem;
  }

  .sponsor-card {
    flex: 0 0 150px;
  }

  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
