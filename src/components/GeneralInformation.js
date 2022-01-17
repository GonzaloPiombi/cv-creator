import { Component } from 'react';
import Names from './Names';
import PersonalInformation from './PersonalInformation';

class GeneralInformation extends Component {
  render() {
    return (
      <div className="general-info">
        <Names />
        <PersonalInformation />
      </div>
    );
  }
}

export default GeneralInformation;
