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

function App() {
  const { auth } = useAuthContext();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute auth={auth} element={<Login />} path="/playQuiz" />
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
