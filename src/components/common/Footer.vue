<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <!-- Brand -->
        <div class="footer-brand">
          <h2 class="footer-logo">Tigers</h2>
          <p class="footer-tagline">Sports Club Dallas</p>
          <a
            href="https://www.facebook.com/profile.php?id=61590221079534"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="social-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <!-- Links -->
        <nav class="footer-col">
          <h3 class="footer-heading">Explore</h3>
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/about" class="footer-link">About</router-link>
          <router-link to="/events" class="footer-link">Events</router-link>
          <router-link to="/teams" class="footer-link">Teams</router-link>
          <router-link to="/sponsors" class="footer-link">Sponsors</router-link>
        </nav>

        <!-- Contact -->
        <div class="footer-col">
          <h3 class="footer-heading">Get In Touch</h3>
          <a href="mailto:info@tigerssportsclub.com" class="footer-link">info@tigerssportsclub.com</a>
          <a href="tel:+19729787622" class="footer-link">972-978-7622</a>
          <p class="footer-link as-text">Dallas, Texas</p>
        </div>
      </div>

      <p class="copyright">&copy; 2026 Tigers Sports Club. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: var(--text-light);
  border-top: 4px solid var(--color-primary-orange);
  padding: var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.4fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

/* Brand */
.footer-logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary-orange);
  margin: 0;
  letter-spacing: 1px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  margin: var(--spacing-xs) 0 var(--spacing-md);
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1877F2;
  color: #fff;
  transition: opacity 0.2s ease;
}

.social-icon:hover {
  opacity: 0.85;
}

/* Columns */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-heading {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-primary-orange);
  margin: 0 0 var(--spacing-xs);
}

.footer-link {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.2s ease;
  margin: 0;
  word-break: break-word;
}

.footer-link:hover {
  color: var(--color-primary-orange);
}

.footer-link.as-text {
  cursor: default;
}

.copyright {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin: var(--spacing-xl) 0 0;
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-xl) var(--spacing-lg) var(--spacing-md);
    margin-top: var(--spacing-xl);
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    justify-items: center;
    text-align: center;
  }

  .footer-col {
    align-items: center;
    gap: var(--spacing-xs);
  }

  .copyright {
    margin-top: var(--spacing-lg);
  }
}
</style>
