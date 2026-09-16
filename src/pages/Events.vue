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
            <span>Southfork Ranch, 3700 Hogge Dr, Parker, TX 75002</span>
          </div>
          <div class="detail-item">
            <span class="label">🎯 Format:</span>
            <span>8+ Team Tournament</span>
          </div>
          <div class="detail-item">
            <span class="label">👥 Participants:</span>
            <span>12 Matches</span>
          </div>
        </div>
        <button class="btn btn-primary">Register Team</button>
      </section>

      <section class="events-section">
        <h2>Past Tournaments</h2>
        <p>Coming soon - Past tournament results and highlights</p>
      </section>

      <section class="events-section">
        <h2>Community Training</h2>
        <p>Regular training sessions for players of all levels. Coming soon - Schedule details</p>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.events-page {
  min-height: calc(100vh - 80px);
}

.page-header {
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: var(--text-light);
  padding: 60px var(--spacing-lg);
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
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

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary-orange);
  color: var(--text-light);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--color-orange-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
}
</style>
