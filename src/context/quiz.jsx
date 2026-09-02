import { createContext } from "react";
import questions from "../data/questions"

import { useReducer } from "react";

const STAGES = [
    "Start",
    "Playing",
    "End"
]

const initialState = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STAGE":
            return state;
        
        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;

}