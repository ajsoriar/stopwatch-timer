//import preact from 'preact';
//import * as preact from "preact";
//import { h, render, Component } from 'preact';
import { h, render, Component } from 'preact';
import './clock.css';

class Clock extends Component {

    //state = { time: Date.now() };

    constructor() {
        console.log("Clock -> Component!");
        super();
        // set initial time:
        this.state.time = Date.now();
    }

    componentDidMount() {

        console.log("Clock -> Component!");

        // update time every second
        this.timer = setInterval(() => {
            console.log("LOL!");
            this.setState({ time: Date.now() });
        }, 1000);
    }

    componentWillUnmount() {

        console.log("Clock -> Component!");

        // stop when not renderable
        clearInterval(this.timer);
    }

    render(props, state) {
        //let time = state.time; //new Date(state.time); //.toLocaleTimeString();
        let time = new Date(this.state.time).toLocaleTimeString();
        return <span class="clock">{ time }</span>;
    }
}

export default Clock;


// var timer = setInterval(function(){
//     console.log("LOL!");
// }, 1000);