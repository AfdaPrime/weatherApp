import { useState, useEffect} from "react";


function PolutionComponent({data}) {
    const [pollution,setPollution] = useState({
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
            const air = res.data.list[0].components
            console.log(air)
            setPollution({
                co:air.co,
                nh3:air.nh3,
                no:air.no,
                no2:air.no2,
                o3:air.o3,
                pm2_5:air.pm2_5,
                pm10:air.pm10,
                so2:air.so2,
            })
        }))

    }, [data]);

    // console.log(data)

    return (
        <div className='place polution'>
            <div className="component polution"><p className="label polution">Carbon Monoxide:</p><p className="unit polution">{pollution.co} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Sulphur Dioxide:</p><p className="unit polution">{pollution.so2} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Nitrogen Monoxide:</p><p className="unit polution">{pollution.no} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Nitrogen Dioxide:</p><p className="unit polution">{pollution.no2} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Coarse Particulate:</p><p className="unit polution">{pollution.pm10} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Fine Particles:</p><p className="unit polution">{pollution.pm2_5} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Ozone:</p><p className="unit polution">{pollution.o3} μg/m3</p></div>
            <div className="component polution"><p className="label polution">Ammonia:</p><p className="unit polution">{pollution.nh3} μg/m3</p></div>
        </div>
    )
}

export default PolutionComponent
