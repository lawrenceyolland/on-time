import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    console.log("here's the id 🎫", process.env.REACT_APP_ID);
    console.log("here's the key 🔑", process.env.REACT_APP_KEYS);
    return (
      <div className="App">
        <header className="App-header">
          <h1>is the train running?</h1>
        </header>
      </div>
    );
  }
}

export default App;
