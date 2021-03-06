import GeneralInformation from './components/GeneralInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <GeneralInformation />
      <Experience />
      <Education />
    </div>
  );
};

export default App;
