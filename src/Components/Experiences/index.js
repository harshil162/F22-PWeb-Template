import React from 'react'
import Image1 from './../../images/DTE.png';
import Image2 from './../../images/l3.png';
import Image3 from './../../images/6162945.png';

import "./Experiences.css";

const Experiences = () => {
    return (
        <body id="exp">
            <h3 class="exp__title">Experiences</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <img src={Image1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Dream Team Engineering - Software Engineer</h1>
                            <p class="exp__body">I am working on a project within the Train of Four Team to detect hand twitches given image and real time video inputs. </p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">L3Harris Technologies - Software Engineering Intern</h1>
                            <p class="exp__body">I worked on an embedded tactical radio utilized for communication in operational areas and emergency situations.</p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image3}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">UF Machine Intelligence Laboratory - Software Team Member</h1>
                            <p class="exp__body">I underwent technical training as part of the Software Team and compiled documentation on a robot visualization interface. </p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Experiences;
