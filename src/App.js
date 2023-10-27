import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Home from "./components/Home";
// import MyProfile from "./components/MyProfile";
import MySettings from "./components/MySettings";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="bg-secondary">
    //     <Home />
    //   <MyProfile />
    // </div>
    <div className="bg-secondary">
      <MySettings />
    </div>
  );
}

export default App;
