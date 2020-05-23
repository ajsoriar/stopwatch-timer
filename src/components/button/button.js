
import preact from 'preact';
import { h, render, Component } from 'preact';
//import './button.scss';
import './button.css';

class Button extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(props, state) {
        return <div class="button focusable" data-focus-action-function={props.actionFunction}>{props.text}</div>;
    }
}

export default Button;