import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import MainCard from './Card_Main';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await firebase.database().ref('products').once('value');
                const data = snapshot.val();
                if (data) {
                    const productList = Object.keys(data).map((productId) => ({
                        id: productId,
                        ...data[productId],
                    }));
                    setProducts(productList);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="product-list">
            {products.map((product) => (
                <MainCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;