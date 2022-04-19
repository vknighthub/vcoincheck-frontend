import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";



const Header = ({ onNote, toggle, onProfile, onNotification, onClick }) => {

  const getMotherPath = (path) => {
    switch (path) {
      case 'project-review-list-action':
        return 'Review Detail'
      default: return null
    }

  }

  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var pathMother = getMotherPath(path[1])

  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;

  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
      ? filterName.filter((f) => f !== "ui")
      : filterName.includes("uc")
        ? filterName.filter((f) => f !== "uc")
        : filterName.includes("basic")
          ? filterName.filter((f) => f !== "basic")
          : filterName.includes("jquery")
            ? filterName.filter((f) => f !== "jquery")
            : filterName.includes("table")
              ? filterName.filter((f) => f !== "table")
              : filterName.includes("page")
                ? filterName.filter((f) => f !== "page")
                : filterName.includes("email")
                  ? filterName.filter((f) => f !== "email")
                  : filterName.includes("ecom")
                    ? filterName.filter((f) => f !== "ecom")
                    : filterName.includes("chart")
                      ? filterName.filter((f) => f !== "chart")
                      : filterName.includes("editor")
                        ? filterName.filter((f) => f !== "editor")
                        : filterName;

  const [darkMode, setDarkMode] = useState(false);
  const body = document.querySelector("body");
  if (!darkMode) {
    body.setAttribute("data-theme-version", "dark");
  } else {
    body.setAttribute("data-theme-version", "light");
  }

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {pathMother ? pathMother : finalName.join(" ").length === 0
                  ? "Home"
                  : finalName.join(" ")}
              </div>
            </div>

            <ul className="navbar-nav header-right">
              {/* TAM THOI AN CHO XU LY */}
              {/* <div className="nav-item dropdown">
                <div className="input-group search-area d-inline-flex">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="flaticon-381-search-2" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                  />
                </div>
              </div> */}

              <li className="nav-item dropdown notification_dropdown">
                <Link
                  to={"#"}
                  className={`nav-link bell dz-theme-mode ${darkMode ? "active" : ""
                    }`}
                >
                  <i
                    className="far fa-sun i-dark"
                    onClick={() => setDarkMode(!darkMode)}
                  ></i>
                  <i
                    className="far fa-moon i-light"
                    onClick={() => setDarkMode(!darkMode)}
                  ></i>
                </Link>
              </li>

              <Profile />

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
