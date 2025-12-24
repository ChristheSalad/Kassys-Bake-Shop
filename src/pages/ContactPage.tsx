// src/pages/ContactPage.tsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useForm as useHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ContactPage.module.css';

// 1. THE SAFETY SCHEMA (Zod)
// This is your "Firewall". It defines exactly what is allowed.
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  // Honeypot field: Hidden from humans. If a bot fills this, we reject it.
  _gotcha: z.string().optional(), 
});

// Infer the TypeScript type from the schema automatically
type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  // 2. Setup Formspree (The Sender)
  // REPLACE 'YOUR_FORM_ID' WITH THE ID YOU COPIED FROM FORMSPREE
  const [state, handleSubmit] = useForm("mdanjwdv");

  // 3. Setup React Hook Form (The Manager)
  const { 
    register, 
    formState: { errors }, 
    handleSubmit: handleLocalSubmit 
  } = useHookForm<ContactFormData>({
    resolver: zodResolver(contactSchema), // Bind Zod to the form
  });

  // SUCCESS STATE
  if (state.succeeded) {
    return (
      <div className={styles.container} style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💌</div>
        <h1>Message Sent!</h1>
        <p>Thanks for reaching out. We'll get back to you shortly.</p>
        <button 
            onClick={() => window.location.reload()} 
            className={styles.submitBtn}
            style={{ marginTop: '2rem' }}
        >
            Send Another
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      
      <div className={styles.safetyAlert}>
        <strong>⚠️ Allergen Safety Notice:</strong> If you have a severe nut or dairy allergy, 
        please message us directly before ordering.
      </div>

      {/* How this works: 
        1. handleLocalSubmit validates data with Zod.
        2. If valid, it passes data to handleSubmit (Formspree).
      */}
      <form className={styles.form} onSubmit={handleLocalSubmit(handleSubmit)}>
        
        {/* NAME FIELD */}
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input 
            id="name" 
            {...register("name")} // This hooks the input to React
            className={styles.input} 
            placeholder="Your Name" 
          />
          {/* Error Message */}
          {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name.message}</span>}
        </div>

        {/* EMAIL FIELD */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            id="email" 
            {...register("email")}
            className={styles.input} 
            placeholder="you@example.com" 
          />
          {/* Formspree Server-side errors */}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email.message}</span>}
        </div>

        {/* MESSAGE FIELD */}
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea 
            id="message" 
            {...register("message")}
            className={styles.textarea} 
            placeholder="How can we help?" 
          />
          {errors.message && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.message.message}</span>}
        </div>

        {/* HONEYPOT (Anti-Spam) */}
        <input 
            type="text" 
            style={{ display: 'none' }} 
            {...register("_gotcha")}
        />

        <button type="submit" className={styles.submitBtn} disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};