import { Component } from 'react';

class ExperienceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    };
  }

  handleEdit = (id) => {
    this.setState({
      id: id,
    });
  };

  render() {
    const { experiences } = this.props;
    return experiences.map((item) => {
      if (item.id === this.state.id) {
        return (
          <form
            key={item.id}
            className="experience"
            onSubmit={this.props.onEdit.bind(this, item.id)}
          >
            <input
              type="text"
              defaultValue={item.position}
              placeholder={item.position}
              onChange={this.props.onPositionChange}
            ></input>
            <input
              type="text"
              defaultValue={item.date}
              placeholder={item.date}
              onChange={this.props.onDateChange}
            ></input>
            <input
              type="text"
              defaultValue={item.company}
              placeholder={item.company}
              onChange={this.props.onCompanyChange}
            ></input>
            <input
              type="text"
              defaultValue={item.description}
              placeholder={item.description}
              onChange={this.props.onDescriptionChange}
            ></input>
            <button>Save</button>
          </form>
        );
      }
      return (
        <div key={item.id} className="experience">
          <div>
            <h2>{item.position}</h2>
            <p>{item.date}</p>
            <h3>{item.company}</h3>
            <p>{item.description}</p>
          </div>
          <div>
            <button
              className="edit-button"
              onClick={this.handleEdit.bind(this, item.id)}
            >
              Edit
            </button>
            <button onClick={this.props.onDelete.bind(this, item.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
  }
}

export default ExperienceList;
