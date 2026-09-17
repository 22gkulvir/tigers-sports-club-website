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

        <!-- Live Stream -->
        <div class="video-container">
          <h3 class="video-title">🎬 Live Stream - Dallas Kabaddi Cup 2026</h3>
          <div v-if="liveVideoId" class="youtube-embed">
            <iframe
              width="100%"
              height="500"
              :src="`https://www.youtube.com/embed/${liveVideoId}?autoplay=0&rel=0`"
              title="Dallas Kabaddi Cup 2026 - Live Stream"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div v-else class="live-placeholder">
            <div class="placeholder-content">
              <span class="live-icon">📡</span>
              <h4>Live Stream Coming Soon</h4>
              <p>Join us on Saturday, September 26, 2026 for the Dallas Kabaddi Cup 2026 live stream!</p>
              <p class="countdown">Event Date: Saturday, September 26, 2026</p>
            </div>
          </div>
          <p v-if="liveVideoId" class="video-info">Watch live matches of Dallas Kabaddi Cup 2026. Event Date: Saturday, September 26, 2026</p>
        </div>

        <!-- Past Matches -->
        <div class="video-container">
          <h3 class="video-title">📹 Past Matches & Highlights</h3>
          <div class="video-grid">
            <div v-for="match in pastMatches" :key="match.id" class="past-match-card">
              <div v-if="match.videoId" class="youtube-embed-small">
                <iframe
                  width="100%"
                  height="200"
                  :src="`https://www.youtube.com/embed/${match.videoId}?autoplay=0&rel=0`"
                  :title="match.title"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
              <div v-else class="video-placeholder">
                <span>🏆</span>
                <p>{{ match.title }}</p>
              </div>
              <p class="video-desc">{{ match.description }}</p>
            </div>
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

// Hero carousel
const currentHeroIndex = ref(0)
const heroImages = ref([
  hero1,
  hero2,
  hero3
])

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

// YouTube Videos
// Live video ID - set this on event day with the 2026 live stream link
const liveVideoId = ref('') // Update this on September 26, 2026

// Past matches - add previous year's tournament video and highlights
const pastMatches = ref([
  {
    id: 1,
    title: 'Dallas Kabaddi Cup 2025',
    description: 'Highlights from last year\'s tournament - Previous Year Event',
    videoId: 'Ibe9oQ2_19M' // From: https://www.youtube.com/live/Ibe9oQ2_19M
  },
  {
    id: 2,
    title: 'Championship Match - 2025 Finals',
    description: 'Final Match highlights - Dallas Kabaddi Cup 2025',
    videoId: 'BwJFcF_5mpg' // From: https://www.youtube.com/live/BwJFcF_5mpg
  }
])

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

/* YouTube Embed Styles */
.video-container {
  margin-bottom: var(--spacing-3xl);
}

.video-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.youtube-embed {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--bg-primary);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: var(--spacing-xl);
}

.youtube-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--radius-lg);
}

.video-info {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  padding: var(--spacing-lg);
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
  margin-bottom: var(--spacing-2xl);
}

/* Live Placeholder Styles */
.live-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-black-light) 100%);
  border-radius: var(--radius-lg);
  padding: var(--spacing-3xl) var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.placeholder-content {
  text-align: center;
  color: white;
}

.live-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: var(--spacing-lg);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.placeholder-content h4 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary-orange);
  font-weight: 700;
}

.placeholder-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--spacing-md);
}

.countdown {
  font-size: 0.9rem;
  color: var(--color-primary-orange);
  font-weight: 600;
}

/* Embedded Videos */
.youtube-embed-small {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--bg-primary);
  margin-bottom: var(--spacing-md);
}

.youtube-embed-small iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--radius-lg);
}

.past-match-card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.past-match-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
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

  /* Event Info Mobile Styling */
  .event-info {
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .info-card {
    padding: var(--spacing-lg);
  }

  .info-card h2 {
    font-size: 1.4rem;
    margin-bottom: var(--spacing-lg);
  }

  .detail {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .label {
    font-size: 0.9rem;
    min-width: auto;
    margin-bottom: 2px;
  }

  .value {
    font-size: 0.95rem;
  }

  .founders-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

/* Extra small devices (iPhone) - Minimize spacing */
@media (max-width: 480px) {
  /* Global spacing reduction */
  .hero-carousel {
    margin-bottom: 0;
  }

  .event-info {
    padding: var(--spacing-lg) var(--spacing-sm);
    margin-bottom: 0;
  }

  .video-section {
    padding: var(--spacing-2xl) var(--spacing-sm);
    margin-bottom: 0;
  }

  .announcements {
    padding: var(--spacing-2xl) var(--spacing-sm);
    margin-bottom: 0;
  }

  .founders {
    padding: var(--spacing-2xl) var(--spacing-sm);
  }

  /* Event Info Compact */
  .info-card {
    padding: var(--spacing-sm) var(--spacing-sm);
    border-left-width: 2px;
    margin-bottom: 0;
  }

  .info-card h2 {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-sm);
  }

  .info-details {
    gap: var(--spacing-sm);
  }

  .detail {
    gap: 0;
    margin-bottom: var(--spacing-sm);
  }

  .detail:last-child {
    margin-bottom: 0;
  }

  .label {
    font-size: 0.8rem;
    margin-bottom: 2px;
  }

  .value {
    font-size: 0.85rem;
    line-height: 1.3;
    word-break: break-word;
  }

  /* Video Section Compact */
  .video-container {
    margin-bottom: var(--spacing-xl);
  }

  .video-title {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
    gap: var(--spacing-sm);
  }

  .live-placeholder {
    min-height: 280px;
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  .live-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }

  .placeholder-content h4 {
    font-size: 1.4rem;
    margin-bottom: var(--spacing-sm);
  }

  .placeholder-content p {
    font-size: 0.9rem;
    margin-bottom: var(--spacing-sm);
  }

  /* Announcements Compact */
  .announcements h2 {
    font-size: 1.6rem;
    margin-bottom: var(--spacing-lg);
  }

  .announcements-grid {
    gap: var(--spacing-md);
  }

  .announcement-card {
    padding: var(--spacing-md);
  }

  .announcement-date {
    font-size: 0.75rem;
    margin-bottom: var(--spacing-xs);
  }

  .announcement-card h3 {
    font-size: 1rem;
    margin-bottom: var(--spacing-sm);
  }

  .announcement-card p {
    font-size: 0.9rem;
  }

  /* Founders Compact */
  .founders h2 {
    font-size: 1.6rem;
    margin-bottom: var(--spacing-lg);
  }

  .founders-list {
    padding: var(--spacing-lg);
    border-left-width: 3px;
    margin-bottom: var(--spacing-lg);
  }

  .founder-item {
    padding: var(--spacing-sm) 0;
  }

  .founder-name {
    font-size: 0.95rem;
  }

  .founder-phone {
    font-size: 0.85rem;
  }

  .founders-link {
    margin-top: 0;
  }

  .founders-link a {
    font-size: 0.95rem;
  }
}
</style>
