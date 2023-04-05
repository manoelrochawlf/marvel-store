import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComicsDetails from './components/ComicsDetails';
import ShopCart from './components/ShopCart';
import Home from './pages/Home';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comics/:id" element={<ComicsDetails />} />
            <Route path="/shoppingcart" element={<ShopCart />} />
        </Routes>
    );
}

export default Router;