
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import TimeDisplay from '../../displays/timeDisplay';
import Button from '../../button/button';
import App from '../../../app.js';
import NumericKeyboard from '../../NumericKeyboard'

class Timer extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        clearInterval(App.intervalID);
    }
    
    render(props, state) {

        return <div class="timer">
            <TimeDisplay numString={'876543'}/>
            <div class="displayFocus">
                <div class="display d1 focusable" onFocusReceivedFunction={'App.Timer.ShowKeyboard()'} onFocusLostFunction={'App.Timer.HideKeyboard()'} ></div>
                <div class="display d2 focusable" onFocusReceivedFunction={'App.Timer.ShowKeyboard()'} onFocusLostFunction={'App.Timer.HideKeyboard()'} ></div>
                <div class="display d3 focusable" onFocusReceivedFunction={'App.Timer.ShowKeyboard()'} onFocusLostFunction={'App.Timer.HideKeyboard()'} ></div>
            </div>
            {state.showKeyboard && <NumericKeyboard/>}
            <Button text="Start"/>
            <Button text="Pause"/>
            <Button text="Cancel"/>
            <Button text="Resume"/>
        </div>;
    }
}

export default Timer;
