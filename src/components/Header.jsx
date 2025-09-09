import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between">
              <h1 className="me-3">Fake Shop</h1>
              <ul className="list-unstyled d-flex">
                <li className="me-2">
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li className="me-2">
                  <NavLink to="/about"> Chi Siamo </NavLink>
                </li>
                <li className="me-2">
                  <NavLink to="/products"> Prodotti </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
