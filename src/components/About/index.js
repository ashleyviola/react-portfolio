import React from "react";
import './style.css';
import avatar from '../../assets/image/ashley-avatar-2.png';

function About() {
    
    return(
        <div className="about-container" id="about">
            <div className="img-container">
                <img src={avatar}></img>
            </div>
            <div className="about-content-container">
                <div className="about-intro">
                    <h2>Allow myself to indtroduce... myself</h2>
                    <h3>Hi, I'm Ashley.</h3>
                </div>
                <div className="about-content">
                    <div className="about-detail">
                        <h4>Traditional Marketing</h4>
                        <p>TV spots. Radio sponsorships. Monthly mailers. 
                            Brochures. Displays. Posteres. If it's in Traditional
                            media, I've worked on it.
                        </p>
                    </div>
                    <div className="about-detail">
                        <h4>Digital Media</h4>
                        <p>I've helped launch over 20 websites. Managed
                            Amazon, Google and Social Media paid campaigns. 
                            Created intriguing content for brands. 
                        </p>
                    </div>
                    <div className="about-detail">
                        <h4>Movie Fanatic + Dog Mom</h4>
                        <p>During my free time you can catch me at the movies 
                            enjoying popcorn or spending time with my dogs, Karl 
                            + Ruby
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About;