import "./App.css";
import Icons from "./components/Icons";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </div>
  );
}

export default App;
