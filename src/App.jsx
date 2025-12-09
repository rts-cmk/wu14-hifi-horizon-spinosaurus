import { Route, Routes } from "react-router";
import "./style/main.scss";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="page__wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
