import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Feed from "../components/Feed";
import AddToCart from "../components/AddToCart/AddToCart";
import ProductPage from "./ProductPage";

const Home = () => {
    return (
        <div>
            <Header />
            <Feed />
            <Footer />
        </div>
    );
};

export default Home;