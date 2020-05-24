
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import TimeDisplay from '../../displays/timeDisplay';

class Clock extends Component {

    constructor() {
        super();
        this.state.time = 0;
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {
        return <div class="clock">
            <TimeDisplay numString={'765432'}/>
        </div>;
    }

}

export default Clock;