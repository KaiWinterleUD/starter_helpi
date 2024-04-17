import React, {} from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import homeIcon from './house.svg';
import arrowIcon from './arrow.svg';
import './Pages.css';

interface HomeProp {
    handlePage: (page: string) => void;
}
const Home: React.FC<HomeProp> = ({ handlePage }) => {
    return (
        <div>
    <header className="header">
        <div className="title-container">
        <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick ={() => handlePage('Home')}/>
        <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
            <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /></Button>
        </div>
        </header>
        <div className="home-center">
            <h1 className="center-title">Start your future here</h1>
            <p className="center-left">Student-made career test<br></br>powered through the use of AI</p>
            <Button className="basic-button" onClick={() => handlePage('Basic')}>Basic Questions<img src={arrowIcon} alt="arrow" className="arrow-icon" /></Button>
                <Button className="detailed-button" onClick={() => handlePage('Detailed')}>Detailed Questions<img src={arrowIcon} alt="arrow" className="arrow-icon" /></Button>
        </div>
        </div>
    );
}

export default Home;