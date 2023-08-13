import React from 'react';
import ProfilePic from './../../images/Harshil_Pahuja.jpg';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="tile__intro">
                <div class="intro">
                    <img class="self_image" src={ProfilePic}/>
                    <div class="intro__section">
                        <h1 class="intro__title">Hi, my name is Harshil Pahuja.</h1>
                        <p class="intro__subtitle">I am currently a sophomore at the University of Florida.</p>
                        <p class="intro__memo">I am majoring in Computer Science. I describe myself as perseverant and intrinsically
                        driven. My interests within Computer Science are artifical intelligence, human-machine interaction, and web
                        development. </p>
                        <p class="intro_memo">In my free time, I enjoy swimming, listening to music, and spending time with friends.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;
