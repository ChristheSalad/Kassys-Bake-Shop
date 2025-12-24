// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Import Hook
import styles from './MainLayout.module.css';

export const MainLayout: React.FC = () => {
  const { cartTotalCount } = useCart(); // 2. Use the Hook

  return (
    <div className={styles.wrapper}>
      {/* 1. The Navbar */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">Kassy's Bakeshop</Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/products" className={styles.link}>Menu</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>

            {/* 3. The Cart Link with Badge */}
          <Link to="/cart" className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>Cart</span>
            {cartTotalCount > 0 && (
              <span style={{ 
                background: '#2563eb', 
                color: 'white', 
                borderRadius: '50%', 
                padding: '2px 8px', 
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {cartTotalCount}
              </span>
            )}
          </Link>
        </nav>
      </header>

      {/* 2. The Dynamic Content Area */}
      {/* 'Outlet' is a special React Router component. 
          It tells React: "Put the specific page content (ProductList, About, etc.) right here." */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* 3. The Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Kassy's Bakeshop. Made with ❤️.</p>
      </footer>
    </div>
  );
};