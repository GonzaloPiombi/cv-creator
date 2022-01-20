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
      areFieldsBeingEdited: false,
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
      areFieldsBeingEdited: false,
    });
  };

  handleEdit = (id, e) => {
    e.preventDefault();
    const newArr = [...this.state.experiences];
    const index = newArr.findIndex((item) => item.id === id);
    if (this.state.areFieldsBeingEdited) {
      newArr[index] = {
        ...newArr[index],
        position: this.state.experience.position,
        date: this.state.experience.date,
        company: this.state.experience.company,
        description: this.state.experience.description,
        id: uniqid(),
      };
    } else {
      newArr[index] = { ...newArr[index], id: uniqid() };
    }
    this.setState({
      experiences: newArr,
      experience: {
        position: 'Position',
        date: 'Date-Date',
        company: 'Company name',
        description: 'Description',
        id: uniqid(),
      },
      areFieldsBeingEdited: false,
    });
  };

  handleDelete = (id) => {
    this.setState({
      experiences: this.state.experiences.filter((item) => item.id !== id),
    });
  };

  handlePositionChange = (e, item) => {
    let newItem;
    if (item && !this.state.areFieldsBeingEdited) {
      newItem = { ...item, position: e.target.value, id: uniqid() };
    }
    this.setState({
      experience: newItem || {
        position: e.target.value,
        date: this.state.experience.date,
        company: this.state.experience.company,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
      areFieldsBeingEdited: true,
    });
  };

  handleDateChange = (e, item) => {
    let newItem;
    if (item && !this.state.areFieldsBeingEdited) {
      newItem = { ...item, date: e.target.value, id: uniqid() };
    }
    this.setState({
      experience: newItem || {
        position: this.state.experience.position,
        date: e.target.value,
        company: this.state.experience.company,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
      areFieldsBeingEdited: true,
    });
  };

  handleCompanyChange = (e, item) => {
    let newItem;
    if (item && !this.state.areFieldsBeingEdited) {
      newItem = { ...item, company: e.target.value, id: uniqid() };
    }
    this.setState({
      experience: newItem || {
        position: this.state.experience.position,
        date: this.state.experience.date,
        company: e.target.value,
        description: this.state.experience.description,
        id: this.state.experience.id,
      },
      areFieldsBeingEdited: true,
    });
  };

  handleDescriptionChange = (e, item) => {
    let newItem;
    if (item && !this.state.areFieldsBeingEdited) {
      newItem = { ...item, description: e.target.value, id: uniqid() };
    }
    this.setState({
      experience: newItem || {
        position: this.state.experience.position,
        date: this.state.experience.date,
        company: this.state.experience.company,
        description: e.target.value,
        id: this.state.experience.id,
      },
      areFieldsBeingEdited: true,
    });
  };

  render() {
    const { experience, experiences } = this.state;
    if (!this.state.addExperience) {
      return (
        <section className="container">
          <div className="section-title">
            <h1>Experience</h1>
            <span
              className={['add-button', 'material-icons-outlined'].join(' ')}
              onClick={this.addExperiences}
            >
              add_circle_outline
            </span>
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
          <form className="column-section">
            <input
              type="text"
              onChange={this.handlePositionChange}
              defaultValue={experience.position}
            ></input>
            <input
              type="text"
              onChange={this.handleDateChange}
              defaultValue={experience.date}
            ></input>
            <input
              type="text"
              onChange={this.handleCompanyChange}
              defaultValue={experience.company}
            ></input>
            <input
              type="text"
              onChange={this.handleDescriptionChange}
              defaultValue={experience.description}
            ></input>
            <span
              className={['save-button', 'material-icons-outlined'].join(' ')}
              onClick={this.handleSave}
            >
              save
            </span>
          </form>
        </div>
      </section>
    );
  }
}

export default Experience;
