import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import quizzesModule from "./quizzes.module.css";
import rules from "./rules.svg";
import { quiz, quizTwo } from "../../quizDB";
import { useQuiz } from "../../context/QuizContext";

export const Quizzes = () => {
  const { auth } = useAuthContext();
  const { setQuizState } = useQuiz();
  const navigate = useNavigate();
  return (
    <div>
      <div className={quizzesModule.container}>
        <header className={quizzesModule.header}>
          <h1 className={quizzesModule.mobileHeading}>RULES : </h1>
          <img src={rules} alt="" className={quizzesModule.image} />
          <div>
            <h1 className={quizzesModule.heading}>RULES : </h1>
            <ul className={quizzesModule.rules}>
              <li>
                <p> Evert Set Contains 6 Questions. </p>
              </li>
              <li>
                <p>Each Question Carries 1 Point</p>
              </li>
              <li>
                <p>If You Answer Wrong. Then Your Score Drecreases By 1</p>
              </li>
              <li>
                <p>
                  You Can Also Skip The Question If You Wont Want To Answer.
                </p>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <hr />
      <br />
      <h1 className={quizzesModule.nextHeading}>
        Choose Any Quiz To Start Playing
      </h1>
      <main className={quizzesModule.mainContainer}>
        <div className={quizzesModule.card}>
          <h1 className={quizzesModule.cardHeading}>Quiz-1</h1>
          <Link
            to="/playQuiz"
            className={quizzesModule.link}
            onClick={() => {
              if (auth) {
                return setQuizState(quiz);
              }
              navigate("/login");
            }}
          >
            Play Now
          </Link>
        </div>
        <div className={quizzesModule.card}>
          <h1 className={quizzesModule.cardHeading}>Quiz-2</h1>
          <Link
            to="/playQuiz"
            className={quizzesModule.link}
            onClick={() => {
              if (auth) {
                return setQuizState(quizTwo);
              }
              navigate("/login");
            }}
          >
            Play Now
          </Link>
        </div>
      </main>
    </div>
  );
};
