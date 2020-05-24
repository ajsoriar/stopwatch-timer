
import preact from 'preact';
import { h, render, Component } from 'preact';
import "./index.css"
import OneDigitDisplay from "../oneDigitDisplay";

class TwoDigitsDisplay extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {
        var cssClass = "twoDigitsDisplay number-"+ props.num;
        var htmlString = <div class={cssClass}>
            <OneDigitDisplay num="1"/>
            <OneDigitDisplay num="3"/>
        </div>;

        return htmlString;
    }
}

export default TwoDigitsDisplay;