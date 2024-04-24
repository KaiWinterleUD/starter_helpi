
import React, { } from 'react';
import {Button} from 'react-bootstrap';
import BrainIcon from './modifiedBrainIcon.svg';
import homeIcon from './house.svg';
import './Pages.css';
import './questions.css';

interface DetailedProp {
    handlePage: (page: string) => void;
}

interface QuestionOption {
    question: string;
    options: string[];
}

const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
    const handleOptionClick = (option: string) => {
        console.log(option);  // Implement other logic as necessary
    };

    const questions: QuestionOption[] = [
        {
            question: "Do you see yourself as a natural leader and enjoy taking charge of projects?",
            options: ["Not at All", "", "Neutral", "","Very much"]
        },
        {
            question: "How significant is the opportunity to be creative and have passion within your work?",
            options: ["Not at All", "", "Neutral","", "Very Significant"]
        },
        {
            question: "How easily do you adapt to changes in your work environment and job responsibilities?",
            options: ["Difficult", "", "Neutral","","Easy"]
        },
        {
            question: "How important is it for you to make a measurable and meaningful impact through your work?",
            options: ["Not at All", "", "Neutral", "", "Very Important"]
        },
        {
            question: "How important is collaborative learning in your professional development?",
            options: ["Not at All", "", "Neutral", "", "Very Important"]
        },
        {
            question: "How significant is a structured and consistent routine within your workplace to your overall job satisfaction and productivity?",
            options: ["Not at All", "", "Neutral", "", "Very Significant"]
        },
        {
            question: "Do you prefer an office environment or an environment that is frequently changing?",
            options: ["Office", "", "Neutral", "", "Changing Environment"]
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
            {questions.map((q, idx) => (
                <div key={idx}>
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

export default Detailed;