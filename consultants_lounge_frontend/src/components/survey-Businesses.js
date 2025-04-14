import React, { useState } from 'react';
import '../App.css';
import '../styles/survey.css';

const SurveyBusinesses = () => {
    const [step, setStep] = useState(0);  // State to track the current step of the survey
    const [answers, setAnswers] = useState({});  // State to track answers for each question

    // List of survey questions and their options
    const questions = [
        { text: "1. What industry does your business serve?", type: "text" },
        { text: "2. How many employees do you have", type: "radio", options: ["a. 1-10", "b. 10-20", "c. 20-50", "d. 50+"] },
        { text: "3. Describe your biggest challenge in finding new talent for your business.", type: "text" },
        { text: "4. Describe your biggest challenge in growing your business.", type: "text" },
        { text: "5. Are you willing to work with a company that offers solutions to the challenges you have listed in this survey?", type: "radio", options: ["Yes", "No"] }
    ];

    // Handle change for text inputs
    const handleInputChange = (e) => {
        setAnswers({ ...answers, [step]: e.target.value });
    };

    // Handle change for checkbox inputs (multiple selections allowed)
    const handleCheckboxChange = (option) => {
        const currentAnswers = answers[step] || [];
        if (currentAnswers.includes(option)) {
            setAnswers({ ...answers, [step]: currentAnswers.filter((item) => item !== option) });
        } else {
            setAnswers({ ...answers, [step]: [...currentAnswers, option] });
        }
    };

    // Disable the "Next" button if no answer has been selected for the current question
    const isNextDisabled = () => {
        if (questions[step].type === "checkbox") {
            return !answers[step] || answers[step].length === 0;
        }
        return !answers[step];
    };

    // Submit the survey and move to the "thank you" screen
    const handleSubmit = () => {
        setStep(6);
    };

    // Redirect to the homepage
    const handleBackToHomepage = () => {
        window.location.href = 'https://blog.consultantslounge.com/';
    };

    return (
        <div className='survey-page'>
            <img src="/resources/CompanyLogo-White.png" className="logo" alt="company logo" />

            {/* Display progress bar for questions */}
            {step > 0 && step < 6 && (
                <div className="progress-bar">
                    {questions.map((questions, index) => (
                        <div key={index} className={`progress-box ${step > index ? 'active' : ''}`}></div>
                    ))}
                </div>
            )}

            <div className='survey-container'>
                {step === 0 ? (  // First step, display welcome message and "BEGIN SURVEY" button
                    <>
                        <h1>SURVEY - BUSNISS OWNER</h1>
                        <p>Please answer the following 5 questions on some of the challenges you face in growing your business.</p>
                        <button className='start-btn' onClick={() => setStep(1)}>BEGIN SURVEY</button>
                    </>
                ) : step < 6 ? (  // For steps 1 to 5, display questions and options
                    <>
                        <p>{questions[step - 1].text}</p>

                        {/* Render text input field */}
                        {questions[step - 1].type === "text" && (
                            <input
                                type="text"
                                value={answers[step] || ''}
                                onChange={handleInputChange}
                                className="survey-input"
                            />
                        )}

                        {/* Render radio button options */}
                        {questions[step - 1].type === "radio" && (
                            <div className="options">
                                {questions[step - 1].options.map((option, index) => (
                                    <label
                                        key={index}
                                        className={`radio-label ${answers[step] === option ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${step}`}
                                            value={option}
                                            checked={answers[step] === option}
                                            onChange={handleInputChange}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        )}

                        {/* Render checkbox options */}
                        {questions[step - 1].type === "checkbox" && (
                            <div className="options">
                                {questions[step - 1].options.map((option, index) => {
                                    const isSelected = answers[step]?.includes(option);
                                    return (
                                        <label
                                            key={index}
                                            className={isSelected ? 'selected' : ''}
                                        >
                                            <input
                                                type="checkbox"
                                                value={option}
                                                checked={isSelected}
                                                onChange={() => handleCheckboxChange(option)}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        )}

                        {/* Navigation buttons for BACK and NEXT */}
                        <div className='survey-nav'>
                            {step > 0 && (
                                <button className="back-btn" onClick={() => setStep(step - 1)}>BACK</button>
                            )}
                            {step < questions.length ? (
                                <button className="nxt-btn" onClick={() => setStep(step + 1)} disabled={isNextDisabled()}>
                                    NEXT QUESTION
                                </button>
                            ) : (
                                <button className="nxt-btn" onClick={handleSubmit}>SUBMIT</button>
                            )}
                        </div>
                    </>
                ) : (  // Final step, display thank you message and "Return to Homepage" button
                    <>
                        <h1>SURVEY - CONSULTANT</h1>
                        <p>Thank you for completing our survey. Your feedback is greatly appreciated.</p>
                        <button className="nxt-btn" onClick={handleBackToHomepage}>VISIT THE BLOG</button>
                    </>
                )}
            </div>

            {/* Decorative images */}
            <img src="/resources/Detail1.png" className="detail1-survey" />
            <img src="/resources/Detail1.png" className="detail2-survey" />
        </div>
    );
};

export default SurveyBusinesses;
