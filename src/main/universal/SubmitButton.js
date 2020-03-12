import React, { Component } from "react";

class SubmitButton extends Component {
  render(){
    return(
      <button type={this.props.type}>{this.props.label}</button>
    );
  }
}

export default SubmitButton;
