import * as preact from "preact";
import {
    render
} from 'preact';
//import Clock from '../../components/clock/clock.js';
import './index.css';

// --------------------------------
//  Define Data Sources
// --------------------------------

let TimerView = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1>Timer View</h1>
                <div id="rootTimerView"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        const reactRootNode = document.getElementById("rootTimerView");
        render( <Clock/>, reactRootNode);
    }
}

export default TimerView;