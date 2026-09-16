<template>
  <section class="video-gallery-section">
    <div class="container">
      <div class="section-header">
        <h2>Matches & Highlights</h2>
        <p>Watch live and past Kabaddi matches</p>
      </div>

      <!-- Tab Navigation -->
      <div class="video-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Live Matches Tab -->
      <div v-if="activeTab === 'live'" class="video-content">
        <div v-if="liveMatches.length > 0" class="live-badge">
          <span class="pulse"></span>
          LIVE NOW
        </div>
        <div v-if="liveMatches.length === 0" class="no-content">
          <p>No live matches at the moment</p>
          <p class="text-secondary">Check back during the Dallas Kabaddi Cup 2026 on September 26</p>
        </div>
        <div class="videos-grid">
          <div v-for="video in liveMatches" :key="video.id" class="video-card">
            <div class="video-wrapper">
              <iframe
                :src="`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&controls=1&modestbranding=1`"
                title="Live Match"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="live-indicator">🔴 LIVE</div>
            </div>
            <div class="video-info">
              <h3>{{ video.title }}</h3>
              <p class="match-time">{{ video.time }}</p>
              <p class="match-teams">{{ video.teams }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Past Matches Tab -->
      <div v-if="activeTab === 'past'" class="video-content">
        <div class="videos-grid">
          <div v-for="video in pastMatches" :key="video.id" class="video-card">
            <div class="video-wrapper">
              <iframe
                :src="`https://www.youtube.com/embed/${video.youtubeId}?controls=1&modestbranding=1`"
                title="Past Match"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <h3>{{ video.title }}</h3>
              <p class="match-date">{{ video.date }}</p>
              <p class="match-teams">{{ video.teams }}</p>
              <div class="video-stats">
                <span class="stat">👀 {{ video.views }} views</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pastMatches.length === 0" class="no-content">
          <p>No past matches yet</p>
        </div>
      </div>

      <!-- Highlights Tab -->
      <div v-if="activeTab === 'highlights'" class="video-content">
        <div class="videos-grid">
          <div v-for="video in highlights" :key="video.id" class="video-card">
            <div class="video-wrapper">
              <iframe
                :src="`https://www.youtube.com/embed/${video.youtubeId}?controls=1&modestbranding=1`"
                title="Highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <h3>{{ video.title }}</h3>
              <p class="highlight-type">🏆 {{ video.type }}</p>
              <p class="match-teams">{{ video.teams }}</p>
              <div class="video-stats">
                <span class="stat">👀 {{ video.views }} views</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="highlights.length === 0" class="no-content">
          <p>No highlights yet</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('live')

const tabs = [
  { id: 'live', label: '🔴 Live Matches' },
  { id: 'past', label: '📹 Past Matches' },
  { id: 'highlights', label: '🏆 Highlights' },
]

// Sample data - Replace with real YouTube IDs
const liveMatches = ref([
  // Add live match data when event is happening
  // Format: {
  //   id: 1,
  //   youtubeId: 'VIDEO_ID_HERE',
  //   title: 'Match Title',
  //   time: 'Live now',
  //   teams: 'Team A vs Team B'
  // }
])

const pastMatches = ref([
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Dallas Kabaddi Cup 2024 - Final Match',
    date: 'September 15, 2024',
    teams: 'Tigers A vs Tigers B',
    views: '5.2K',
  },
  {
    id: 2,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Semi-Final: Group Stage',
    date: 'September 14, 2024',
    teams: 'Tigers A vs Dallas Warriors',
    views: '3.8K',
  },
  {
    id: 3,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Group Stage Match',
    date: 'September 13, 2024',
    teams: 'Tigers vs Houston Kabaddi Club',
    views: '2.1K',
  },
])

const highlights = ref([
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Best Raids of Dallas Kabaddi Cup 2024',
    type: 'Tournament Highlights',
    teams: 'Various Teams',
    views: '12.5K',
  },
  {
    id: 2,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Tigers Team Compilation - 2024 Season',
    type: 'Team Highlights',
    teams: 'Tigers Sports Club',
    views: '8.9K',
  },
])
</script>

<style scoped>
.video-gallery-section {
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: var(--bg-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--color-primary-orange);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.video-tabs {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.tab-button {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid var(--color-primary-orange);
  background: transparent;
  color: var(--color-primary-orange);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: var(--color-primary-orange);
  color: var(--text-light);
}

.tab-button.active {
  background: var(--color-primary-orange);
  color: var(--text-light);
}

.video-content {
  position: relative;
}

.live-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #EF4444;
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  z-index: 10;
}

.pulse {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.video-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-secondary);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.video-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background: var(--color-primary-dark);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.live-indicator {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: #EF4444;
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 5;
}

.video-info {
  padding: var(--spacing-lg);
}

.video-info h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0 0 var(--spacing-sm) 0;
  line-height: 1.4;
}

.match-time,
.match-date,
.highlight-type,
.match-teams {
  margin: var(--spacing-sm) 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.match-teams {
  font-weight: 600;
  color: var(--color-primary-orange);
}

.video-stats {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-gray-medium);
}

.stat {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.no-content {
  text-align: center;
  padding: var(--spacing-3xl);
  color: var(--text-secondary);
}

.no-content p {
  margin: var(--spacing-md) 0;
  font-size: 1.1rem;
}

.text-secondary {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.8rem;
  }

  .videos-grid {
    grid-template-columns: 1fr;
  }

  .video-tabs {
    gap: var(--spacing-sm);
  }

  .tab-button {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }
}
</style>
