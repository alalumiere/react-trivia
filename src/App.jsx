// A React trivia app
// By: Amanda LaLumiere

import { useState } from "react";
import "./App.css";
import { triviaQuestions } from "./trivQuestions";
import Questions from "./Questions";

import React from "react";

function App() {
  return <Questions questions={triviaQuestions.questions} />;
}

export default App;
