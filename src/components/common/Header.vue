<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <router-link to="/" class="logo-link">
          <img src="/images/logo/tigers-logo.jpg" alt="Tigers Sports Club" class="logo" />
          <div class="logo-text">
            <h1>Tigers</h1>
            <p>Sports Club Dallas</p>
          </div>
        </router-link>

        <!-- Navigation Menu -->
        <nav class="navigation">
          <router-link to="/" :class="['nav-link', { active: route.path === '/' }]">
            Home
          </router-link>
          <router-link to="/about" :class="['nav-link', { active: route.path === '/about' }]">
            About
          </router-link>
          <router-link to="/events" :class="['nav-link', { active: route.path === '/events' }]">
            Events
          </router-link>
          <router-link to="/teams" :class="['nav-link', { active: route.path === '/teams' }]">
            Teams
          </router-link>
          <router-link to="/gallery" :class="['nav-link', { active: route.path === '/gallery' }]">
            Gallery
          </router-link>
          <router-link to="/sponsors" :class="['nav-link', { active: route.path === '/sponsors' }]">
            Sponsors
          </router-link>
          <router-link to="/contact" :class="['nav-link', { active: route.path === '/contact' }]">
            Contact
          </router-link>
          <router-link to="/founders" :class="['nav-link', { active: route.path === '/founders' }]">
            Founders
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="mobileMenuOpen" class="mobile-navigation">
        <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Home
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="mobileMenuOpen = false">
          About
        </router-link>
        <router-link to="/events" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Events
        </router-link>
        <router-link to="/teams" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Teams
        </router-link>
        <router-link to="/gallery" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Gallery
        </router-link>
        <router-link to="/sponsors" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Sponsors
        </router-link>
        <router-link to="/contact" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Contact
        </router-link>
        <router-link to="/founders" class="mobile-nav-link" @click="mobileMenuOpen = false">
          Founders
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.header {
  background: var(--bg-primary);
  border-bottom: 3px solid var(--color-primary-orange);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Logo */
.logo-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  text-decoration: none;
  flex-shrink: 0;
}

.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-text h1 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--color-primary-orange);
  font-weight: 700;
}

.logo-text p {
  font-size: 0.8rem;
  margin: 0;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Desktop Navigation */
.navigation {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: var(--color-primary-orange);
  color: var(--text-light);
}

.nav-link.active {
  background: var(--color-primary-orange);
  color: var(--text-light);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-md);
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--color-primary-orange);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Mobile Navigation */
.mobile-navigation {
  display: none;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) 0;
  border-top: 1px solid var(--color-gray-medium);
}

.mobile-nav-link {
  color: var(--text-primary);
  text-decoration: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
  display: block;
}

.mobile-nav-link:hover {
  background: var(--bg-secondary);
  border-left-color: var(--color-primary-orange);
  padding-left: calc(var(--spacing-lg) + 4px);
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    height: 70px;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .logo-text h1 {
    font-size: 1.2rem;
  }

  .navigation {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-navigation {
    display: flex;
  }

  .logo-text p {
    display: none;
  }
}
</style>
