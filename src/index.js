
// import preact from 'preact';
// import { render } from 'preact';
// import Clock from './components/clock/clock.js';

// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

console.log("index.js");

// import is ECMA6 so  we need npm install babel-loader babel-core babel-preset-env webpack

import "./css/main.css"
import Hello from './js/js_file_A'; // import is ECMA6
import Bye from './js/js_file_B'; // import is ECMA6
import "./components/sideMenu/sideMenu";

Hello();

window.sideMenu.init("sideMenu");
import App from './app.js';
App.init();
console.log(`I'm happy!`);
const arr = [1, 2, 3];
const doIt = () => console.log(...arr);
window.doIt = doIt;

Bye();