import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import "./style/main.scss";

// Routes
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import ProductsDetails from "./pages/ProductsDetailed";
import FAQ from "./pages/FAQ";
import { ProductDetailLoader } from "./loader";
import Layout from "./components/Layout";
import ContactForm from "./pages/Contact";
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout products={products}><Home /></Layout>,
    },
    {
      path: "/shop",
      element: <Layout products={products}><Shop /></Layout>,
    },
    {
      path: "/about",
      element: <Layout products={products}><About /></Layout>,
    },
    {
      path: "/productsDetails/:id",
      element: <Layout products={products}><ProductsDetails /></Layout>,
      loader: ProductDetailLoader,
    },
    {
      path: "/faq",
      element: <Layout products={products}><FAQ /></Layout>,
    },
    {
      path: "/contact",
      element: <Layout products={products}><ContactForm /></Layout>,
    },
    {
      path: "*",
      element: <Layout products={products}><NotFound /></Layout>,
    },
  ]);

  return (
    <div className="page__wrapper">
      <RouterProvider router={router} />
    </div>
  );
}
