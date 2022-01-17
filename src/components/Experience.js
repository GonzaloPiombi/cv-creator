import { Component } from 'react';

class Experience extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience">
        <h2>Position</h2>
        <p>Date-Date</p>
        <h3>Company Name</h3>
        <p>Description</p>
        <button>Add</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default Experience;
