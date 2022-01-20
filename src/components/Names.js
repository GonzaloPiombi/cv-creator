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
        <div className="row-section">
          <form className="column-section">
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
          </form>
          <span
            className={['save-button', 'material-icons-outlined'].join(' ')}
            onClick={this.handleSave}
          >
            save
          </span>
        </div>
      );
    }
    return (
      <section className="row-section">
        <div>
          <h1>{this.state.firstName}</h1>
          <h1>{this.state.lastName}</h1>
        </div>
        <div>
          <span
            className={['edit-button', 'material-icons-outlined'].join(' ')}
            onClick={this.handleEdit}
          >
            edit
          </span>
        </div>
      </section>
    );
  }
}

export default Names;
