import React, { useState } from "react";
import Confetti from "react-confetti";

const Questions = ({ questions }) => {
  // track the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // track the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // track score
  const [score, setScore] = useState(0);
  // display score
  const [showResult, setShowResult] = useState(false);
  // confetti effect
  const [showConfetti, setShowConfetti] = useState(false);

  // destructure the current question
  const { question, options, correctAnswer } = questions[currentQuestion];

  // go to next question
  const handleNext = () => {
    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1); // if the answer is correct, increment the score
    }

    if (currentQuestion < questions.length - 1) {
      // clear selected answer for the next question
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
      //   setShowConfetti(false);
    } else {
      setShowResult(true);
      setShowConfetti(true);
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
  };

  return (
    <div className="questions-container">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#FF0000", "#FFFFFF", "#0000FF"]}
        />
      )}
      {showResult ? (
        <div className="results">
          <h2>Trivia Challenge Complete!</h2>
          <p className="tally">
            Your Final Score is: {score} / {questions.length}
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
                {option}
                {selectedAnswer === option &&
                  selectedAnswer === correctAnswer && (
                    <span className="correct-badge">Correct!</span>
                  )}
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
              disabled={selectedAnswer === null}
              className="next-btn"
            >
              {currentQuestion === questions.length - 1
                ? "Finish"
                : "Next Question"}
            </button>
          </div>
        </>
      )}
      {/* Only show the score during the quiz and hide on the result page */}
      {!showResult && <div className="score">Your Score: {score}</div>}
    </div>
  );
};

export default Questions;
