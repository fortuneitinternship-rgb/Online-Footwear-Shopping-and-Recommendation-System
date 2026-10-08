import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Products from "../pages/product/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Checkout from "../pages/checkout/Checkout";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}

export default AppRoutes;