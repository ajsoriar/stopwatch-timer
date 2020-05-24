
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import TimeDisplay from '../../displays/timeDisplay';
import Button from '../../button/button';

class Timer extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    
    render(props, state) {

        return <div class="timer">
            <TimeDisplay numString={'876543'}/>
            <Button text="Start"/>
            <Button text="Pause"/>
            <Button text="Cancel"/>
            <Button text="Resume"/>
        </div>;
    }
}

export default Timer;
