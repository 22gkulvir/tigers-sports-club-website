# Tigers Sports Club Website - Project Structure

## 📁 Complete Directory Organization

```
tigers-sports-club/
├── public/
│   └── images/
│       ├── logo/
│       │   ├── tigers-logo.jpg          (Main logo)
│       │   ├── tigers-logo-white.png    (White version for dark backgrounds)
│       │   └── tigers-logo-icon.png     (Favicon/icon version)
│       │
│       ├── sponsors/
│       │   ├── gold/
│       │   │   ├── sponsor-1.png
│       │   │   ├── sponsor-2.png
│       │   │   └── ...
│       │   ├── platinum/
│       │   │   ├── platinum-1.png
│       │   │   └── ...
│       │   └── proud/
│       │       ├── proud-1.png
│       │       └── ...
│       │
│       ├── events/
│       │   ├── 2026-kabaddi-cup/
│       │   │   ├── venue.jpg
│       │   │   ├── schedule.jpg
│       │   │   └── poster.png
│       │   └── 2025-events/
│       │
│       ├── team/
│       │   ├── players/
│       │   │   ├── player-1.jpg
│       │   │   └── ...
│       │   ├── coaching-staff/
│       │   │   └── ...
│       │   └── team-photos/
│       │       └── ...
│       │
│       ├── gallery/
│       │   ├── 2024-season/
│       │   │   ├── match-1.jpg
│       │   │   └── ...
│       │   ├── 2025-season/
│       │   │   └── ...
│       │   └── community/
│       │
│       └── hero/
│           ├── homepage-hero.jpg
│           ├── about-hero.jpg
│           └── events-hero.jpg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── sponsors/        (Local copies for bundling)
│   │   │   ├── events/
│   │   │   ├── team/
│   │   │   ├── gallery/
│   │   │   └── hero/
│   │   │
│   │   └── styles/
│   │       ├── colors.css       (Color scheme and variables)
│   │       ├── typography.css   (Font styles)
│   │       ├── spacing.css      (Spacing utilities)
│   │       └── animations.css   (Keyframe animations)
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Navigation.vue
│   │   │   └── Logo.vue
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── SponsorCarousel.vue    (NEW - Scrolling sponsors)
│   │   │   ├── VideoGallery.vue       (NEW - YouTube videos)
│   │   │   ├── AnnouncementSection.vue (NEW - Announcements)
│   │   │   ├── FeaturedEvent.vue
│   │   │   ├── TeamShowcase.vue
│   │   │   └── Newsletter.vue
│   │   │
│   │   └── cards/
│   │       ├── EventCard.vue
│   │       ├── PlayerCard.vue
│   │       ├── SponsorCard.vue
│   │       └── AnnouncementCard.vue
│   │
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Events.vue
│   │   ├── EventDetail.vue
│   │   ├── Teams.vue
│   │   ├── Gallery.vue
│   │   ├── Sponsors.vue
│   │   └── Contact.vue
│   │
│   ├── router/
│   │   └── index.js             (Vue Router configuration)
│   │
│   ├── utils/
│   │   ├── constants.js         (Hardcoded data like sponsors, teams)
│   │   ├── helpers.js           (Utility functions)
│   │   └── api.js               (API calls if backend exists)
│   │
│   ├── App.vue
│   ├── main.js
│   └── style.css                (Global styles with color imports)
│
├── .vscode/
│   └── settings.json            (VS Code project settings)
│
├── .idea/                        (IntelliJ IDE settings)
│
├── node_modules/                (Dependencies)
│
├── public/
│   └── favicon.svg
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── SITE_STRUCTURE.md            (Site navigation architecture)
├── PROJECT_STRUCTURE.md         (This file)
├── README.md                    (Project overview)
└── logo.jpg                     (Original logo file)
```

---

## 🎨 Color Scheme (Based on Logo)

**Primary Colors:**
- **Orange:** `#FF8C00` - Main brand color (tiger stripes)
- **Dark Black:** `#1a1a1a` - Text and strong elements
- **Cream/Off-white:** `#F5DEB3` - Accents and highlights

**Secondary Colors:**
- **Light Orange:** `#FFB84D` - Hover states
- **Dark Orange:** `#E67E00` - Darker accents
- **Light Black:** `#333333` - Lighter text

See `src/assets/styles/colors.css` for complete color palette.

---

## 📦 New Components Added

### 1. **SponsorCarousel.vue** (`src/components/sections/`)
Scrolling carousel for sponsor logos with three tiers:
- 🏆 Gold Sponsors
- 💎 Platinum Sponsors
- ⭐ Proud Sponsors

**Features:**
- Auto-scroll every 5 seconds
- Manual navigation buttons (← →)
- Hover effects and animations
- Responsive design
- Call-to-action for sponsorships

