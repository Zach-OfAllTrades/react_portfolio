import React, {Component} from "react";
import SkillContainer from "./SkillContainer";

class Skills extends Component {
  render(){
    return(
      <div>
        <h2>SKILLS</h2>
        <div id="skills-title-container">
          <SkillContainer />
        </div>
      </div>
    );
  }
}

export default Skills;
