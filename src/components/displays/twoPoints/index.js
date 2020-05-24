
import preact from 'preact';
import { h, render, Component } from 'preact';
import "./index.css"

class TwoPoints extends Component {
    render(props, state) {
        return <div class="twoPoints">
            <div class="point topPoint"></div>
            <div class="point bottomPoint"></div>
        </div>;
    }
}

export default TwoPoints;