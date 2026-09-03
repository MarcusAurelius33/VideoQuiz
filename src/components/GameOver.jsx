import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './GameOver.css'

import Welldone from "../img/welldone.svg"

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Fim de jogo!</h2>
        <p>Pontuação: x</p>
        <p>Você acertou y de z perguntas.</p>
        <img src={Welldone} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver