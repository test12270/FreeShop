import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Nav from "./components/nav";
import ImgBanner from "./components/ImgBanner";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import React, { useContext, useEffect } from "react";
import { useAppDispatch } from "./store";
import { fetchAPI } from "./store/productStore";
import ProductDetail from "./pages/ProductDetail";
import CartState from "./pages/CartState";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import Mypage from "./components/mypage";
import WishList from "./pages/wishList";

declare global {
  interface Window {
    Kakao: any;
  }
}

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartState />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/wishlist" element={<WishList />} />
        {/* <Routes> */}
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} />  q*/}
        {/* </Routes> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
