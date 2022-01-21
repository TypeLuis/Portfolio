import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import './style/App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
