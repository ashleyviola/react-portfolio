import React, { useEffect, useState, useRef } from "react";
import './style.css';
import { capitalizeFirstLetter } from "../../utils/helpers";
import avatar from '../../assets/image/ashley-avatar-1.png';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    const [isSidebar, initSidebar] = useState(false)

    const openSidebar = (isSidebar) => {
        return initSidebar(!isSidebar)
    }

    const node = useRef()

    const trackSidebar = (e) => {
        if(node.current.contains(e.target)){
            return
        }
        initSidebar(false)
    }
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentSection.title);
        
        document.addEventListener('mousedown', trackSidebar)
        return() => {
            document.removeEventListener('mousedown', trackSidebar)
        };

    }, [currentSection]);

        
    return (
        <header className="header">
            <nav className="navbar">
                <span
                    ref={node}
                    className="hamburger"
                    onClick={() => {
                    openSidebar(isSidebar)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        {isSidebar ? (
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        )}
                    </svg>
                </span>
            </nav>
        <div
            ref={node}
            className="sidebar-block"
            style={{ left: isSidebar ? '0' : '-260px' }}
        >
            <div className="nav-header">
                <img src={avatar} className="nav-avatar"/>
                <h1 className="nav-title">ashley viola</h1>
            </div>
            
            {sections.map((section) => {
                return (
                    <a href={section.link}> <span className="nav-icon">{section.icon}</span> {section.title}</a>
                )
            })}
        </div>
    </header>



        // <div className="nav-container">
        //     <h1 className="nav-heading">Ashley <br></br>Viola</h1>
        //     <ul className="nav-list">
        //         {sections.map((section) => {
        //             return (
        //                 <li className="nav-list-item"> 
        //                     <a href={section.link}> <span>{section.icon}</span> {section.title}</a>
        //                 </li>
        //             )   
        //         })}
        //     </ul>
        // </div>
    )
}

export default Nav;