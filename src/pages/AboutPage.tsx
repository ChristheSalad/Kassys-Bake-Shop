// src/pages/AboutPage.tsx
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#111827' }}>Our Story</h1>
      
      <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          It all started with a common backstory: a love for baking and taught by the best baker in 
          the family, her grandma.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          At Kassy's Bake Shop, she believes in the power of baking to bring people together. From the moment
          you order her polvorones, or ask for a fresh baked oreo cheesecake, she is here to make your day a little
          sweeter.
        </p>
        <p>
          Whether you are here for a late-night snack or a party platter, we promise 
          quality you can taste in every bite.
        </p>
      </div>
    </div>
  );
};