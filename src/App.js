import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Acquis from './pages/Acquis';
import Contact from './pages/Contact';
import Credit from './pages/Credit';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Acquis />
      <Contact />
      <Credit />
    </div>
  );
}

export default App;
