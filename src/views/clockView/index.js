console.log("Clock.js");
import preact from 'preact';
//import * as preact from "preact";
//import * as preact from "preact";
import { h, render, Component } from 'preact';
import Clock from '../../components/main/clock/clock';
import './clockView.css';

let ClockView = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1> Clock View </h1>
                <div id="root"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        var reactRootNode = document.getElementById("root");
        render(<Clock/>, reactRootNode);
    }
}

export default ClockView;