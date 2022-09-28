import './App.css';

import Header from "./components/header"
import Links from "./components/Links"
import Slider from "./components/Slider"
import BodyContent from "./components/BodyContent"
import FooterComponent from "./components/Footer"


function App() {
  return (
    <div>
      <Header />
      <Links />
      <Slider />
      <BodyContent />
      <FooterComponent />
    </div>
  );
}

export default App;

