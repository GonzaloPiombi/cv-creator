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
    });
  };

  handleEdit = (id, e) => {
    e.preventDefault();
    const newArr = [...this.state.studies];
    const index = newArr.findIndex((item) => item.id === id);
    newArr[index] = {
      ...newArr[index],
      title: this.state.education.title,
      date: this.state.education.date,
      school: this.state.education.school,
      id: this.state.education.id,
    };
    this.setState({
      studies: newArr,
      education: {
        title: 'Title of Study',
        date: 'Date of Study',
        school: 'School Name',
        id: uniqid(),
      },
    });
  };

  handleDelete = (id) => {
    this.setState({
      studies: this.state.studies.filter((item) => item.id !== id),
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      education: {
        title: e.target.value,
        date: this.state.education.date,
        school: this.state.education.school,
        id: this.state.education.id,
      },
    });
  };

  handleDateChange = (e) => {
    this.setState({
      education: {
        title: this.state.education.title,
        date: e.target.value,
        school: this.state.education.school,
        id: this.state.education.id,
      },
    });
  };

  handleSchoolChange = (e) => {
    this.setState({
      education: {
        title: this.state.education.title,
        date: this.state.education.date,
        school: e.target.value,
        id: this.state.education.id,
      },
    });
  };

  render() {
    const { education, studies } = this.state;
    if (!this.state.addStudy) {
      return (
        <div className="container">
          <h1>Education</h1>
          <EducationList
            studies={studies}
            onTitleChange={this.handleTitleChange}
            onDateChange={this.handleDateChange}
            onSchoolChange={this.handleSchoolChange}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          <button onClick={this.addStudies}>Add</button>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Education</h1>
        <div className="list-container">
          <EducationList
            studies={studies}
            onTitleChange={this.handleTitleChange}
            onDateChange={this.handleDateChange}
            onSchoolChange={this.handleSchoolChange}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
          <form className="list-container" onSubmit={this.handleSave}>
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
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Education;
