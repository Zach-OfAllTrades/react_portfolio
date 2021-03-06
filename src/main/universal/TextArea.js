import React, { Component } from "react";

class TextArea extends Component {
  render(){
    return(
      <textarea cols={this.props.columns} rows={this.props.rows} className="text-area">
        {this.props.placeholder}
      </textarea>
    );
  }
}

export default TextArea;
