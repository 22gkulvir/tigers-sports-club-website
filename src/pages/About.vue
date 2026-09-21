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
        <h2>Our Founders</h2>
        <p class="section-intro">Meet the visionaries behind Tigers Sports Club Dallas</p>
        <div class="founders-grid">
          <div v-for="founder in founders" :key="founder.id" class="founder-card">
            <div class="founder-avatar">
              <img v-if="founder.image" :src="founder.image" :alt="founder.name" class="founder-photo" />
              <span v-else class="initials">{{ founder.initials }}</span>
            </div>
            <div class="founder-info">
              <h3>{{ founder.name }}</h3>
              <p class="role">{{ founder.role }}</p>
              <p class="bio">{{ founder.bio }}</p>
              <a :href="`tel:${founder.phone}`" class="contact-link">📞 {{ founder.phone }}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const founders = ref([
  { id: 1, name: 'Sarbjit Gill', role: 'Founder & Co-organizer', initials: 'SG', image: '/images/founders/Sarbjit Gill.jpeg', bio: 'One of the founding members of Tigers Sports Club Dallas, dedicated to promoting Kabaddi in the community.', phone: '469-222-4038' },
  { id: 2, name: 'Rajveer AR', role: 'Founder & Co-organizer', initials: 'RA', image: '/images/founders/Rajveer Raju Arkansas.jpeg', bio: 'Passionate about sports and community engagement, instrumental in organizing tournaments and events.', phone: '501-256-4519' },
  { id: 3, name: 'Kuldeep Singh Dhillon', role: 'Founder & Co-organizer', initials: 'KD', image: '/images/founders/Kuldip Dhillon.jpeg', bio: 'Dedicated to developing Kabaddi talent in Dallas and building a strong sporting community.', phone: '214-733-4307' },
  { id: 4, name: 'Babbu Khera', role: 'Founder & Co-organizer', initials: 'BK', image: '/images/founders/Babbu Khera.jpeg', bio: 'Supporting the vision of promoting traditional sports and community values through Tigers Sports Club.', phone: '601-622-1011' },
  { id: 5, name: 'Sandeep Kang', role: 'Founder & Co-organizer', initials: 'SK', image: '/images/founders/Sandeep Kang.jpeg', bio: 'Committed to making Tigers Sports Club a premier Kabaddi organization in Texas.', phone: '972-978-7622' },
  { id: 6, name: 'Santokh Singh', role: 'Founder & Co-organizer', initials: 'SS', image: '/images/founders/Santokh Singh.jpeg', bio: 'Active in community sports development and tournament organization for Tigers Sports Club.', phone: '817-881-2128' },
  { id: 7, name: 'Hardeep Singh Gill', role: 'Founder & Co-organizer', initials: 'HG', image: '/images/founders/Hardeep Singh.jpeg', bio: 'Dedicated to fostering athletic excellence and community spirit through Kabaddi.', phone: '269-209-8369' },
  { id: 8, name: 'Kanwalpreet Ghuman', role: 'Founder & Co-organizer', initials: 'KG', image: '/images/founders/Kanwalpreet Ghuman.jpeg', bio: 'Supporting Tigers Sports Club in promoting Kabaddi and building a vibrant sports community.', phone: '602-777-0368' },
  { id: 9, name: 'Sukhchain Singh Dhaliwal', role: 'Founder & Co-organizer', initials: 'SD', image: '/images/founders/SukhchainDhaliwal.jpeg', bio: 'Passionate about community development and sports excellence in Dallas.', phone: '214-797-2168' },
  { id: 10, name: 'Balraj Sidhu', role: 'Founder & Co-organizer', initials: 'BS', image: '/images/founders/Babbi Sidhu.jpeg', bio: 'Committed to making Tigers Sports Club a successful and thriving organization.', phone: '214-448-4491' },
  { id: 11, name: 'Deepa Dhesi', role: 'Founder & Co-organizer', initials: 'DD', image: '/images/founders/Deepa Dhesi.jpeg', bio: 'Supporting Tigers Sports Club in community engagement and event organization.', phone: '945-269-8352' },
  { id: 12, name: 'Manjit Johal', role: 'Founder & Co-organizer', initials: 'MJ', image: '/images/founders/Manjit Johal.jpeg', bio: 'Contributing to the growth and success of Tigers Sports Club Dallas.', phone: '214-662-6766' },
  { id: 13, name: 'Gurmeet Singh Gholia', role: 'Founder & Co-organizer', initials: 'GS', image: '/images/founders/Gurmeet Gholia.jpeg', bio: 'Dedicated to promoting Kabaddi and building a strong sports community in Dallas.', phone: '214-455-2665' }
])
</script>

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

.section-intro {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl) !important;
  font-style: italic;
}

.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

.founder-card {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
  display: flex;
  gap: var(--spacing-lg);
  transition: all 0.3s ease;
}

.founder-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(255, 140, 0, 0.1);
}

.founder-avatar {
  width: 80px;
  height: 80px;
  min-width: 80px;
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  overflow: hidden;
  object-fit: cover;
}

.founder-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.founder-info {
  flex: 1;
}

.founder-info h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
}

.founder-info .role {
  color: var(--color-primary-orange);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
}

.founder-info .bio {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.contact-link:hover {
  color: var(--color-orange-dark);
  text-decoration: underline;
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
