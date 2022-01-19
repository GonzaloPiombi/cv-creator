import { Component } from 'react';

class Names extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: false,
      firstName: 'First Name',
      lastName: 'Last Name',
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

  handleFirtsNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    if (this.state.editState) {
      return (
        <form className="column-section" onSubmit={this.handleSave}>
          <input
            type="text"
            onChange={this.handleFirtsNameChange}
            value={this.state.firstName}
          ></input>
          <input
            type="text"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          ></input>
          <button className="save-button">Save</button>
        </form>
      );
    }
    return (
      <section className="column-section">
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <button className="edit-button" onClick={this.handleEdit}>
          Edit
        </button>
      </section>
    );
  }
}

export default Names;
