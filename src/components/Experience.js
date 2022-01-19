import { Component } from 'react';
import ExperienceList from './ExperienceList';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addExperience: false,
      experience: {
        position: 'Position',
        date: 'Date-Date',
        company: 'Company name',
        description: 'Description',
      },
      experiences: [],
    };
  }

  render() {
    const { experience, experiences } = this.state;
    if (!this.state.addExperience) {
      return (
        <div>
          <ExperienceList />
          <button>Add</button>
        </div>
      );
    }
  }
}

export default Experience;
