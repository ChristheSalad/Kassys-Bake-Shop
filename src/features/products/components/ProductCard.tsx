// src/features/products/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import styles from './ProductCard.module.css';
import { useCart } from '../../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const formatCurrency = (amountInCents: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amountInCents / 100);
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { addToCart } = useCart();
  const isOutOfStock = product.stockQuantity === 0;
  const isLowStock = product.stockQuantity > 0 && product.stockQuantity < 10;
  
  
  // Use the primary image or fallback to the first one
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0];

  return (
    <article className={styles.card}>
      
      {/* 1. Image Section */}
      <div className={styles.imageWrapper}>
        {/* Badges: These float on top of the image */}
        {isOutOfStock && (
            <span className={`${styles.badge} ${styles.outOfStock}`}>Sold Out</span>
        )}
        {!isOutOfStock && isLowStock && (
            <span className={`${styles.badge} ${styles.lowStock}`}>Low Stock</span>
        )}

        {/* The Clickable Image Link */}
        <Link 
            to={`/products/${product.slug}`} 
            style={{ display: 'block', height: '100%' }} // Ensures link fills the box
        >
            <img 
              src={primaryImage.url} 
              alt={primaryImage.altText} 
              className={styles.productImage}
              loading="lazy"
            />
        </Link>
      </div>

      {/* 2. Content Section */}
      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        
        {/* The Clickable Title Link */}
        <Link 
            to={`/products/${product.slug}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <h3 className={styles.title}>{product.name}</h3>
        </Link>
        
        <div className={styles.price} aria-label="Price">
            {formatCurrency(product.priceInCents)}
        </div>

        {/* 3. Button (Does not navigate, just adds to cart) */}
        <button 
        className={styles.addButton}
        disabled={isOutOfStock}
        onClick={() => {
            addToCart(product);
            alert(`Added ${product.name} to cart!`);
        }}
  >
    {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
  </button>
      </div>
    </article>
  );
};