import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";      
import FeaturesHome from "./pages/FeaturesHome";  
import Ttstostt from "./pages/Ttstostt";   // 👈 capital T

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ttstostt />} />      {/* Use capital T */}
        <Route path="/features" element={<FeaturesHome />} />
      </Routes>
    </Router>
  );
}
