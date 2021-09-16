import {useState, useEffect} from 'react'

const axios = require('axios');

const latitude = '3.0738'
const logtitude = '101.5183'
const part = 'current,minutely,daily,alerts'
const units = 'metric'
const baseUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${logtitude}&exclude=${part}&units=${units}&appid=c0affc12bb66d292bbcd094cdbf99705`




function WeatherComponent() {
    
    const [weather,setWeather] = useState({
        temp:null,
        feel_like:null,
        pressure:null,
        humidity:null,
        uvi:null,
        visibility:null,
    })
    // const [data,setData] = useState(false)
    
    useEffect(() => {

    axios.get(baseUrl).then(res =>{
        
        console.log(res)
        const data = res.data.hourly[0]

        setWeather({
            temp:data.temp,
            feel_like:data.feels_like,
            pressure:data.pressure,
            humidity:data.humidity,
            uvi:data.uvi,
            visibility:data.visibility,
        })

    }).catch(err =>{
        console.log(err);
    })

    }, []);

        

    return (
        <div className="place">
            <div className="component"><p className="label">Temperature:</p>{weather.temp}<p className="unit">°C</p></div>
            <div className="component"><p className="label">Feels Like:</p>{weather.feel_like}<p className="unit">°C</p></div>
            <div className="component"><p className="label">Pressure:</p>{weather.pressure}<p className="unit">hPa</p></div>
            <div className="component"><p className="label">Humidity:</p>{weather.humidity}<p className="unit">%</p></div>
            <div className="component"><p className="label">UV Index:</p>{weather.uvi}</div>
            <div className="component"><p className="label">Visibility:</p>{weather.visibility}<p className="unit">m</p></div>
        </div>
    )
}

export default WeatherComponent
