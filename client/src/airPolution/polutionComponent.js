import { useState, useEffect} from "react";


function PolutionComponent({data}) {
    const [component,setComponent] = useState({
        co:null,
        nh3:null,
        no:null,
        no2:null,
        o3:null,
        pm2_5:null,
        pm10:null,
        so2:null,
    })

    useEffect(() => {
        
        data.then((res=>{
            // console.log(res)
            const data = res.list[0].components
            setComponent({
                co:data.co,
                nh3:data.nh3,
                no:data.no,
                no2:data.no2,
                o3:data.o3,
                pm2_5:data.pm2_5,
                pm10:data.pm10,
                so2:data.so2,
            })
        })).catch((err) => {
            console.error(err)
        })

    }, )

    return (
        <div className='place polution'>
            <div className="component polution"><p className="label polution">Carbon Monoxide:</p><p className="unit polution">{component.co} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Sulphur Dioxide:</p><p className="unit polution">{component.so2} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Nitrogen Monoxide:</p><p className="unit polution">{component.no} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Nitrogen Dioxide:</p><p className="unit polution">{component.no2} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Coarse Particulate:</p><p className="unit polution">{component.pm10} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Fine Particles:</p><p className="unit polution">{component.pm2_5} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Ozone:</p><p className="unit polution">{component.o3} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Ammonia:</p><p className="unit polution">{component.nh3} μg/m3</p></div>
        </div>
    )
}

export default PolutionComponent
