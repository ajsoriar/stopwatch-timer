
import preact from 'preact';
import { h, render, Component } from 'preact';
import TwoDigitsDisplay from "../twoDigitsDisplay";
import TwoPoints from "../twoPoints";
import "./index.css"

class TimeDisplay extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {
        var cssClass = "timeDisplay"+ props.num;
        var htmlString = <div class={cssClass}>
            <TwoDigitsDisplay num="25"/><TwoPoints/><TwoDigitsDisplay num="38"/>
        </div>;

        return htmlString;
    }
}

export default TimeDisplay;