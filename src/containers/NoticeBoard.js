import React, { Component, Fragment } from "react";
import SelectLines from "../components/SelectLines";

class NoticeBoard extends Component {
  state = {
    modeName: ["tube"],
    lineStatus: []
  };

  componentDidMount() {
    console.log("app mounted 🤓");
    this.fetchTravelModeData().then(line =>
      line.forEach(l =>
        this.setState({
          lineStatus: {
            [l.name]: l.status.length > 0 ? true : false
          }
        })
      )
    );
  }

  fetchTravelModeData = () => {
    const modes = this.state.modeName.join();
    return fetch(
      `https://api.tfl.gov.uk/Line/Mode/${modes}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEYS}`
    ).then(resp => resp.json());
  };

  render() {
    return (
      <Fragment>
        <div></div>
        <div><SelectLines addLine={this.props.addLine} /></div>
      </Fragment>
    );
  }
}

export default NoticeBoard;
