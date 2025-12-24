// src/features/products/components/ProductDetails.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import { ProductReviews } from './ProductReviews';
import { useCart } from '../../../context/CartContext';
import styles from './ProductDetails.module.css';

export const ProductDetails: React.FC = () => {
  // 1. Get the "slug" from the URL (defined in App.tsx later)
  const { slug } = useParams<{ slug: string }>();

  // 2. Find the matching product
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

    // 4. Add to Cart
  const { addToCart } = useCart();

  // 3. Handle "404 Not Found"
  if (!product) {
    return <div>Product not found! <Link to="/products">Back to Menu</Link></div>;
  }

  // Helper for currency
  const formatPrice = (cents: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);

  return (
    <div className={styles.container}>
      <Link to="/products" className={styles.backLink}>← Back to Menu</Link>
      
      <div className={styles.grid}>
        {/* Left Column: Images */}
        <div className={styles.imageSection}>
          <img 
            src={product.images[0].url} 
            alt={product.images[0].altText} 
            className={styles.mainImage} 
          />
        </div>

        {/* Right Column: Info & Safety */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>{formatPrice(product.priceInCents)}</p>
          <p className={styles.description}>{product.description}</p>

        <button 
            className={styles.addToCartBtn} 
            disabled={!product.isAvailable}
            onClick={() => {
            addToCart(product);
            // Optional: Give feedback without an alert
            // setButtonText("Added!") 
            }}
        >
            {product.isAvailable ? 'Add to Cart' : 'Unavailable'}
        </button>

          <hr className={styles.divider} />

          {/* SAFETY FEATURES SECTION */}
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

        {/* REVIEWS SECTION */}      <ProductReviews reviews={product.reviews} />


    </div>
  );
};