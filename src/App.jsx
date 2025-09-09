import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="/products">
              <Route path="" element={<Products />}></Route>
              <Route path=":id" element={<DetailProduct />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
