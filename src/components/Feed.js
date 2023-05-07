import React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from "./Card";
import styled from "styled-components";


export default function Feed() {
    return (
        <div>
            <Grid container spacing={{xs: 2, lg: 2}} columns={{xs: 4, sm: 4, md: 9, lg: 12}}>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/green dress.jpg")} size={"M"} location={"1.2K"}
                              prise={5} brand={"Zara"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i5.jpg")} size={"S"} location={"0.6K"} prise={7}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/flower jacket.jpg")} size={"S"} location={"0.2K"}
                              prise={10} brand={"Fox"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/adidas swater.jpg")} size={"38"} location={"0.1K"}
                              prise={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/dress red.jpg")} size={"38"} location={"1.0K"}
                              prise={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/shirt blue.jpg")} size={"38"} location={"2.3K"}
                              prise={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/shirt yellow.jpg")} size={"38"} location={"4.0K"}
                              prise={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/shirt.jpg")} size={"38"} location={"1.3K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i1.jpg")} size={"38"} location={"0.5K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i2.jpg")} size={"38"} location={"0.8K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i3.jpg")} size={"38"} location={"0.3K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i4.jpg")} size={"38"} location={"0.2K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i6.jpg")} size={"38"} location={"0.7K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i7.jpg")} size={"38"} location={"3.2K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i8.jpg")} size={"38"} location={"0.3K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i9.jpg")} size={"38"} location={"0.2K"} prise={4}
                              brand={"H&M"}/>
                </Grid>
            </Grid>
        </div>
    );
};
