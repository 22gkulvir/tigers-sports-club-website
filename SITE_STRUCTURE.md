# Tigers Sports Club Dallas - Website Structure

## Project Overview
**Club Name:** Tigers Sports Club Dallas  
**Location:** Dallas, Texas  
**Primary Sport:** Kabaddi (South Asian contact team sport)  
**Followers:** 162+ on Facebook  
**Main Event:** Dallas Kabaddi Cup 2026

---

## Site Navigation Architecture

### 1. **HOME** (Landing Page)
Primary entry point with hero section and key highlights.

**Key Sections:**
- Hero Banner
  - Large Tigers logo/brand identity
  - Tagline/Mission statement
  - Call-to-action buttons (Join Team, View Events, Learn More)
- Featured Event Section
  - Dallas Kabaddi Cup 2026 highlight card
  - Quick info: Date, Location, Sponsors
- Quick Links to Main Sections
- Social Media Feed Integration
- Newsletter Signup
- Footer with Contact Info

**Design Notes:**
- Bold, energetic design reflecting tiger brand
- Orange/black color scheme (tiger colors)
- Mobile-responsive design
- High-quality imagery from events

---

### 2. **ABOUT** (Club Information)
Detailed information about the organization and team.

#### 2.1 Club History
- Founding date and origin story
- Growth and achievements
- Community impact
- Mission and vision statements
- Values and philosophy

#### 2.2 Mission & Values
- Core mission statement
- Club values and principles
- Community commitment
- Kabaddi promotion and education

#### 2.3 Leadership/Team Members
- Board members with photos and titles
- Coaching staff
- Organizational structure
- Contact details for key positions

---

### 3. **EVENTS** (Tournament & Activity Hub)
Showcase of current and past events.

#### 3.1 Dallas Kabaddi Cup 2026
- Event Overview
  - Official name and trophy icon
  - Dates: September 26, 2026
  - Location: Southfork Ranch, 3700 Hogge Dr, Parker, TX 75002
  - Event Map/Directions
- Tournament Details
  - Format and rules
  - Participating teams
  - Schedule/Timeline
  - Match information
- Sponsorship Information
  - Gold Sponsors
  - Platinum Sponsors
  - Proud Sponsors
  - Sponsorship tiers and benefits
- Registration/Ticketing
  - Spectator tickets
  - Team registration info
  - Call-to-action buttons

#### 3.2 Upcoming Events
- Calendar view of future tournaments
- Quick event cards with dates and descriptions
- Sign-up/RSVP forms

#### 3.3 Past Events Archive
- Historical tournament results
- Photo galleries from past events
- Tournament statistics and records

---

### 4. **TEAMS** (Player & Team Information)
Information about teams and players.

#### 4.1 Team Roster
- Main Team Profile
  - Team name and logo
  - Team captain
  - Coaching staff
  - Team photo
- Player Profiles
  - Player name, number, position
  - Photo
  - Statistics (goals, matches played, etc.)
  - Bio/background

#### 4.2 Statistics & Records
- League standings
- Individual player stats
- Team achievements and records
- Performance analytics
- Historical records

---

### 5. **GALLERY** (Photos & Videos)
Visual content from events and activities.

#### 5.1 Event Photos
- High-resolution images from Dallas Kabaddi Cup
- Match action shots
- Team celebrations
- Sponsor features
- Venue and crowd shots
- Organized by date or event
- Lightbox/carousel viewing

#### 5.2 Videos
- Event highlight reels
- Tournament matches
- Behind-the-scenes content
- Player interviews
- Training/practice videos
- Embedded from YouTube or Vimeo

---

### 6. **SPONSORS** (Partnership Hub)
Dedicated section for sponsor information and branding.

#### 6.1 Gold Sponsors
- Sponsor logos in grid layout
- Company descriptions
- Links to sponsor websites
- Sponsorship benefits description

#### 6.2 Platinum Sponsors
- Premium sponsor showcase
- Featured partner content
- Logo placement
- Partnership stories

