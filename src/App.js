import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
