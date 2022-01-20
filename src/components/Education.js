import { Component } from 'react';
import EducationList from './EducationList';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addStudy: false,
      education: {
        title: 'Title of Study',
        date: 'Date of Study',
        school: 'School Name',
        id: uniqid(),
      },
      studies: [],
      areFieldsBeingEdited: false,
    };
  }

  addStudies = () => {
    this.setState({
      addStudy: true,
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      studies: this.state.studies.concat(this.state.education),
      education: {
        title: 'Title of Study',
        date: 'Date of Study',
        school: 'School Name',
        id: uniqid(),
      },
      addStudy: false,
      areFieldsBeingEdited: false,
    });
  };

  handleEdit = (id, e) => {
    e.preventDefault();
    const newArr = [...this.state.studies];
    const index = newArr.findIndex((item) => item.id === id);
    if (this.state.areFieldsBeingEdited) {
      newArr[index] = {
        ...newArr[index],
        title: this.state.education.title,
        date: this.state.education.date,
        school: this.state.education.school,
        id: this.state.education.id,
      };
    } else {
      newArr[index] = { ...newArr[index], id: uniqid() };
    }
    this.setState({
      studies: newArr,
      education: {
        title: 'Title of Study',
        date: 'Date of Study',
        school: 'School Name',
        id: uniqid(),
      },
      areFieldsBeingEdited: false,
    });
  };

  handleDelete = (id) => {
    this.setState({
      studies: this.state.studies.filter((item) => item.id !== id),
    });
  };

  handleTitleChange = (e, item) => {
    let newItem;
    if (item && !this.state.areFieldsBeingEdited) {
      newItem = { ...item, title: e.target.value, id: uniqid() };
    }
    this.setState({
      education: newItem || {
        title: e.target.value,
        date: this.state.education.date,
        school: this.state.education.school,
        id: this.state.education.id,
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
      education: newItem || {
        title: this.state.education.title,
        date: e.target.value,
        school: this.state.education.school,
        id: this.state.education.id,
      },
      areFieldsBeingEdited: true,
    });
  };

  handleSchoolChange = (e, item) => {
    let newItem;
    if (item && !this.state.areFieldsBeingEdited) {
      newItem = { ...item, school: e.target.value, id: uniqid() };
    }
    this.setState({
      education: newItem || {
        title: this.state.education.title,
        date: this.state.education.date,
        school: e.target.value,
        id: this.state.education.id,
      },
      areFieldsBeingEdited: true,
    });
  };

  render() {
    const { education, studies } = this.state;
    if (!this.state.addStudy) {
      return (
        <section className="container">
          <div className="section-title">
            <h1>Education</h1>
            <button onClick={this.addStudies}>Add</button>
          </div>
          <EducationList
            studies={studies}
            onTitleChange={this.handleTitleChange}
            onDateChange={this.handleDateChange}
            onSchoolChange={this.handleSchoolChange}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        </section>
      );
    }
    return (
      <section className="container">
        <h1>Education</h1>
        <div className="column-section">
          <EducationList
            studies={studies}
            onTitleChange={this.handleTitleChange}
            onDateChange={this.handleDateChange}
            onSchoolChange={this.handleSchoolChange}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          <form className="column-section" onSubmit={this.handleSave}>
            <input
              type="text"
              onChange={this.handleTitleChange}
              value={education.title}
            ></input>
            <input
              type="text"
              onChange={this.handleDateChange}
              value={education.date}
            ></input>
            <input
              type="text"
              onChange={this.handleSchoolChange}
              value={education.school}
            ></input>
            <button className="save-button">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Education;
