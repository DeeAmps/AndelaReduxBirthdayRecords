import React, {Component} from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor() {
      super()
      this.state = {
        parameterState: "name",
        people: [
          {
            name: "John Sina",
            birth: "11/30/2011"
          }, {
            name: "Barcy Washington",
            birth: "09/16/1992"
          }, {
            name: "Peter Parker",
            birth: "01/16/1992"
          }, {
            name: "Jimmy Shergil",
            birth: "12/12/2001"
          }, {
            name: "Alexander Alfred",
            birth: "02/09/1891"
          }, {
            name: "Krishna Gupta",
            birth: "12/01/1982"
          }, {
            name: "Sania Mirza",
            birth: "11/30/2011"
          }, {
            name: "Lata Pathak",
            birth: "10/31/1999"
          }
        ]
      }
  }

  sortByParameter(parameter) {
    // set state of 'parameterState' here
  }

  render() {
    return (
      <div className='container-fluid'>
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio />
        <Table data={this.state.people}/>
      </div>
);


  }
}

export default App;
