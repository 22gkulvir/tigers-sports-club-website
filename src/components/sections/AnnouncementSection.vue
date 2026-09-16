<template>
  <section class="announcement-section">
    <div class="container">
      <!-- Main Featured Announcement -->
      <div v-if="featuredAnnouncement" class="featured-announcement">
        <div class="announcement-badge">📢 Featured Announcement</div>
        <div class="announcement-content">
          <h2>{{ featuredAnnouncement.title }}</h2>
          <p class="announcement-date">
            📅 {{ formatDate(featuredAnnouncement.date) }}
          </p>
          <p class="announcement-body">{{ featuredAnnouncement.content }}</p>
          <div v-if="featuredAnnouncement.cta" class="announcement-cta">
            <button class="cta-button">{{ featuredAnnouncement.cta }}</button>
          </div>
        </div>
        <div class="announcement-decoration"></div>
      </div>

      <!-- All Announcements -->
      <div class="announcements-list">
        <h3>Recent Announcements</h3>
        <div class="announcements-grid">
          <div
            v-for="announcement in announcements"
            :key="announcement.id"
            :class="['announcement-card', announcement.type]"
          >
            <div class="announcement-header">
              <span class="announcement-type-badge">{{ announcement.type }}</span>
              <span class="announcement-date-small">{{ formatDate(announcement.date) }}</span>
            </div>
            <h4>{{ announcement.title }}</h4>
            <p>{{ announcement.preview }}</p>
            <button v-if="announcement.link" class="read-more-btn">
              Read More →
            </button>
          </div>
        </div>
      </div>

      <!-- Subscription CTA -->
      <div class="subscription-cta">
        <h3>Stay Updated</h3>
        <p>Subscribe to get the latest announcements and event updates</p>
        <form @submit.prevent="subscribeNewsletter" class="subscription-form">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="email-input"
          />
          <button type="submit" class="subscribe-button">Subscribe</button>
        </form>
        <p v-if="subscriptionMessage" :class="['subscription-message', subscriptionStatus]">
          {{ subscriptionMessage }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscriptionMessage = ref('')
const subscriptionStatus = ref('')

// Featured announcement
const featuredAnnouncement = ref({
  id: 1,
  title: 'Dallas Kabaddi Cup 2026 - September 26',
  content:
    'Join us for the biggest Kabaddi tournament in Dallas! The Dallas Kabaddi Cup 2026 will bring together top teams from across Texas at the prestigious Southfork Ranch venue. Register your team now to participate in this exciting event.',
  date: new Date('2026-09-26'),
  cta: 'Register Your Team',
  icon: '🏆',
})

// Recent announcements
const announcements = ref([
  {
    id: 2,
    title: 'Team Registration Opens',
    preview:
      'Teams can now register for the Dallas Kabaddi Cup 2026. Early bird registration discount available until August 31.',
    date: new Date('2026-08-15'),
    type: 'Registration',
    link: true,
  },
  {
    id: 3,
    title: 'Sponsorship Opportunities Available',
    preview:
      'Be part of Tigers Sports Club as a Gold, Platinum, or Proud Sponsor. Contact us for sponsorship packages and benefits.',
    date: new Date('2026-08-10'),
    type: 'Sponsorship',
    link: true,
  },
  {
    id: 4,
    title: 'Player Tryouts Scheduled',
    preview:
      'Tigers Sports Club is conducting player tryouts for the 2026 season. All interested kabaddi players are welcome to attend.',
    date: new Date('2026-07-28'),
    type: 'Tryouts',
    link: true,
  },
  {
    id: 5,
    title: 'Venue Confirmed - Southfork Ranch',
    preview:
      'The Dallas Kabaddi Cup 2026 will be held at the iconic Southfork Ranch in Parker, Texas. Get ready for an amazing venue!',
    date: new Date('2026-07-15'),
    type: 'Event Update',
    link: true,
  },
  {
    id: 6,
    title: 'Community Training Sessions Start',
    preview:
      'Join our free community training sessions every Saturday to learn Kabaddi and improve your skills.',
    date: new Date('2026-07-01'),
    type: 'Community',
    link: true,
  },
  {
    id: 7,
    title: 'Gold Sponsors Announced',
    preview:
      'We are excited to announce our Gold Sponsors for the Dallas Kabaddi Cup 2026. Thank you for your support!',
    date: new Date('2026-06-20'),
    type: 'Sponsor',
    link: true,
  },
])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const subscribeNewsletter = () => {
  if (email.value) {
    subscriptionStatus.value = 'success'
    subscriptionMessage.value = '✅ Thank you for subscribing! Check your email for confirmation.'
    email.value = ''
    setTimeout(() => {
      subscriptionMessage.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
.announcement-section {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Featured Announcement */
.featured-announcement {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: var(--text-light);
  padding: var(--spacing-2xl) var(--spacing-xl);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-3xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.announcement-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  backdrop-filter: blur(10px);
}

.announcement-content h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.announcement-date {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.announcement-body {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.announcement-cta {
  display: inline-block;
}

.cta-button {
  background: var(--bg-primary);
  color: var(--color-primary-orange);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.announcement-decoration {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
}

/* Announcements List */
.announcements-list {
  margin-bottom: var(--spacing-3xl);
}

.announcements-list h3 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  font-weight: 700;
}

.announcements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.announcement-card {
  background: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
}

.announcement-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-left-color: var(--color-orange-dark);
}

.announcement-card.Registration {
  border-left-color: #3B82F6;
}

.announcement-card.Sponsorship {
  border-left-color: #FFD700;
}

.announcement-card.Tryouts {
  border-left-color: #10B981;
}

.announcement-card h4 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: var(--spacing-md) 0;
  line-height: 1.4;
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.announcement-type-badge {
  display: inline-block;
  background: var(--color-primary-orange);
  color: var(--text-light);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 600;
}

.announcement-date-small {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.announcement-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
}

.read-more-btn {
  align-self: flex-start;
  background: none;
  border: none;
  color: var(--color-primary-orange);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.read-more-btn:hover {
  color: var(--color-orange-dark);
  transform: translateX(5px);
}

/* Subscription CTA */
.subscription-cta {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-black-light) 100%);
  color: var(--text-light);
  padding: var(--spacing-2xl) var(--spacing-xl);
  border-radius: var(--radius-lg);
}

.subscription-cta h3 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
}

.subscription-cta p {
  font-size: 1.05rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.subscription-form {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  max-width: 500px;
  margin: 0 auto var(--spacing-lg);
  flex-wrap: wrap;
}

.email-input {
  flex: 1;
  min-width: 250px;
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
}

.email-input::placeholder {
  color: var(--text-secondary);
}

.email-input:focus {
  outline: 2px solid var(--color-primary-orange);
}

.subscribe-button {
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary-orange);
  color: var(--text-light);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-button:hover {
  background: var(--color-orange-dark);
  transform: scale(1.05);
}

.subscription-message {
  font-size: 0.95rem;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-top: var(--spacing-md);
}

.subscription-message.success {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  border: 1px solid #10B981;
}

.subscription-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #EF4444;
  border: 1px solid #EF4444;
}

/* Responsive */
@media (max-width: 768px) {
  .featured-announcement {
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  .featured-announcement h2 {
    font-size: 1.5rem;
  }

  .announcements-grid {
    grid-template-columns: 1fr;
  }

  .subscription-form {
    flex-direction: column;
  }

  .email-input {
    min-width: auto;
  }

  .subscribe-button {
    width: 100%;
  }
}
</style>
