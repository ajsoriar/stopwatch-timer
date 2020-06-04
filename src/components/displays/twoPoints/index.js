
import preact from 'preact';
import { h, render, Component } from 'preact';
import "./index.css"

class TwoPoints extends Component {
    render(props, state) {
        return (<div class="twoPoints">
            {/* {!props.showOnlyOne?<div class="point topPoint"></div>:null} */}
            {!props.showOnlyOne&&<div class="point topPoint"></div>}
            <div class="point bottomPoint"></div>
        </div>);
    }
}

export default TwoPoints;