
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import TimeDisplay from '../../displays/timeDisplay';
import Utils from '../../../utils'

class Clock extends Component {

    constructor() {
        super();
        this.tick = this.tick.bind(this);
        this.state = {
            time: new Date().toLocaleString(),
            data: {
                "digital": "00:00:00", //hh +":"+ mm +":"+ ss + "." + ms,
                "rough": "000000", //hhmmssms,
                "hh": 0,
                "mm": 0,
                "ss": 0,
                "ms": 0
            }
        };
    }

    tick () {
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

    componentDidMount() {
        this.tick();
        this.intervalID = setInterval(() => this.tick(), 1000 ); //ss
        //this.intervalID = setInterval(() => this.tick(), 100 ); //ss.m
        //this.intervalID = setInterval(() => this.tick(), 50 ); //ss.mm
        //this.intervalID = setInterval(() => this.tick(), 10 ); //ss.mm
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render(props, state) {

        var timeStingFull = Utils.twoDigits(state.data.hh) +":"+ Utils.twoDigits(state.data.mm) +":"+ Utils.twoDigits(state.data.ss) +"."+ Utils.twoDigits(state.data.ms); 
        var timeSting = Utils.twoDigits(state.data.hh) + Utils.twoDigits(state.data.mm) + Utils.twoDigits(state.data.ss) + Utils.twoDigits(state.data.ss);   //135900 // hhmmss

        return <div class="clock">
            <TimeDisplay numString={timeSting}/><br/>
            The time is {timeStingFull}.
        </div>;
    }

}

export default Clock;