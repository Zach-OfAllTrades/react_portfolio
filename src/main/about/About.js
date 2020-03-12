import React, {Component} from "react";
import AboutContent from "./AboutContent";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Education from "./more/Education";
import Experience from "./more/Experience";
import Hobbies from "./more/Hobbies";

class About extends Component {
  render(){
    return(
      <div id="about-container">
        <h2 id="about-title">HOWDY.</h2>
        <div id="about-content">
          <AboutContent />
        </div>
      </div>
    );
  }
}

export default About;
