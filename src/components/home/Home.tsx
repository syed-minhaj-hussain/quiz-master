import { Link } from "react-router-dom";
import homeModule from "./home.module.css";
import quizImg from "./quiz.svg";

export const Home = () => {
  return (
    <>
      <div className={homeModule.container}>
        <header className={homeModule.header}>
          <h1 className={homeModule.heading}>Welcome To The Quiz-Panel</h1>
          <img src={quizImg} alt="" className={homeModule.image} />
        </header>
      </div>
      <div className={homeModule.btnCenter}>
        <button className={homeModule.btn}>
          <Link to="/quizzes" style={{ color: "#fff", textDecoration: "none" }}>
            Play Quiz
          </Link>
        </button>
      </div>
    </>
  );
};
