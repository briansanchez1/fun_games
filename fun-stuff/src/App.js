import "./App.css";
import Cipher_Game from "./pages/cipher_game";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cipher_game" element={<Cipher_Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
