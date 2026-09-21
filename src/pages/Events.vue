<template>
  <div class="events-page">
    <section class="page-header">
      <h1>Events & Tournaments</h1>
      <p>Upcoming and past tournaments</p>
    </section>

    <div class="container">
      <section class="events-section">
        <h2>Dallas Kabaddi Cup 2026</h2>
        <div class="event-details">
          <div class="detail-item">
            <span class="label">📅 Date:</span>
            <span>Saturday, September 26, 2026</span>
          </div>
          <div class="detail-item">
            <span class="label">📍 Location:</span>
            <a
              class="map-link"
              href="https://www.google.com/maps/search/?api=1&query=Southfork%20Ranch%2C%203700%20Hogge%20Dr%2C%20Parker%2C%20TX%2075002"
              target="_blank"
              rel="noopener noreferrer"
            >Southfork Ranch, 3700 Hogge Dr, Parker, TX 75002</a>
          </div>
          <div class="detail-item">
            <span class="label">🎯 Format:</span>
            <span>4 Team Tournament</span>
          </div>
        </div>
      </section>

      <section class="events-section">
        <h2>Other Activities</h2>
        <div class="activities-grid">
          <div v-for="activity in activities" :key="activity.id" class="activity-card">
            <div class="activity-icon">{{ activity.icon }}</div>
            <h3>{{ activity.name }}</h3>
            <p>{{ activity.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activities = ref([
  { id: 1, name: 'Boys and Girls Races', icon: '🏃', description: 'Racing competitions for children in age groups: Under 8, Under 12, and Under 16 with prizes and recognition' },
  { id: 2, name: 'Spoon Race for Ladies', icon: '🥄', description: 'Traditional spoon race competition exclusively for ladies' },
  { id: 3, name: 'Musical Chair for Ladies', icon: '🎵', description: 'Fun musical chair game for ladies with exciting prizes' },
  { id: 4, name: 'Volleyball Open for Men', icon: '🏐', description: 'Open volleyball competition for all men with competitive play' },
  { id: 5, name: 'Tug of War', icon: '🪢', description: 'Team-based tug of war competition for strength and teamwork' }
])
</script>

<style scoped>
.events-page {
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.events-section {
  margin-bottom: var(--spacing-3xl);
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
}

.events-section h2 {
  color: var(--color-primary-orange);
  font-size: 1.8rem;
  margin-bottom: var(--spacing-lg);
}

.event-details {
  display: grid;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.detail-item {
  display: flex;
  gap: var(--spacing-md);
  font-size: 1rem;
}

.label {
  font-weight: 600;
  color: var(--color-primary-orange);
  min-width: 120px;
}

.map-link {
  color: var(--color-primary-orange);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.map-link:hover {
  color: var(--color-orange-dark);
}

.map-link:focus-visible {
  outline: 2px solid var(--color-primary-orange);
  outline-offset: 3px;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.activity-card {
  background: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  border-top: 3px solid var(--color-primary-orange);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.activity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(255, 140, 0, 0.1);
}

.activity-icon {
  font-size: 2.5rem;
  display: block;
}

.activity-card h3 {
  color: var(--color-primary-orange);
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
}

.activity-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

</style>
