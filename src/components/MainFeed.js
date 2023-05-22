import React, {useEffect, useState} from 'react';
import "../styles/Feed.css"
import MainCard from "./Card";
import {Col, Row} from "antd";
import i1_img from "../assets/images/i1.jpg"
import i2_img from "../assets/images/i2.jpg"
import i3_img from "../assets/images/i3.jpg"
import i4_img from "../assets/images/i4.jpg"
import i5_img from "../assets/images/i5.jpg"
import i6_img from "../assets/images/i6.jpg"
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";


export default function MainFeed() {
    const [productsList, setProductsList] = useState([]);
    const productsCollectionRef = collection(db,'products');

    useEffect(() => {
        const getProductList = async () => {
            try {
                const data = await getDocs(productsCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setProductsList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };
        getProductList();
    }, []);

    return (
        <div className="feed">
            <Row gutter={[16, 16]}>
                {productsList.map((card, index) => (
                    <Col span={12}
                         key={index}>
                        <MainCard isLiked = {false}
                            title={card.title}
                            type={card.type}
                            image_ref={"https://firebasestorage.googleapis.com/v0/b/second-app-2529e.appspot.com/o/product_images%2Fadidas%20swater.jpg5240839e-752a-44f4-8910-ea93d589357b?alt=media&token=5ce70508-12c0-424c-917b-10eaa8439b4a"}
                            img_desc={card.img_desc}
                            brand={card.brand}
                            size={card.size}
                            price={card.pr}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};



// export default function MainFeed() {
//
//     const productsCollectionRef = collection(db, "products")
//
//     const cardData = [
//         { title: 'Card 1', type: 'Hat',
//             img_url:i1_img, img_desc:"i1_img",
//             brand: 'zara', size: 'L', price:3
//         },
//         { title: 'Card 2', type: 'Shirt',
//             img_url:i2_img, img_desc:"i2_img" ,
//             brand: 'Gap', size: 'M', price:1
//         },
//         { title: 'Card 3', type: 'swimwear',
//             img_url:i3_img, img_desc:"i3_img",
//             brand: 'Old Navy', size: 'S', price:5
//         },
//         { title: 'Card 4', type: 'Shoes',
//             img_url:i4_img, img_desc:"i4_img",
//             brand: 'Gucci', size: 'L', price:2
//         },
//         { title: 'Card 5', type: 'Socks',
//             img_url:i5_img, img_desc:"i5_img",
//             brand: 'thrift', size: 'M', price:4
//         },
//         { title: 'Card 6', type: 'Hat',
//             img_url:i6_img, img_desc:"i6_img",
//             brand: 'thrift', size: 'S', price:3
//         },
//         // Add more card data as needed
//     ];
//
//     return (
//         <div className="feed">
//             <Row gutter={[16, 16]}>
//                 {cardData.map((card, index) => (
//                     <Col span={12}
//                          key={index}>
//                         <MainCard
//                             title={card.title} type={card.type}
//                             img_url={card.img_url} img_desc={card.img_desc}
//                             brand={card.brand} size={card.size}
//                             price={card.pr}
//                         />
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };
