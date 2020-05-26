//import * as preact from "preact";
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css';
import Timer from '../../components/main/timer';

// --------------------------------
//  Define Data Sources
// --------------------------------

let TimerView = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1>Timer View</h1>
                <div id="root"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        render(<Timer/>, document.getElementById("root"));
    }
}

export default TimerView;