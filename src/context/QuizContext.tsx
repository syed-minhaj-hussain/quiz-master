import React, { createContext, useContext, useReducer } from "react";
import { quiz } from "../quizDB";

type providerValue = {
  state: stateType;
  dispatch: React.Dispatch<ACTIONTYPE>;
};
const QuizContext = createContext({} as providerValue);

// const QuizContext = createContext<any>({});
// const QuizContext = createContext<stateType | {}>({});

type stateType = {
  score: number;
  currentQuestion: number;
  disabled: boolean;
  disableNext: boolean;
};
type ACTIONTYPE =
  | { type: "RESET" }
  | {
      type: "RIGHT-ANSWER";
      payload: { score: number; disabled: boolean };
    }
  | {
      type: "WRONG-ANSWER";
      payload: { score: number; disabled: boolean };
    }
  | {
      type: "NEXT-QUESTION";
    };

const quizReducer = (state: stateType, action: ACTIONTYPE): stateType => {
  switch (action.type) {
    case "RESET":
      return { ...state, score: 0, currentQuestion: 0, disabled: false };
    case "RIGHT-ANSWER":
      return {
        ...state,
        score: state.score + action?.payload?.score,
        disabled: action?.payload?.disabled,
      };
    case "WRONG-ANSWER":
      return {
        ...state,
        score: state.score - action?.payload?.score,
        disabled: action?.payload?.disabled,
      };
    case "NEXT-QUESTION":
      if (state.currentQuestion === quiz.questions.length - 1) {
        return {
          ...state,
          disableNext: true,
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        disableNext: false,
        disabled: false,
      };
    default:
      return state;
  }
};

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, {
    score: 0,
    currentQuestion: 0,
    disabled: false,
    disableNext: false,
  });

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
