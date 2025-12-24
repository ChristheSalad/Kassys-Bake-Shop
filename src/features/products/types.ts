// src/features/products/types.ts

// 1. Union Types for strict control
// Instead of allowing any string, we lock categories down. 
// This prevents typos like "Cakes" vs "cake" in your database.
export type ProductCategory = 'Cookie' | 'Cake' | 'Bread' | 'Pastry' | 'Bundle';

export type Allergen = 'Dairy' | 'Peanuts' | 'Tree Nuts' | 'Gluten' | 'Eggs' | 'Soy';

// 2. The Review Interface
// Includes 'isVerified' for social proof validity.
export interface Review {
  id: string;
  authorName: string;
  rating: number; // 1 to 5
  content: string;
  createdAt: string; // ISO 8601 Date String (e.g., "2023-12-25T12:00:00Z")
  isVerifiedPurchase: boolean; 
  adminResponse?: string; // Optional: Allows the baker to reply to reviews
}

// 3. The Image Interface
// We separate this to ensure every image has Alt Text for Accessibility (A11y).
export interface ProductImage {
  id: string;
  url: string;
  altText: string; // REQUIRED for A11y. If it's missing, TS will yell at us.
  isPrimary: boolean; // Which image shows on the main grid?
}

// 4. The Main Product Interface
export interface Product {
  id: string;
  slug: string; // SEO friendly URL ID (e.g., "dark-chocolate-chunk")
  name: string;
  description: string;
  
  // Money handling: Always store as integers (cents) to avoid JS floating point errors.
  // Example: $10.99 -> 1099
  priceInCents: number; 
  
  category: ProductCategory;
  
  // Safety & Transparency Section
  ingredients: string[];
  allergens: Allergen[]; 
  nutritionInfo?: { // Optional, as you might not have this for every item yet
    calories: number;
    servingSize: string;
  };
  
  // Inventory Management
  stockQuantity: number;
  isAvailable: boolean; // Quick toggle to hide items without deleting them
  
  images: ProductImage[];
  
  // Computed/Aggregate data (Optimization for listing pages)
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
}

// A CartItem is just a Product + a quantity count
export interface CartItem extends Product {
  quantity: number;
}