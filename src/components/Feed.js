import React from 'react';
import "../styles/Feed.css"
import MainCard from "./Card";
import {Col, Row} from "antd";
import i1_img from "../assets/images/i1.jpg"
import i2_img from "../assets/images/i2.jpg"
import i3_img from "../assets/images/i3.jpg"
import i4_img from "../assets/images/i4.jpg"
import i5_img from "../assets/images/i5.jpg"
import i6_img from "../assets/images/i6.jpg"


export default function Feed() {

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
        <div className="feed">
            <Row gutter={[16, 16]}>
                {cardData.map((card, index) => (
                    <Col span={12} key={index}>
                        <MainCard
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


// <div>
        //     <Grid container spacing={{xs: 2, lg: 2}} columns={{xs: 4, sm: 4, md: 9, lg: 12}}>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/green dress.jpg")} size={"M"} location={"1.2K"}
        //                       price={5} brand={"Zara"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i5.jpg")} size={"S"} location={"0.6K"} price={7}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/flower jacket.jpg")} size={"S"} location={"0.2K"}
        //                       price={10} brand={"Fox"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/adidas swater.jpg")} size={"38"} location={"0.1K"}
        //                       price={4} brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/dress red.jpg")} size={"38"} location={"1.0K"}
        //                       price={4} brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/shirt blue.jpg")} size={"38"} location={"2.3K"}
        //                       price={4} brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/shirt yellow.jpg")} size={"38"} location={"4.0K"}
        //                       price={4} brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/shirt.jpg")} size={"38"} location={"1.3K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i1.jpg")} size={"38"} location={"0.5K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i2.jpg")} size={"38"} location={"0.8K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i3.jpg")} size={"38"} location={"0.3K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i4.jpg")} size={"38"} location={"0.2K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i6.jpg")} size={"38"} location={"0.7K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i7.jpg")} size={"38"} location={"3.2K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i8.jpg")} size={"38"} location={"0.3K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //         <Grid item xs={2} sm={2} md={3} lg={3}>
        //             <MainCard img={require("../assets/images/i9.jpg")} size={"38"} location={"0.2K"} price={4}
        //                       brand={"H&M"}/>
        //         </Grid>
        //     </Grid>
        // </div>
//     );
// };