#### 6.3 Sponsorship Opportunities
- Sponsorship tiers and packages
- Benefits breakdown
- Contact for sponsorship inquiries
- Application/registration form

---

### 7. **CONTACT** (Get In Touch)
Primary communication hub.

#### 7.1 Contact Form
- Name, email, subject, message fields
- Inquiry type dropdown (General Inquiry, Sponsorship, Registration, Feedback)
- Submit button
- Confirmation message

#### 7.2 Contact Information
- Primary email address
- Phone number(s)
- Physical address
- Social media links (Facebook, Instagram, etc.)
- Office hours

#### 7.3 Location Map
- Embedded Google Map
- Venue location pinned
- Directions and address
- Parking information

---

## Global Elements

### Header/Navigation Bar
- Logo (Tigers icon)
- Main navigation menu (Home, About, Events, Teams, Gallery, Sponsors, Contact)
- Search functionality (optional)
- Social media icons
- Mobile hamburger menu

### Footer
- Quick links to main pages
- Contact information
- Social media links
- Newsletter signup
- Copyright and terms
- Business hours
- Location

### Sidebar (Optional)
- Upcoming events widget
- Latest news/announcements
- Quick stats

---

## Content Strategy

### Homepage Content
- Fresh, energetic design
- Hero image: Team photo or action shot from tournament
- "About" snippet (2-3 sentences)
- Featured event card
- Quick links to key sections
- Social feed integration

### Blog/News Section (Optional Future Feature)
- Event announcements
- Player spotlights
- Tournament updates
- Community news

### Email Newsletter (Optional)
- Event announcements
- Tournament results
- Player highlights
- Sponsor updates

---

## Key Design Considerations

### Color Scheme
- **Primary:** Orange/Gold (tiger colors)
- **Secondary:** Black or Dark Gray
- **Accent:** White, light gray for contrast

### Typography
- Bold, energetic fonts for headings
- Clean, readable fonts for body text
- Good contrast for accessibility

### Imagery
- High-quality photos from Kabaddi Cup 2026
- Professional sponsor logos
- Player photos and action shots
- Event venue images

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly navigation
- Fast loading times

### Accessibility
- WCAG 2.1 compliance
- Alt text for all images
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast ratios

---

## Technology Stack (Recommended)
- **Frontend:** Vue 3 + Vite (already set up)
- **Styling:** CSS/Tailwind CSS
- **Components:** Reusable Vue components
- **Backend:** Optional (for contact forms, newsletter signup)
- **Hosting:** Vercel, Netlify, or similar
- **CMS:** Optional (Sanity, Strapi for content management)

---

## Development Priorities

### Phase 1 (MVP - Current)
1. Homepage with hero and featured event
2. About page
3. Events page with Kabaddi Cup 2026 details
4. Contact page with form
5. Basic navigation and footer

### Phase 2 (Enhancement)
1. Teams/Roster section
2. Gallery with photos
3. Sponsors section with logos
4. Social media integration

### Phase 3 (Advanced)
1. Blog/News section
2. Newsletter signup and email integration
3. Advanced statistics and analytics
4. Admin dashboard for content management
5. Event registration/ticketing system

---

## File Structure Recommendation

```
src/
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Navigation.vue
│   ├── HeroSection.vue
│   ├── EventCard.vue
│   ├── SponsorCard.vue
│   ├── TeamCard.vue
│   └── ContactForm.vue
├── pages/
│   ├── Home.vue
│   ├── About.vue
│   ├── Events.vue
│   ├── EventDetail.vue
│   ├── Teams.vue
│   ├── Gallery.vue
│   ├── Sponsors.vue
│   └── Contact.vue
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero/
│   │   ├── events/
│   │   └── sponsors/
│   ├── icons/
│   └── styles/
│       ├── variables.css
│       └── global.css
├── App.vue
├── main.js
└── router.js (if using Vue Router)
```

---

## Next Steps
1. Set up Vue Router for page navigation
2. Create reusable components
3. Design and implement homepage
4. Build out core pages
5. Integrate with Facebook/social media
6. Test on multiple devices
7. Deploy to production
