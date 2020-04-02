import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { sortByAge, sortByName } from "../actions/actions";
import { connect } from "react-redux";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.age = React.createRef();
    this.name = React.createRef();
  }

  onChange = e => {
    if (e.target.name === "age") {
      this.name.current.checked = false;
      this.props.dispatch(sortByAge());
    }
    if (e.target.name === "name") {
      this.age.current.checked = false;
      this.props.dispatch(sortByName());
    }
  };

  render() {
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            name="name"
            ref={this.name}
            onChange={this.onChange}
            type="radio"
          />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className="right">
          <input
            ref={this.age}
            name="age"
            onChange={this.onChange}
            type="radio"
          />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}

Radio.propTypes = {
  sortBy: PropTypes.func
};

export default connect()(Radio);
