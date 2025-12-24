// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { MainLayout } from './layouts/MainLayout';

// Feature Components
import { ProductList } from './features/products/components/ProductList';
import { ProductDetails } from './features/products/components/ProductDetails';
import { CartPage } from './features/cart/CartPage';

// Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            
            {/* The Home Page */}
            <Route index element={<HomePage />} />
            
            {/* Product Routes */}
            <Route path="products" element={<ProductList />} />
            <Route path="products/:slug" element={<ProductDetails />} />
            
            {/* Cart Route */}
            <Route path="cart" element={<CartPage />} />
            
            {/* Static Pages */}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;