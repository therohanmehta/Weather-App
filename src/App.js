import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [loc, setLoc] = useState("goa");
  const [data, setData] = useState([]);

  function fetchWeather() {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=bbf52cbec9a74851bb374150231506&q=${loc}&aqi=yes`
    )
      .then((res) => res.json())
      .then((res) => setData([res]))

  }

  return (
    <div className='wrapper'>
      <div>

      <input
        type="text"
        placeholder="enter your location"
        onChange={(e) => {
          setLoc(e.target.value);
        }}
        />
      <button onClick={() => fetchWeather()}>get weather</button>
        </div>
    {'' || data.map((ele,index) => (<div key={index}>
      
       <span>{ele.location.name}</span>-
       <span>{ele.location.region}</span>-
       <span>{ele.location.country}</span>
       <p>Temp C - {ele.current.temp_c}C</p>
       <p>Temp F - {ele.current.temp_f}F</p>
       <div className='condition'>

       <img src={ele.current.condition.icon} alt=""/>
       <span>{ele.current.condition.text}</span>
       </div>


       </div>
    ))}
       
 
      
    </div>
  );
}
