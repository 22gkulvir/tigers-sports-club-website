<template>
  <div class="home">
    <!-- Hero Carousel Section -->
    <section class="hero-carousel">
      <div class="carousel-container">
        <img
          :src="heroImages[currentHeroIndex]"
          :alt="`Hero ${currentHeroIndex + 1}`"
          class="hero-image"
        />
        <div class="carousel-buttons">
          <button class="carousel-btn" @click="previousHero">❮</button>
          <button class="carousel-btn" @click="nextHero">❯</button>
        </div>
        <div class="carousel-dots">
          <span
            v-for="(_, index) in heroImages"
            :key="index"
            :class="['dot', { active: index === currentHeroIndex }]"
            @click="goToImage(index)"
          ></span>
        </div>
      </div>
    </section>

    <!-- Event Info Section -->
    <section class="event-info">
      <div class="container">
        <img :src="eventInfoBannerImage" alt="Dallas Kabaddi Cup 2026 Event Information" class="event-banner" />
      </div>
    </section>

    <!-- Video Section (Live/YouTube) -->
    <section class="video-section">
      <div class="container">
        <h2>Watch Live & Highlights</h2>
        <div class="video-grid">
          <div class="video-card">
            <div class="video-placeholder">
              <span>📹</span>
              <p>Live Stream</p>
            </div>
            <p class="video-desc">Watch live on September 26, 2026</p>
          </div>
          <div class="video-card">
            <div class="video-placeholder">
              <span>🎬</span>
              <p>Past Matches</p>
            </div>
            <p class="video-desc">Highlights from previous tournaments</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Announcements Section -->
    <section class="announcements">
      <div class="container">
        <h2>Latest Announcements</h2>
        <div class="announcements-grid">
          <div v-for="announcement in announcements" :key="announcement.id" class="announcement-card">
            <div class="announcement-date">{{ formatDate(announcement.date) }}</div>
            <h3>{{ announcement.title }}</h3>
            <p>{{ announcement.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founders Section -->
    <section class="founders">
      <div class="container">
        <h2>Meet Our Founders</h2>
        <div class="founders-list">
          <div v-for="founder in founders" :key="founder.id" class="founder-item">
            <div class="founder-name">{{ founder.name }}</div>
            <a :href="`tel:${founder.phone}`" class="founder-phone">{{ founder.phone }}</a>
          </div>
        </div>
        <p class="founders-link"><router-link to="/founders">View detailed founder profiles →</router-link></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import images from assets
import hero1 from '@/assets/images/hero/hero-1.jpg'
import hero2 from '@/assets/images/hero/hero-2.jpg'
import hero3 from '@/assets/images/hero/hero-3.jpg'
import eventInfoBanner from '@/assets/images/event-info-banner.jpg'

// Hero carousel
const currentHeroIndex = ref(0)
const heroImages = ref([
  hero1,
  hero2,
  hero3
])

// Event info banner
const eventInfoBannerImage = ref(eventInfoBanner)

let autoAdvanceInterval = null

const nextHero = () => {
  currentHeroIndex.value = (currentHeroIndex.value + 1) % heroImages.value.length
  resetAutoAdvance()
}

const previousHero = () => {
  currentHeroIndex.value = (currentHeroIndex.value - 1 + heroImages.value.length) % heroImages.value.length
  resetAutoAdvance()
}

const goToImage = (index) => {
  currentHeroIndex.value = index
  resetAutoAdvance()
}

const startAutoAdvance = () => {
  autoAdvanceInterval = setInterval(() => {
    currentHeroIndex.value = (currentHeroIndex.value + 1) % heroImages.value.length
  }, 5000)
}

const resetAutoAdvance = () => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
  }
  startAutoAdvance()
}

onMounted(() => {
  startAutoAdvance()
})

onUnmounted(() => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
  }
})

