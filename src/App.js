import React, { useState} from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import Main from './components/Main';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skill from './components/Skills';


function App() {
  
  const [sections] = useState([
    {
      title: "about",
      icon: <FontAwesomeIcon icon="address-card"/>,
      link: "#about"
    },
    {
      title: "work",
      icon: <FontAwesomeIcon icon="briefcase"/>,
      link: "#recent-work"
    },
    {
      title: "skills",
      icon: <FontAwesomeIcon icon="gear"/>,
      link: "#skills"
    },
    {
      title: "experience",
      icon: <FontAwesomeIcon icon="business-time"/>,
      link: "#experience"
    },
    {
      title: "contact",
      icon: <FontAwesomeIcon icon="phone"/>,
      link: "#contact"
    }
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  return (
    <div>
      <Nav 
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={setAboutSelected}
      />
      <main>
        <Home />
        <About />
        <RecentWork />
        <Skill /> 
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
