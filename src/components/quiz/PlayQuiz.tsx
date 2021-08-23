import { stat } from "fs";
import { useReducer } from "react";
import { quiz } from "../../quizDB";
import playQuizModule from "./playQuiz.module.css";
export const PlayQuiz = () => {
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

  type stateType = {
    score: number;
    currentQuestion: number;
    disabled: boolean;
    disableNext: boolean;
  };

  const quizReducer = (state: stateType, action: ACTIONTYPE) => {
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
  const [state, dispatch] = useReducer(quizReducer, {
    score: 0,
    currentQuestion: 1,
    disabled: false,
    disableNext: false,
  });
  return (
    <>
      <div className={playQuizModule.container}>
        <div className={playQuizModule.card}>
          <div className={playQuizModule.head}>
            <h1 className={playQuizModule.heading}>Quiz Panel</h1>
            <div className={playQuizModule.score}>
              <p>Score : {state.score}</p>
            </div>
            <p className={playQuizModule.currentQuestion}>
              {state.currentQuestion + 1} / {quiz.questions.length}
            </p>
            <h1 className={playQuizModule.question}>
              {quiz.questions[state.currentQuestion].question}
            </h1>
          </div>
          <div className={playQuizModule.body}>
            <button
              className={playQuizModule.btn}
              style={{
                backgroundColor: `${
                  state.disabled
                    ? quiz.questions[state.currentQuestion].options[0].isRight
                      ? "green"
                      : "red"
                    : "#2f4e6f"
                }`,
                color: "#fff",
              }}
              onClick={() => {
                if (quiz.questions[state.currentQuestion].options[0].isRight) {
                  dispatch({
                    type: "RIGHT-ANSWER",
                    payload: { score: 1, disabled: true },
                  });
                } else {
                  dispatch({
                    type: "WRONG-ANSWER",
                    payload: { score: 1, disabled: true },
                  });
                }
              }}
              disabled={state?.disabled}
            >
              {quiz.questions[state.currentQuestion].options[0].text}
            </button>
            <button
              className={playQuizModule.btn}
              style={{
                backgroundColor: `${
                  state.disabled
                    ? quiz.questions[state.currentQuestion].options[1].isRight
                      ? "green"
                      : "red"
                    : "#2f4e6f"
                }`,
                color: "#fff",
              }}
              onClick={() => {
                if (quiz.questions[state.currentQuestion].options[1].isRight) {
                  dispatch({
                    type: "RIGHT-ANSWER",
                    payload: { score: 1, disabled: true },
                  });
                } else {
                  dispatch({
                    type: "WRONG-ANSWER",
                    payload: { score: 1, disabled: true },
                  });
                }
              }}
              disabled={state?.disabled}
            >
              {quiz.questions[state.currentQuestion].options[1].text}
            </button>
            <button
              className={playQuizModule.btn}
              onClick={() =>
                dispatch({
                  type: "RESET",
                })
              }
            >
              Reset
            </button>
            {/*<button className={`${playQuizModule.btn} ${playQuizModule.left}`}>
              Skip
            </button> */}
            <button
              className={`${playQuizModule.btn} ${playQuizModule.right}`}
              onClick={() =>
                dispatch({
                  type: "NEXT-QUESTION",
                })
              }
              disabled={state.disableNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
