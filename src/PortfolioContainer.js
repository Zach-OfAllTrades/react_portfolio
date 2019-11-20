import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import WorkExamples from "./WorkExamples.js";
import Playground from "./Playground";
import Contact from "./contact/Contact";

class PortfolioContainer extends Component {
  render(){
    return(
      <HashRouter>
      <div>
          <nav>
            <div id="navigation">
              <ul className="header">
                <li><NavLink exact to="/">About Me</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/work_examples">Work Examples</NavLink></li>
                <li><NavLink to="/playground">Playground</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <Route exact path="/" component={About} />
            <Route path ="/skills" component={Skills} />
            <Route path ="/work_examples" component={WorkExamples} />
            <Route path ="/playground" component={Playground} />
            <Route path ="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default PortfolioContainer;
