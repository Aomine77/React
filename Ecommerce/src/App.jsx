import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import AdminDashboard from './Admin/Components/AdminDashboard';
import AdminLogin from './Admin/Components/AdminLogin';
import ProductManagement from './Admin/Components/ProductManagement';
import OrderManagement from './Admin/Components/OrderManagement';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Shop from './Components/Shop';
import Profile from './Components/Profile';
import Quickview from './Components/Quickview';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import PrivateRoute from './Components/PrivateRoute';
import AdminRoute from './Admin/Components/AdminRoute';
import './App.css';

// Layout component to handle conditional rendering
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app">
      {!isAdminRoute && <Navigation />}
      <main className={`main-content ${isAdminRoute ? 'admin-content' : ''}`}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Body />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/product/:id" element={<Quickview />} />
              
              {/* Protected User Routes */}
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
              <Route path="/cart" element={
                <PrivateRoute>
                  <div>Cart Page</div>
                </PrivateRoute>
              } />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <AdminRoute>  
                  <AdminDashboard />
                </AdminRoute>
              } />
              <Route path="/admin/products" element={
                <AdminRoute>
                  <ProductManagement />
                </AdminRoute>
              } />
              <Route path="/admin/orders" element={
                <AdminRoute>
                  <OrderManagement />
                </AdminRoute>
              } />
               
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
