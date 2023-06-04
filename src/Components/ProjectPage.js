import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project1 from "../images/GBMFinder.png"
import Project2 from "../images/blackjack.jpg"
import Project3 from "../images/Dyslexifi.png"

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
                    <h3>Gator Space</h3>
                    <p>I worked with 3 other students during the UF Swamphacks IX on a forum that displays information about various student organizations of UF and 
                    their meetings. Users can identify where on campus events are happening for organizations of interest to them. Any club can
                    advertise their events publicly and explore convenient meeting areas. 
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
                    <h3>DyslexiFi</h3>
                    <p> I was in a group of 4 other students during the UF AI Days Hackathon through the development of the project. This application uses real time imaging
                    software that reads students handwriting and returns percent similarity to dyslexic handwriting. It allows educators to identify students with dyslexia.
                    Python and TensorFlow were used in the project development. 
                    </p>
                </div>

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;
