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
            setComponent(res)
        })).catch((err) => {
            console.error(err)
        })

    }, )

    return (
        <div className='place polution'>
            <div className="component polution"><p className="label polution">Carbon Monoxide:</p>{component.co}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Ammonia:</p>{component.nh3}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Nitrogen Monoxide:</p>{component.no}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Nitrogen Dioxide:</p>{component.no2}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Ozone:</p>{component.o3}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Fine Particles :</p>{component.pm2_5}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Coarse Particulate :</p>{component.pm10}<p className="unit polution">μg/m3</p></div>
            <div className="component polution"><p className="label polution">Sulphur Dioxide:</p>{component.so2}<p className="unit polution">μg/m3</p></div>
        </div>
    )
}

export default PolutionComponent
