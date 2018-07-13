import React from "react";
import "./nav.css";

const Nav = props => (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand"><h1 className="animated zoomIn">Clicky Game</h1>
          </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav container">
                  <div className="nav-item nav-link" ><h3>Score</h3><a><span className="sr-only">(current)</span></a>
                    </div>
                  <div className="nav-item nav-link" ><h3>Highest Score</h3>
                    </div>
                </div>
              </div>
        </nav>
      </div>
);

export default Nav;