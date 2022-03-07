import React from "react";
import Accordion from "../Accordion";
import { accordionData } from "../../utils/content";

import './style.css';
function Skill() {

    return (
        <div className="skills-container" id="skills">
            <div className="skills-intro">
                <h2>I do have a particular set of skills; skills I've acquired over my career</h2>
                <h3>Skills</h3>
            </div>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Skill;