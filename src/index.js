import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home catg="sale" />} />
          <Route path="stateforsale">
            <Route index element={<Home catg="sale" />} />
            <Route path="search" element={<Search catg="sale" />} />
          </Route>
          <Route path="stateforrent">
            <Route index element={<Home catg="rent" />} />
            <Route path="search" element={<Search catg="rent" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();