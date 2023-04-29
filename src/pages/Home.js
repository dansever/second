import React from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import MainFeed from "../components/MainFeed";

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainFeed />
            <Footer />
            {/*<Categories />*/}
            {/*<Products/>*/}
            {/*<Footer/>*/}
        </div>
    );
};

export default Home;