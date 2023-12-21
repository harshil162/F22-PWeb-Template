import React from 'react';
import ProfilePic from './../../images/HarshilPahuja1.jpg';

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
                        driven. My interests within Computer Science are artificial intelligence, human-machine interaction, and web
                        development. </p>
                        <p class="intro_memo">Some programming languages I am skilled with are: MATLAB, Python, JavaScript, Java, and C++. </p>
                        <p class="intro_memo">Tools and technologies I am skilled with are: Onshape, HTML/CSS, Azure Machine Learning, React.js, and Ubuntu. </p>
                        <p class="intro_memo">In my free time, I enjoy swimming, listening to music, and spending time with friends.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;
