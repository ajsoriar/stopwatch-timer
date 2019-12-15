import * as preact from "preact";
import {
    render
} from 'preact';
//import Clock from '../../components/clock/clock.js';
import './index.css';

// --------------------------------
//  Define Data Sources
// --------------------------------

let StopWatch = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1>Stopwatch View</h1>
                <div id="rootStopWatch"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        const reactRootNode = document.getElementById("rootStopWatch");
        render( <Clock/>, reactRootNode);
    }
}

export default StopWatch;