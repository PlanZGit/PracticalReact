import "./App.css";
import Icons from "./components/Icons";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import UploadFile from "./components/UploadFile";
import ReactModal from "./components/ReactModal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="upload" element={<UploadFile />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="modal" element={<ReactModal />} />
      </Routes>
    </div>
  );
}

export default App;
