
import './App.css';
import About from './Components/About';
import HomeHero from './Components/HomeHer0';
import Simple from './Components/nav';
import Projects from './Components/Projects';
import TechStack from './Components/TechStack';

function App() {
  return (
    <div className="App">
      <Simple/>
      <HomeHero/>
      <About/>
      <TechStack/>
      <Projects/>
    </div>
  );
}

export default App;
