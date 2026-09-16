# Tigers Sports Club - Images Directory

Professional image storage and organization for the website.

## 📁 Folder Structure

### `/logo`
**Purpose:** Brand logo files in multiple formats and sizes

**Contents:**
- `tigers-logo.jpg` - Full color main logo (original)
- `tigers-logo-white.png` - White version for dark backgrounds
- `tigers-logo-icon.png` - Small icon/favicon version

**Usage:**
```vue
<img src="/images/logo/tigers-logo.jpg" alt="Tigers Sports Club Logo" />
```

---

### `/sponsors`
**Purpose:** Sponsor company logos organized by sponsorship tier

**Structure:**
```
/sponsors
├── gold/          (Main sponsors - Gold tier)
│   ├── sponsor-1.png
│   ├── sponsor-2.png
│   └── ...
├── platinum/      (Premium partners - Platinum tier)
│   ├── platinum-1.png
│   └── ...
└── proud/         (Community sponsors - Proud tier)
    ├── proud-1.png
    └── ...
```

**File Requirements:**
- Format: PNG for transparency
- Size: 200x200px (minimum)
- Background: Transparent
- Quality: High resolution (300dpi preferred)

**Usage:**
```vue
<!-- In SponsorCarousel.vue -->
const goldSponsors = ref([
  { name: 'Company Name', logo: '/images/sponsors/gold/sponsor-1.png' }
])
```

---

### `/events`
**Purpose:** Event-specific images and promotional materials

**Structure:**
```
/events
├── 2026-kabaddi-cup/        (Dallas Kabaddi Cup 2026)
│   ├── venue.jpg            (Southfork Ranch photos)
│   ├── schedule.jpg         (Tournament schedule graphic)
│   ├── poster.png           (Event promotional poster)
│   └── flyer.jpg            (Digital/print flyer)
├── 2025-events/
├── 2024-season/
└── tournaments/             (Archive of past tournaments)
```

**File Requirements:**
- Format: JPG for photos, PNG for graphics
- Size: 1024x768px or larger
- Aspect ratio: Maintain original
- Naming: event-name-description.jpg

**Usage:**
```vue
<img src="/images/events/2026-kabaddi-cup/venue.jpg" alt="Southfork Ranch" />
```

---

### `/team`
**Purpose:** Player and coaching staff photos

**Structure:**
```
/team
├── players/
│   ├── player-1-john-doe.jpg      (Player name in filename)
│   ├── player-2-jane-smith.jpg
│   └── ...
├── coaching-staff/
│   ├── coach-head.jpg
│   └── ...
└── team-photos/                    (Full team group photos)
    ├── 2024-team.jpg
    └── 2025-team.jpg
```

**File Requirements:**
- Format: JPG for photos
- Size: 400x500px (portrait orientation)
- Background: Clean, neutral
- Naming: Include player name

**Usage:**
```vue
<img src="/images/team/players/player-1-john-doe.jpg" alt="John Doe" />
```

---

### `/gallery`
**Purpose:** Event photos and match highlights

**Structure:**
```
/gallery
├── 2024-season/
│   ├── match-1.jpg
│   ├── match-2.jpg
│   ├── celebrations.jpg
│   └── ...
├── 2025-season/
├── community-events/
│   ├── training-1.jpg
│   └── ...
└── archives/
```

**File Requirements:**
- Format: JPG for photos
- Size: 800x600px minimum
- Organization: By date or event
- Naming: descriptive-date.jpg

**Usage:**
```vue
<!-- In Gallery.vue -->
<img src="/images/gallery/2024-season/match-1.jpg" alt="Match Action" />
```

---

### `/hero`
**Purpose:** Large hero section images for pages

**Structure:**
```
/hero
├── homepage-hero.jpg        (Home page background)
├── about-hero.jpg           (About page background)
├── events-hero.jpg          (Events page background)
├── gallery-hero.jpg         (Gallery page background)
└── contact-hero.jpg         (Contact page background)
```

**File Requirements:**
- Format: JPG or WebP
- Size: 1920x1080px (minimum)
- Aspect ratio: 16:9
- Optimization: Compressed for web
- Note: Can use solid colors or patterns as fallback

