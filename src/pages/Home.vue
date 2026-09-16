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
            @click="currentHeroIndex = index"
          ></span>
        </div>
      </div>

      <!-- Overlay Text -->
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>Tigers Sports Club</h1>
          <p>Dallas Kabaddi Champions</p>
        </div>
      </div>
    </section>

    <!-- Event Info Section -->
    <section class="event-info">
      <div class="container">
        <div class="info-card">
          <h2>🏆 Dallas Kabaddi Cup 2026</h2>
          <div class="info-details">
            <div class="detail">
              <span class="label">📅 Date:</span>
              <span class="value">Saturday, September 26, 2026</span>
            </div>
            <div class="detail">
              <span class="label">📍 Location:</span>
              <span class="value">Southfork Ranch, 3700 Hogge Dr, Parker, TX 75002</span>
            </div>
            <div class="detail">
              <span class="label">🎯 Teams:</span>
              <span class="value">8+ Teams • 12 Matches • 1000+ Spectators</span>
            </div>
          </div>
        </div>
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
import { ref } from 'vue'

// Import images from assets
import hero1 from '@/assets/images/hero/hero-1.jpg'
import hero2 from '@/assets/images/hero/hero-2.jpg'
import hero3 from '@/assets/images/hero/hero-3.jpg'

// Hero carousel
const currentHeroIndex = ref(0)
const heroImages = ref([
  hero1,
  hero2,
  hero3
])

const nextHero = () => {
  currentHeroIndex.value = (currentHeroIndex.value + 1) % heroImages.value.length
}

const previousHero = () => {
  currentHeroIndex.value = (currentHeroIndex.value - 1 + heroImages.value.length) % heroImages.value.length
}

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
  {
    id: 1,
    name: 'Founder Name 1',
    role: 'President & Co-founder',
    phone: '+1 (214) 123-4567',
    initials: 'F1'
  },
  {
    id: 2,
    name: 'Founder Name 2',
    role: 'Vice President & Co-founder',
    phone: '+1 (214) 234-5678',
    initials: 'F2'
  },
  {
    id: 3,
    name: 'Founder Name 3',
    role: 'Secretary & Co-founder',
    phone: '+1 (214) 345-6789',
    initials: 'F3'
  }
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

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-buttons {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--spacing-lg);
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
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

/* Hero Overlay Text */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(26, 26, 26, 0.3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.5rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

/* Event Info Section */
.event-info {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: var(--bg-primary);
}

.info-card {
  background: var(--bg-secondary);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
}

.info-card h2 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  font-weight: 600;
}

.info-details {
  display: grid;
  gap: var(--spacing-lg);
}

.detail {
  display: flex;
  gap: var(--spacing-lg);
}

.label {
  font-weight: 600;
  color: var(--color-primary-orange);
  min-width: 140px;
}

.value {
  color: var(--text-primary);
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
