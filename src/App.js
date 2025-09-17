import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";      // your landing page
import FeaturesHome from "./pages/FeaturesHome";  // the new home with features

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />      {/* Landing page */}
        <Route path="/features" element={<FeaturesHome />} />  {/* Full features home */}
      </Routes>
    </Router>
  );
}
