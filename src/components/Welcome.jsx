import { useContext } from 'react'
import React from 'react'
import "./Welcome.css"
import Quiz from "../img/quiz.svg"

import { QuizContext } from '../context/quiz'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <div>Welcome</div>
        <p>clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do quiz" />
    </div>
  )
}

export default Welcome