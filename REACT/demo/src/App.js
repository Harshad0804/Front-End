import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Layout/Pages/About";
import Home from "./Layout/Pages/Home";
import Contact from "./Layout/Pages/Contact";
import Help from "./Layout/Pages/Help";
import About1 from "./Layout/Pages/Smallpage/About1";
import About2 from "./Layout/Pages/Smallpage/About2";
// import Header from "./Layout/Header/Header";
// import MainContext from "./Context/MainContext";
// import USecarts from "./UseEffect/USecarts";
// import Usetable from "./UseEffect/Usetable";
// import Usecard from "./UseEffect/Usecard";





function App() {
  return (
    <div>
      {/* <h1>This is the first step of react js.</h1> */}
      <BrowserRouter>
        <div>
          {/* <Usecard /> */}
          {/* <USecarts /> */}
          {/* <MainContext /> */}
          {/* <Header /> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="about1" element={<About1 />}/>
          <Route path="about2" element={<About2 />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;