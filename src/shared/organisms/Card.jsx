import React from "react";

const divStyle = {
  backgroundColor: "#D9EAF8",
  margin: "50px",
  padding: "30px",
  borderRadius: "15px",
};

export const Card = ({ question, answers, correctAnswer, isCorrect }) => {
  const submitAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      isCorrect(true);
      console.log("correct");
    } else {
      isCorrect(false);
      console.log("incorrect");
    }
  };

  return (
    <React.Fragment>
      <div style={divStyle}>
        <h2> {question} </h2>

        <p> {correctAnswer} </p>
        {answers.map((answer, index) => (
          <p key={index} onClick={() => submitAnswer(answer)}>
            {answer}
          </p>
        ))}
      </div>
    </React.Fragment>
  );
};
