import React from 'react';
import MainCard from "./Card";
import {Col, Row} from "antd";
import i1_img from "../assets/images/i1.jpg"
import i2_img from "../assets/images/i2.jpg"
import i3_img from "../assets/images/i3.jpg"
import i4_img from "../assets/images/i4.jpg"
import i5_img from "../assets/images/i5.jpg"
import i6_img from "../assets/images/i6.jpg"


export default function LikedFeed() {

    const cardData = [
        { title: 'Card 1', type: 'Hat',
            img_url:i1_img, img_desc:"i1_img",
            brand: 'zara', size: 'L', price:3
        },
        { title: 'Card 2', type: 'Shirt',
            img_url:i2_img, img_desc:"i2_img" ,
            brand: 'Gap', size: 'M', price:1
        },
        { title: 'Card 3', type: 'swimwear',
            img_url:i3_img, img_desc:"i3_img",
            brand: 'Old Navy', size: 'S', price:5
        },
        { title: 'Card 4', type: 'Shoes',
            img_url:i4_img, img_desc:"i4_img",
            brand: 'Gucci', size: 'L', price:2
        },
        { title: 'Card 5', type: 'Socks',
            img_url:i5_img, img_desc:"i5_img",
            brand: 'thrift', size: 'M', price:4
        },
        { title: 'Card 6', type: 'Hat',
            img_url:i6_img, img_desc:"i6_img",
            brand: 'thrift', size: 'S', price:3
        },
        // Add more card data as needed
    ];


    return (
        <div>
            <Row gutter={[16, 16]}>
                {cardData.map((card, index) => (
                    <Col span={12} key={index}>
                        <MainCard isLiked = {true}
                            title={card.title} type={card.type}
                            img_url={card.img_url} img_desc={card.img_desc}
                            brand={card.brand} size={card.size}
                            price={card.pr}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};