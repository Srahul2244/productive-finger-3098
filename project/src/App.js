import './App.css';

import Header from "./components/header"
import Links from "./components/Links"
import Slider from "./components/Slider"
import BodyContent from "./components/BodyContent"
import FooterComponent from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Register from './components/Register';


function App() {
  return (
    <div>
      {/* */}
      <Header />
      <Links />
      <Slider />
      <BodyContent />
      <FooterComponent />
    </div>
  );
}

export default App;

