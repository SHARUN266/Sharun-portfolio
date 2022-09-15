
import './App.css';
import About from './Components/About';
import GitHubCalender1 from './Components/GitHubCalender';
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
      <GitHubCalender1/>
    </div>
  );
}

export default App;
