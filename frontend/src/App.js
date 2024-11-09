import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Register/Register";
import Whistlist from "./pages/Whistlist/Whistlist";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" elemnt={<Register/>}/>
        <Route path="/whistlist" element={<Whistlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      <Footer/>
    </>
  );
};

export default App;
