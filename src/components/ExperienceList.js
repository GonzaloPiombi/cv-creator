import React, { useState } from 'react';

const ExperienceList = (props) => {
  const [id, setId] = useState(null);

  const handleEdit = (id) => {
    setId(id);
  };

  return props.experiences.map((item) => {
    if (item.id === id) {
      return (
        <form key={item.id} className="column-section">
          <input
            type="text"
            defaultValue={item.position}
            placeholder={item.position}
            onChange={(e) => props.onPositionChange(e, item)}
          ></input>
          <input
            type="text"
            defaultValue={item.date}
            placeholder={item.date}
            onChange={(e) => props.onDateChange(e, item)}
          ></input>
          <input
            type="text"
            defaultValue={item.company}
            placeholder={item.company}
            onChange={(e) => props.onCompanyChange(e, item)}
          ></input>
          <input
            type="text"
            defaultValue={item.description}
            placeholder={item.description}
            onChange={(e) => props.onDescriptionChange(e, item)}
          ></input>
          <span
            className={['save-button', 'material-icons-outlined'].join(' ')}
            onClick={() => props.onEdit(item.id)}
          >
            save
          </span>
        </form>
      );
    }
    return (
      <div key={item.id} className="ed-exp">
        <div>
          <h2>{item.position}</h2>
          <p className="date">{item.date}</p>
          <h3>{item.company}</h3>
          <p>{item.description}</p>
        </div>
        <div>
          <span
            className={['edit-button', 'material-icons-outlined'].join(' ')}
            onClick={() => handleEdit(item.id)}
          >
            edit
          </span>
          <span
            className={['delete-button', 'material-icons-outlined'].join(' ')}
            onClick={() => props.onDelete(item.id)}
          >
            delete
          </span>
        </div>
      </div>
    );
  });
};

export default ExperienceList;
