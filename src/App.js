import React, { Component } from "react";
import "./App.css";
import NoticeBoard from "./containers/NoticeBoard";

class App extends Component {
  state = {
    lines: []
  };

  componentDidMount() {
    console.log("🎫", process.env.REACT_APP_ID);
    console.log("🔑", process.env.REACT_APP_KEYS);
  }

  addLine = line => {
    this.setState({
      lines: [...this.state.lines, line]
    });
  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>some title</h1>
        </header>
        <NoticeBoard addLine={this.addLine} />
      </div>
    );
  }
}

export default App;
