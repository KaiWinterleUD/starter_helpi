
import React, { } from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import homeIcon from './house.svg';
import './Pages.css';
import './questions.css';

interface BasicProp {
    handlePage: (page: string) => void;
}

interface QuestionOption {
    question: string;
    options: string[];
}

const Basic: React.FC<BasicProp> = ({ handlePage }) => {
    const handleOptionClick = (option: string) => {
        console.log(option);
    };

    const questions: QuestionOption[] = [
        {
            question: "How much do you prefer working independently over working collaboratively?",
            options: ["Not at All", "Neutral", "Very much"]
        },
        {
            question: "How important is expressing creativity and passion in your work?",
            options: ["Not at All Important", "Neutral", "Very Important"]
        },
        {
            question: "How easily do you adapt to changes in your work environment and job responsibilities?",
            options: ["Difficult", "Neutral", "Easy"]
        },
        {
            question: "How important is it for you to make a tangible impact through your work?",
            options: ["Not at All important", "Neutral", "Very Important"]
        },
        {
            question: "How important is having a set routine in the workplace to you?",
            options: ["Not at All important", "Neutral", "Very Important"]
        },
        {
            question: "Do you see yourself as a natural leader and enjoy taking charge of projects?",
            options: ["Not at All", "Neutral", "Very Much"]
        },
        {
            question: "Do you prefer an office environment or an environment that is frequently changing?",
            options: ["Office", "Neutral", "Changing Environment"] // Corrected options split
        }
    ];

    return (
        <div>
        <header className="header">
        <div className="title-container">
        <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick ={() => handlePage('Home')}/>
        <h2 className="title" onClick ={() => handlePage('Home')}>Brain Spark</h2>
            <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /></Button>
        </div>
        </header>
        <div className="column">
            {questions.map((q, x) => (
                <div key={x}>
                    <h3>{q.question}</h3>
                    <div className="questionContainer">
                        {q.options.map((option, i) => (
                            <Button className="button-questions" key={i} onClick={() => handleOptionClick(option)}>{option}</Button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Basic;