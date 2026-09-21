<template>
  <div class="sponsors-page">
    <section class="page-header">
      <h1>Our Sponsors</h1>
      <p>Proud partners of Tigers Sports Club Dallas</p>
    </section>

    <div class="container">
      <!-- Chief Guest -->
      <section v-if="chiefGuest" class="sponsor-tier chief-guest-tier">
        <h2 class="tier-title">
          <span class="tier-badge chief-guest">Chief Guest</span>
        </h2>
        <div class="static-sponsor-container">
          <div class="static-sponsor-card">
            <img :src="chiefGuest" :alt="chiefGuestName" class="sponsor-logo" />
            <p class="sponsor-name">{{ chiefGuestName }}</p>
          </div>
        </div>
      </section>

      <!-- Grand Sponsor -->
      <section v-if="grandSponsor" class="sponsor-tier grand-sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge grand-sponsor">Grand Sponsor</span>
        </h2>
        <div class="static-sponsor-container">
          <div class="static-sponsor-card">
            <img :src="grandSponsor" :alt="grandSponsorName" class="sponsor-logo" />
            <p class="sponsor-name">{{ grandSponsorName }}</p>
          </div>
        </div>
      </section>

      <!-- Diamond Tier -->
      <section v-if="diamondSponsors.length > 0" class="sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge diamond">Diamond Sponsors</span>
        </h2>
        <div class="carousel-wrapper">
          <div class="sponsors-carousel">
            <div class="carousel-track infinite-scroll" :style="{ animationDuration: `${diamondDuration}s` }">
              <div v-for="(sponsor, idx) in carouselSponsors.diamond" :key="`diamond-${idx}`" class="sponsor-card diamond">
                <img :src="sponsor" :alt="`Diamond Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
              <div v-for="(sponsor, idx) in carouselSponsors.diamond" :key="`diamond-dup-${idx}`" class="sponsor-card diamond">
                <img :src="sponsor" :alt="`Diamond Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Platinum Tier -->
      <section v-if="platinumSponsors.length > 0" class="sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge gold">Gold Sponsors</span>
        </h2>
        <div class="carousel-wrapper">
          <div class="sponsors-carousel">
            <div class="carousel-track infinite-scroll" :style="{ animationDuration: `${goldDuration}s` }">
              <div v-for="(sponsor, idx) in carouselSponsors.gold" :key="`gold-${idx}`" class="sponsor-card gold">
                <img :src="sponsor" :alt="`Gold Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
              <div v-for="(sponsor, idx) in carouselSponsors.gold" :key="`gold-dup-${idx}`" class="sponsor-card gold">
                <img :src="sponsor" :alt="`Gold Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Platinum Tier -->
      <section v-if="platinumSponsors.length > 0" class="sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge platinum">Platinum Sponsors</span>
        </h2>
        <div class="carousel-wrapper">
          <div class="sponsors-carousel">
            <div class="carousel-track infinite-scroll" :style="{ animationDuration: `${platinumDuration}s` }">
              <div v-for="(sponsor, idx) in carouselSponsors.platinum" :key="`platinum-${idx}`" class="sponsor-card platinum">
                <img :src="sponsor" :alt="`Platinum Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
              <div v-for="(sponsor, idx) in carouselSponsors.platinum" :key="`platinum-dup-${idx}`" class="sponsor-card platinum">
                <img :src="sponsor" :alt="`Platinum Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Silver Tier -->
      <section v-if="silverSponsors.length > 0" class="sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge silver">Silver Sponsors</span>
        </h2>
        <div class="carousel-wrapper">
          <div class="sponsors-carousel">
            <div class="carousel-track infinite-scroll" :style="{ animationDuration: `${silverDuration}s` }">
              <div v-for="(sponsor, idx) in carouselSponsors.silver" :key="`silver-${idx}`" class="sponsor-card silver">
                <img :src="sponsor" :alt="`Silver Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
              <div v-for="(sponsor, idx) in carouselSponsors.silver" :key="`silver-dup-${idx}`" class="sponsor-card silver">
                <img :src="sponsor" :alt="`Silver Sponsor ${idx + 1}`" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Proud Tier -->
      <section v-if="proudSponsors.length > 0" class="sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge proud">Proud Supporters</span>
        </h2>
        <div class="carousel-wrapper">
          <div class="sponsors-carousel">
            <div class="carousel-track infinite-scroll" :style="{ animationDuration: `${proudDuration}s` }">
              <div v-for="(sponsor, idx) in carouselSponsors.proud" :key="`proud-${idx}`" class="sponsor-card proud">
                <img :src="sponsor" :alt="`Proud Supporter ${idx + 1}`" class="sponsor-logo" />
              </div>
              <div v-for="(sponsor, idx) in carouselSponsors.proud" :key="`proud-dup-${idx}`" class="sponsor-card proud">
                <img :src="sponsor" :alt="`Proud Supporter ${idx + 1}`" class="sponsor-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="sponsorship-section">
        <h2>Become a Sponsor</h2>
        <p>Interested in sponsoring Tigers Sports Club? Get in touch with us to learn about sponsorship opportunities and visibility.</p>
        <button class="btn btn-primary">Contact Us</button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chiefGuest = ref(null)
