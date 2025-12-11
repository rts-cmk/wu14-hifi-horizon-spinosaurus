import { Route, Routes } from "react-router";
import "./style/main.scss";

// Routes 
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="page__wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
