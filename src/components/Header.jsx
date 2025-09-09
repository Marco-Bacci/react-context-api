import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";
const Header = () => {
  const { budgetMode, setBudgetMode } = useBudget();
  const toggleBudjet = () => {
    if (budgetMode === true) {
      setBudgetMode(false);
    } else {
      setBudgetMode(true);
    }
  };
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
          <div className="col-12 text-center">
            <button
              onClick={toggleBudjet}
              className={`btn btn-sm ms-3 ${budgetMode ? "btn-danger" : "btn-success"}`}
            >
              {budgetMode
                ? "Disattiva Modalità Budget"
                : "Attiva Modalità Budget"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
