import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Booklist from "./components/booklist/Booklist";
import Bookdetails from "./components/bookdetails/Bookdetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="book" element={<Booklist />} />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
