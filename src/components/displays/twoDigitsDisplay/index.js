
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

        var numA =  props.num[0];
        var numB =  props.num[1];

        var htmlString = <div class={cssClass}>
            <OneDigitDisplay num={numA}/>
            <OneDigitDisplay num={numB}/>
        </div>;

        return htmlString;
    }
}

export default TwoDigitsDisplay;