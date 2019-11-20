import React, { Component } from "react";

class SubmitButton extends Component {
  render(){
    return(
      <button type="submit">{this.props.label}</button>
    );
  }
}

export default SubmitButton;
