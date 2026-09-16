<template>
  <div class="contact-page">
    <section class="page-header">
      <h1>Contact Us</h1>
      <p>Get in touch with Tigers Sports Club</p>
    </section>

    <div class="container">
      <div class="contact-content">
        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="contact-form">
          <h2>Send us a Message</h2>

          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              placeholder="your@email.com"
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              required
              placeholder="What is this about?"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="5"
              required
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Send Message</button>
          <p v-if="formMessage" :class="['form-message', formStatus]">{{ formMessage }}</p>
        </form>

        <!-- Contact Info -->
        <div class="contact-info">
          <h2>Contact Information</h2>

          <div class="info-item">
            <span class="icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>Dallas, Texas, USA</p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📧</span>
            <div>
              <h3>Email</h3>
              <p><a href="mailto:info@tigerssportsclub.com">info@tigerssportsclub.com</a></p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p><a href="tel:+1234567890">(123) 456-7890</a></p>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">🕐</span>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61590221079534" target="_blank">📘 Facebook</a>
            <a href="#">📷 Instagram</a>
            <a href="#">📹 YouTube</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formMessage = ref('')
const formStatus = ref('')

const submitForm = () => {
  formStatus.value = 'success'
  formMessage.value = '✅ Thank you for your message! We will get back to you soon.'
  form.value = { name: '', email: '', subject: '', message: '' }

  setTimeout(() => {
    formMessage.value = ''
  }, 5000)
}
</script>

<style scoped>
.contact-page {
  min-height: calc(100vh - 80px);
}

.page-header {
  background: linear-gradient(135deg, var(--color-primary-orange) 0%, var(--color-orange-dark) 100%);
  color: var(--text-light);
  padding: 60px var(--spacing-lg);
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
}

.contact-form {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
}

.contact-form h2 {
  color: var(--color-primary-orange);
  margin-bottom: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-gray-medium);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-family: var(--sans);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary-orange);
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-primary-orange);
  color: var(--text-light);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--color-orange-dark);
  transform: translateY(-2px);
}

.form-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.form-message.success {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  border: 1px solid #10B981;
}

.contact-info {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary-orange);
}

.contact-info h2 {
  color: var(--color-primary-orange);
  margin-bottom: var(--spacing-lg);
}

.info-item {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.icon {
  font-size: 1.8rem;
  min-width: 40px;
  text-align: center;
}

.info-item h3 {
  color: var(--text-primary);
  margin: 0 0 var(--spacing-sm);
}

.info-item p {
  color: var(--text-secondary);
  margin: 0;
}

.info-item a {
  color: var(--color-primary-orange);
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-gray-medium);
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary-orange);
  color: var(--text-light);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--color-orange-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }
}
</style>
