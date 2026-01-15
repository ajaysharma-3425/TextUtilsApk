import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}
      style={{
        boxShadow: props.mode === "light" 
          ? "0 4px 12px rgba(0,0,0,0.08)" 
          : "0 4px 12px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease-in-out",
        padding: "0.8rem 0"
      }}
    >
      <div className="container">
        {/* Brand/Logo with modern design */}
        <NavLink 
          className="navbar-brand d-flex align-items-center fw-bold" 
          to="/"
          style={{
            fontSize: "1.6rem",
            letterSpacing: "1px",
            fontWeight: "700"
          }}
        >
          <div 
            className="me-2 d-flex align-items-center justify-content-center"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              fontSize: "1.2rem"
            }}
          >
            {props.title.charAt(0)}
          </div>
          <span className="gradient-text" style={{
            background: props.mode === "light" 
              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
              : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            {props.title}
          </span>
        </NavLink>

        {/* Mobile Toggle Button with animation */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            padding: "0.5rem",
            boxShadow: "none",
            outline: "none"
          }}
        >
          <span 
            className="navbar-toggler-icon"
            style={{
              backgroundImage: props.mode === "light" 
                ? `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
                : `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
            }}
          ></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navigation Links with modern hover effect */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item position-relative mx-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 ${isActive ? 'active fw-semibold' : ''}`
                }
                aria-current="page" 
                to="/"
                style={{
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                  borderRadius: "8px"
                }}
              >
                <i className="bi bi-house-door me-2"></i>
                Home
                {({ isActive }) => isActive && (
                  <span className="active-indicator" style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: props.mode === "light" ? "#667eea" : "#4facfe"
                  }}></span>
                )}
              </NavLink>
            </li>
            <li className="nav-item position-relative mx-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 ${isActive ? 'active fw-semibold' : ''}`
                }
                to="/about"
                style={{
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                  borderRadius: "8px"
                }}
              >
                <i className="bi bi-info-circle me-2"></i>
                About
              </NavLink>
            </li>
            <li className="nav-item position-relative mx-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 ${isActive ? 'active fw-semibold' : ''}`
                }
                to="/services"
                style={{
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                  borderRadius: "8px"
                }}
              >
                <i className="bi bi-briefcase me-2"></i>
                Services
              </NavLink>
            </li>
            <li className="nav-item position-relative mx-2">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 py-2 ${isActive ? 'active fw-semibold' : ''}`
                }
                to="/contact"
                style={{
                  transition: "all 0.3s ease",
                  fontWeight: "500",
                  borderRadius: "8px"
                }}
              >
                <i className="bi bi-envelope me-2"></i>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Dark/Light Mode Toggle - Modern Design */}
          <div className="d-flex align-items-center gap-3">
            <div 
              className="mode-toggle-container p-2 rounded-3"
              style={{
                background: props.mode === "light" 
                  ? "linear-gradient(135deg, #f5f7fa 0%, #e4e7ec 100%)" 
                  : "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
                border: props.mode === "light" 
                  ? "1px solid #e2e8f0" 
                  : "1px solid #4a5568"
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                {/* Sun Icon */}
                <div 
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: props.mode === "light" 
                      ? "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" 
                      : "transparent",
                    transition: "all 0.3s ease"
                  }}
                >
                  <i className="bi bi-sun-fill" style={{
                    color: props.mode === "light" ? "#fff" : "#a0aec0",
                    fontSize: "1rem"
                  }}></i>
                </div>
                
                {/* Toggle Switch */}
                <div className="position-relative">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="darkModeSwitch"
                    checked={props.mode === "dark"}
                    onChange={props.EnableDarkMode}
                    style={{
                      width: "60px",
                      height: "30px",
                      cursor: "pointer",
                      backgroundColor: props.mode === "dark" ? "#4a5568" : "#e2e8f0",
                      borderColor: props.mode === "dark" ? "#4a5568" : "#cbd5e0",
                      position: "relative"
                    }}
                  />
                  {/* Custom slider */}
                  <div 
                    className="position-absolute"
                    style={{
                      top: "50%",
                      left: props.mode === "dark" ? "calc(100% - 26px)" : "4px",
                      transform: "translateY(-50%)",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: props.mode === "dark" 
                        ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" 
                        : "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
                      transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                      pointerEvents: "none"
                    }}
                  ></div>
                </div>
                
                {/* Moon Icon */}
                <div 
                  className="d-flex align-items-center justify-content-center ms-3"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: props.mode === "dark" 
                      ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" 
                      : "transparent",
                    transition: "all 0.3s ease"
                  }}
                >
                  <i className="bi bi-moon-fill" style={{
                    color: props.mode === "dark" ? "#fff" : "#a0aec0",
                    fontSize: "1rem"
                  }}></i>
                </div>
              </div>
              
              {/* Mode Label */}
              <div className="text-center mt-2">
                <small className="fw-medium" style={{
                  color: props.mode === "light" ? "#4a5568" : "#cbd5e0"
                }}>
                  {props.mode === "light" ? "Light Mode" : "Dark Mode"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  EnableDarkMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "MyApp",
  mode: "light",
};