import "./App.css";
import Icons from "./components/Icons";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </div>
  );
}

export default App;
