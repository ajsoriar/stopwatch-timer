console.log("Home.js");
import users from './data.users.json';
//import preact from 'preact';
import * as preact from "preact";
import {
    render
} from 'preact';
import Clock from './../../components/clock/clock.js';
import './home.css';

// --------------------------------
//  Define Data Sources
// --------------------------------

/*
let getPostsList =  () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        //const response = await fetch(`https://url`, options)
        //const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}
*/

let Home = {
    "render": () => {
        let usersArr = users.users;
        let view = /*html*/ `
            <section class="section users-list">
                <h1> Home </h1>
                <ul>
                    ${ usersArr.map(user => 
                        /*html*/`<li><div class="ico"></div><a href="#/p/${user.id}">${user.name}</a></li>`
                        ).join('\n ')
                    }
                </ul>
                <div id="rootHome"></div>
            </section>
        `
        return view
    },
    "after_render": () => {
        const reactRootNode = document.getElementById("rootHome");
        render( <Clock/> , reactRootNode);
    }

}

export default Home;