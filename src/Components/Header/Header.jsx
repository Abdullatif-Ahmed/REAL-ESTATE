import logo from "../../Assets/logo.webp";
import { Container, Dropdown } from "react-bootstrap";
import { AiOutlineBars } from "react-icons/ai";
import "./Header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header
      className={`header ${
        pathname.includes("search")
          ? "searchPage"
          : "position-absolute w-100 top-0 left-0"
      }`}
    >
      <Container fluid="xxl">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <nav className="d-none d-md-block">
            <ul className="d-flex align-items-center list-unstyled">
              <li className="me-1 me-md-3">
                <NavLink className="navLink" to="/stateforsale">
                  for sale
                </NavLink>
              </li>
              <li>
                <NavLink className="navLink" to="/stateforrent">
                  for rent
                </NavLink>
              </li>
            </ul>
          </nav>
          <Dropdown className="d-block d-md-none">
            <Dropdown.Toggle>
              <AiOutlineBars />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="navLink" to="/stateforsale">
                    for sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navLink" to="/stateforrent">
                    for rent
                  </NavLink>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </header>
  );
};
export default Header;
