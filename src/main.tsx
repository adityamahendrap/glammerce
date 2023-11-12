import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Cart from "./pages/Cart.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Payment from "./pages/Payment.tsx";
import Product from "./pages/Product.tsx";
import Products from "./pages/Products.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Wishlist from "./pages/Wishlist.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import './config/axios.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>test</div>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id/:slug",
    element: <Product />,
  },
  {
    path: "/payment/success",
    element: <div></div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
