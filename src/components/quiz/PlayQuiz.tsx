import { useState } from "react";
import { useQuiz } from "../../context/QuizContext";
// import { quiz } from "../../quizDB";
import playQuizModule from "./playQuiz.module.css";
import { Option } from "../../utilities/quiz.types";
export const PlayQuiz = () => {
  const { quizState } = useQuiz();
  const { state, dispatch } = useQuiz();
  const [btnColor, setBtnColor] = useState("#2f4e6f");
  const [gameOver, setGameOver] = useState(false);
  return (
    <>
      <div className={playQuizModule.container}>
        {quizState && (
          <div className={playQuizModule.card}>
            <div className={playQuizModule.head}>
              <h1 className={playQuizModule.heading}>Quiz Panel</h1>
              <div className={playQuizModule.score}>
                <p>Score : {state.score}</p>
              </div>
              <p className={playQuizModule.currentQuestion}>
                {state.currentQuestion + 1} / {quizState.questions.length}
              </p>
              <h1 className={playQuizModule.question}>
                {quizState.questions[state.currentQuestion].question}
              </h1>
            </div>
            <div className={playQuizModule.body}>
              {quizState.questions[state.currentQuestion].options?.map(
                (option: Option) => {
                  return (
                    <button
                      key={option.text}
                      className={playQuizModule.btn}
                      style={{
                        backgroundColor: `${
                          state.disabled
                            ? option.isRight
                              ? "#009E60"
                              : `${btnColor}`
                            : "#2f4e6f"
                        }`,
                        color: "#fff",
                      }}
                      onClick={() => {
                        if (option.isRight) {
                          dispatch({
                            type: "RIGHT-ANSWER",
                            payload: { score: 1, disabled: true },
                          });
                          setBtnColor("#2f4e6f");
                        } else {
                          dispatch({
                            type: "WRONG-ANSWER",
                            payload: { score: 1, disabled: true },
                          });
                          setBtnColor("#FB3131");
                        }
                        if (
                          quizState.questions.length ===
                          state.currentQuestion + 1
                        ) {
                          setGameOver((prev) => !prev);
                        }
                      }}
                      disabled={state?.disabled}
                    >
                      {option.text}
                    </button>
                  );
                }
              )}

              <button
                className={`${playQuizModule.btn} ${playQuizModule.left}`}
                onClick={() => {
                  dispatch({
                    type: "RESET",
                  });
                  if (
                    quizState.questions.length ===
                    state.currentQuestion + 1
                  ) {
                    setGameOver((prev) => !prev);
                  }
                }}
              >
                Reset
              </button>
              {gameOver && (
                <h1
                  className={`${playQuizModule.question} ${playQuizModule.center}`}
                >
                  Game Over
                </h1>
              )}
              <button
                className={`${playQuizModule.btn} ${playQuizModule.right}`}
                onClick={() => {
                  dispatch({
                    type: "NEXT-QUESTION",
                  });
                  if (
                    quizState.questions.length ===
                    state.currentQuestion + 1
                  ) {
                    setGameOver((prev) => !prev);
                  }
                }}
                style={{
                  display: `${
                    quizState.questions.length === state.currentQuestion + 1
                      ? "none"
                      : "block"
                  }`,
                }}
                // disabled={state.disableNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
