import React, {Component} from "react";

class Skill extends Component {
  render(){

    var cssVar = "";
    // "linear-gradient("+this.props.skilllevel+"deg, #EB5E55 50%,"
    // + "transparent 50%), linear-gradient(270deg, #EB5E55 50%, grey 50%)";

    var testStyle = {
      background: cssVar
    };

    return(
      <div className="skill-level" style={testStyle}>
        <input class="state" type="radio" />
        <label class="label">
          <div class="indicator"></div>
          <h2 className="skill-desc">{this.props.skill}</h2>
        </label>
      </div>
    );
  }
}

var skills = {
  "Java": 30,
  "JavaScript": 300,
  "Web": 330,
  "CI/CD": 70,
  "Analytics": 310,
  "Automation": 70,
  "Agile": 350
  }

var renderData = [];

for(let key in skills){
    var skillLevel = skills[key];
    renderData.push(<Skill key={key} skill={key} skilllevel={skillLevel}/>);
}

class SkillContainer extends Component {
  render(){
    return(
      <div>
      {renderData}
      </div>
    );
  }
}

export default SkillContainer;
