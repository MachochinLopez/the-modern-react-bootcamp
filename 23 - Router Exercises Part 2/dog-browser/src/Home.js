import { Component } from "react";
import './Home.css';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3">Click a Dog!</h1>
        <div className="row">
          {
            this.props.dogs.map(dog => {
              return (
                <div className="dog-container text-center col-12 col-sm-6 col-md-4" onClick={() => { this.props.history.push(`/dogs/${dog.name}`) }}>
                  <img className="round-img img-fluid" src={dog.src} alt={dog.name} />
                  <p className="text-center fw-bold mt-2">{(dog.name).toUpperCase()}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Home);