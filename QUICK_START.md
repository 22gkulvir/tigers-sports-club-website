# Tigers Sports Club Website - Quick Start Guide

## 🚀 What's Been Built

### ✅ Completed Setup
- **Professional project folder structure** with organized image directories
- **Tiger brand color scheme** based on logo analysis (Orange, Black, Cream)
- **3 New Advanced Components:**
  1. 📸 **SponsorCarousel.vue** - Scrolling sponsor images (auto-scroll + manual control)
  2. 🎥 **VideoGallery.vue** - YouTube video embeds (Live, Past, Highlights tabs)
  3. 📢 **AnnouncementSection.vue** - Featured announcements + newsletter signup

### 📁 Folder Organization
```
public/images/
├── logo/              (Logo files)
├── sponsors/          (Gold, Platinum, Proud sponsor logos)
├── events/            (Event-specific images)
├── team/              (Player & staff photos)
├── gallery/           (Tournament photos)
└── hero/              (Full-page background images)

src/assets/
├── images/            (Local asset copies)
└── styles/
    └── colors.css     (Tiger brand color scheme)
```

---

## 🎨 Tiger Brand Colors

All components use these colors from the logo:

```css
Primary Orange:   #FF8C00
Dark Black:       #1a1a1a
Cream/Accent:     #F5DEB3
Light Orange:     #FFB84D
Dark Orange:      #E67E00
```

See `src/assets/styles/colors.css` for complete palette.

---

## 📦 New Components - How to Use

### 1. SponsorCarousel Component

**File:** `src/components/sections/SponsorCarousel.vue`

**Features:**
- Auto-scrolls every 5 seconds
- Manual left/right navigation buttons
- Three sponsorship tiers (Gold, Platinum, Proud)
- Call-to-action for new sponsors

**Adding Sponsors:**
```javascript
// In SponsorCarousel.vue data section:
const goldSponsors = ref([
  { 
    id: 1, 
    name: 'Company Name', 
    logo: '/images/sponsors/gold/company-logo.png' 
  },
])
```

**Include in page:**
```vue
<template>
  <SponsorCarousel />
</template>

<script setup>
import SponsorCarousel from '@/components/sections/SponsorCarousel.vue'
</script>
```

---

### 2. VideoGallery Component

**File:** `src/components/sections/VideoGallery.vue`

**Features:**
- 3 tabs: Live Matches, Past Matches, Highlights
- Auto-embeds YouTube videos
- Live indicator with pulse animation
- View counts and metadata
- Shows "No live matches" when offline

**Adding YouTube Videos:**
1. Find video ID from YouTube URL: `youtube.com/watch?v=VIDEO_ID_HERE`
2. Update in VideoGallery.vue:

```javascript
// Add to liveMatches array during events:
const liveMatches = ref([
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ',  // YouTube video ID
    title: 'Match Title',
    time: 'Live now',
    teams: 'Tigers A vs Tigers B'
  }
])

// Add to pastMatches array:
const pastMatches = ref([
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Dallas Kabaddi Cup 2024 - Final',
    date: 'September 15, 2024',
    teams: 'Tigers A vs Tigers B',
    views: '5.2K'
  }
])

// Add to highlights array:
const highlights = ref([
  {
    id: 1,
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Best Raids Compilation',
    type: 'Tournament Highlights',
    teams: 'Various Teams',
    views: '12.5K'
  }
])
```

**Include in page:**
```vue
<template>
  <VideoGallery />
</template>

<script setup>
import VideoGallery from '@/components/sections/VideoGallery.vue'
</script>
```

---

### 3. AnnouncementSection Component

**File:** `src/components/sections/AnnouncementSection.vue`

**Features:**
- Featured announcement banner (prominent)
- Recent announcements grid
- Newsletter subscription
- Type badges (Registration, Sponsorship, Tryouts, etc.)
- Automatic success/error messages

**Adding Announcements:**
```javascript
// Update featured announcement:
const featuredAnnouncement = ref({
  id: 1,
  title: 'Dallas Kabaddi Cup 2026 - September 26',
  content: 'Join us for the biggest tournament in Dallas!',
  date: new Date('2026-09-26'),
  cta: 'Register Your Team'
})

// Add to announcements array:
const announcements = ref([
  {
    id: 2,
    title: 'Team Registration Opens',
    preview: 'Teams can now register with early bird discount...',
    date: new Date('2026-08-15'),
    type: 'Registration',
    link: true
  },
  // Add more announcements...
])
```

**Types available:**
- Registration
- Sponsorship
- Tryouts
- Event Update
- Community
- Sponsor

