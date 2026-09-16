<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Logo & Social -->
        <div class="footer-about">
          <h3>Tigers Sports Club</h3>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61590221079534" target="_blank" rel="noopener noreferrer" title="Facebook" class="facebook-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links-section">
          <h4>Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/founders">Founders</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>📧 info@tigerssportsclub.com</p>
          <p>📞 (123) 456-7890</p>
          <p>📍 Dallas, Texas</p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2026 Tigers Sports Club. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: var(--text-light);
  padding: var(--spacing-2xl) var(--spacing-lg);
  margin-top: var(--spacing-3xl);
  border-top: 3px solid var(--color-primary-orange);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-xl);
}

.footer-about h3,
.footer-links-section h4,
.footer-contact h4 {
  color: var(--color-primary-orange);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-links a {
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.social-links a:hover {
  transform: scale(1.15);
}

.social-links svg {
  width: 28px;
  height: 28px;
}

.footer-links-section ul,
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links-section li {
  margin-bottom: var(--spacing-sm);
}

.footer-links-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links-section a:hover {
  color: var(--color-primary-orange);
}

.footer-contact p {
  font-size: 0.9rem;
  margin: var(--spacing-sm) 0;
  color: rgba(255, 255, 255, 0.8);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>
