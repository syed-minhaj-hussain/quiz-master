import "./App.css";
import { Navbar } from "./components/nav/Navbar";
import { Footer } from "./components/footer/Footer";
import { Route, Routes } from "react-router";
import { Login } from "./components/login/login";
import { Register } from "./components/register/Register";
import { PrivateRoute } from "./components/privateRoutes/PrivateRoutes";
import { PlayQuiz } from "./components/quiz/PlayQuiz";
import { Home } from "./components/home/Home";
import { Quizzes } from "./components/quizzes/Quizzes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <PrivateRoute auth={true} element={<Login />} path="/" />
        <PrivateRoute auth={false} element={<Register />} path="/" />
      </Routes>
      {/* <PlayQuiz /> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
