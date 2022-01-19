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

  addExperiences = () => {
    this.setState({
      addExperience: true,
    });
  };

  render() {
    const { experience, experiences } = this.state;
    if (!this.state.addExperience) {
      return (
        <div>
          <ExperienceList />
          <button onClick={this.addExperiences}>Add</button>
        </div>
      );
    }
    return (
      <form className="experience">
        <input type="text" value={experience.position}></input>
        <input type="text" value={experience.date}></input>
        <input type="text" value={experience.company}></input>
        <input type="text" value={experience.description}></input>
        <button>Save</button>
      </form>
    );
  }
}

export default Experience;
