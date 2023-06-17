import Nav from './component/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './component/Hero';
import SocialMedia from './component/SocialMedia';
import About from './component/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SocialMedia />
      <About />
    </div>
  );
}

export default App;
