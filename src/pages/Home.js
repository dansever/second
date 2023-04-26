import React from "react";
import Navbar from "../components/Navbar";
import MainFeed from "../components/MainFeed";
import Footer from "../components/Footer";
import ItemPage from "./ItemPage";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemPage />
            <Footer />
        </div>
    );
};

export default Home;