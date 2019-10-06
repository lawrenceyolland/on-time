import React, { Component, Fragment } from "react";
import SelectLines from "../components/SelectLines";

class NoticeBoard extends Component {
  state = {
    modeName: ["tube", "dlr", "overground"]
  };

  fetchTravelModeData = () => {
    const modes = this.state.modeName.join();
    return fetch(
      `https://api.tfl.gov.uk/Line/Mode/${modes}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEYS}`
    ).then(resp => resp.json());
  };

  parseStatus = () => {
    this.fetchTravelModeData().then(mode => mode.map(m => console.log(m.name)));
  };

  addLine = line => {
    this.setState({
      lines: [...this.state.lines, line]
    });
  };

  render() {
    this.parseStatus();
    return (
      <Fragment>
        <div>hellooooooo</div>
        <div>
          <SelectLines />
        </div>
      </Fragment>
    );
  }
}

export default NoticeBoard;
