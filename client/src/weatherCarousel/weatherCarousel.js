import {useState, useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './carousel.css'

const responsive = {
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 5,
slidesToSlide: 5 // optional, default to 1.
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2,
slidesToSlide: 2 // optional, default to 1.
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1,
slidesToSlide: 1 // optional, default to 1.
}
};



function WeatherCarousel({weathers}) {
    
    const [weather,setWeather] = useState([])

    // const [time,setTime] = useState()

    const time = (utc) =>{
        let unix = utc

        let date = new Date(unix * 1000);

        let day = date.getDate();

        let  hours = String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()

        let minutes = '0' + date.getMinutes();

        return(day + '-' + hours + ':' + minutes.substr(-2) )
    }

    const picture = (weatherId) =>{

        const id =String(weatherId).substr(0,1)

        if(id === '2'){
            return process.env.PUBLIC_URL+'/image/thunderstroms.png'
        }else if( id === '3' ){
            return process.env.PUBLIC_URL+'/image/drizzle.png'
        }else if( id === '5' ){
            return process.env.PUBLIC_URL+'/image/showers.png'
        }else if( weatherId === '800'){
            return process.env.PUBLIC_URL+'/image/sunny.png'
        }else{
            return process.env.PUBLIC_URL+'/image/cloudy.png'
        }
            

    }

    useEffect(() => {
        
        weathers.then(res =>{
            
            setWeather(res.data.hourly)
            
        }).catch(err =>{
            console.error(err);
        })

    }, [weathers])
 

    return (
        
        
        <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        customTransition="transform 300ms ease-in-out"
        >
        
            

        {weather.map(image => {
            return(
                <div key={image.dt}>
                    <img src={picture(image.weather[0].id)} alt={image.weather[0].main}/>
                    <p className="description">{image.weather[0].description}<br /> {time(image.dt)}</p>
                </div>
            );
        })}



    {/* <div>
        <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
        <p className="description">Heavy intensity rain <br /> 12.45pm</p>
        
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
        <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>
    <img src={process.env.PUBLIC_URL+'/image/sunny.png'} alt='sunny' />
    </div>
    <div>Item 11</div>
    <div>Item 12</div>
    <div>Item 13</div>
    <div>Item 14</div> */}


    </Carousel>
        
    )
}

export default WeatherCarousel
