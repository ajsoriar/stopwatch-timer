
import preact from 'preact';
import { h, render, Component } from 'preact';
import TwoDigitsDisplay from "../twoDigitsDisplay";
import TwoPoints from "../twoPoints";
import "./index.css"

class TimeDisplayExtended extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {

        // timeString shoud be something like hh:mm:ss:ms

        if (!props.timeString) return null

        var hh = props.timeString.substring(0, 2),
            mm = props.timeString.substring(3, 5),
            ss = props.timeString.substring(6, 8),
            ms = props.timeString.substring(9, 11),
            cssClass = "timeDisplayExtended"+ props.num;

        console.log( hh +":"+ mm +":"+ ss +":"+ ms );
        return <div class={cssClass}>
            <TwoDigitsDisplay num={hh}/>
            <TwoPoints/>
            <TwoDigitsDisplay num={mm}/>
            <TwoPoints/>
            <TwoDigitsDisplay num={ss}/>
            <TwoPoints showOnlyOne/>
            <TwoDigitsDisplay num={ms}/>
        </div>;
    }
}

export default TimeDisplayExtended;