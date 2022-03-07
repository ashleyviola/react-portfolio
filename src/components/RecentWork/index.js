import React from "react";
import './style.css';
import onehundred from '../../assets/image/onehundred.jpg';
import snapbook from '../../assets/image/snapbooks.jpg';
import social from '../../assets/image/social-network-api.gif';
import tech from '../../assets/image/tech-blog.jpg';
import password from '../../assets/image/password.jpg';
import weather from '../../assets/image/weather.jpg';

function RecentWork() {

    return (
        <div className="recent-work-container" id="recent-work">
            <div className="recent-work-intro">
                <h2>Alright, Mr. Demille, I'm ready for my close-up</h2>
                <h3>Experience</h3>
            </div>
            <div class="card-container">
        {/* Project 1 */}
        <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        Full-Stack
                        <span class="date">2021</span>
                    </div>
                </div>
                <div>
                    <h2 class="article-title">The 101 Percent</h2>
                    <div class="description">Stock Research App</div>
                </div>
            </header>
            <img src={onehundred} alt="Stock Research Application"></img>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="link">
                        <a href="https://ashleyviola.github.io/the-101-percent/">View Project</a>       
                    </div>
                </div>
            </div>
            <div class="tags">
                <div>HTML</div>
                <div>JavaScript</div>
                <div>JQuery</div>
                <div>CSS</div>
                <div>Moment.JS</div>
                <div>AlphaVantage API</div>
            </div>
        </div>
        {/* Project 2 */}
        <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        Full-Stack
                        <span class="date">2021</span>
                    </div>
                </div>
                <div>
                    <h2 class="article-title">Snapbook</h2>
                    <div class="description">Freelancer Invoice App</div>
                </div>
            </header>
            <img src={snapbook} alt="Freelancer Invoice App"></img>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="link">
                        <a href="https://pacific-chamber-43942.herokuapp.com/">View Project</a>       
                    </div>
                </div>
            </div>
            <div class="tags">
                <div>Express.js</div>
                <div>Handlebars.js</div>
                <div>PDFKit</div>
                <div>Sequelize</div>
                <div>MySQL3</div>
                <div>bcrypt</div>
            </div>
        </div>
        {/* Project 3 */}   
        <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        Back-End
                        <span class="date">2021</span>
                    </div>
                </div>
                <div>
                    <h2 class="article-title">Social Network API</h2>
                    <div class="description">Conversation App</div>
                </div>
            </header>
            <img src={social} alt="Conversation App"></img>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="link">
                        <a href="https://github.com/ashleyviola/social-network-api">View Project</a>       
                    </div>
                </div>
            </div>
            <div class="tags">
                <div>JavaScript</div>
                <div>Express</div>
                <div>Mongoose</div>
                <div>Insomnia</div>
            </div>
        </div>
        {/* Project 4 */}
        <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        Full-Stack
                        <span class="date">2022</span>
                    </div>
                </div>
                <div>
                    <h2 class="article-title">Tech Blog</h2>
                    <div class="description">App for Tech Conversations</div>
                </div>
            </header>
            <img src={tech} alt="App for Tech Conversations"></img>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="link">
                        <a href="https://fast-meadow-36525.herokuapp.com/">View Project</a>       
                    </div>
                </div>
            </div>
            <div class="tags">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>Express</div>
                <div>MySQL</div>
                <div>Handlebars</div>
            </div>
        </div>
        {/* Project 5 */}
        <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        Front-End
                        <span class="date">2021</span>
                    </div>
                </div>
                <div>
                    <h2 class="article-title">Password Generator</h2>
                    <div class="description">Create a Custom + Secure Password</div>
                </div>
            </header>
            <img src={password} alt="Custom Password Generator"></img>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="link">
                        <a href="https://ashleyviola.github.io/password-generator/">View Project</a>       
                    </div>
                </div>
            </div>
            <div class="tags">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>GitHub</div>
                <div>Responsive Design</div>
            </div>
        </div>
        {/* Project 6 */}
        <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        Front-End
                        <span class="date">2021</span>
                    </div>
                </div>
                <div>
                    <h2 class="article-title">Weather Dashboard</h2>
                    <div class="description">App to Check the Weather</div>
                </div>
            </header>
            <img src={weather} alt="Weather Application"></img>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="link">
                        <a href="https://ashleyviola.github.io/weather-dashboard/">View Project</a>       
                    </div>
                </div>
            </div>
            <div class="tags">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>JQuery</div>
                <div>Moment.JS</div>
                <div>Bootstrap</div>
            </div>
        </div>
    </div>
        </div>
    )    
}

export default RecentWork;