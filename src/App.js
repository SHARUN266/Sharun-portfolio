
import './App.css';
import About from './Components/About';
import HomeHero from './Components/HomeHer0';
import Simple from './Components/nav';
import TechStack from './Components/TechStack';

function App() {
  return (
    <div className="App">
      <Simple/>
      <HomeHero/>
      <About/>
      <TechStack/>
    </div>
  );
}

export default App;
