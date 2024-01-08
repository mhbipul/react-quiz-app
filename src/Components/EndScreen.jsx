import React from "react";
import { useContext } from "react";
import { QuizContest } from "../Helper/Contexts";
import "../App.css";
import { Questions } from "../Helper/QuestionBank";

export default function EndScreen() {
  const { score, setScore,setGameState } = useContext(QuizContest);

    const restartQuiz = () =>{
        setScore(0);
        setGameState("menu");
    }


  return (
    <div className="EndScreen">
      <h1> Quiz Finished </h1>
      <h3>  {score}/{Questions.length} </h3>
      <button onClick={restartQuiz}> Restart Quiz  </button>
    </div>
  );
}
