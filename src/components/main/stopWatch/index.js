import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import TimeDisplayExtended from '../../displays/timeDisplayExtended';
import Utils from '../../../utils'
import Button from '../../button/button';
import App from '../../../app.js';
import ListOfLaps from '../../listOfLaps'

class StopWatch extends Component {

    constructor() {
        super();
        this.tick = this.tick.bind(this);
        this.state = {
            time: new Date().toLocaleString(),
            startTimestamp: null,
            data: {
                "digital": "00:00:00", //hh +":"+ mm +":"+ ss + "." + ms,
                "rough": "000000", //hhmmssms,
                "hh": 0,
                "mm": 0,
                "ss": 0,
                "ms": 0
            },
            status: "OFF",
            listOfLaps: [{
                lapNum: "lol1",
                lapTime: "lol1",
                elapsedTimeFromPreviousLap: "lol1"
            },{
                lapNum: "lol2",
                lapTime: "lol2",
                elapsedTimeFromPreviousLap: "lol2"
            }]
        };
    }

    tick () {

        //if (this.state.status === "OFF") return;

        var d = new Date();
        //console.log(d);
        this.setState({
            date: d.toLocaleString(),
            data: {
                hh: d.getHours(),
                mm: d.getMinutes(),
                ss: d.getSeconds(),
                ms: d.getMilliseconds()              
            }
        });

    };

    start () {
        this.setState({
            startTimestamp: Date.now(),
            status: "ON"
        });
    }

    pause () {

    }

    stop () {

    }

    componentDidMount() {
        clearInterval(App.intervalID);
        this.tick();
        //App.intervalID = setInterval(() => this.tick(), 100 ); //ss.m
        //App.intervalID = setInterval(() => this.tick(), 50 ); //ss.mm
        App.intervalID = setInterval(() => this.tick(), 33 ); //ss.mm
    }

    render(props, state) {

        var timeStingFull = Utils.twoDigits(state.data.hh) +":"+ Utils.twoDigits(state.data.mm) +":"+ Utils.twoDigits(state.data.ss) +"."+ Utils.twoDigits(state.data.ms); 

        return <div class="stopWatch">
            <TimeDisplayExtended timeString={timeStingFull}/><br/>
            <ListOfLaps lapsArr={state.listOfLaps}></ListOfLaps>
            <hr/>
            The time is {timeStingFull}
            <hr/>
            <Button text="Start"/>
            <Button text="Stop"/>
            <Button text="Lap"/>
            <Button text="Resume"/>
            <Button text="Reset"/>
        </div>;
    }

}

export default StopWatch;