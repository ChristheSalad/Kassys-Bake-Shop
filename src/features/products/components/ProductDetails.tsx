// src/features/products/components/ProductDetails.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useProductWithReviews } from '../hooks/useProductWithReviews'; // IMPORT HOOK
import { ProductReviews } from './ProductReviews';
import { ReviewForm } from './ReviewForm'; // IMPORT FORM
import styles from './ProductDetails.module.css';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  
  // USE THE NEW HOOK (Handles data loading + math)
  const { product, addReview } = useProductWithReviews(slug);

  if (!product) {
    return <div className={styles.container}>Loading or Product Not Found...</div>;
  }

  const formatPrice = (cents: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);

  return (
    <div className={styles.container}>
      <Link to="/products" className={styles.backLink}>← Back to Menu</Link>
      
      <div className={styles.grid}>
        {/* Images */}
        <div className={styles.imageSection}>
          <img 
            src={product.images[0].url} 
            alt={product.images[0].altText} 
            className={styles.mainImage} 
          />
        </div>

        {/* Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>
          
          {/* DYNAMIC RATING DISPLAY */}
          <div style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '1rem' }}>
            {'★'.repeat(Math.round(product.averageRating))} 
            <span style={{ color: '#6b7280', fontSize: '0.9rem', marginLeft: '8px' }}>
              ({product.reviewCount} reviews)
            </span>
          </div>

          <p className={styles.price}>{formatPrice(product.priceInCents)}</p>
          <p className={styles.description}>{product.description}</p>

          <button 
            className={styles.addToCartBtn} 
            disabled={!product.isAvailable}
            onClick={() => {
              addToCart(product);
              alert("Added!");
            }}
          >
            {product.isAvailable ? 'Add to Cart' : 'Unavailable'}
          </button>

          <hr className={styles.divider} />

          <div className={styles.safetyBox}>
            <h3>⚠️ Allergens & Ingredients</h3>
            <div className={styles.tags}>
              <span className={styles.label}>Contains:</span>
              {product.allergens.map(allergen => (
                <span key={allergen} className={styles.allergenTag}>{allergen}</span>
              ))}
            </div>
            <details className={styles.ingredientsDropdown}>
              <summary>View Full Ingredients List</summary>
              <p>{product.ingredients.join(', ')}.</p>
            </details>
          </div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div style={{ marginTop: '4rem' }}>
        <ProductReviews reviews={product.reviews} />
        
        {/* THE NEW FORM */}
        <ReviewForm onSubmit={addReview} />
      </div>

    </div>
  );
};