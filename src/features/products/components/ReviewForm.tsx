// src/features/products/components/ReviewForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ReviewForm.module.css';

// 1. Validation Schema (Safety First)
const reviewSchema = z.object({
  authorName: z.string().min(2, "Name is too short").max(30),
  rating: z.number().min(1).max(5),
  content: z.string().min(5, "Review must be at least 5 characters").max(500),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  onSubmit: (data: ReviewFormData) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch,
    reset,
    formState: { errors } 
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 5 } // Default to 5 stars
  });

  const currentRating = watch('rating');

  const onValidSubmit = (data: ReviewFormData) => {
    onSubmit(data);
    reset(); // Clear form after submit
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)} className={styles.form}>
      <h3>Write a Review</h3>

      {/* STAR RATING SELECTOR */}
      <div className={styles.starSelector}>
        <label>Rating:</label>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={styles.starBtn}
              onClick={() => setValue('rating', star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              <span style={{ 
                color: star <= (hoverRating || currentRating) ? '#fbbf24' : '#d1d5db' 
              }}>
                ★
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* INPUTS */}
      <div className={styles.inputGroup}>
        <input 
          {...register('authorName')} 
          placeholder="Your Name" 
          className={styles.input} 
        />
        {errors.authorName && <span className={styles.error}>{errors.authorName.message}</span>}
      </div>

      <div className={styles.inputGroup}>
        <textarea 
          {...register('content')} 
          placeholder="How was it? Describe the taste..." 
          className={styles.textarea} 
        />
        {errors.content && <span className={styles.error}>{errors.content.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>Submit Review</button>
    </form>
  );
};