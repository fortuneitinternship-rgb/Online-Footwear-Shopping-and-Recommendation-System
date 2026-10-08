import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          ShoeAura
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                Wishlist
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>

          </ul>

          <div className="d-flex gap-3">

            <Link to="/login" className="text-dark">
              <i className="bi bi-person"></i>
            </Link>

            <Link to="/cart" className="text-dark">
              <i className="bi bi-cart"></i>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;