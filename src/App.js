import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Views/Home";
import Characters from "./Components/Views/Characters";
import About from "./Components/Views/About";
import Serie from "./Components/Views/Serie";
import Reviews from "./Components/Views/Reviews";
import Detail from "./Components/Views/Detail";
import Temp2 from "./Components/Pages/Temp2";
import Temp1 from "./Components/Pages/Temp1";
import Zaun from "./Components/Pages/Zaun";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/Arcane" element={<Home />} />
        <Route path="/Arcane-characters" element={<Characters />} />
        <Route path="/Arcane-characters-zaun" element={<Zaun />} />
        <Route path="/Arcane-characters-detail" element={<Detail />} />
        <Route path="/Arcane-about" element={<About />} />
        <Route path="/Arcane-serie" element={<Serie />} />
        <Route path="/Arcane-serie-season2" element={<Temp2 />} />
        <Route path="/Arcane-serie-season1" element={<Temp1 />} />
        <Route path="/Arcane-reviews" element={<Reviews />} />

      </Routes>
    </Router>
  );
}

export default App;