
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import TimeDisplay from '../../displays/timeDisplay';
import Button from '../../button/button';

class StopWatch extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {

        return <div class="stopWatch">
            <TimeDisplay numString={'654321'}/>
            <TimeDisplay numString={'654321'}/>
            <Button text="Start"/>
            <Button text="Stop"/>
            <Button text="Lap"/>
            <Button text="Resume"/>
            <Button text="Reset"/>
        </div>;
    }
}

export default StopWatch;
