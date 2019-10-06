import React, { Component } from "react";
import "./App.css";
import NoticeBoard from "./containers/NoticeBoard";

class App extends Component {
  componentDidMount() {
    console.log("🎫", process.env.REACT_APP_ID);
    console.log("🔑", process.env.REACT_APP_KEYS);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>is the train running?</h1>
        </header>
        <NoticeBoard />
      </div>
    );
  }
}

export default App;
