import { Component } from 'react';
import Names from './Names';
import PersonalInformation from './PersonalInformation';

class GeneralInformation extends Component {
  render() {
    return (
      <section className="general-info">
        <Names />
        <PersonalInformation />
      </section>
    );
  }
}

export default GeneralInformation;
