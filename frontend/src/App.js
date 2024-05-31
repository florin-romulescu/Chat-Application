import './App.css';
import { connect, sendMsg } from "./api"
import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className='App'>
        <h1>React App</h1>
        <button onClick={this.send}>Hit</button>
      </div>
      // <h1>App</h1>
    );
  }
}

export default App;
