import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonial from "./components/Testimonial";
import Blocked from "./components/Blocked";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Testimonial/>
      <Blocked/>

    </div>
  );
}

export default App;
