import React from 'react'
import Image1 from './../../images/SASEball.png';
import Image2 from './../../images/robot.jfif';
import Image3 from './../../images/MUN-1.jpg';

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
                            <h1 class="exp__name">Society of Asian Scientists & Engineers - Intern</h1>
                            <p class="exp__body">I work with club officers and other members of the SASE Interns Program to plan club events.</p>
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
                            <h1 class="exp__name">Chiles Model UN Club - President</h1>
                            <p class="exp__body">I held frequent meetings to educate members about the fundamentals of international diplomacy, and won awards at conferences I attended.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Experiences;