import "./App.css";
import { Navbar } from "./components/nav/Navbar";
import { Footer } from "./components/footer/Footer";
import { Route, Routes } from "react-router";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { PrivateRoute } from "./components/privateRoutes/PrivateRoutes";
import { PlayQuiz } from "./components/quiz/PlayQuiz";
import { Home } from "./components/home/Home";
import { Quizzes } from "./components/quizzes/Quizzes";
import { useAuthContext } from "./context/AuthContext";
import { setUncaughtExceptionCaptureCallback } from "process";

function App() {
  const { auth, setAuth } = useAuthContext();
  // const getToken: string | any = localStorage?.getItem("token") || null;
  // if (getToken !== null || getToken === undefined) {
  //   const finalToken = JSON.parse(getToken) || null;
  //   console.log({ finalToken });
  //   setAuth(finalToken);
  // }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playQuiz" element={auth ? <PlayQuiz /> : <Login />} />
        {/* <PrivateRoute auth={false} element={<Register />} path="/" /> */}
      </Routes>
      {/* <PlayQuiz /> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
