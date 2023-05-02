import React from "react";
import "./App.css";
import MyButton from "./component/myButton";
import Home from "./component/home";
import Navbar from "./component/navbar";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MyButton />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
