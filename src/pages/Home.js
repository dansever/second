import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Feed from "../components/Feed";
import Product from "./Product";

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