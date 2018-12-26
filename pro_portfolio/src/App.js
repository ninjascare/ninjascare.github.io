import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectsView from "./components/ProjectsView";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path='/about' component={AboutMe}/>
              <Route exact path='/projects' component={ProjectsView}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
