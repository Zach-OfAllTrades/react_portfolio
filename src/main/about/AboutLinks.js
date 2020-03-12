import React, {Component} from "react";
import Experience from "./more/Experience";
import Education from "./more/Education";
import Hobbies from "./more/Hobbies";

class AboutLinks extends Component {
  render(){
    return(
      <div id="about-links-div">
        <ul id="about-links">
          <li>Howdy</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Hobbies</li>
        </ul>
      </div>
    );
  }
}

export default AboutLinks;
