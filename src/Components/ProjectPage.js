import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project1 from "../images/GBMFinder.png"
import Project2 from "../images/blackjack.jpg"
import Project3 from "../images/Dyslexifi.png"
import Project4 from "../images/MusicAccessor.png"

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
                    <img src={Project4}/>
                    <h3>Music Accessor</h3>
                    <p> This static web application allows users to search for and listen to specific songs that are accessible in the 
                        application. A customizable JSON database consisting of currently 20 songs is utilized by the app. Anyone can 
                        modify the list to make a personal playlist. 
                    </p>
                    <p>
                        The list stores names, artists, genres, and YouTube links of the song choices. I used React.js and HTML to enable users
                        input for song names and provide respective links for users to view. CSS was used to enhance the quality of user experience
                        and style certain features of the app. I deployed the application using AWS Amplify. 
                    </p>
                </div>
                <div class="project">
                    <img src={Project1}/>
                    <h3>Gator Space</h3>
<<<<<<< HEAD
                    <p>I worked with 3 other students on a forum that displays information about various student organizations of UF and 
                    their meetings. Users can identify where on campus events are happening for organizations of interest to them.
=======
                    <p>I worked with 3 other students during the UF Swamphacks IX on a forum that displays information about various student organizations of UF and 
                    their meetings. Users can identify where on campus events are happening for organizations of interest to them. Any club can
                    advertise their events publicly and explore convenient meeting areas. 
>>>>>>> 1acc85c9846d8abe24a4859d2e3ab0170d592d2f
                    </p>
                    <p>
                    My contributions to the project were adding and modifying JavaScript and CSS code with the intent of implementing features to
                    display club events, as well as, style those features on a basic level. For the purposes of hackathon submission, I helped write
                    the project portfolio. 
                    </p>
                </div>

                <div class="project">
                    <img src={Project2}/>
                    <h3>Blackjack</h3>
                    <p>I implemented a simplified version of the Blackjack game as my first project in Python. I utilized console input/output,
                    selection, iteration, and data types. 
                    </p>
                </div>

                <div class="project">
                    <img src={Project3}/>
                    <h3>DyslexiFi</h3>
                    <p> I assembled a group of 5 students during the UF AI Days Hackathon through the development of the project. 
                    This application uses real time imaging software that reads students handwriting and returns percent similarity 
                    to dyslexic handwriting. It allows educators to identify students with dyslexia. Python and TensorFlow were used
                    in the project development. 
                    </p>
                    <p>
                    While my technical contributions were minor, I provided any assistance to other members I could, found existing data
                    sets useful in training a ML model, and helped write the project portfolio for hackathon submission purposes. 
                    </p>
                </div>

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;
