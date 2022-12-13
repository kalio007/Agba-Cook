import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import SubHeading from './Components/SubHeading/SubHeading';
import AboutUs from './Components/AboutUs/AboutUs';
import SpecialMenu from './Components/SpecialMenu/SpecialMenu';
import Chef from './Components/Chef/Chef';
import Intro from './Components/Intro/Intro';



import './App.css';
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <AboutUs/>
     <SpecialMenu/>
     <Intro/>
    </div>
  );
}

export default App;
