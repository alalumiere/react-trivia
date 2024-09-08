import React, { useState } from "react";

const Questions = ({ questions }) => {
  // track the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // track the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // track score
  const [score, setScore] = useState(0);
  // display score
  const [showResult, setShowResult] = useState(false);

  // destructure the current question
  const { question, options } = questions[currentQuestion];

  // go to next question
  const handleNext = () => {
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // got to previous question
  const handleBack = () => {
    if (currentQuestion > 0) {
      setSelectedAnswer(null); // clear selected answer whe moving to next question
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // sets the selected answer when the user clicks on an option
  const answerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      setScore(score + 1); // if the answer is correct, increment the score
    }
  };

  return (
    <div className="questions-container">
      {showResult ? (
        <div className="results">
          <h2>Trivia Challenge Complete!</h2>
          <p>
            Your Score is: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <>
          <h2>{question}</h2>
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => answerClick(option)}
                className={selectedAnswer === option ? "selected-answer" : ""}
              >
                {option}{" "}
              </li> //display the options
            ))}
          </ul>
          <div className="nav-buttons">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="back-btn"
            >
              Previous Question
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === question.length - 1}
              className="back-btn"
            >
              Next Question
            </button>
          </div>
        </>
      )}
      <div>Your Score: {score}</div>
    </div>
  );
};

export default Questions;
