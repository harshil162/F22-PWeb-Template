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
<<<<<<< HEAD
                        <h1 class="intro__title">Hi, my name is Harshil Pahuja.</h1>
                        <p class="intro__subtitle">I am currently a sophomore at the University of Florida.</p>
                        <p class="intro__memo">I am currently majoring in Computer Science. I describe myself
                        as hardworking and intrinsically driven. My interests within Computer Science 
=======
                        <h1 class="intro__title">Hi, I am Harshil Pahuja.</h1>
                        <p class="intro__subtitle">I am currently a sophomore at the University of Florida.</p>
                        <p class="intro__memo">I am majoring in Computer Science. I describe myself
                        as perseverant and intrinsically driven. My interests within Computer Science 
>>>>>>> 1acc85c9846d8abe24a4859d2e3ab0170d592d2f
                        include artificial intelligence, human-computer interaction, and web development. </p>
                        <p class="intro_memo">In my free time, I enjoy listening to music, exercising, and spending time with friends. </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;
