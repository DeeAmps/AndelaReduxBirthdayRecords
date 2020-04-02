import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table-div">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.birth}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// Uncomment the snippet below
Table.propTypes = {
  sortParameter: PropTypes.string
};

function mapStateToProps(state) {
  const initialData = state;
  return { data: initialData };
}

export default connect(mapStateToProps)(Table);
