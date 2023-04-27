import React from 'react';
import Grid from '@mui/material/Grid';
import ItemCard from "./Card";
import "../styles/Feed.css"

export default function MainFeed () {
    return (
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
    );
};
