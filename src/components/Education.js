import React, { useState } from 'react';
import EducationList from './EducationList';
import uniqid from 'uniqid';

const Education = () => {
  const [isAddingStudy, setIsAddingStudy] = useState(false);
  const [education, setEducation] = useState({
    title: 'Title of Study',
    date: 'Date of Study',
    school: 'School Name',
    id: uniqid(),
  });
  const [studies, setStudies] = useState([]);
  const [areFieldsBeingEdited, setAreFieldsBeingEdited] = useState(false);

  const addStudies = () => {
    setIsAddingStudy(true);
  };

  const handleSave = (e) => {
    setStudies(studies.concat(education));
    setEducation({
      title: 'Title of Study',
      date: 'Date of Study',
      school: 'School Name',
      id: uniqid(),
    });
    setIsAddingStudy(false);
    setAreFieldsBeingEdited(false);
  };

  const handleEdit = (id) => {
    const newArr = [...studies];
    const index = newArr.findIndex((item) => item.id === id);
    if (areFieldsBeingEdited) {
      newArr[index] = {
        ...newArr[index],
        title: education.title,
        date: education.date,
        school: education.school,
        id: education.id, //FIJATE ACA CON EXPERIENCE
      };
    } else {
      newArr[index] = { ...newArr[index], id: uniqid() };
    }
    setStudies(newArr);
    setEducation({
      title: 'Title of Study',
      date: 'Date of Study',
      school: 'School Name',
      id: uniqid(),
    });
    setAreFieldsBeingEdited(false);
  };

  const handleDelete = (id) => {
    const newStudies = studies.filter((item) => item.id !== id);
    setStudies(newStudies);
  };

  const handleTitleChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, title: e.target.value, id: uniqid() };
    }
    setEducation(
      newItem || {
        title: e.target.value,
        date: education.date,
        school: education.school,
        id: education.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  const handleDateChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, date: e.target.value, id: uniqid() };
    }
    setEducation(
      newItem || {
        title: education.title,
        date: e.target.value,
        school: education.school,
        id: education.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  const handleSchoolChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, school: e.target.value, id: uniqid() };
    }
    setEducation(
      newItem || {
        title: education.title,
        date: education.date,
        school: e.target.value,
        id: education.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  if (!isAddingStudy) {
    return (
      <section className="container">
        <div className="section-title">
          <h1>Education</h1>
          <span
            className={['add-button', 'material-icons-outlined'].join(' ')}
            onClick={addStudies}
          >
            add_circle_outline
          </span>
        </div>
        <EducationList
          studies={studies}
          onTitleChange={handleTitleChange}
          onDateChange={handleDateChange}
          onSchoolChange={handleSchoolChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
    );
  }
  return (
    <section className="container">
      <div className="section-title">
        <h1>Education</h1>
      </div>
      <div className="column-section">
        <EducationList
          studies={studies}
          onTitleChange={handleTitleChange}
          onDateChange={handleDateChange}
          onSchoolChange={handleSchoolChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <form className="column-section">
          <input
            type="text"
            onChange={handleTitleChange}
            value={education.title}
          ></input>
          <input
            type="text"
            onChange={handleDateChange}
            value={education.date}
          ></input>
          <input
            type="text"
            onChange={handleSchoolChange}
            value={education.school}
          ></input>
          <span
            className={['save-button', 'material-icons-outlined'].join(' ')}
            onClick={handleSave}
          >
            save
          </span>
        </form>
      </div>
    </section>
  );
};

export default Education;
