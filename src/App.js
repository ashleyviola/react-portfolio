import React, { useState} from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  
  const [sections] = useState([
    {
      title: "About",
      icon: <FontAwesomeIcon icon="address-card"/>,
      link: "#section"
    },
    {
      title: "Recent Work",
      icon: <FontAwesomeIcon icon="briefcase"/>,
      link: "#section"
    },
    {
      title: "Skills",
      icon: <FontAwesomeIcon icon="gear"/>,
      link: "#section"
    },
    {
      title: "Experience",
      icon: <FontAwesomeIcon icon="business-time"/>,
      link: "#section"
    },
    {
      title: "Contact",
      icon: <FontAwesomeIcon icon="phone"/>,
      link: "#section"
    }
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div>
      <Nav 
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <main>
        <Home />
        <About />
        <RecentWork />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
