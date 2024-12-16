import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import Characters from "./Components/Views/Characters";
import About from "./Components/Views/About";
import Serie from "./Components/Views/Serie";
import Reviews from "./Components/Views/Reviews";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/Arcane" element={<Home />} />
        <Route path="/Arcane-characters" element={<Characters />} />
        <Route path="/Arcane-about" element={<About />} />
        <Route path="/Arcane-serie" element={<Serie />} />
        <Route path="/Arcane-reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;