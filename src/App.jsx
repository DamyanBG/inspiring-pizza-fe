import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
