import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./style/main.scss";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import { ProductDetailLoader } from "./loader";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import ContactForm from "./pages/Contact";
import FAQ from "./pages/FAQ";
// Routes
import Home from "./pages/Home";
import InvoicePage from "./pages/Invoice";
import PaymentPage from "./pages/PaymentPage";
import ProductsDetails from "./pages/ProductsDetailed";
import Shop from "./pages/Shop";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout products={products}>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/shop",
      element: (
        <Layout products={products}>
          <Shop />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout products={products}>
          <About />
        </Layout>
      ),
    },
    {
      path: "/productsDetails/:id",
      element: (
        <Layout products={products}>
          <ProductsDetails />
        </Layout>
      ),
      loader: ProductDetailLoader,
    },
    {
      path: "/cart",
      element: (
        <Layout products={products}>
          <CartPage />
        </Layout>
      ),
    },
    {
      path: "/payment",
      element: (
        <Layout products={products}>
          <PaymentPage />
        </Layout>
      ),
    },
    {
      path: "/invoice",
      element: (
        <Layout products={products}>
          <InvoicePage />
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout products={products}>
          <ContactForm />
        </Layout>
      ),
    },
    {
      path: "/faq",
      element: (
        <Layout products={products}>
          <FAQ />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="page__wrapper">
      <RouterProvider router={router} />
    </div>
  );
}
