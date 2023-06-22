import Nav from './component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './component/Hero';
import SocialMedia from './component/SocialMedia';
import About from './component/About';
import './App.css';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SocialMedia />
      <About />
      <Project />
    </div>
  );
}

export default App;
