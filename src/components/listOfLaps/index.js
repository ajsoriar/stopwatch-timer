
import preact from 'preact';
import { h, render, Component } from 'preact';
import "./index.css"

class ListOfLaps extends Component {
    constructor() {
        super();
        this.lapString = this.lapString.bind(this);
    }

    lapString (lapNum,lapTime,elapsedTimeFromPreviousLap) { 
        return <div class="lap"><div>{lapNum}</div><div>{lapTime}</div><div>{elapsedTimeFromPreviousLap}</div></div>
    }

    render(props, state) {

        if (!props.lapsArr || props.lapsArr.length === 0) return <div class="noLaps">No laps by now!</div>
        return <div class="listoflaps">
            {props.lapsArr.map((item,i) =>this.lapString( item.lapNum, item.lapTime, item.elapsedTimeFromPreviousLap ))}
        </div>;
    }
}

export default ListOfLaps;