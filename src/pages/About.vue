<template>
  <div class="about-page">
    <section class="page-header">
      <h1>About Tigers Sports Club</h1>
      <p>Learn more about our club, mission, and vision</p>
    </section>

    <div class="container">
      <section class="about-section">
        <h2>Our Story</h2>
        <p>
          Tigers Sports Club Dallas was founded with a mission to bring professional Kabaddi to Dallas,
          Texas. We are dedicated to promoting this ancient Indian sport and building a strong community
          of athletes and enthusiasts.
        </p>
        <p>
          Our club has grown to over 162 followers on Facebook and continues to expand our reach in the
          Dallas metropolitan area. We organize tournaments, training sessions, and community events.
        </p>
      </section>

      <section class="about-section">
        <h2>Mission & Vision</h2>
        <div class="mission-vision">
          <div class="card">
            <h3>Our Mission</h3>
            <p>
              To promote professional Kabaddi in Dallas and provide opportunities for athletes to
              develop their skills in a competitive environment.
            </p>
          </div>
          <div class="card">
            <h3>Our Vision</h3>
            <p>
              To establish Tigers Sports Club as the premier Kabaddi organization in Texas and create
              a lasting legacy of excellence in sports.
            </p>
          </div>
        </div>
      </section>

      <section class="about-section">
        <h2>Leadership Team</h2>
        <p>Coming soon - Team members and leadership profiles</p>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-page {
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

.page-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.about-section {
  margin-bottom: var(--spacing-3xl);
}

.about-section h2 {
  color: var(--color-primary-orange);
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
}

.about-section p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.card {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
}

.card h3 {
  color: var(--color-primary-orange);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
}

.card p {
  color: var(--text-primary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.8rem;
  }

  .about-section h2 {
    font-size: 1.5rem;
  }
}
</style>
