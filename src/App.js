import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'; // Import Routes and Outlet from react-router-dom

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import MentionsLegales from './pages/MentionsLegales';
import CGV from './pages/CGV';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataAccessRequestForm from './components/DataAccessRequestForm';

// layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* Use Outlet to render nested routes */}
      <Footer />
      <CookieBanner />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />} // Render Layout component for root path
        >
          <Route index element={<Home />} /> {/* Render Home component for root path */}
          <Route path="/products/:id" element={<Products />} /> {/* Render Products component for /products/:id path */}
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Render ProductDetails component for /product/:id path */}
          <Route path="/search" element={<Search />} /> {/* Render Search component for /search path */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/CGV" element={<CGV />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/DataAccessRequestForm" element={<DataAccessRequestForm />} />
          
          
        </Route>
      </Routes>
      
    </BrowserRouter>
    
  );
};

export default App;

