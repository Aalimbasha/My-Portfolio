import React from "react";
import "./App.css";
// import Parent from "./components/Parent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Intro from "./components/Intro";
import MySkills from "./components/MySkills";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      <Router>
        <Routes>
          <Route exact path="/intro" element={<Intro />}></Route>

          <Route exact path="/" element={<Form />}></Route>

          <Route exact path="/myskills" element={<MySkills />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
