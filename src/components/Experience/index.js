import React from "react";
import './style.css';
import PDF from '../../assets/Resume.pdf'
function Experience() {

    return (
       <div className="experience-container" id="experience">
            <div className="experience-intro">
                <h2>A million girls would kills for this job</h2>
                <h3>Experience</h3>
                <a href={PDF} className="experience-link">View Resume</a>
            </div>
       </div> 
    )   
}

export default Experience;