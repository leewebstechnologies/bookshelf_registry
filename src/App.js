import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Layout from "./pages/layout/Layout";
import Booklist from "./components/booklist/Booklist";
import Bookdetails from "./components/bookdetails/Bookdetails";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Booklist />} />
          <Route path="/book/:id" element={<Bookdetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
