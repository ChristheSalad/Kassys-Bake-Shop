// src/features/products/components/ProductReviews.tsx
import React from 'react';
import type { Review } from '../types';
import styles from './ProductReviews.module.css';

interface ProductReviewsProps {
  reviews: Review[];
}

export const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  
  // Helper: Format the ISO date string to something readable
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper: Render Star Icons
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Customer Reviews ({reviews.length})</h2>

      {reviews.length === 0 ? (
        <p className={styles.emptyState}>
          No reviews yet. Be the first to try this delicious treat!
        </p>
      ) : (
        <div className={styles.list}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <span className={styles.author}>{review.authorName}</span>
                {review.isVerifiedPurchase && (
                  <span className={styles.verifiedBadge}>✓ Verified Buyer</span>
                )}
                <span className={styles.date}>{formatDate(review.createdAt)}</span>
              </div>
              
              <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
                {renderStars(review.rating)}
              </div>
              
              <p className={styles.content}>{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};