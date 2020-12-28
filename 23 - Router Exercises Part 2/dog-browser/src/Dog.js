import { Component } from "react";
import { withRouter } from 'react-router-dom';

class Dog extends Component {
  render() {
    const currentDog = this.props.dogs.find(dog => {
      return dog.name === this.props.match.params.name;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card mt-5">
              <img src={currentDog.src} className="card-img-top" alt={currentDog.name} />
              <div className="card-body">
                <h5 className="card-title">{currentDog.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{currentDog.age} years old</h6>
              </div>
              <ul class="list-group list-group-flush">
                {
                  currentDog.facts.map(fact => { return <li className="list-group-item">{fact}</li> })
                }
              </ul>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={() => { this.props.history.goBack() }} >Go back!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dog);