import React, { Component } from "react";

class SelectLines extends Component {
  handleChange = e => {
    this.props.addLine(e.target.value);
  };

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="dlr">dlr</option>
          <option value="overground">overground</option>
          <option value="tube">tube</option>
        </select>
      </div>
    );
  }
}

export default SelectLines;