const chiefGuestName = ref('Chief Guest')
const grandSponsor = ref(null)
const grandSponsorName = ref('Grand Sponsor')

const diamondSponsors = ref([])
const goldSponsors = ref([])
const platinumSponsors = ref([])
const silverSponsors = ref([])
const proudSponsors = ref([])

const carouselSponsors = ref({
  diamond: [],
  gold: [],
  platinum: [],
  silver: [],
  proud: []
})

const diamondDuration = ref(0)
const goldDuration = ref(0)
const platinumDuration = ref(0)
const silverDuration = ref(0)
const proudDuration = ref(0)

// Calculate animation duration based on number of sponsors
const calculateDuration = (count) => {
  // 4 seconds per card for smooth scrolling
  return Math.max(count * 4, 20)
}

// Dynamically import sponsor images from folders
const loadSponsorImages = async () => {
  // Load Chief Guest (single image)
  const chiefGuestModules = import.meta.glob('@/assets/images/sponsors/chief-guest/*.{jpg,jpeg,png}', { eager: true })
  const chiefGuestImages = Object.values(chiefGuestModules).map((m) => m.default)
  if (chiefGuestImages.length > 0) {
    chiefGuest.value = chiefGuestImages[0]
  }

  // Load Grand Sponsor (single image)
  const grandSponsorModules = import.meta.glob('@/assets/images/sponsors/grand-sponsor/*.{jpg,jpeg,png}', { eager: true })
  const grandSponsorImages = Object.values(grandSponsorModules).map((m) => m.default)
  if (grandSponsorImages.length > 0) {
    grandSponsor.value = grandSponsorImages[0]
  }

  // Load Diamond sponsors
  const diamondModules = import.meta.glob('@/assets/images/sponsors/diamond/*.{jpg,jpeg,png}', { eager: true })
  carouselSponsors.value.diamond = Object.values(diamondModules).map((m) => m.default)
  diamondSponsors.value = carouselSponsors.value.diamond
  diamondDuration.value = calculateDuration(diamondSponsors.value.length)

  // Load Gold sponsors
  const goldModules = import.meta.glob('@/assets/images/sponsors/gold/*.{jpg,jpeg,png}', { eager: true })
  carouselSponsors.value.gold = Object.values(goldModules).map((m) => m.default)
  goldSponsors.value = carouselSponsors.value.gold
  goldDuration.value = calculateDuration(goldSponsors.value.length)

  // Load Platinum sponsors
  const platinumModules = import.meta.glob('@/assets/images/sponsors/platinum/*.{jpg,jpeg,png}', { eager: true })
  carouselSponsors.value.platinum = Object.values(platinumModules).map((m) => m.default)
  platinumSponsors.value = carouselSponsors.value.platinum
  platinumDuration.value = calculateDuration(platinumSponsors.value.length)

  // Load Silver sponsors
  const silverModules = import.meta.glob('@/assets/images/sponsors/silver/*.{jpg,jpeg,png}', { eager: true })
  carouselSponsors.value.silver = Object.values(silverModules).map((m) => m.default)
  silverSponsors.value = carouselSponsors.value.silver
  silverDuration.value = calculateDuration(silverSponsors.value.length)

  // Load Proud supporters
  const proudModules = import.meta.glob('@/assets/images/sponsors/proud/*.{jpg,jpeg,png}', { eager: true })
  carouselSponsors.value.proud = Object.values(proudModules).map((m) => m.default)
  proudSponsors.value = carouselSponsors.value.proud
  proudDuration.value = calculateDuration(proudSponsors.value.length)
}

onMounted(() => {
  loadSponsorImages()
})
</script>

<style scoped>
.sponsors-page {
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

/* Sponsor Tier Sections */
.sponsor-tier {
  margin-bottom: var(--spacing-3xl);
}

.tier-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  font-size: 1.5rem;
  color: var(--text-primary);
}

