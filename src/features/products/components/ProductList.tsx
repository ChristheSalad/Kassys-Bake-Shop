// src/features/products/components/ProductList.tsx
import React from 'react';
import { MOCK_PRODUCTS } from '../data'; // Import our fake database
import { ProductCard } from './ProductCard'; // Import the UI
import styles from './ProductList.module.css';

export const ProductList: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Fresh from the Oven</h2>
      
      <div className={styles.grid}>
        {/* The React "Loop" */}
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id} // Critical for React performance!
            product={product} 
          />
        ))}
      </div>
    </section>
  );
};