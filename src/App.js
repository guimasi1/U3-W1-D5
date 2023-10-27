import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import MySettings from "./components/MySettings";

function App() {
  return (
    <div className="bg-secondary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MySettings" element={<MySettings />} />
      </Routes>
    </div>
  );
}

export default App;
