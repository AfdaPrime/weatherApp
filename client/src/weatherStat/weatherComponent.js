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
        
        const data = res.data.hourly[0]
        // console.log(data)
      
        setWeather({
            temp:data.temp,
            feel_like:data.feels_like,
            pressure:data.pressure,
            humidity:data.humidity,
            uvi:data.uvi,
            visibility:data.visibility,
        })

    }).catch((err) =>{
        console.log(err);
    })

    }, [data]);

        

    return (
        <div className="place weather">
            <div className="component weather"><p className="label weather">Temperature:</p><p>{weather.temp} °C</p></div>
            <div className="component weather"><p className="label weather">Feels Like:</p><p>{weather.feel_like} °C</p></div>
            <div className="component weather"><p className="label weather">Pressure:</p><p>{weather.pressure} hPa</p></div>
            <div className="component weather"><p className="label weather">Humidity:</p><p>{weather.humidity} %</p></div>
            <div className="component weather"><p className="label weather">UV Index:</p>{weather.uvi}</div>
            <div className="component weather"><p className="label weather">Visibility:</p><p>{weather.visibility} m</p></div>
        </div>
    )
}

export default WeatherComponent
