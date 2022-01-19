import { Component } from 'react';
import ExperienceList from './ExperienceList';
import uniqid from 'uniqid';

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
        id: uniqid(),
      },
      experiences: [],
    };
  }

  addExperiences = () => {
    this.setState({
      addExperience: true,
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        position: 'Position',
        date: 'Date-Date',
        company: 'Company name',
        description: 'Description',
        id: uniqid(),
      },
      addExperience: false,
    });
  };

  handleEdit = (id, e) => {
    e.preventDefault();
    const newArr = [...this.state.experiences];
    const index = newArr.findIndex((item) => item.id === id);
    newArr[index] = {
      ...newArr[index],
      position: this.state.experience.position,
      date: this.state.experience.date,
      company: this.state.experience.company,
      description: this.state.experience.description,
      id: uniqid(),
    };
    this.setState({
      experiences: newArr,
      experience: {
        position: 'Position',
        date: 'Date-Date',
        company: 'Company name',
        description: 'Description',
        id: uniqid(),
      },
    });
  };

  handleDelete = (id) => {
    this.setState({
      experiences: this.state.experiences.filter((item) => item.id !== id),
    });
  };

  handlePositionChange = (e) => {
    this.setState({
      experience: {
        position: e.target.value,
        date: this.state.experience.date,
        company: this.state.experience.company,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
    });
  };

  handleDateChange = (e) => {
    this.setState({
      experience: {
        position: this.state.experience.position,
        date: e.target.value,
        company: this.state.experience.company,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
    });
  };

  handleCompanyChange = (e) => {
    this.setState({
      experience: {
        position: this.state.experience.position,
        date: this.state.experience.date,
        company: e.target.value,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      experience: {
        position: this.state.experience.position,
        date: this.state.experience.date,
        company: this.state.experience.company,
        description: e.target.value,
        id: this.state.experience.id,
      },
    });
  };

  render() {
    const { experience, experiences } = this.state;
    if (!this.state.addExperience) {
      return (
        <section className="container">
          <div className="section-title">
            <h1>Experience</h1>
            <button onClick={this.addExperiences}>Add</button>
          </div>
          <ExperienceList
            experiences={experiences}
            onPositionChange={this.handlePositionChange}
            onDateChange={this.handleDateChange}
            onCompanyChange={this.handleCompanyChange}
            onDescriptionChange={this.handleDescriptionChange}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        </section>
      );
    }
    return (
      <section className="container">
        <h1>Experience</h1>
        <div className="column-section">
          <ExperienceList
            experiences={experiences}
            onPositionChange={this.handlePositionChange}
            onDateChange={this.handleDateChange}
            onCompanyChange={this.handleCompanyChange}
            onDescriptionChange={this.handleDescriptionChange}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          <form className="column-section" onSubmit={this.handleSave}>
            <input
              type="text"
              onChange={this.handlePositionChange}
              value={experience.position}
            ></input>
            <input
              type="text"
              onChange={this.handleDateChange}
              value={experience.date}
            ></input>
            <input
              type="text"
              onChange={this.handleCompanyChange}
              value={experience.company}
            ></input>
            <input
              type="text"
              onChange={this.handleDescriptionChange}
              value={experience.description}
            ></input>
            <button className="save-button">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Experience;
