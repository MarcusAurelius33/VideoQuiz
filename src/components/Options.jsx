import "./Options.css"

import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const Options = ({options, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className={`options ${
            quizState.answerSelected && options === answer ? "correct" : ""}
            ${quizState.answerSelected && options != answer ? "wrong" : ""}`} 
            onClick={() => selectOption()}>
            <p>{options}</p>
        </div>
    )
}

export default Options