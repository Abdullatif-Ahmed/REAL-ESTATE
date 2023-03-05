import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet } from "react-router";
import Header from "./Components/Header/Header";
import "./Sass/main.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      footer
    </div>
  );
}

export default App;
