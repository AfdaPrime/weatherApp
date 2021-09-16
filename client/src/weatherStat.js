import './weatherStat.css';
import Component from './weatherComponent.js';

function weatherStat({Weather}) {
    
    
    return (
        <div className="placeholeder">
            <div className="top-bar">CURRENT WEATHER</div>
                <Component data={Weather}/>
        </div>
    )
}

export default weatherStat
