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
import CartPage from "./pages/CartPage";
import InvoicePage from "./pages/Invoice";
import PaymentPage from "./pages/PaymentPage";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6767/products")
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
      element: <CartPage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/invoice",
      element: <InvoicePage />,
    },
    {
      path: "/contact",
      element: <ContactForm />,
    },
    {
      path: "/faq",
      element: <FAQ />,
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
