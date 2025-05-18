import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonial from "./components/Testimonial";
import Blocked from "./components/Blocked";
import Scanner from './components/Scanner';
import { useState, useEffect } from 'react';
import React from 'react';


function App() {
  const [renderScanner, setRenderScanner] = useState(false)
  const [url, setUrl] = useState('');
  function renderTheScanner(){
    setRenderScanner(true)
  }
  /*
  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let the_url = tabs[0].url;
      
      const extra_urls = [
        "https://www.reddit.com/?feed=home",
        "https://www.youtube.com",
        "https://www.tiktok.com"
      ];
      
      fetch("http://localhost:5000/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          extra_urls,
          the_url
         })
      })
      .then((response) => {
        return response.text();
      }).then((response) => {
        alert(response);
        return response
      })
      .catch((error) => {
        alert(error)
      })
      });
    } else {
      console.warn("Chrome API not available.");
    }
  }, [])
*/


  
  return (
    <div className="App">
      {renderScanner == false ? 
      <div>
        <Navbar render={renderTheScanner}/>
        <Hero/>
        <Testimonial/>
        <Blocked/>
      </div> : <Scanner /> }

    </div>
  );
}

export default App;
