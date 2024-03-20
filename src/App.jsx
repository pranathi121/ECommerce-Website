import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Home2 from './pages/Home2';
import ProductDetails1 from './pages/ProductDetails1';

import { ProductProvider } from './contexts/ProductContext';

import Homes from './pages/Homes';
import Prod from './pages/prod';


import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Discover from './pages/Discover';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  return (
    <Router>
     <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path='/homes' element={<Homes/>}/>
        <Route path='/prod/' element={<Prod/>}/> */}

        <Route path='/' element={<Home2 />} />
        <Route path='/product/:id' element={<ProductDetails1 />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/checkout' element={<CheckoutPage />} />

      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;


