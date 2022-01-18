import { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { studies } = this.props;
    return studies.map((item) => {
      return (
        <div key={item.id} className="education">
          <h2>{item.title}</h2>
          <p>{item.date}</p>
          <h3>{item.school}</h3>
          <button className="edit-button" onClick={this.props.handleEdit}>
            Edit
          </button>
        </div>
      );
    });
  }
}

export default EducationList;
