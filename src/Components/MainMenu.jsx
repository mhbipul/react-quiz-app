import React from "react";
import { useContext } from "react";
import { QuizContest } from "../Helper/Contexts";
import "../App.css";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContest);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start-Quiz{" "}
      </button>
    </div>
  );
}
