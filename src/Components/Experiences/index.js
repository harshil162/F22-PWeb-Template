import React from 'react'
import Image1 from './../../images/SASEball.png';
import Image2 from './../../images/TallyCassie.jpg';
import Image3 from './../../images/6162945.png';

import "./Experiences.css";

const Experiences = () => {
    return (
        <body>
            <h3 class="exp__title">Experiences</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <img src={Image1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Florida Rocket Laboratory - Electronics Engineer</h1>
                            <p class="exp__body">I am working on an assigned New Member Project within the Electronics subteam while learning basic
                                                rocket engine design.</p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">FAMU-FSU College of Engineering Optimal Robotics Laboratory - Research Assistant</h1>
                            <p class="exp__body">I underwent training in robotics research and made contributions to research projects.</p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image3}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">UF Machine Intelligence Laboratory - Software Team Member</h1>
                            <p class="exp__body">I have undergone technical training as part of the Software Team and intend to work on a project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Experiences;