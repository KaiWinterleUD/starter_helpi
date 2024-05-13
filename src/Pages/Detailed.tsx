import React, { useState, useEffect } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import './Pages.css';
import './questions.css';
import brainIcon from './modifiedBrainIcon.svg';

const config = {
    angle: 90,
    spread: 150,
    startVelocity: 35,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 9000,
    stagger: 3,
    width: "0.9vw",
    height: "0.9vw",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    recycle: false,
  };

interface DetailedProp {
    handlePage: (page: string) => void;
}

interface ShortAnswerQuestion {
    question: string;
    answer: string;
  }


const Detailed: React.FC<DetailedProp> = ({ handlePage }) => {
    const [questions, setQuestions] = useState<ShortAnswerQuestion[]>([
      { question: "Do you enjoy being a leader in the workplace?", answer: "" },
      { question: "How significant is the opportunity to be creative and have passion within your work?", answer: "" },
      { question: "How easily do you adapt to changes in your work environment and job responsibilities?", answer: "" },
      { question: "How important is it for you to make a measurable and meaningful impact through your work?", answer: "" },
      { question: "How important is collaborative learning in your professional development?", answer: "" },
      { question: "How significant is a structured and consistent routine within your workplace to your overall job satisfaction and productivity?", answer: "" },
      { question: "Do you prefer an office environment or an environment that is frequently changing?", answer: "" }
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [confetti, setConfetti] = useState(false);
    const [confettiShown, setConfettiShown] = useState(false);
    const [compiledAnswers, setCompiledAnswers] = useState<string[]>([]);

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
      };

      const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(questions.length - 1, prevIndex + 1));
      };
    
      const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].answer = event.target.value;
        setQuestions(updatedQuestions);
      };

      const handleQuestionSubmit = () => {
        if (currentQuestionIndex === questions.length - 1) {
          const allQuestionsAnswered = questions.every((q) => q.answer.trim() !== "");
          if (allQuestionsAnswered && !confettiShown) {
            setConfetti(true);
            setConfettiShown(true);
            setTimeout(() => {
              setConfetti(false);
            }, 2000);
            setCompiledAnswers(questions.map((q) => q.answer));
          }
        } else {
          handleNextQuestion();
        }
    };

    const handleFormSubmit = () => {
        // Logic for submitting compiledAnswers to the website
        console.log("Submitted answers:", compiledAnswers);
        // Reset the form or redirect to another page after submission
        // For now, let's just reset the compiled answers
        setCompiledAnswers([]);
      };
    
    useEffect(() => {
        // Do something on question change if needed
    }, [currentQuestionIndex]);

    const totalQuestions = questions.length;
    const answeredQuestions = questions.filter((q) => q.answer.trim() !== "").length;
    const progressPercentage: number = (answeredQuestions / totalQuestions) * 100;

    return (
        <div>
            {confetti && (
                <div className="confetti-container">
                </div>
            )}
            <header />
            <div className="progressBarContainer">
                <ProgressBar className="progressBar" now={progressPercentage} label={`${Math.round(progressPercentage)}%`} />
                <img src={brainIcon} alt="Brain Icon" className="brain-progress-icon" style={{ left: `${progressPercentage + 0.5}%` }} />
            </div>
            <div className="navigationButtons" style={{ marginBottom: "10px" }}>
                <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
                <Button onClick={handleNextQuestion} style={{ marginLeft: "10px", marginRight: "10px" }}>Next</Button>
                {answeredQuestions === totalQuestions && (
                    <Button onClick={handleFormSubmit} style={{ marginLeft: "10px" }}>Submit</Button>
                )}
            </div>
            <footer className="footer-space"></footer>
        </div>
    );
};

export default Detailed;