**Usage:**
```vue
<div class="hero" :style="{ backgroundImage: 'url(/images/hero/homepage-hero.jpg)' }">
  <!-- Content -->
</div>
```

---

## 🖼️ Image Optimization Guidelines

### Best Practices:

1. **Format Selection:**
   - **PNG:** Logos, graphics, text (with transparency)
   - **JPG:** Photos, complex images
   - **WebP:** Modern format for better compression (fallback to JPG)

2. **Compression:**
   - Use tools: TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB for photos
   - Target: < 100KB for icons/logos

3. **Responsive Images:**
   ```vue
   <img 
     src="/images/hero/homepage-hero.jpg"
     srcset="/images/hero/homepage-hero-mobile.jpg 768w,
             /images/hero/homepage-hero.jpg 1920w"
     sizes="(max-width: 768px) 100vw, 1920px"
     alt="Hero Image" 
   />
   ```

4. **Lazy Loading:**
   ```vue
   <img 
     src="/images/gallery/photo.jpg" 
     loading="lazy"
     alt="Gallery Photo" 
   />
   ```

---

## 📝 File Naming Conventions

### Pattern: `{category}-{name}-{version}.{extension}`

**Examples:**
- ✅ `sponsor-company-name-logo.png`
- ✅ `player-john-doe-2024.jpg`
- ✅ `event-kabaddi-cup-2026-poster.png`
- ✅ `gallery-match-1-action.jpg`
- ✅ `hero-homepage-1920x1080.jpg`

### Rules:
- Use lowercase letters
- Use hyphens to separate words
- Include descriptive information
- Avoid special characters
- Be specific and searchable

---

## 🚀 Adding New Images

### Step 1: Choose Correct Folder
Determine which category the image belongs to

### Step 2: Optimize
- Compress using online tools or software
- Target size: < 500KB for photos, < 100KB for logos
- Maintain quality and aspect ratio

### Step 3: Name Appropriately
Follow naming conventions for easy searching

### Step 4: Update Component
Reference the new image in the appropriate Vue component:

```vue
<!-- Example: Adding a new sponsor -->
// In src/components/sections/SponsorCarousel.vue
const goldSponsors = ref([
  { name: 'New Sponsor', logo: '/images/sponsors/gold/new-sponsor.png' }
])
```

### Step 5: Test
- View on desktop and mobile
- Check load times
- Verify image quality

---

## 🔄 Image Update Workflow

1. **Monthly:** Archive old gallery photos
2. **Before Events:** Update hero images and event posters
3. **Quarterly:** Review and optimize all images
4. **As Needed:** Add new sponsor logos or team photos

---

## ⚠️ Important Notes

- **Always use relative paths:** `/images/sponsors/...` (not absolute paths)
- **Keep originals:** Store uncompressed versions separately if needed
- **Add alt text:** Always include descriptive alt attributes
- **Test responsiveness:** Verify images work on mobile
- **Update regularly:** Keep gallery and event photos current

---

## 🎨 Color & Brand Usage

All images should align with Tigers Sports Club branding:

- **Primary Color:** Orange (#FF8C00)
- **Secondary Color:** Black (#1a1a1a)
- **Accent Color:** Cream (#F5DEB3)

For sponsor logos without Tigers branding, maintain professional appearance and high quality.

---

## 📊 Image Inventory

### Current Structure:
```
Size: ~50-100MB total (before compression)
Count: Variable based on uploads
```

### Recommended Limits:
- Sponsors: 15-20 logos per tier
- Team: 15-25 player photos
- Gallery: 100-200 per season
- Events: 10-15 per event
- Hero: 5-10 per site

---

## 🆘 Troubleshooting

**Issue: Image not showing**
- Check file path is correct
- Verify file exists in folder
- Check file name spelling
- Clear browser cache

**Issue: Image looks blurry**
- Check original resolution
- Optimize using compression tool
- Verify aspect ratio

**Issue: Page loads slowly**
- Check image file sizes
- Enable lazy loading
- Use WebP format

---

For questions or issues, refer to PROJECT_STRUCTURE.md or SITE_STRUCTURE.md
