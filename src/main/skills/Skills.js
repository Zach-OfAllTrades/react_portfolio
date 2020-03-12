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

        <div class="radiogroup">
  <div class="wrapper">
    <input class="state" type="radio" name="app" id="a" value="a"/>
    <label class="label" for="a">
      <div class="indicator"></div>
      <span class="text">a) close</span>
    </label>
  </div>
  <div class="wrapper">
    <input class="state" type="radio" name="app" id="b" value="b"/>
    <label class="label" for="b">
      <div class="indicator"></div>
      <span class="text">b) remove</span>
    </label>
  </div>
  <div class="wrapper">
    <input class="state" type="radio" name="app" id="c" value="c"/>
    <label class="label" for="c">
      <div class="indicator"></div>
      <span class="text">c) delete</span>
    </label>
  </div>
  <div class="wrapper">
    <input class="state" type="radio" name="app" id="d" value="d"/>
    <label class="label" for="d">
      <div class="indicator"></div>
      <span class="text">d) all of the above</span>
    </label>
  </div>
</div>
      </div>
    );
  }
}

export default Skills;
