import { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Dog Shelter</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/dogs">Home</NavLink>
              </li>
              {
                this.props.dogs.map((dog, i) => {
                  return (
                    <li key={i} className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;