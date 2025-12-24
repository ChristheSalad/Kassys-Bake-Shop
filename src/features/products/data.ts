// src/features/products/data.ts
import type { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-001',
    slug: 'polvorone-cookie',
    name: 'Polvorone Cookie',
    description: 'Our best-seller. Brown sugar with a hint of vanilla and a crumbly texture.',
    priceInCents: 450, // $4.50
    category: 'Cookie',
    ingredients: ['Flour', 'Brown Sugar', 'Butter', 'Almond', 'Eggs', 'Vanilla', 'Baking Powder', 'Salt'],
    allergens: ['Gluten', 'Dairy', 'Tree Nuts'],
    nutritionInfo: {
      calories: 1000,
      servingSize: '1 cookie (100g)',
    },
    stockQuantity: 50,
    isAvailable: true,
    images: [
      {
        id: 'img-001-a',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8iL5sbZSKdhjavYQaf0WEF-zDCVLvV3-Ia-jQPrsH3dZcTei5ZuYQm03nuXVgc8As24Juct0EWIRZTaJgfYgswoZ1M9-AOoKtM6ataC6GaiiltxbWY3Q3I3pucpZkrC9ENEcxoJBbrAbQ/s1600/48388536_2101619996543226_4036111154668371968_o.jpg',
        altText: 'Close up of heart-shaped Polvorone Cookie with a sprinkle of brown sugar',
        isPrimary: true,
      },
      {
        id: 'img-001-b',
        url: 'https://i0.wp.com/petitapron.com/wp-content/uploads/2021/12/DSC_0027-scaled.jpg?fit=2560%2C1707&ssl=1',
        altText: 'Stack of Polvorone Cookies on a white plate dusted in powdered sugar',
        isPrimary: false,
      },
    ],
    averageRating: 4.9,
    reviewCount: 124,
    reviews: [
      {
        id: 'r-001',
        authorName: 'Christian S.',
        rating: 5,
        content: 'Hands down the best cookie I have ever had. The sweetness and texture are amazing.',
        createdAt: '2025-11-15T14:30:00Z',
        isVerifiedPurchase: true,
      },
    ],
  },
  {
    id: 'p-002',
    slug: 'oreo-cheese-cake',
    name: 'Oreo Cheesecake',
    description: 'A creamy cheesecake with a rich Oreo crust and a smooth, velvety filling.',
    priceInCents: 1050, // $10.50
    category: 'Pastry',
    ingredients: ['Oreos', 'Cream Cheese', 'Sugar', 'Eggs', 'Flour', 'Lemon Juice'],
    allergens: ['Gluten', 'Dairy', 'Tree Nuts'],
    stockQuantity: 4, // Low stock simulation!
    isAvailable: true,
    images: [
      {
        id: 'img-002-a',
        url: 'https://sugarspunrun.com/wp-content/uploads/2022/05/Oreo-Cheesecake-Recipe-3-of-6.jpg',
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
        authorName: 'Adrian A.',
        rating: 5,
        content: 'Finally a GF brownie that isn’t dry!',
        createdAt: '2025-11-14T09:00:00Z',
        isVerifiedPurchase: true,
      },
    ],
  },
];