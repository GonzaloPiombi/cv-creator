import { Component } from 'react';
import GeneralInformation from './components/GeneralInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralInformation />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
