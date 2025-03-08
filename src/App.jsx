
import './App.css'
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home';
import About from './AboutUs';
import Footer from './Components/Footer';
import Contact from './ContactUs';

function App() {
  const [heroCount, setHeroCount] = useState(4);
  const [playStatus, setPlayStatus] = useState(false);

  return (
        <Router>
      <Navbar />
      
      {/* Conditionally Show Background Only on Home Page */}
      <ConditionalBackground playStatus={playStatus} heroCount={heroCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        {/* <Route path="/Login" element ={<Login></Login>}></Route> */}
        {/* <Route path="/login" element={<Login />} />  */}
      </Routes>

      
      <Footer /> 
    </Router>
  
  );
}

// ✅ **Fix: Import and Use `useLocation` Properly**
const ConditionalBackground = ({ playStatus, heroCount }) => {
  const location = useLocation();
  return location.pathname === "/" ? <Background playStatus={playStatus} heroCount={heroCount} /> : null;
};

export default App;


// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [message, setMessage] = useState("");

//   const startGame = async () => {
//     try {
//       const response = await axios.get("http://192.168.0.195:5000/");  // Use your friend's IP
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Error connecting to Python:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>React & Python Game</h1>
//       <button onClick={startGame}>Start Game</button>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default App;


