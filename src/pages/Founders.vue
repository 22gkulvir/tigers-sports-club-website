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
    name: 'Sabjit Gill',
    role: 'Founder & Co-organizer',
    initials: 'SG',
    bio: 'One of the founding members of Tigers Sports Club Dallas, dedicated to promoting Kabaddi in the community.',
    phone: '469-222-4038',
    email: 'sabjit@tigerssportsclub.com'
  },
  {
    id: 2,
    name: 'Rajveer AK',
    role: 'Founder & Co-organizer',
    initials: 'RA',
    bio: 'Passionate about sports and community engagement, instrumental in organizing tournaments and events.',
    phone: '501-266-4519',
    email: 'rajveer@tigerssportsclub.com'
  },
  {
    id: 3,
    name: 'Kuldeep S. Dhillon',
    role: 'Founder & Co-organizer',
    initials: 'KD',
    bio: 'Dedicated to developing Kabaddi talent in Dallas and building a strong sporting community.',
    phone: '214-733-4307',
    email: 'kuldeep@tigerssportsclub.com'
  },
  {
    id: 4,
    name: 'Babbu Khera',
    role: 'Founder & Co-organizer',
    initials: 'BK',
    bio: 'Supporting the vision of promoting traditional sports and community values through Tigers Sports Club.',
    phone: '601-622-1011',
    email: 'babbu@tigerssportsclub.com'
  },
  {
    id: 5,
    name: 'Sandeep Kang',
    role: 'Founder & Co-organizer',
    initials: 'SK',
    bio: 'Committed to making Tigers Sports Club a premier Kabaddi organization in Texas.',
    phone: '972-978-7622',
    email: 'sandeep@tigerssportsclub.com'
  },
  {
    id: 6,
    name: 'Sokha Bhopal',
    role: 'Founder & Co-organizer',
    initials: 'SB',
    bio: 'Active in community sports development and tournament organization for Tigers Sports Club.',
    phone: '817-881-2128',
    email: 'sokha@tigerssportsclub.com'
  },
  {
    id: 7,
    name: 'Hardaap S. Gill',
    role: 'Founder & Co-organizer',
    initials: 'HG',
    bio: 'Dedicated to fostering athletic excellence and community spirit through Kabaddi.',
    phone: '269-209-8369',
    email: 'hardaap@tigerssportsclub.com'
  },
  {
    id: 8,
    name: 'Kamalpreet Ghuman',
    role: 'Founder & Co-organizer',
    initials: 'KG',
    bio: 'Supporting Tigers Sports Club in promoting Kabaddi and building a vibrant sports community.',
    phone: '602-777-0368',
    email: 'kamalpreet@tigerssportsclub.com'
  },
  {
    id: 9,
    name: 'Sukhjhain S. Dhaliwal',
    role: 'Founder & Co-organizer',
    initials: 'SD',
    bio: 'Passionate about community development and sports excellence in Dallas.',
    phone: '214-797-2168',
    email: 'sukhjhain@tigerssportsclub.com'
  },
  {
    id: 10,
    name: 'Balraj Sidhu',
    role: 'Founder & Co-organizer',
    initials: 'BS',
    bio: 'Committed to making Tigers Sports Club a successful and thriving organization.',
    phone: '214-448-4491',
    email: 'balraj@tigerssportsclub.com'
  },
  {
    id: 11,
    name: 'Deepa Dhesi',
    role: 'Founder & Co-organizer',
    initials: 'DD',
    bio: 'Supporting Tigers Sports Club in community engagement and event organization.',
    phone: '945-269-8352',
    email: 'deepa@tigerssportsclub.com'
  },
  {
    id: 12,
    name: 'Manit Ishal',
    role: 'Founder & Co-organizer',
    initials: 'MI',
    bio: 'Contributing to the growth and success of Tigers Sports Club Dallas.',
    phone: '214-662-6766',
    email: 'manit@tigerssportsclub.com'
  },
  {
    id: 13,
    name: 'Gurmeet S. Cholia',
    role: 'Founder & Co-organizer',
    initials: 'GC',
    bio: 'Dedicated to promoting Kabaddi and building a strong sports community in Dallas.',
    phone: '214-455-2665',
    email: 'gurmeet@tigerssportsclub.com'
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
