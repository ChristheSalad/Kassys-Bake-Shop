// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Baked with Love & Logic</h1>
        <p className={styles.subtitle}>
          Small batch cookies, artisanal pastries, and treats made from scratch.
        </p>
        <Link to="/products" className={styles.ctaButton}>
          Shop the Menu
        </Link>
      </section>

      {/* 2. Value Proposition (Why buy from us?) */}
      <section className={styles.features}>
        <h2>Why Choose Kassy's?</h2>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <div className={styles.icon}>🍪</div>
            <h3>Fresh Ingredients</h3>
            <p>We use only organic flour and real vanilla beans.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>🚚</div>
            <h3>Local Delivery</h3>
            <p>Fresh from our oven to your doorstep within 24 hours.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.icon}>💝</div>
            <h3>Made to Order</h3>
            <p>Every batch is baked specifically for you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};