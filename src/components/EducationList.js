import { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editId: null,
    };
  }

  handleEdit = (id) => {
    this.setState({
      editId: id,
    });
  };

  render() {
    const { studies } = this.props;
    return studies.map((item) => {
      if (item.id === this.state.editId) {
        return (
          <form
            key={item.id}
            className="column-section"
            onSubmit={this.props.onEdit.bind(this, item.id)}
          >
            <input
              type="text"
              defaultValue={item.title}
              placeholder={item.title}
              onChange={(e) => this.props.onTitleChange(e, item)}
            ></input>
            <input
              type="text"
              defaultValue={item.date}
              placeholder={item.date}
              onChange={(e) => this.props.onDateChange(e, item)}
            ></input>
            <input
              type="text"
              defaultValue={item.school}
              placeholder={item.school}
              onChange={(e) => this.props.onSchoolChange(e, item)}
            ></input>
            <button className="save-button">Save</button>
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

export default EducationList;
