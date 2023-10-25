import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter, Routes, Route } from "react-router-dom"
import Item from './components/Item/Item.jsx'
import Products from './components/Products/Products.jsx'
import Search from './components/Search/Search.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<App />}>
          <Route path="/" element={<Products />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="search" element={<Search />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);