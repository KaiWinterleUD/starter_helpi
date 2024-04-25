
import React, { useState } from 'react';
import {Button, ProgressBar} from 'react-bootstrap';
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
    // Create object where keys are question indexes and values are the selected options
    const [activeOptions, setActiveOptions] = useState<{ [key: number]: string }>({});

    const handleOptionClick = (questionIndex: number, option: string) => {
        // Update the active option for specific question
        setActiveOptions(prevState => ({
            ...prevState,
            [questionIndex]: option
        }));
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
            options: ["Not at All Important", "Neutral", "Very Important"]
        },
        {
            question: "How important is having a set routine in the workplace to you?",
            options: ["Not at All Important", "Neutral", "Very Important"]
        },
        {
            question: "Do you see yourself as a natural leader and enjoy taking charge of projects?",
            options: ["Not at All", "Neutral", "Very Much"]
        },
        {
            question: "Do you prefer an office environment or an environment that is frequently changing?",
            options: ["Office", "Neutral", "Changing Environment"] 
        }
    ];

    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(activeOptions).length;
    const progressPercentage: number = (answeredQuestions / totalQuestions) * 100;

    return (
        <div>
            <header className="header">
                <div className="title-container">
                    <img src={BrainIcon} alt="Brain Icon" className="brainIcon" onClick={() => handlePage('Home')} />
                    <h2 className="title" onClick={() => handlePage('Home')}>Brain Spark</h2>
                    <Button className="home-button" onClick={() => handlePage('Home')}><img src={homeIcon} alt="Home Page" className="homeIcon" /></Button>
                </div>
            </header>
            <div className="progressBarContainer">
                <ProgressBar className="progressBar" now={progressPercentage} label={`${Math.round(progressPercentage)}%`} />
            </div>
            <div className="column">
                {questions.map((question, index) => (
                    <div key={index}>
                        <h3>{question.question}</h3>
                        <div className="questionContainer">
                            {question.options.map((option, optionIndex) => (
                                <Button
                                    className={`button-questions ${option === activeOptions[index] ? 'button-pressed' : ''}`}
                                    key={optionIndex}
                                    onClick={() => handleOptionClick(index, option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Basic;