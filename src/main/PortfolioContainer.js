import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./about/About";
import Skills from "./skills/Skills";
import WorkExamples from "./examples/WorkExamples.js";
import Playground from "./playground/Playground";
import Contact from "./contact/Contact";
import {Helmet} from "react-helmet";

class PortfolioContainer extends Component {
  render(){
    return(
      <HashRouter>
      <div>
        <Helmet>
          <title>Zachary Rose</title>
          <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet" />
        </Helmet>
          <nav>
            <div id="navigation">
              <ul className="header">
                <li><NavLink exact to="/">About</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/work_examples">Examples</NavLink></li>
                <li><NavLink to="/playground"><div id="test">React Playground</div></NavLink></li>
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
