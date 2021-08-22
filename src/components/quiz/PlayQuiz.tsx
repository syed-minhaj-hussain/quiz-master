import playQuizModule from "./playQuiz.module.css";
export const PlayQuiz = () => {
  return (
    <>
      <div className={playQuizModule.container}>
        <div className={playQuizModule.card}>
          <div className={playQuizModule.head}>
            <h1 className={playQuizModule.heading}>Quiz Master</h1>
            <h1 className={playQuizModule.question}>
              Q: What country has the most islands in the world?{" "}
            </h1>
          </div>
          <div className={playQuizModule.body}>
            <button className={playQuizModule.btn}>
              Lorem ipsum dolor sit amet.
            </button>
            <button className={playQuizModule.btn}>Lorem ipsum</button>
            <button className={playQuizModule.btn}>
              Lorem ipsum dolor sit amet.
            </button>
            <button className={`${playQuizModule.btn} ${playQuizModule.left}`}>
              Skip
            </button>
            <button className={`${playQuizModule.btn} ${playQuizModule.right}`}>
              Next
            </button>
            <h1 className={playQuizModule.heading}>Score : 15</h1>
          </div>
        </div>
      </div>
    </>
  );
};
