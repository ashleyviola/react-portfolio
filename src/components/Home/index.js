import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {

    return (
        <div className="home-container">
            <div className="home-hero">
                <h1 className="home-name">ashley viola</h1>
                <h2 className="home-headline">DEVELOPER</h2>
                <h3 className="home-subhead">Front-End. Back-End. Full-Stack Integration.</h3>
                <h4 className="home-acquainted">Let's get aquainted. <span></span></h4>
                <FontAwesomeIcon className="icon" icon="angles-down"/>
            </div>
        </div>
    )    
}

export default Home;