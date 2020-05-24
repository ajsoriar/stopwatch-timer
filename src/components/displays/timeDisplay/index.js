
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

        var hh = props.numString.substring(0, 2),
            mm = props.numString.substring(2, 4),
            ss = props.numString.substring(4, 6),
            cssClass = "timeDisplay"+ props.num;


        console.log( hh +":"+ mm +":"+ ss );
        return <div class={cssClass}>
            <TwoDigitsDisplay num={hh}/>
            <TwoPoints/>
            <TwoDigitsDisplay num={mm}/>
            <TwoPoints/>
            <TwoDigitsDisplay num={ss}/>
        </div>;
    }
}

export default TimeDisplay;