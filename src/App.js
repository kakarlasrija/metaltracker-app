import "./App.css";
import GoldTracker from "./Home/GoldTracker";
import Main from "./Home/Main";
import SliverTracker from "./Home/SliverTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gold" element={<GoldTracker />} />
        <Route path="/sliver" element={<SliverTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
