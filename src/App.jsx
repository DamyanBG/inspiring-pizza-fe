import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";

import "./App.css";
import Menu from "./pages/Menu";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
