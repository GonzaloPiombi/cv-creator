import React, { useState } from 'react';
import ExperienceList from './ExperienceList';
import uniqid from 'uniqid';

const Experience = () => {
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [experience, setExperience] = useState({
    position: 'Position',
    date: 'Date-Date',
    company: 'Company name',
    description: 'Description',
    id: uniqid(),
  });
  const [experiences, setExperiences] = useState([]);
  const [areFieldsBeingEdited, setAreFieldsBeingEdited] = useState(false);

  const addExperience = () => {
    setIsAddingExperience(true);
  };

  const handleSave = (e) => {
    setExperiences(experiences.concat(experience));
    setExperience({
      position: 'Position',
      date: 'Date-Date',
      company: 'Company name',
      description: 'Description',
      id: uniqid(),
    });
    setIsAddingExperience(false);
    setAreFieldsBeingEdited(false);
  };

  const handleEdit = (id) => {
    const newArr = [...experiences];
    const index = newArr.findIndex((item) => item.id === id);
    if (areFieldsBeingEdited) {
      newArr[index] = {
        ...newArr[index],
        position: experience.position,
        date: experience.date,
        company: experience.company,
        description: experience.description,
        id: uniqid(),
      };
    } else {
      newArr[index] = { ...newArr[index], id: uniqid() };
    }
    setExperiences(newArr);
    setExperience({
      position: 'Position',
      date: 'Date-Date',
      company: 'Company name',
      description: 'Description',
      id: uniqid(),
    });
    setAreFieldsBeingEdited(false);
  };

  const handleDelete = (id) => {
    const newExperiences = experiences.filter((item) => item.id !== id);
    setExperiences(newExperiences);
  };

  const handlePositionChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, position: e.target.value, id: uniqid() };
    }
    setExperience(
      newItem || {
        position: e.target.value,
        date: experience.date,
        company: experience.company,
        description: experience.description,
        id: experience.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  const handleDateChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, date: e.target.value, id: uniqid() };
    }
    setExperience(
      newItem || {
        position: experience.position,
        date: e.target.value,
        company: experience.company,
        description: experience.description,
        id: experience.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  const handleCompanyChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, company: e.target.value, id: uniqid() };
    }
    setExperience(
      newItem || {
        position: experience.position,
        date: experience.date,
        company: e.target.value,
        description: experience.description,
        id: experience.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  const handleDescriptionChange = (e, item) => {
    let newItem;
    if (item && !areFieldsBeingEdited) {
      newItem = { ...item, description: e.target.value, id: uniqid() };
    }
    setExperience(
      newItem || {
        position: experience.position,
        date: experience.date,
        company: experience.company,
        description: e.target.value,
        id: experience.id,
      }
    );
    setAreFieldsBeingEdited(true);
  };

  if (!isAddingExperience) {
    return (
      <section className="container">
        <div className="section-title">
          <h1>Experience</h1>
          <span
            className={['add-button', 'material-icons-outlined'].join(' ')}
            onClick={addExperience}
          >
            add_circle_outline
          </span>
        </div>
        <ExperienceList
          experiences={experiences}
          onPositionChange={handlePositionChange}
          onDateChange={handleDateChange}
          onCompanyChange={handleCompanyChange}
          onDescriptionChange={handleDescriptionChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
    );
  }
  return (
    <section className="container">
      <div className="section-title">
        <h1>Experience</h1>
      </div>
      <div className="column-section">
        <ExperienceList
          experiences={experiences}
          onPositionChange={handlePositionChange}
          onDateChange={handleDateChange}
          onCompanyChange={handleCompanyChange}
          onDescriptionChange={handleDescriptionChange}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <form className="column-section">
          <input
            type="text"
            onChange={handlePositionChange}
            defaultValue={experience.position}
          ></input>
          <input
            type="text"
            onChange={handleDateChange}
            defaultValue={experience.date}
          ></input>
          <input
            type="text"
            onChange={handleCompanyChange}
            defaultValue={experience.company}
          ></input>
          <input
            type="text"
            onChange={handleDescriptionChange}
            defaultValue={experience.description}
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

export default Experience;
