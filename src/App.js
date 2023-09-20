import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
