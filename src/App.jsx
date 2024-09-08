// A React trivia app
// By: Amanda LaLumiere

import { useState } from "react";
import "./App.css";
import { triviaQuestions } from "./trivQuestions";
import Questions from "./Questions";

import React from "react";

function App() {
  return (
    <div className="header">
      <h1 className="title">Champions of the Pitch Trivia</h1>
      <p className="sub-title">
        Relive the greatest moments of USWNT Soccer history!
      </p>
      <Questions questions={triviaQuestions.questions} />
    </div>
  );
}
export default App;
