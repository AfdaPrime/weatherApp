import {useState, useEffect} from 'react'




function WeatherComponent({data}) {
    
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

    data.then((res) =>{
        
        setWeather(res)

    }).catch((err) =>{
        console.log(err);
    })

    }, );

        

    return (
        <div className="place">
            <div className="component weather"><p className="label">Temperature:</p>{weather.temp}<p className="unit weather">°C</p></div>
            <div className="component weather"><p className="label">Feels Like:</p>{weather.feel_like}<p className="unit weather">°C</p></div>
            <div className="component weather"><p className="label">Pressure:</p>{weather.pressure}<p className="unit weather">hPa</p></div>
            <div className="component weather"><p className="label">Humidity:</p>{weather.humidity}<p className="unit weather">%</p></div>
            <div className="component weather"><p className="label">UV Index:</p>{weather.uvi}</div>
            <div className="component weather"><p className="label">Visibility:</p>{weather.visibility}<p className="unit weather">m</p></div>
        </div>
    )
}

export default WeatherComponent
