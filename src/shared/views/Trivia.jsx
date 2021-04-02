import React, { useState, useEffect } from "react";
import { Card } from "../organisms/Card";
import { fetchQuestions } from "../services/triviaService";

const counterStyle = {
  backgroundColor: "#D9EAF8",
  margin: "50px",
  padding: "30px",
  borderRadius: "15px",
};
const buttonStyle = {
  margin: "10px",
  fontSize: "20px",
};
const buttonNavigation = {
  display: "flex",
  justifyContent: "center",
};

export const Trivia = () => {
  const [questions, updateQuestions] = useState();
  const [isLoading, setLoading] = useState(true);
  const [questionNo, updateQuestionNo] = useState(0);
  const [score, updateScore] = useState(0);

  useEffect(() => {
    const receiveQuestions = async () => {
      updateQuestions(await fetchQuestions());

      setLoading(false);
    };
    receiveQuestions();
  }, []);

  //CALLBACK
  const handleCallback = (isCorrect) => {
    if (isCorrect) {
      updateScore(score + 1);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoading) {
    console.log(questions);
    return (
      <React.Fragment>
        <p style={counterStyle}>COUNTER: {score}/10</p>
        <Card
          question={questions[questionNo].question}
          answers={questions[questionNo].incorrect_answers}
          correctAnswer={questions[questionNo].correct_answer}
          isCorrect={handleCallback}
        />
        <div style={buttonNavigation}>
          <button
            style={buttonStyle}
            onClick={() => updateQuestionNo(questionNo - 1)}
          >
            Previous
          </button>
          <button style={buttonStyle}>Answer</button>
          <button
            style={buttonStyle}
            onClick={() => updateQuestionNo(questionNo + 1)}
          >
            Next
          </button>
        </div>
      </React.Fragment>
    );
  }
};
