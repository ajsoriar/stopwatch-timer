import * as preact from "preact";
import {
    render
} from 'preact';
import './index.css';
import StopWatch from '../../components/main/stopWatch/index';

// --------------------------------
//  Define Data Sources
// --------------------------------

let StopWatchView = {
    "render": () => {
        //let usersArr = users.users;
        let view = /*html*/ `
            <section class="section clock-view">
                <h1>Stopwatch View</h1>
                <div id="root"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        var reactRootNode = document.getElementById("root");
        render(<StopWatch/>, reactRootNode);
    }
}

export default StopWatchView;