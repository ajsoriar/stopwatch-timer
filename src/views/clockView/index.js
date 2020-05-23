console.log("Clock.js");
import preact from 'preact';
//import * as preact from "preact";
//import * as preact from "preact";
import { h, render, Component } from 'preact';
import Clock from '../../components/clock/clock';
import './clockView.css';

// --------------------------------
//  Define Data Sources
// --------------------------------

let ClockView = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1> Clock View </h1>
                <div id="rootClockView">VIEW ROOT</div>
            </section>
        `
        return view
    },
    "after_render": () => {
        console.log("after_render!")
        var reactRootNode = document.getElementById("rootClockView");
        console.log("reactRootNode:"+ rootClockView );
        console.log("chin!")
        render( <Clock/>, reactRootNode);
    }
}

export default ClockView;