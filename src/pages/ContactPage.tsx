// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import styles from './ContactPage.module.css';

export const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      alert("Message sent! (Simulation)");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      
      {/* SAFETY NOTICE */}
      <div className={styles.safetyAlert}>
        <strong>⚠️ Allergen Safety Notice:</strong> If you have a severe nut or dairy allergy, 
        please message us directly before ordering so we can discuss our cross-contamination protocols.
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" required className={styles.input} placeholder="Your Name" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" required className={styles.input} placeholder="you@example.com" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" required className={styles.textarea} placeholder="How can we help?" />
        </div>

        <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};