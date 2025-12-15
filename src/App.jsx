import { createBrowserRouter, RouterProvider } from "react-router";
import "./style/main.scss";

// Routes
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import ProductsDetails from "./pages/ProductsDetailed";
import FAQ from "./pages/FAQ";
import { ProductDetailLoader } from "./loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/productsDetails/:id",
    element: <ProductsDetails />,
    loader: ProductDetailLoader,
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

export default function App() {
  return (
    <div className="page__wrapper">
      <RouterProvider router={router} />
    </div>
  );
}
