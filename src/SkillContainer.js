import React, {Component} from "react";

class Skill extends Component {
  render(){

    var cssVar = "linear-gradient("+this.props.skilllevel+"deg, #F96A2D 50%,"
    + "transparent 50%), linear-gradient(270deg, #F96A2D 50%, lightgray 50%)";

    var testStyle = {
      background: cssVar
    };

    return(
      <div className="skill-level" style={testStyle}>
        <div className="skills">
          <h2 className="skill-desc">{this.props.skill}</h2>
        </div>
      </div>
    );
  }
}

var skills = {
  "Java": 30,
  "React.js": 300,
  "Node.js": 330,
  "HTML/CSS": 70,
  "Docker": 310,
  "Caroline": 70
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
