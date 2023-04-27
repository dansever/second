import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import {Upload} from "antd";
import Footer from "./components/Footer/Footer";
import Feed from "./components/Feed";
import App2 from "./components/Feed";

export default function App() {
  return (
      <BrowserRouter>
          <App2/>
          {/*<Routes>*/}
          {/*    <Route path="/" element={<MyProfile/>}/>*/}
          {/*    <Route path="/upload" element={<Upload/>}/>*/}
          {/*    <Route path="/profile" element={<MyProfile/>}/>*/}
          {/*</Routes>*/}
          {/*<Footer/>*/}
      </BrowserRouter>
  )
}