**Usage:**
```vue
<template>
  <SponsorCarousel />
</template>

<script setup>
import SponsorCarousel from '@/components/sections/SponsorCarousel.vue'
</script>
```

---

### 2. **VideoGallery.vue** (`src/components/sections/`)
YouTube video embedding section with three tabs:
- 🔴 Live Matches (during event day)
- 📹 Past Matches (tournament archives)
- 🏆 Highlights (tournament & team highlights)

**Features:**
- Tab navigation between video categories
- Responsive video embeds (16:9 aspect ratio)
- Live indicator badge with pulse animation
- View counts and metadata
- Automatic placeholder for no live matches

**Usage:**
```vue
<template>
  <VideoGallery />
</template>

<script setup>
import VideoGallery from '@/components/sections/VideoGallery.vue'
</script>
```

**Adding YouTube Videos:**
To add videos, update the data arrays in `VideoGallery.vue`:
```javascript
const pastMatches = ref([
  {
    id: 1,
    youtubeId: 'PASTE_YOUTUBE_VIDEO_ID_HERE',
    title: 'Video Title',
    date: 'Date',
    teams: 'Team A vs Team B',
    views: '5.2K',
  },
])
```

---

### 3. **AnnouncementSection.vue** (`src/components/sections/`)
Announcement management with featured announcement and recent updates:
- Featured announcement (highlighted banner)
- Recent announcements grid
- Newsletter subscription
- Automatic message clearing

**Features:**
- Responsive announcement cards
- Type badges (Registration, Sponsorship, Tryouts, etc.)
- Color-coded announcement types
- Email subscription with validation
- Success/error messages
- Mobile-friendly layout

**Usage:**
```vue
<template>
  <AnnouncementSection />
</template>

<script setup>
import AnnouncementSection from '@/components/sections/AnnouncementSection.vue'
</script>
```

---

## 📸 Image Organization Best Practices

### Folder Structure Rules:

1. **`public/images/`** - Static assets served directly
   - Use for images that don't need bundling
   - Good for sponsor logos, large photos
   - Path: `/images/sponsors/sponsor-1.png`

2. **`src/assets/images/`** - Assets bundled with code
   - Optimized by Vite
   - Use for commonly used images
   - Good for gradual loading/optimization

3. **Naming Conventions:**
   - Use lowercase with hyphens: `sponsor-name-logo.png`
   - Include context: `player-john-doe.jpg`
   - Version dates: `2024-season-photo.jpg`
   - Size indicators: `thumbnail-100x100.jpg`

4. **File Formats:**
   - **PNG:** Logos, graphics, transparency
   - **JPG:** Photos, large images
   - **WebP:** Modern format for better compression
   - **SVG:** Icons, scalable graphics

5. **Size Guidelines:**
   - Sponsor logos: 200x200px (PNG)
   - Team photos: 400x500px (JPG)
   - Gallery images: 800x600px+ (JPG)
   - Hero images: 1920x1080px (JPG/WebP)
   - Thumbnails: 300x300px (JPG)

---

## 🔧 Configuration Files

### `colors.css`
Contains all color variables for the entire project. Update here to change theme colors globally.

### `vite.config.js`
Bundler configuration. Automatically optimizes images and assets.

### `package.json`
Dependencies and npm scripts:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 📱 Responsive Breakpoints

```css
Desktop:  > 1024px
Tablet:   768px - 1024px
Mobile:   < 768px
```

All components are mobile-first designed.

---

## 🚀 Development Workflow

1. **Add new sponsor:**
   - Place logo in `public/images/sponsors/{tier}/`
   - Update data in `SponsorCarousel.vue`

2. **Add match video:**
   - Get YouTube video ID
   - Add to appropriate array in `VideoGallery.vue`

3. **Post announcement:**
   - Update data in `AnnouncementSection.vue`
   - Email subscribers automatically subscribe

4. **Add event images:**
   - Organize in `public/images/events/{year}/`
   - Update gallery references in `Gallery.vue`

---

## 📋 Component Integration Checklist

- [ ] Import color scheme in global styles
- [ ] Add SponsorCarousel to Home page
- [ ] Add VideoGallery to Events page
- [ ] Add AnnouncementSection to Home page
- [ ] Update sponsor data with real logos
- [ ] Add YouTube video IDs for matches
- [ ] Configure announcement data
- [ ] Test on mobile devices
- [ ] Optimize all images
- [ ] Set up production deployment

---

## 🎯 Next Steps

1. Set up Vue Router for multi-page navigation
2. Implement responsive Header and Footer
3. Build Homepage with all new components
4. Create Events page with tournament details
5. Integrate sponsor and team data
6. Add contact form with backend
7. Deploy to production

