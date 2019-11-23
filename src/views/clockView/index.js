console.log("Clock.js");
//import users from './data.users.json.js';
//import preact from 'preact';
import * as preact from "preact";
import {
    render
} from 'preact';
import Clock from './../../components/clock/clock.js';
import './clockView.css';

// --------------------------------
//  Define Data Sources
// --------------------------------

let ClockView = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1> ClockView </h1>
                <div id="rootClockView"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        const reactRootNode = document.getElementById("rootClockView");
        render( <Clock/>, reactRootNode);
    }
}

export default ClockView;