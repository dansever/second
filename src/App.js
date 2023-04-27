import React from "react";
import Card from "./components/Card";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Header_Back_Arrow, { Header_Settings } from "./components/Header";
import MyProfile from "./pages/MyProfile";
import Upload from "./pages/Upload";
import Product from "./pages/Product";
import ProductPage from "./pages/Product";


export default function App() {
  return (
      <BrowserRouter>
         <ProductPage/>
      </BrowserRouter>
  )
}