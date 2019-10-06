import React, { Component } from "react";

class NoticeBoard extends Component {
  state = {
    lines: []
  };

  fetchTravelData = () => {
    return fetch(
      `https://api.tfl.gov.uk/Line/Mode/tube?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEYS}`
    ).then(resp => resp.json());
  };

  addLine = line => {
    this.setState({
      lines: [...this.state.lines, line]
    });
  };

  render() {
    return <div>


    </div>;
  }
}

export default NoticeBoard;
