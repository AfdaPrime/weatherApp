import '../component.css'
import Component from './polutionComponent.js'

function AirPolution({polution}) {

    return (
        <div className="placeholder left">
            <div className="top-bar">AIR POLLUTANT</div>
                <Component data={polution}/>
        </div>
    )
}

export default AirPolution
