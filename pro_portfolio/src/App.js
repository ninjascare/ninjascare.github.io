import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
