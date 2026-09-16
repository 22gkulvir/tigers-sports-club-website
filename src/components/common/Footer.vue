<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Left Section: About & Social -->
        <div class="footer-section footer-about">
          <div class="footer-logo-area">
            <h2 class="footer-logo">Tigers</h2>
            <p class="footer-tagline">Sports Club Dallas</p>
            <p class="footer-description">Bringing the spirit of Kabaddi to Dallas and inspiring a passionate sports community.</p>
          </div>

          <div class="social-section">
            <p class="social-label">Follow Us</p>
            <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=61590221079534" target="_blank" rel="noopener noreferrer" title="Facebook" class="social-icon facebook-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Center Section: Quick Links -->
        <div class="footer-section footer-links">
          <h3 class="footer-section-title">Quick Links</h3>
          <ul class="footer-link-list">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/founders" class="footer-link">Founders</router-link></li>
            <li><router-link to="/events" class="footer-link">Events</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>

        <!-- Right Section: Contact Info -->
        <div class="footer-section footer-contact">
          <h3 class="footer-section-title">Get In Touch</h3>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <div class="contact-content">
              <p class="contact-label">Email</p>
              <a href="mailto:info@tigerssportsclub.com" class="contact-value">info@tigerssportsclub.com</a>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <div class="contact-content">
              <p class="contact-label">Phone</p>
              <a href="tel:+1234567890" class="contact-value">(123) 456-7890</a>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div class="contact-content">
              <p class="contact-label">Location</p>
              <p class="contact-value">Dallas, Texas</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright-text">&copy; 2026 Tigers Sports Club. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#" class="bottom-link">Privacy Policy</a>
          <span class="divider">•</span>
          <a href="#" class="bottom-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, #0f0f0f 100%);
  color: var(--text-light);
  padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-2xl);
  margin-top: var(--spacing-3xl);
  border-top: 4px solid var(--color-primary-orange);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.2fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
  align-items: start;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  height: 100%;
}

/* About Section */
.footer-about {
  gap: var(--spacing-xl);
}

.footer-logo-area {
  margin-bottom: var(--spacing-md);
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary-orange);
  margin: 0 0 var(--spacing-xs) 0;
  letter-spacing: 1px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--spacing-md) 0;
  font-weight: 500;
}

.footer-description {
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 250px;
}

.social-section {
  margin-top: var(--spacing-lg);
}

.social-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 var(--spacing-md) 0;
  font-weight: 600;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.social-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.social-icon:hover {
  background: var(--color-primary-orange);
  color: white;
  border-color: var(--color-primary-orange);
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(255, 140, 0, 0.2);
}

.facebook-icon {
  background: #1877F2;
  border-color: #1877F2;
  color: white;
}

.facebook-icon:hover {
  background: #0a66c2;
  border-color: #0a66c2;
  box-shadow: 0 8px 16px rgba(24, 119, 242, 0.3);
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

/* Quick Links Section */
.footer-links {
  gap: var(--spacing-lg);
  align-items: flex-start;
}

.footer-section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primary-orange);
  margin: 0 0 var(--spacing-lg) 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.95rem;
}

.footer-link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  position: relative;
}

.footer-link::before {
  content: '›';
  margin-right: var(--spacing-sm);
  font-size: 1.2rem;
  color: var(--color-primary-orange);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  color: var(--color-primary-orange);
  padding-left: var(--spacing-sm);
}

.footer-link:hover::before {
  opacity: 1;
}

/* Contact Section */
.footer-contact {
  gap: var(--spacing-xl);
  align-items: flex-start;
}

.contact-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1.2;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  font-weight: 600;
}

.contact-value {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 0;
  line-height: 1.4;
}

.contact-value:hover {
  color: var(--color-primary-orange);
}

/* Divider */
.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 140, 0, 0.3),
    transparent
  );
  margin: var(--spacing-2xl) 0;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.copyright-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.bottom-link {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.bottom-link:hover {
  color: var(--color-primary-orange);
}

.divider {
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
  }

  .footer-about {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-2xl) var(--spacing-lg) var(--spacing-xl);
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-2xl);
  }

  .footer-about {
    gap: var(--spacing-lg);
  }

  .footer-description {
    max-width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .footer-bottom-links {
    gap: var(--spacing-md);
  }

  .footer::before {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    font-size: 1.5rem;
  }

  .footer-section-title {
    font-size: 0.9rem;
  }

  .contact-item {
    gap: var(--spacing-sm);
  }

  .copyright-text {
    font-size: 0.75rem;
  }
}
</style>