// Announcements
const announcements = ref([
  {
    id: 1,
    title: 'Team Registration Opens',
    content: 'Early bird registration discount available until August 31, 2026',
    date: new Date('2026-08-15')
  },
  {
    id: 2,
    title: 'Venue Confirmed',
    content: 'Dallas Kabaddi Cup 2026 confirmed at Southfork Ranch, Parker, TX',
    date: new Date('2026-07-20')
  },
  {
    id: 3,
    title: 'Player Tryouts',
    content: 'Tryouts scheduled for July 28 - All interested players welcome',
    date: new Date('2026-07-10')
  }
])

// Founders
const founders = ref([
  { id: 1, name: 'Sarbjit Gill', phone: '469-222-4038' },
  { id: 2, name: 'Rajveer AR', phone: '501-256-4519' },
  { id: 3, name: 'Kuldeep Singh Dhillon', phone: '214-733-4307' },
  { id: 4, name: 'Babbu Khera', phone: '601-622-1011' },
  { id: 5, name: 'Sandeep Kang', phone: '972-978-7622' },
  { id: 6, name: 'Sokha Bhopal', phone: '817-881-2128' },
  { id: 7, name: 'Hardeep Singh Gill', phone: '269-209-8369' },
  { id: 8, name: 'Kanwalpreet Ghuman', phone: '602-777-0368' },
  { id: 9, name: 'Sukhchain Singh Dhaliwal', phone: '214-797-2168' },
  { id: 10, name: 'Balraj Sidhu', phone: '214-448-4491' },
  { id: 11, name: 'Deepa Dhesi', phone: '945-269-8352' },
  { id: 12, name: 'Manjit Johal', phone: '214-662-6766' },
  { id: 13, name: 'Gurmeet Singh Gholia', phone: '214-455-2665' }
])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* Hero Carousel Section */
.hero-carousel {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  width: 100%;
}

.carousel-track.infinite-scroll {
  animation: heroScroll linear infinite;
}

@keyframes heroScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background-color: #000;
  flex-shrink: 0;
}

.carousel-buttons {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--spacing-xl);
  z-index: 5;
  pointer-events: none;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  pointer-events: auto;
  font-weight: bold;
}

.carousel-btn:hover {
  background: rgba(255, 140, 0, 0.8);
  transform: scale(1.1);
}

.carousel-btn:active {
  transform: scale(0.95);
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--color-primary-orange);
  width: 30px;
  border-radius: 6px;
}

/* Event Info Section */
.event-info {
  padding: var(--spacing-2xl) var(--spacing-lg);
  background: var(--bg-primary);
}

.event-banner {
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-banner:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(255, 140, 0, 0.2);
}

/* Video Section */
.video-section {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: var(--bg-secondary);
}

.video-section h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-2xl);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.video-card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.video-placeholder {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-black-light) 100%);
  color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
}

.video-placeholder span {
  font-size: 3rem;
}

.video-placeholder p {
  font-size: 1.1rem;
  font-weight: 600;
}

.video-desc {
  padding: var(--spacing-lg);
  color: var(--text-secondary);
  text-align: center;
}

/* Announcements Section */
.announcements {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: var(--bg-primary);
}

.announcements h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-2xl);
}

.announcements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.announcement-card {
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border-top: 3px solid var(--color-primary-orange);
}

.announcement-date {
  font-size: 0.85rem;
  color: var(--color-primary-orange);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.announcement-card h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.announcement-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Founders Section */
.founders {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: var(--bg-secondary);
}

.founders h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-2xl);
}

.founders-list {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
  max-width: 500px;
  margin: 0 auto var(--spacing-xl);
}

.founder-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.founder-item:last-child {
  border-bottom: none;
}

.founder-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.founder-phone {
  font-size: 0.95rem;
  color: var(--color-primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.founder-phone:hover {
  color: var(--color-orange-dark);
  text-decoration: underline;
}

.founders-link {
  text-align: center;
}

.founders-link a {
  color: var(--color-primary-orange);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.founders-link a:hover {
  color: var(--color-orange-dark);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-carousel {
    height: 300px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .info-detail {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .founders-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
