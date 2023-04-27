import React from 'react';
import Grid from '@mui/material/Grid';
import ItemCard from "./Card";
import "../styles/Feed.css"
// import styled from "styled-components"

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `
//
// const CardWrapper = styled.div`
//   border: 4px black solid !important;
// `

const App2 = () => (
    // <Row gutter={16}>
    //     <Col span={8}>
    // <div>
    //     <div className="grid-feed-row">
    //         <ItemCard/>
    //         <ItemCard/>
    //         <ItemCard/>
    //         <ItemCard/>
    //     </div>
    //     <div className="grid-feed-row">
    //         <ItemCard/>
    //         <ItemCard/>
    //         <ItemCard/>
    //         <ItemCard/>
    //     </div>
    // </div>
    <Grid container spacing={{ xs: 2, lg: 2 }} columns={{ xs: 4, sm: 4, md: 9, lg:12}}>
        <Grid item xs={2} sm={2} md={3} lg={3}>
            <ItemCard/>
        </Grid>
        <Grid item xs={2} sm={2} md={3} lg={3}>
            <ItemCard/>
        </Grid>
        <Grid item xs={2} sm={2} md={3} lg={3}>
            <ItemCard/>
        </Grid>
        <Grid item xs={2} sm={2} md={3} lg={3}>
            <ItemCard/>
        </Grid>
        <Grid item xs={2} sm={2} md={3} lg={3}>
            <ItemCard/>
        </Grid>

    </Grid>

    //
    // <Container>
    //                 <ItemCard/>
    //                 <ItemCard/>
    //                 <ItemCard/>
    //                 <ItemCard/>
    //                 <ItemCard/>
    //                 <ItemCard/>
    //
    // </Container>
    //     </Col>
    // </Row>
);
export default App2;