import { Component } from 'react';

class PersonalInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: false,
      email: 'E-mail',
      phone: 'Phone number',
      linkedIn: 'LinkedIn',
    };
  }

  handleEdit = () => {
    this.setState((prevState) => ({
      editState: !prevState.editState,
    }));
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editState: !prevState.editState,
    }));
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleLinkedInChange = (e) => {
    this.setState({
      linkedIn: e.target.value,
    });
  };

  render() {
    if (this.state.editState) {
      return (
        <form className="column-section" onSubmit={this.handleSave}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
          ></input>
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          ></input>
          <input
            type="text"
            value={this.state.linkedIn}
            onChange={this.handleLinkedInChange}
          ></input>
          <button className="save-button">Save</button>
        </form>
      );
    }
    return (
      <section className="column-section">
        <h4>{this.state.email}</h4>
        <h4>{this.state.phone}</h4>
        <h4>{this.state.linkedIn}</h4>
        <button className="edit-button" onClick={this.handleEdit}>
          Edit
        </button>
      </section>
    );
  }
}

export default PersonalInformation;
