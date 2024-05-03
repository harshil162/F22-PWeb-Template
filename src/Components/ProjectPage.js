import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Project2 from "../images/GBMFinder.png"
import Project1 from "../images/Plant.png"
//import Project5 from "../images/GoalQuest.png"
import Project4 from "../images/scheduler.png"
import Project3 from "../images/MusicAccessor.png"
import Project6 from "../images/RecipeApp.png"

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
                    <h3>PlantAmor</h3>
                    <p>I led a group of 3 students during the UF SHPE Code for Change hackathon to develop a resource for nature enthusiasts to learn about various 
                        plant life with the hopes of expanding STEM education.  
                    </p>
                    <p>
                        My contributions to this project: developing the frontend features (ex. clickable buttons and user navigation) for users to learn about the 10,000+ plants fetched 
                        from the Plant API, and basic styling of the website for user-friendliness.
                    </p>
                </div>

                <div class="project">
                    <img src={Project2}/>
                    <h3>Gator Space</h3>
                    <p>I worked with 3 other students during the UF Swamphacks IX on a forum that displays information about various student organizations of UF and
                    their meetings. Given it can be hard for studets to find engaging clubs, any club can advertise their events publicly and explore convenient meeting 
                    areas, and users can identify the locations for the campus events.
                    </p> 
                    <p>
                    My contributions to the project: adding and modifying JavaScript and CSS code with the intent of implementing features to
                    display club events, as well as, style those features on a basic level
                    </p>
                </div>

                <div class="project">
                    <img src={Project3}/>
                    <h3>Music Accessor</h3>
                    <p>This static web application allows users to search for and listen to specific songs that are accessible in the 
                    application. A customizable JSON database consisting of currently 20 songs is utilized by the app. Anyone can 
                    modify the database to make a personal playlist. 
                    </p>
                    <p>
                    The list stores names, artists, genres, and YouTube links of the songs. I used React.js and HTML to enable users
                    input for song names and provide respective links to use. I deployed the website using AWS Amplify. As the 
                    first personal project I made with React.js, I enjoyed learning web development.
                    </p>
                </div>

                <div class="project">
                    <img src={Project4}/>
                    <h3>SwampScheduler</h3>
                    <p>This open source project was initiated by a group of University of Florida students aiming to allow any UF student plan
                        classes for semesters.
                    </p>
                    <p>
                    My contributions to the project: I enabled user input for searching last names of any UF professor for users to choose classes taught by the professors. I 
                    contributed code to enable users to pin and save certain schedules they create. 
                    </p>
                </div>

                
                <div class="project">
                    <img src={Project6}/>
                    <h3>PixelPalate</h3>
                    <p>For too many cooks and culinary enthusiasts, it is difficult to keep track of various food recipes we already like or may want to try out 
                        stored in a physical cookbook. I worked with 3 other students to develop a virtual recipe book application that addresses this problem
                        through effective storing of recipes, enable various user options for learning the details of recipes, and an interactive game. 
                    </p>
                    <p>
                    My contributions to the project: I used React.js to handle frontend operations such as saving of recipes. I wrote code for 
                    users to view cards of food recipes and managed states among parent and child classes to pass data effectively between the classes. I also wrote
                    code to ensure the user can be pointed to links to detailed information about recipes from the Spoonacular API. 
                    </p>
                </div>

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;

