import "./App.css";
import { Navbar } from "./components/nav/Navbar";
import { Footer } from "./components/footer/Footer";
import { Route, Routes } from "react-router";
import { Register } from "./components/register/Register";
import { PlayQuiz } from "./components/quiz/PlayQuiz";
import { Home } from "./components/home/Home";
import { Quizzes } from "./components/quizzes/Quizzes";
import { useAuthContext } from "./context/AuthContext";
import { Login } from "./components/login/Login";

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
        <Route path="/playQuiz" element={auth ? <PlayQuiz /> : <Login />} />
      </Routes>
      {/* <PlayQuiz /> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
