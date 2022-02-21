import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Nav() {
    return (
        <header>
            <h1>Ashley Viola</h1>
            <ul>
                <li>
                    <a><FontAwesomeIcon icon="address-card"/> About</a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon="briefcase"/> Recent Work</a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon="gear"/> Skills</a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon="business-time"/> Experience</a>
                </li>
                <li>
                    <a><FontAwesomeIcon icon="phone"/> Contact</a>
                </li>
            </ul>
        </header>
    )
}

export default Nav;