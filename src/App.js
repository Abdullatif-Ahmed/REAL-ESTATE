import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Header from "./Components/Header/Header";

import "./Sass/main.scss";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/">
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
          </main>
          <footer
            className="text-center p-4 fs-6"
            style={{
              backgroundColor: "#1e2332",
              color: "#fff",
              fontWeight: "300",
            }}
          >
            Copyright © 2022 by{" "}
            <Link to="/" style={{ color: "rgba(224, 7, 7, 1)" }}>
              REAL STATE
            </Link>
            . All Rights Reserved.
          </footer>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