**Include in page:**
```vue
<template>
  <AnnouncementSection />
</template>

<script setup>
import AnnouncementSection from '@/components/sections/AnnouncementSection.vue'
</script>
```

---

## 📸 Image Management

### File Organization:
- **Sponsor logos:** `public/images/sponsors/{tier}/{logo.png}`
- **Team photos:** `public/images/team/players/{player-name.jpg}`
- **Event images:** `public/images/events/{year}/{image.jpg}`
- **Gallery:** `public/images/gallery/{year}/{photo.jpg}`
- **Hero images:** `public/images/hero/{page-hero.jpg}`

### Image Requirements:
| Type | Format | Size | Quality |
|------|--------|------|---------|
| Sponsor logos | PNG | 200x200px | 300dpi |
| Team photos | JPG | 400x500px | High |
| Event images | JPG | 800x600px | High |
| Gallery | JPG | 800x600px+ | High |
| Hero images | JPG | 1920x1080px | Compressed |

### See `public/images/README.md` for detailed guidelines

---

## 🔧 Development Workflow

### 1. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173`

### 2. Build Production
```bash
npm run build
npm run preview
```

### 3. Add New Features
1. Create components in `src/components/sections/`
2. Add images to appropriate `public/images/` folder
3. Import and use in pages
4. Test on mobile (responsive design)

---

## 📋 Integration Checklist

- [ ] Review color scheme in `src/assets/styles/colors.css`
- [ ] Add sponsor logos to `public/images/sponsors/`
- [ ] Add YouTube video IDs to VideoGallery.vue
- [ ] Add announcements to AnnouncementSection.vue
- [ ] Create Home page with all three components
- [ ] Add hero images for each page
- [ ] Test on mobile devices
- [ ] Optimize all images (use TinyPNG or similar)
- [ ] Deploy to production

---

## 📚 Documentation Files

- **SITE_STRUCTURE.md** - Complete site navigation and content architecture
- **PROJECT_STRUCTURE.md** - Detailed folder organization and component guide
- **public/images/README.md** - Image management best practices
- **QUICK_START.md** - This file

---

## 🎯 Next Steps

### Phase 1 - Foundation (This Week)
1. ✅ Set up project structure
2. ✅ Create new components (SponsorCarousel, VideoGallery, Announcements)
3. ⬜ Set up Vue Router for page navigation
4. ⬜ Create Header and Footer components
5. ⬜ Build Home page with new components

### Phase 2 - Core Pages (Next Week)
1. ⬜ Events page with Kabaddi Cup details
2. ⬜ Teams/Roster page
3. ⬜ Gallery page with photo sections
4. ⬜ Sponsors page with tier details
5. ⬜ Contact page with form

### Phase 3 - Polish & Deploy
1. ⬜ Mobile responsiveness testing
2. ⬜ Performance optimization
3. ⬜ SEO optimization
4. ⬜ Deploy to production
5. ⬜ Integration with Facebook/social media

---

## 💡 Tips

### Sponsor Carousel
- Place sponsor images in correct tier folder
- Component auto-cycles, so add more sponsors to expand
- Hover effects work on desktop and touch devices

### Video Gallery
- During Sept 26 event, just add videos to `liveMatches` array
- Videos embed automatically from YouTube
- No backend needed - all client-side

### Announcements
- Featured announcement is most prominent
- Recent announcements show in grid
- Newsletter form handles validation
- Dates format automatically

---

## 🔗 Useful Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [YouTube Embed API](https://developers.google.com/youtube/iframe_api_reference)
- [Image Optimization Tool](https://squoosh.app/)

---

## ❓ Common Questions

**Q: How do I add a new sponsor?**
A: Place logo in `public/images/sponsors/{tier}/` and update data in `SponsorCarousel.vue`

**Q: Can I embed live streams?**
A: Yes! YouTube live streams work automatically in the VideoGallery component

**Q: What if I need to change colors?**
A: Edit `src/assets/styles/colors.css` - all components use CSS variables

**Q: How do I make images load faster?**
A: Compress with TinyPNG, use WebP format, or enable lazy loading

**Q: Can people subscribe to announcements?**
A: Yes! Newsletter form is in AnnouncementSection - backend needed for email storage

---

## 🆘 Need Help?

1. Check documentation files (SITE_STRUCTURE.md, PROJECT_STRUCTURE.md)
2. Review component files for inline comments
3. Check public/images/README.md for image guidelines
4. Test in browser DevTools for any errors

---

**Ready to build!** Start with Phase 1 and let me know what you'd like to work on next. 🎉
