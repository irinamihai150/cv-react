import './App.css';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';

function App() {
  return (
    <div className="full">
      {/* <Logo/> */}
      <div className="left">
        <Contact />
        <Skills />
        <Languages />
        <Hobbies />
      </div>
      <div className='right'>
        <Header />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;
