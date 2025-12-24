// src/pages/AboutPage.tsx
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#111827' }}>Our Story</h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          It all started in a small university kitchen. What began as a stress-relief hobby 
          during finals week quickly turned into a passion for creating the perfect chocolate chunk cookie.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          At Kassy's Bakeshop, we believe that baking is a science and an art. We measure our 
          ingredients to the gram, but we mix them with heart.
        </p>
        <p>
          Whether you are here for a late-night study snack or a party platter, we promise 
          quality you can taste in every bite.
        </p>
      </div>
    </div>
  );
};