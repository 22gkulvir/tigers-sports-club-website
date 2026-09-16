<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- About Section -->
        <div class="footer-section">
          <h3>Tigers Sports Club</h3>
          <p>
            Promoting professional Kabaddi in Dallas, Texas. Supporting the community through sports
            excellence and team spirit.
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61590221079534" target="_blank" rel="noopener noreferrer" title="Facebook">
              📘 Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram">
              📷 Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="YouTube">
              📹 YouTube
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/teams">Teams</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
          </ul>
        </div>

        <!-- Events -->
        <div class="footer-section">
          <h3>Upcoming Events</h3>
          <ul>
            <li>
              <span class="event-date">Sep 26, 2026</span>
              <span class="event-name">Dallas Kabaddi Cup 2026</span>
            </li>
            <li>
              <span class="event-date">Ongoing</span>
              <span class="event-name">Community Training</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>📍 Dallas, Texas</li>
            <li>📧 <a href="mailto:info@tigerssportsclub.com">info@tigerssportsclub.com</a></li>
            <li>📞 <a href="tel:+1234567890">(123) 456-7890</a></li>
            <li>🕐 Mon - Fri: 9AM - 6PM</li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2026 Tigers Sports Club Dallas. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-black-light) 100%);
  color: var(--text-light);
  padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-lg);
  margin-top: var(--spacing-3xl);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary-orange);
  font-weight: 700;
}

.footer-section p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  color: rgba(255, 255, 255, 0.8);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-section a {
  color: var(--color-primary-orange);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--color-orange-light);
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(255, 140, 0, 0.2);
  border: 1px solid var(--color-primary-orange);
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--color-primary-orange);
  color: var(--color-primary-dark);
}

.event-date {
  font-size: 0.8rem;
  color: var(--color-primary-orange);
  font-weight: 600;
}

.event-name {
  color: var(--text-light);
}

/* Footer Bottom -->
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-links {
  display: flex;
  gap: var(--spacing-xl);
}

.footer-links a {
  color: var(--color-primary-orange);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-orange-light);
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-2xl) var(--spacing-lg) var(--spacing-lg);
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-bottom {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .footer-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
