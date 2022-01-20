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
          <form key={item.id} className="column-section">
            <input
              type="text"
              defaultValue={item.position}
              placeholder={item.position}
              onChange={(e) => this.props.onPositionChange(e, item)}
            ></input>
            <input
              type="text"
              defaultValue={item.date}
              placeholder={item.date}
              onChange={(e) => this.props.onDateChange(e, item)}
            ></input>
            <input
              type="text"
              defaultValue={item.company}
              placeholder={item.company}
              onChange={(e) => this.props.onCompanyChange(e, item)}
            ></input>
            <input
              type="text"
              defaultValue={item.description}
              placeholder={item.description}
              onChange={(e) => this.props.onDescriptionChange(e, item)}
            ></input>
            <span
              className={['save-button', 'material-icons-outlined'].join(' ')}
              onClick={this.props.onEdit.bind(this, item.id)}
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
              onClick={this.handleEdit.bind(this, item.id)}
            >
              edit
            </span>
            <span
              className={['delete-button', 'material-icons-outlined'].join(' ')}
              onClick={this.props.onDelete.bind(this, item.id)}
            >
              delete
            </span>
          </div>
        </div>
      );
    });
  }
}

export default ExperienceList;
