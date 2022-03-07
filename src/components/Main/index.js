import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Experience from "../Experience";
import RecentWork from "../RecentWork";
import Skill from "../Skills";
import Home from "../Home";
function Main (props) {
    const { currentSection } = props;

    return(

        <div>
           <h1>{currentSection.title}</h1>
        </div>

    )
}

export default Main;