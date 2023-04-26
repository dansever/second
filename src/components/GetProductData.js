import React from "react";
import ProductDatabase from '../assets/Database';

export default function getProductData(productId) {
    const product = ProductDatabase.products.find(p => p.id === productId);
    return product;
}
