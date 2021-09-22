// import {useState, useEffect} from 'react'
import './App.css';
import Weather from './weatherStat/weatherStat.js';
import Air from './airPolution/airPolution';
import Carousel from './weatherCarousel/weatherCarousel.js'

const axios = require('axios');

const latitude = '3.0738'
const logtitude = '101.5183'
const part = 'current,minutely,daily,alerts'
const units = 'metric'
const auth = 'c0affc12bb66d292bbcd094cdbf99705'
const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${logtitude}&exclude=${part}&units=${units}&appid=${auth}`
const polutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${logtitude}&appid=${auth}`

const weathers = axios.get(weatherURL).then(res =>{
  
  return res

}).catch(err =>{
  console.log(err);
})

const polution = axios.get(polutionURL).then(res=>{
  
  

  return res
  
}).catch(err =>{
  console.log(err);
})

function App() {
  

  return (
    <div className="bc">
      <Carousel weathers={weathers}/>
      <div className="console">
        <Weather weathers={weathers}/>
        <Air polution={polution}/>
      </div>
    </div>
  );
}

export default App;
