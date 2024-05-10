import "./App.css";
import CipherGame from "./pages/cipher_game";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cipher_game" element={<CipherGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
