import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// COMPONENTS
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import ShopContextProvider from "./context/shopContext";

const App = () => {
  return (
    <div className="container">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/soufi-shop" element={<Navigate to="shop" />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
