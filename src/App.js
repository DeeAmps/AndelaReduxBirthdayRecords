import React, { Component } from "react";
import Radio from "./components/Radio";
import Table from "./components/Table";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio />
        <Table />
      </div>
    );
  }
}

export default App;
