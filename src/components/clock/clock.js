
import preact from 'preact';
import { h, render, Component } from 'preact';
//import './clock.scss';
import './clock.css';

class Clock extends Component {
    constructor() {
        super();
        // set initial time:
        this.state.time = 0; //Date.now();
    }

    componentDidMount() {
        // update time every second
        // this.timer = setInterval(() => {
        //     this.setState({ time: Date.now() });
        // }, 1000);
    }

    componentWillUnmount() {
        // stop when not renderable
        //clearInterval(this.timer);
    }

    render(props, state) {
        let time = "CLOCK!";// Date(state.time); //.toLocaleTimeString();
        return <span class="clock">{ time }</span>;
    }
}

export default Clock;

//export default Clock;
// render an instance of Clock into <body>:


/*

import preact from 'preact';
import { h, render, Component } from 'preact';
import './clock.css';

class Clock extends Component {

    constructor() {
      super();
      this.state = { time: Date.now() };
    }
  
    // Lifecycle: Called whenever our component is created
    componentDidMount() {
      // update time every second
      this.timer = setInterval(() => {
        this.setState({ time: Date.now() });
      }, 1000);
    }
  
    // Lifecycle: Called just before our component will be destroyed
    componentWillUnmount() {
      // stop when not renderable
      clearInterval(this.timer);
    }
  
    render() {
      let time = new Date(this.state.time).toLocaleTimeString();
      return <span>Clock!{time}</span>;
    }
  }
  
*/