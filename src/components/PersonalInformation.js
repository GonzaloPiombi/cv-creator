import React, { useState } from 'react';

const PersonalInformation = () => {
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Phone Number');
  const [linkedIn, setLinkedIn] = useState('LinkedIn');
  const [editState, setEditState] = useState(false);

  const handleEditSave = () => {
    setEditState(!editState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLinkedInChange = (e) => {
    setLinkedIn(e.target.value);
  };

  if (editState) {
    return (
      <div className="row-section">
        <span
          className={['save-button', 'material-icons-outlined'].join(' ')}
          onClick={handleEditSave}
        >
          save
        </span>
        <form className="column-section">
          <input type="text" value={email} onChange={handleEmailChange}></input>
          <input type="text" value={phone} onChange={handlePhoneChange}></input>
          <input
            type="text"
            value={linkedIn}
            onChange={handleLinkedInChange}
          ></input>
        </form>
      </div>
    );
  }
  return (
    <section className="row-section">
      <div>
        <span
          className={['edit-button', 'material-icons-outlined'].join(' ')}
          onClick={handleEditSave}
        >
          edit
        </span>
      </div>
      <div>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{linkedIn}</h4>
      </div>
    </section>
  );
};

export default PersonalInformation;
