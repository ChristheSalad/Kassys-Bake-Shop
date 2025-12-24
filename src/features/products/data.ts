// src/features/products/data.ts
import type { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-001',
    slug: 'signature-chocolate-chunk',
    name: 'Signature Chocolate Chunk',
    description: 'Our best-seller. Browned butter dough loaded with 70% dark chocolate chunks and topped with flakey sea salt.',
    priceInCents: 450, // $4.50
    category: 'Cookie',
    ingredients: ['Flour', 'Brown Sugar', 'Butter', 'Dark Chocolate', 'Eggs', 'Vanilla', 'Sea Salt'],
    allergens: ['Gluten', 'Dairy', 'Eggs', 'Soy'],
    nutritionInfo: {
      calories: 380,
      servingSize: '1 cookie (80g)',
    },
    stockQuantity: 50,
    isAvailable: true,
    images: [
      {
        id: 'img-001-a',
        url: 'https://bakerbynature.com/wp-content/uploads/2017/06/everydaychocolatechipcookies12-1-of-1.jpg',
        altText: 'Close up of a thick chocolate chunk cookie with sea salt on top',
        isPrimary: true,
      },
      {
        id: 'img-001-b',
        url: 'https://images.unsplash.com/photo-1623654460594-54c30c33a925?auto=format&fit=crop&w=800&q=80',
        altText: 'Stack of chocolate chunk cookies on a cooling rack',
        isPrimary: false,
      },
    ],
    averageRating: 4.9,
    reviewCount: 124,
    reviews: [
      {
        id: 'r-001',
        authorName: 'Sarah J.',
        rating: 5,
        content: 'Hands down the best cookie I have ever had. The salt balance is perfect.',
        createdAt: '2023-11-15T14:30:00Z',
        isVerifiedPurchase: true,
      },
    ],
  },
  {
    id: 'p-002',
    slug: 'lemon-lavender-scone',
    name: 'Lemon Lavender Scone',
    description: 'A delicate, crumbly scone infused with dried lavender buds and topped with a zesty lemon glaze.',
    priceInCents: 525, // $5.25
    category: 'Pastry',
    ingredients: ['Flour', 'Cream', 'Butter', 'Sugar', 'Lemon Zest', 'Dried Lavender'],
    allergens: ['Gluten', 'Dairy'],
    stockQuantity: 4, // Low stock simulation!
    isAvailable: true,
    images: [
      {
        id: 'img-002-a',
        url: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcf8?auto=format&fit=crop&w=800&q=80',
        altText: 'Triangular scones with white lemon glaze on a wooden board',
        isPrimary: true,
      },
    ],
    averageRating: 4.2,
    reviewCount: 18,
    reviews: [], // No reviews yet
  },
  {
    id: 'p-003',
    slug: 'gluten-free-fudge-brownie',
    name: 'GF Fudge Brownie',
    description: 'Ultra-fudgy, dense, and rich. You would never guess it is gluten-free.',
    priceInCents: 400, // $4.00
    category: 'Cake', // Could arguably be 'Cake' or 'Bar', using 'Cake' for now based on types
    ingredients: ['Almond Flour', 'Cocoa Powder', 'Butter', 'Sugar', 'Eggs', 'Walnuts'],
    allergens: ['Dairy', 'Eggs', 'Tree Nuts'],
    stockQuantity: 0, // Out of stock simulation
    isAvailable: false,
    images: [
      {
        id: 'img-003-a',
        url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
        altText: 'Dark fudge brownies stacked on a white plate',
        isPrimary: true,
      },
    ],
    averageRating: 4.8,
    reviewCount: 45,
    reviews: [
        {
        id: 'r-002',
        authorName: 'Mike T.',
        rating: 5,
        content: 'Finally a GF brownie that isn’t dry!',
        createdAt: '2023-12-10T09:00:00Z',
        isVerifiedPurchase: true,
      },
    ],
  },
];