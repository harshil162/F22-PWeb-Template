/*import React from 'react';*/
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
                        <p class="intro__memo">I am currently majoring in Computer Science. I describe myself
                        as hardworking and intrinsically driven. My interests within Computer Science 
                        include artificial intelligence, human-computer interaction, and web development. </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;