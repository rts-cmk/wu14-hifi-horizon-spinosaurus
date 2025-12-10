import { Route, Routes } from "react-router";
import "./style/main.scss";

import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="page__wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
