import React, {Component} from "react";
import TodoList from "./todoList/todolist/src/TodoList.js"

class Playground extends Component {
  render(){
    return(
      <div>
        <div>PLAYGROUND</div>
        <div>
          <h2>SIMPLE TODO LIST APP</h2>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default Playground;
