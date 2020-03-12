import React, { Component } from "react";

class TextInput extends Component {
  render(){
    return(
      <input type="text" placeholder={this.props.placeholder} name={this.props.name}
        className="text-inputs" id={this.props.id}/>
    );
  }
}

export default TextInput;
