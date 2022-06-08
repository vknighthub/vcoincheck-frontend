import { useState } from "react";
import { Link } from "react-router-dom";
import Language from "../../components/PluginsMenu/Language/Language";
import Profile from "./Profile";



const Header = ({ onNotification }) => {

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

              <div className="nav-item dropdown">
                <div className="input-group search-area d-inline-flex">
                  <Language/>
                </div>
              </div>

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
