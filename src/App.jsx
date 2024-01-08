
import React,{ useState } from 'react'
import './App.css'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContest } from './Helper/Contexts';
import "../src/App.css";

function App() {
  const [gameState,setGameState] = useState("menu");
  const [score,setScore]= useState(0);
  

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <QuizContest.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </QuizContest.Provider>
      
    </div>
  )
}

export default App
