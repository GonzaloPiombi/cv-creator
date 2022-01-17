/* eslint-disable no-useless-constructor */
import { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education">
        <h2>Title of Study</h2>
        <p>Date of Study</p>
        <h3>School Name</h3>
        <button>Add</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default Education;
