import React, { useState } from 'react';

const EducationList = (props) => {
  const [id, setId] = useState(null);

  const handleEdit = (id) => {
    setId(id);
  };

  return props.studies.map((item) => {
    if (item.id === id) {
      return (
        <form key={item.id} className="column-section">
          <input
            type="text"
            defaultValue={item.title}
            placeholder={item.title}
            onChange={(e) => props.onTitleChange(e, item)}
          ></input>
          <input
            type="text"
            defaultValue={item.date}
            placeholder={item.date}
            onChange={(e) => props.onDateChange(e, item)}
          ></input>
          <input
            type="text"
            defaultValue={item.school}
            placeholder={item.school}
            onChange={(e) => props.onSchoolChange(e, item)}
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
          <h2>{item.title}</h2>
          <p className="date">{item.date}</p>
          <h3>{item.school}</h3>
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

export default EducationList;
