// src/features/products/hooks/useProductWithReviews.ts
import { useState, useEffect } from 'react';
import { type Product, type Review } from '../types';
import { MOCK_PRODUCTS } from '../data';

export const useProductWithReviews = (slug?: string) => {
  const [product, setProduct] = useState<Product | null>(null);

  // 1. Load Data
  useEffect(() => {
    if (!slug) return;

    // Find the base mock product
    const baseProduct = MOCK_PRODUCTS.find((p) => p.slug === slug);
    if (!baseProduct) {
      setProduct(null);
      return;
    }

    // Load USER reviews from Local Storage
    const storageKey = `kassys-reviews-${slug}`;
    const savedReviews = localStorage.getItem(storageKey);
    const userReviews: Review[] = savedReviews ? JSON.parse(savedReviews) : [];

    // Combine Mock + User Reviews
    const allReviews = [...baseProduct.reviews, ...userReviews];

    // 2. MATH: Recalculate Average Rating
    const totalStars = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const newAverage = allReviews.length > 0 
      ? totalStars / allReviews.length 
      : 0;

    // Update state with the "Enhanced" product
    setProduct({
      ...baseProduct,
      reviews: allReviews,
      reviewCount: allReviews.length,
      averageRating: parseFloat(newAverage.toFixed(1)), // Round to 1 decimal
    });

  }, [slug]);

  // 3. Action: Add New Review
  const addReview = (newReviewData: { authorName: string; rating: number; content: string }) => {
    if (!product) return;

    const newReview: Review = {
      id: `user-${Date.now()}`, // Unique ID based on time
      ...newReviewData,
      createdAt: new Date().toISOString(),
      isVerifiedPurchase: false, // User submitted reviews are unverified by default
    };

    // Save to Local Storage
    const storageKey = `kassys-reviews-${product.slug}`;
    const existingUserReviews = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const updatedUserReviews = [...existingUserReviews, newReview];
    localStorage.setItem(storageKey, JSON.stringify(updatedUserReviews));

    // Update Local State (So the UI updates instantly without refresh)
    const allReviews = [...product.reviews, newReview];
    const totalStars = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const newAverage = totalStars / allReviews.length;

    setProduct({
      ...product,
      reviews: allReviews,
      reviewCount: allReviews.length,
      averageRating: parseFloat(newAverage.toFixed(1)),
    });
  };

  return { product, addReview };
};