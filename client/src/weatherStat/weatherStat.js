import '../component.css';
import Component from './weatherComponent.js';

function weatherStat({weathers}) {
    
    
    return (
        <div className="placeholder right">
            <div className="top-bar">CURRENT WEATHER</div>
                <Component data={weathers}/>
        </div>
    )
}

export default weatherStat
