// src/features/cart/CartPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './CartPage.module.css';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  // 1. Calculate Totals
  const subtotal = cart.reduce((total, item) => total + (item.priceInCents * item.quantity), 0);
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + tax;

  // Helper for currency
  const formatMoney = (cents: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);

  // 2. Empty State
  if (cart.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any treats yet.</p>
        <Link to="/products" className={styles.continueBtn}>Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>

      <div className={styles.grid}>
        {/* LEFT COLUMN: Cart Items */}
        <div className={styles.itemsList}>
          {cart.map((item) => (
            <div key={item.id} className={styles.itemRow}>
              
              {/* Image Thumbnail */}
              <img 
                src={item.images[0].url} 
                alt={item.images[0].altText} 
                className={styles.thumbnail} 
              />
              
              {/* Item Details */}
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p className={styles.unitPrice}>{formatMoney(item.priceInCents)} each</p>
              </div>

              {/* Quantity */}
              <div className={styles.quantity}>
                <span>Qty: {item.quantity}</span>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className={styles.removeBtn}
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Summary */}
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{formatMoney(subtotal)}</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Tax (8%)</span>
            <span>{formatMoney(tax)}</span>
          </div>
          
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>{formatMoney(total)}</span>
          </div>

          <button 
            className={styles.checkoutBtn}
            onClick={() => alert('This would go to Stripe/PayPal!')}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};