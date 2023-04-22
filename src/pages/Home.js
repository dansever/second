import React from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
// import Categories from "../components/Categories";
// import Products from "../components/Products";
// import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Feed />
            <Footer />
            {/*<Categories />*/}
            {/*<Products/>*/}
            {/*<Footer/>*/}
        </div>
    );
};

export default Home;