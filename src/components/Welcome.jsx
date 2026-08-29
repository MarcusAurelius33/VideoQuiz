import React from 'react'
import "./Welcome.css"
import Quiz from "../img/quiz.svg"

const Welcome = () => {
  return (
    <div id='welcome'>
        <div>Welcome</div>
        <p>clique no botão abaixo para começar</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início do quiz" />
    </div>
  )
}

export default Welcome