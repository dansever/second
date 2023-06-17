import React, {useContext, useEffect, useState} from 'react';
import "../styles/Feed.css"
import {Col, Row} from "antd";
import {collection, getDoc, getDocs, query, where, doc, documentId} from 'firebase/firestore';
import {auth, db} from "../firebase";
import {AuthContext} from "./AuthProvider";
import {getAuth} from "firebase/auth";
import ProductCard from "./Card";
// import firebase from "firebase/compat";
// import 'firebase/compat/firestore';



export default function LikedFeed() {
    const [likedProductsList, setLikedProductsList] = useState([]);
    const currentUser = useContext(AuthContext);
    const productsCollectionRef = collection(db,'products');
    const usersCollectionRef = collection(db,'users');
    // const userDoc = collection(db,'products', currentUser.id);

    // useEffect(() => {
    //     const userId = currentUser.uid;
    //     const likedProductsRef = doc(db,'products',userId);
    //     }, []);

    useEffect(() => {
        const getProductList = async () => {
            try {
                const userDoc = query(usersCollectionRef,where(documentId(), '==', currentUser.uid));
                const data1 = await getDocs(userDoc);
                const LikedItemsId = data1.docs.map(doc => doc.data().liked_items);
                // alert(LikedItemsId);

                let filteredData = [];
                for (let arrayItem of Object.values(LikedItemsId)) {
                    for (let itemId of arrayItem.values()){
                        // alert(itemId);
                        const likedQuery = query(productsCollectionRef,where(documentId(), '==', itemId));
                        const data2 = await getDocs(likedQuery);
                        const a = data2.docs.map(doc => doc.data());
                        filteredData = [...filteredData, ...a];
                    }
                }
                // alert(filteredData);
                setLikedProductsList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };
        getProductList();
    }, []);



    return (
        <div>
            <div className="feed">
                <Row gutter={[16, 16]}>
                    {likedProductsList.map((product, index) => (
                    <Col span={12}
                         key={index}>
                        <ProductCard
                            isLiked = {true}
                            product_id = {product.id}
                            title={product.title}
                            seller_uid={product.seller_uid}
                            unique_id={product.unique_id}
                            type={product.type}
                            gender={product.gender}
                            image_url={product.image_url}
                            brand={product.brand}
                            tokens={product.tokens}
                            size={product.size}
                            condition={product.condition}
                        />
                    </Col>
                ))}
            </Row>
        </div>
        </div>
    );
};



// export default function MainFeed() {
//     const [productsList, setProductsList] = useState([]);
//     const productsCollectionRef = collection(db,'products');
//
//     useEffect(() => {
//         const getProductList = async () => {
//             try {
//                 const data = await getDocs(productsCollectionRef);
//                 const filteredData = data.docs.map((doc) => ({
//                     ...doc.data(),
//                     id: doc.id
//                 }));
//                 setProductsList(filteredData);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         getProductList();
//     }, []);
//
//     return (
//         <div className="feed">
//             <Row gutter={[16, 16]}>
//                 {productsList.map((product, index) => (
//                     <Col span={12}
//                          key={index}>
//                         <ProductCard
//                             isLiked = {false}
//                             product_id = {product.id}
//                             title={product.title}
//                             seller_id={product.seller_id}
//                             unique_id={product.unique_id}
//                             type={product.type}
//                             gender={product.gender}
//                             image_url={product.image_url}
//                             brand={product.brand}
//                             size={product.size}
//                             condition={product.condition}
//                         />
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };