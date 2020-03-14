import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor() {
        super()
        this.state = {
          radioClick: "name",
          name_checked: false,
          age_checked: false
        };
	}

	onChange(type) {
    if (type === 'name' && this.state.name_checked) {
      this.setState({ age_checked: true, name_checked: false, radioClick: "age" });
    }

    if (type === 'name' && !this.state.name_checked) {
        this.setState({ name_checked: true, age_checked: false, radioClick: "age" });
        this.props.sortBy(type)
    } 

    if(type === 'age' && this.state.age_checked) {
        this.setState({ name_checked: true, age_checked: false, radioClick: "name" });
    }

    if(type === 'age' && !this.state.age_checked) {
        this.setState({ age_checked: true, name_checked: false, radioClick: "name" });
        this.props.sortBy(type)
    }		
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input name="name" checked={this.state.name_checked} onChange={() => { this.onChange(this.state.radioClick)}} type='radio' />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input name="age" checked={this.state.age_checked} onChange={() => { this.onChange(this.state.radioClick)}} type='radio' />
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
  </div>
);

	}
}

// Uncomment the snippet below
Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;
