<template>
  <div class="founders-page">
    <section class="page-header">
      <h1>Our Founders</h1>
      <p>Meet the visionaries behind Tigers Sports Club</p>
    </section>

    <div class="container">
      <div v-for="founder in founders" :key="founder.id" class="founder-detail">
        <div class="founder-profile">
          <div class="founder-avatar">{{ founder.initials }}</div>
          <div class="founder-info">
            <h2>{{ founder.name }}</h2>
            <p class="role">{{ founder.role }}</p>
            <p class="bio">{{ founder.bio }}</p>
            <div class="contact-info">
              <a :href="`tel:${founder.phone}`" class="contact-link">
                📞 {{ founder.phone }}
              </a>
              <a :href="`mailto:${founder.email}`" class="contact-link">
                📧 {{ founder.email }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const founders = ref([
  {
    id: 1,
    name: 'Founder Name 1',
    role: 'President & Co-founder',
    initials: 'F1',
    bio: 'With over 10 years of experience in sports management, Founder 1 has been instrumental in establishing Tigers Sports Club as a leading Kabaddi organization in Dallas. Passionate about promoting traditional sports and community building.',
    phone: '+1 (214) 123-4567',
    email: 'founder1@tigerssportsclub.com'
  },
  {
    id: 2,
    name: 'Founder Name 2',
    role: 'Vice President & Co-founder',
    initials: 'F2',
    bio: 'An accomplished Kabaddi player and coach, Founder 2 brings expertise in player development and tournament organization. Dedicated to nurturing young talent and building a competitive team.',
    phone: '+1 (214) 234-5678',
    email: 'founder2@tigerssportsclub.com'
  },
  {
    id: 3,
    name: 'Founder Name 3',
    role: 'Secretary & Co-founder',
    initials: 'F3',
    bio: 'With a background in community development, Founder 3 focuses on building relationships with sponsors and community partners. Committed to making Tigers Sports Club a household name in Dallas.',
    phone: '+1 (214) 345-6789',
    email: 'founder3@tigerssportsclub.com'
  }
])
</script>

<style scoped>
.founders-page {
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

.founder-detail {
  margin-bottom: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 1px solid var(--color-gray-medium);
}

.founder-detail:last-child {
  border-bottom: none;
}

.founder-profile {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.founder-avatar {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2rem;
  box-shadow: var(--shadow-lg);
  flex-shrink: 0;
}

.founder-info h2 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
}

.role {
  font-size: 1.1rem;
  color: var(--color-primary-orange);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

.bio {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-primary-orange);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  width: fit-content;
}

.contact-link:hover {
  color: var(--color-orange-dark);
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.8rem;
  }

  .founder-profile {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .founder-avatar {
    width: 100px;
    height: 100px;
    font-size: 1.5rem;
    margin: 0 auto;
  }

  .founder-info {
    text-align: center;
  }

  .contact-info {
    align-items: center;
  }

  .contact-link {
    justify-content: center;
  }
}
</style>
