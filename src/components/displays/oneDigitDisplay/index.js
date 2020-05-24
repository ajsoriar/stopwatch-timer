
import preact from 'preact';
import { h, render, Component } from 'preact';
import "./index.css"

class OneDigitDisplay extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {
        var cssClass = "oneDigitDisplay number-"+ props.num;
        var htmlString = <div class={cssClass}>{props.num}</div>;
        return htmlString;
    }
}

export default OneDigitDisplay;