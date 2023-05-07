import React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from "./Card/Card";
import {ScrollView} from "react-native";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    align-content: center;
    height: 70vh;
`
export default function Feed() {
    return (
        <PageContainer>
            <Grid container spacing={{xs: 2, lg: 2}} columns={{xs: 4, sm: 4, md: 9, lg: 12}}>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/green dress.jpg")} size={"M"} location={"1.2K"}
                              price={5} brand={"Zara"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i5.jpg")} size={"S"} location={"0.6K"} price={7}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/flower jacket.jpg")} size={"S"} location={"0.2K"}
                              price={10} brand={"Fox"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/adidas swater.jpg")} size={"38"} location={"0.1K"}
                              price={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/dress red.jpg")} size={"38"} location={"1.0K"}
                              price={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/shirt blue.jpg")} size={"38"} location={"2.3K"}
                              price={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/shirt yellow.jpg")} size={"38"} location={"4.0K"}
                              price={4} brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/shirt.jpg")} size={"38"} location={"1.3K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i1.jpg")} size={"38"} location={"0.5K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i2.jpg")} size={"38"} location={"0.8K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i3.jpg")} size={"38"} location={"0.3K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i4.jpg")} size={"38"} location={"0.2K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i6.jpg")} size={"38"} location={"0.7K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i7.jpg")} size={"38"} location={"3.2K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i8.jpg")} size={"38"} location={"0.3K"} price={4}
                              brand={"H&M"}/>
                </Grid>
                <Grid item xs={2} sm={2} md={3} lg={3}>
                    <MainCard img={require("../assets/images/i9.jpg")} size={"38"} location={"0.2K"} price={4}
                              brand={"H&M"}/>
                </Grid>
            </Grid>
        </PageContainer>
    );
};
