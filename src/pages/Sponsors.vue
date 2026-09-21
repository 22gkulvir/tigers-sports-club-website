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
          <button type="button" class="static-sponsor-card" @click="openLightbox(chiefGuest, chiefGuestName)">
            <img :src="chiefGuest" :alt="chiefGuestName" class="sponsor-logo" />
            <p class="sponsor-name">{{ chiefGuestName }}</p>
          </button>
        </div>
      </section>

      <!-- Grand Sponsor -->
      <section v-if="grandSponsor" class="sponsor-tier grand-sponsor-tier">
        <h2 class="tier-title">
          <span class="tier-badge grand-sponsor">Grand Sponsor</span>
        </h2>
        <div class="static-sponsor-container">
          <button type="button" class="static-sponsor-card" @click="openLightbox(grandSponsor, grandSponsorName)">
            <img :src="grandSponsor" :alt="grandSponsorName" class="sponsor-logo" />
            <p class="sponsor-name">{{ grandSponsorName }}</p>
          </button>
        </div>
      </section>

      <!-- Tier carousels -->
      <section v-for="tier in tiers" :key="tier.key" v-show="tier.items.length > 0" class="sponsor-tier">
        <h2 class="tier-title">
          <span :class="['tier-badge', tier.key]">{{ tier.label }}</span>
        </h2>
        <div class="carousel-wrapper">
          <div class="sponsors-carousel">
            <div class="carousel-track infinite-scroll" :style="{ animationDuration: `${tier.duration}s` }">
              <button
                v-for="(sponsor, idx) in tier.loop"
                :key="`${tier.key}-${idx}`"
                type="button"
                :class="['sponsor-card', tier.key]"
                @click="openLightbox(sponsor, `${tier.singular} ${(idx % tier.items.length) + 1}`)"
              >
                <img
                  :src="sponsor"
                  :alt="`${tier.singular} ${(idx % tier.items.length) + 1}`"
                  class="sponsor-logo"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Poster lightbox -->
    <div v-if="lightbox" class="lightbox" role="dialog" aria-modal="true" :aria-label="lightbox.label" @click="closeLightbox">
      <button type="button" class="lightbox-close" aria-label="Close" @click.stop="closeLightbox">&times;</button>
      <img :src="lightbox.src" :alt="lightbox.label" class="lightbox-img" @click.stop />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const chiefGuest = ref(null)
const chiefGuestName = ref('Chief Guest')
const grandSponsor = ref(null)
const grandSponsorName = ref('Grand Sponsor')

// Order here is the order the tiers appear on the page.
const TIERS = [
  { key: 'diamond', label: 'Diamond Sponsors', singular: 'Diamond Sponsor' },
  { key: 'platinum', label: 'Platinum Sponsors', singular: 'Platinum Sponsor' },
  { key: 'gold', label: 'Gold Sponsors', singular: 'Gold Sponsor' },
  { key: 'proud', label: 'Proud Supporters', singular: 'Proud Supporter' },
  { key: 'silver', label: 'Silver Sponsors', singular: 'Silver Sponsor' },
]

const sponsorsByTier = ref(Object.fromEntries(TIERS.map((t) => [t.key, []])))

const viewportWidth = ref(window.innerWidth)

// Mobile shows narrower cards, so a shorter duration keeps the perceived speed up
const calculateDuration = (count) => {
  const secondsPerCard = viewportWidth.value <= 768 ? 1.5 : 4
  return Math.max(count * secondsPerCard, 10)
}

const tiers = computed(() =>
  TIERS.map((tier) => {
    const items = sponsorsByTier.value[tier.key] || []
    return {
      ...tier,
      items,
      // The track is duplicated so the marquee can wrap without a visible seam.
      loop: [...items, ...items],
      duration: calculateDuration(items.length),
    }
  })
)

const handleResize = () => {
  viewportWidth.value = window.innerWidth
}

const lightbox = ref(null)

const openLightbox = (src, label) => {
  lightbox.value = { src, label }
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightbox.value = null
  document.body.style.overflow = ''
}

const onKeydown = (e) => {
  if (e.key === 'Escape' && lightbox.value) closeLightbox()
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

  // Vite needs one literal glob per directory, so the tiers are listed out here
  // rather than built from TIERS at runtime.
  const byTier = {
    diamond: import.meta.glob('@/assets/images/sponsors/diamond/*.{jpg,jpeg,png}', { eager: true }),
    platinum: import.meta.glob('@/assets/images/sponsors/platinum/*.{jpg,jpeg,png}', { eager: true }),
    gold: import.meta.glob('@/assets/images/sponsors/gold/*.{jpg,jpeg,png}', { eager: true }),
    proud: import.meta.glob('@/assets/images/sponsors/proud/*.{jpg,jpeg,png}', { eager: true }),
    silver: import.meta.glob('@/assets/images/sponsors/silver/*.{jpg,jpeg,png}', { eager: true }),
  }

  sponsorsByTier.value = Object.fromEntries(
    Object.entries(byTier).map(([key, modules]) => [key, Object.values(modules).map((m) => m.default)])
  )
}

onMounted(() => {
  loadSponsorImages()
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.sponsors-page {
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

/* Sponsor Tier Sections */
.sponsor-tier {
  margin-bottom: var(--spacing-lg);
}

.tier-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
  color: var(--text-primary);
}

.tier-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  height: 50px;
}

.tier-badge.chief-guest {
  background: linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4), 0 0 25px rgba(255, 107, 107, 0.2);
  color: white;
  border: none;
}

.tier-badge.grand-sponsor {
  background: linear-gradient(135deg, #00C851 0%, #00A340 100%);
  box-shadow: 0 4px 15px rgba(0, 200, 81, 0.4), 0 0 25px rgba(0, 200, 81, 0.2);
  color: white;
  border: none;
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
  background: linear-gradient(135deg, #9D4EDD 0%, #7209B7 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(157, 78, 221, 0.4), 0 0 25px rgba(157, 78, 221, 0.2);
}

.tier-badge.silver {
  background: linear-gradient(135deg, #00D4FF 0%, #0099CC 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4), 0 0 25px rgba(0, 212, 255, 0.2);
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
  padding: var(--spacing-sm) 0;
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
  font: inherit;
  cursor: zoom-in;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.sponsor-card:focus-visible,
.static-sponsor-card:focus-visible {
  outline: 3px solid var(--color-primary-orange);
  outline-offset: 3px;
}

/* Static Sponsor Containers */
.static-sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-sm);
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
  font: inherit;
  cursor: zoom-in;
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
  border-color: #9D4EDD;
}

.sponsor-card.platinum:hover {
  border-color: #7209B7;
  box-shadow: 0 8px 20px rgba(157, 78, 221, 0.3);
}

.sponsor-card.silver {
  border-color: #00D4FF;
}

.sponsor-card.silver:hover {
  border-color: #0099CC;
  box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
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

/* Responsive Design */
@media (max-width: 768px) {

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

/* Poster lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  padding-top: max(var(--spacing-lg), env(safe-area-inset-top, 0px));
  padding-bottom: max(var(--spacing-lg), env(safe-area-inset-bottom, 0px));
  cursor: zoom-out;
  animation: lightbox-in 0.18s ease;
}

@keyframes lightbox-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: var(--radius-md);
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: max(var(--spacing-md), env(safe-area-inset-top, 0px));
  right: var(--spacing-md);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close:hover {
  background: var(--color-primary-orange);
}

@media (prefers-reduced-motion: reduce) {
  .lightbox { animation: none; }
}
</style>
