
import preact from 'preact';
import { h, render, Component } from 'preact';
import './index.css'
import './numericKeyboard.js'

class Keyboard extends Component {

    constructor() {
        super();
    }

    render(props, state) {

        console.log("Keyboard render!");

        let view = <div class="numericKeyboard">
                    <div class="container">
                        <div class="title">Numeric Keyboard</div>
                        <div class="column-1">
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('1')">1</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('4')">4</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('7')">7</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('DEL')">DEL</div>
                        </div>
                        <div class="column-2">
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('2')">2</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('5')">5</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('8')">8</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('0')">0</div>
                        </div>
                        <div class="column-3">
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('3')">3</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('6')">6</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('9')">9</div>
                            <div class="key focusable" data-focus-action-function="window.NumericKeyboard.press('OK')">OK</div>
                        </div>
                    </div>
                </div>;

        return view
    }
}

export default Keyboard;