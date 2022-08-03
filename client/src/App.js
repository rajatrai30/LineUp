import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Singup from "./components/Signup/Singup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Slots from "./components/Slots/Slots";

function App() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const data = window.localStorage.getItem("timeIsset");
    if (data !== null) {
      console.log("inside");
      setStarted(true);
    }
    console.log(started);
  }, []);
  // window.localStorage.setItem('timeIsset',false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/slots" element={<Slots />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;