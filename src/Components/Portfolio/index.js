import React from 'react';
import {useNavigate} from 'react-router-dom';


import Proj1 from '../../images/GBMFinder.png';
import Proj2 from '../../images/Plant.png';
import Proj3 from '../../images/scheduler.png';
import Proj4 from '../../images/MusicAccessor.png';
//import Proj5 from '../../images/GoalQuest.png';
import Proj6 from '../../images/RecipeApp.png';

import './portfolio.css';

const Portfolio = () => {
    let navigate = useNavigate();

    return (
        <body id="portfolio" class="port__tile">
            <h1 class="port__title">Projects</h1>
            <section class="port__grid">
                {/*Copy Paste Starts here */}
                <div class="proj">
                    <img src={Proj1}/>
                    <h3>Gator Space</h3>
                </div>
                {/*Copy Paste Ends here */}

                <div class="proj">
                    <img src={Proj2}/>
                    <h3>Plant Amor</h3>
                </div>
                
                <div class="proj">
                    <img src={Proj3}/>
                    <h3>PoliTracker</h3>
                </div>

                <div class="proj">
                    <img src={Proj4}/>
                    <h3>Music Accessor</h3>
                </div>
                <div class="proj">
                    <img src={Proj6}/>
                    <h3>PixelPalate</h3>
                </div>

            </section>

            <button onClick={() => {navigate("/projects")}} class="port__btn">See More</button>
        </body>
    )
}

export default Portfolio;
