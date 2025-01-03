import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-uppercase" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-3">
              <label
                className="form-check-label px-3"
                style={{ cursor: "pointer" }}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? (
                  <img
                    src="./icons8-sun-30.png"
                    alt="Light Mode Icon"
                    width="25px"
                  />
                ) : (
                  <img
                    src="./icons8-crescent-moon-50.png"
                    alt="Dark Mode Icon"
                    width="25px"
                  />
                )}
              </label>
              <div
                className={`custom-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  type="checkbox"
                  id="toggleSwitch"
                  onClick={props.EnableDarkMode}
                  className="switch-checkbox"
                />
                <label
                  className="switch-label"
                  htmlFor="toggleSwitch"
                  style={{ cursor: "pointer" }}
                >
                  <span className="switch-inner"></span>
                  <span className="switch-circle"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "MyApp",
  about: "About Us",
};
