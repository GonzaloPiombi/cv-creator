import { Component } from 'react';

class GeneralInformation extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general-info">
        <div className="names">
          <h1>First Name</h1>
          <h1>Last Name</h1>
          <button>Edit</button>
        </div>
        <div className="personal-info">
          <h4>E-Mail</h4>
          <h4>Phone Number</h4>
          <h4>LinkedIn</h4>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}

export default GeneralInformation;
