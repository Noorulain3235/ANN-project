import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./container/header";
import Home from "./components/home";
import InstagramGallery from './container/Home/InstagramGallery';
import Footer from "./container/footer";

// (Optional) Create and import other pages
import About from "./components/Pages/about";
import Services from "./components/Pages/services";
import Contact from "./container/contact";
import Courser from "./components/courser"
import OurTeam from "./components/Pages/ourteam"
import Faq from "./components/Pages/faq"
import Scrollup from "./container/Home/scrollup";
import FloatingButtons from "./container/Home/FloatingButtons";
import Standard from "./components/Blog/standard"
import Shop from './container/shop/index'
import ProductDetail from './container/shop/ProductDetail'

function App() {
  return (
    <Router>
      <Header />
      <Courser />
      <Scrollup />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Blog-standard" element={<Standard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetail/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <InstagramGallery />
      <Footer />
    </Router>
  );
}

export default App;