.tier-badge {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.tier-badge.chief-guest {
  background: linear-gradient(135deg, #2a2a2a 0%, #000000 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  color: var(--color-primary-orange);
  border: 2px solid var(--color-primary-orange);
}

.tier-badge.grand-sponsor {
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.4);
  color: var(--color-primary-orange);
  border: 2px solid var(--color-primary-orange);
}

.tier-badge.diamond {
  background: linear-gradient(135deg, #00B0FF 0%, #0080FF 100%);
  box-shadow: 0 4px 15px rgba(0, 176, 255, 0.3);
}

.tier-badge.gold {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.tier-badge.platinum {
  background: linear-gradient(135deg, #E5E4E2 0%, #C0C0C0 100%);
  color: #1a1a1a;
  box-shadow: 0 4px 15px rgba(192, 192, 192, 0.3);
}

.tier-badge.silver {
  background: linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 100%);
  box-shadow: 0 4px 15px rgba(169, 169, 169, 0.3);
}

.tier-badge.proud {
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
}

/* Carousel Styling */
.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--spacing-xl) 0;
}

.sponsors-carousel {
  flex: 1;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--bg-secondary);
  padding: var(--spacing-lg);
  height: 220px;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  gap: var(--spacing-lg);
}

.carousel-track.infinite-scroll {
  animation: scroll linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.sponsor-card {
  flex: 0 0 180px;
  height: 150px;
  background: white;
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Static Sponsor Containers */
.static-sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xl);
}

.static-sponsor-card {
  background: white;
  border-radius: var(--radius-md);
  padding: var(--spacing-2xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  transition: all 0.3s ease;
  border: 3px solid var(--color-primary-orange);
}

.static-sponsor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(255, 140, 0, 0.2);
}

.static-sponsor-card .sponsor-logo {
  max-width: 280px;
  max-height: 200px;
  object-fit: contain;
  display: block;
}

.sponsor-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary-orange);
  margin: 0;
  text-align: center;
}

.sponsor-card.diamond {
  border-color: #00B0FF;
}

.sponsor-card.diamond:hover {
  border-color: #0080FF;
  box-shadow: 0 8px 20px rgba(0, 176, 255, 0.2);
}

.sponsor-card.gold {
  border-color: #FFD700;
}

.sponsor-card.gold:hover {
  border-color: #FFA500;
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.2);
}

.sponsor-card.platinum {
  border-color: #C0C0C0;
}

.sponsor-card.platinum:hover {
  border-color: #808080;
  box-shadow: 0 8px 20px rgba(192, 192, 192, 0.2);
}

.sponsor-card.silver {
  border-color: #A9A9A9;
}

.sponsor-card.silver:hover {
  border-color: #696969;
  box-shadow: 0 8px 20px rgba(169, 169, 169, 0.2);
}

.sponsor-card.proud {
  border-color: var(--color-primary-orange);
}

.sponsor-card.proud:hover {
  border-color: var(--color-orange-dark);
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.2);
}

.sponsor-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

/* Call to Action Section */
.sponsorship-section {
  text-align: center;
  padding: var(--spacing-3xl);
  background: linear-gradient(135deg, var(--bg-secondary) 0%, rgba(255, 140, 0, 0.05) 100%);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-3xl);
  border-left: 4px solid var(--color-primary-orange);
}

.sponsorship-section h2 {
  color: var(--color-primary-orange);
  margin-bottom: var(--spacing-lg);
  font-size: 1.8rem;
}

.sponsorship-section p {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  font-size: 1rem;
  line-height: 1.6;
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
  font-size: 1rem;
}

.btn:hover {
  background: var(--color-orange-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.8rem;
  }

  .tier-title {
    font-size: 1.2rem;
  }

  .static-sponsor-card {
    padding: var(--spacing-xl);
    max-width: 280px;
  }

  .static-sponsor-card .sponsor-logo {
    max-width: 200px;
    max-height: 150px;
  }

  .sponsors-carousel {
    height: 160px;
    padding: var(--spacing-sm);
  }

  .sponsor-card {
    flex: 0 0 140px;
    height: 120px;
    padding: var(--spacing-sm);
  }

  .sponsorship-section {
    padding: var(--spacing-2xl);
  }
}

@media (max-width: 480px) {
  .sponsors-carousel {
    height: 140px;
  }

  .sponsor-card {
    flex: 0 0 120px;
    height: 100px;
  }
}
</style>
