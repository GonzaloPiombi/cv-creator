import React, { useState } from 'react';

const Names = () => {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [editState, setEditState] = useState(false);

  const handleEditSave = () => {
    setEditState(!editState);
  };

  const handleFirtsNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  if (editState) {
    return (
      <div className="row-section">
        <form className="column-section">
          <input
            type="text"
            onChange={handleFirtsNameChange}
            value={firstName}
          ></input>
          <input
            type="text"
            onChange={handleLastNameChange}
            value={lastName}
          ></input>
        </form>
        <span
          className={['save-button', 'material-icons-outlined'].join(' ')}
          onClick={handleEditSave}
        >
          save
        </span>
      </div>
    );
  }
  return (
    <section className="row-section">
      <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
      </div>
      <div>
        <span
          className={['edit-button', 'material-icons-outlined'].join(' ')}
          onClick={handleEditSave}
        >
          edit
        </span>
      </div>
    </section>
  );
};

export default Names;
