import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project1 from "../images/GBMFinder.png"
import Project2 from "../images/blackjack.jpg"
import Project3 from "../images/ObjectCatcher.png"

//Components
import Header from './Header';

import './ProjectPage.css';


const ProjectPage = () => {
    let navigate = useNavigate();
    return (
        <div >
            <Header/>
            <section class="projects">

                <div class="project">
                    <img src={Project1}/>
                    <h3>DyslexiFi</h3>
                    <p>I made contributions to this project during the UF AI Days Hackathon, and worked with 5 other students. This 
                        project uses real-time imaging software that reads students' handwriting and returns percent similarity to
                        dyslexic handwriting. Python was the main language used in this. 
                    </p>
                </div>

                <div class="project">
                    <img src={Project2}/>
                    <h3>Blackjack</h3>
                    <p>I implemented a simplified version of the Blackjack game in Python. I utilized console input/output, selection, 
                        iteration, and data types.
                    </p>
                </div>

                <div class="project">
                    <img src={Project3}/>
                    <h3>Object Catcher Game</h3>
                    <p> I created an "Object Catcher" game in the Scratch programming language. In this game, the user has to catch 
                        falling objects from the sky in order to earn a certain number of points. The user wins the game after 
                        catching that number of points. 
                    </p>
                </div>

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;
