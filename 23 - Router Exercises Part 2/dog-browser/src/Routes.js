import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dog from './Dog';
import Home from './Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route 
          exact
          path="/dogs/:name"
          render={routeParams => <Dog dogs={this.props.dogs} {...routeParams} /> }
        />
        <Route 
          exact
          path="/dogs"
          render={() => <Home dogs={this.props.dogs} /> }
        />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;