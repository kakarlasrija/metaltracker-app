import "./App.css";
import GoldTracker from "./Home/GoldTracker";
import Main from "./Home/Main";
import SliverTracker from "./Home/SliverTracker";
import CurrencyTracker from "./Home/CurrencyTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlatinumTracker from "./Home/PlatinumTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/metaltracker-app" element={<Main />} />
        <Route path="/gold" element={<GoldTracker />} />
        <Route path="/sliver" element={<SliverTracker />} />
        <Route path="/platinum" element={<PlatinumTracker />} />
        <Route path="/currency" element={<CurrencyTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
