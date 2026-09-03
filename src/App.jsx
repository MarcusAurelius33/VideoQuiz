import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import './App.css'

import Question from './components/Question'
import Welcome from './components/Welcome'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
      dispatch({ type: "REORDER_QUESTIONS" });
  }, [])

  return (
   <div className='App'>
    <h1>Quiz sobre Video Games</h1>
    {quizState.gameStage === "Start" && <Welcome/>}
    {quizState.gameStage === "Playing" && <Question/>} 
   </div>
  )
}

export default App
