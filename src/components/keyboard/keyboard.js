import './keyboard.css'
import './keyboard.data.js'

// --------------------------------
//  Define Data Sources
// --------------------------------

let Keyboard = () => {

    console.log("Keyboard render!");

    let keyboardKeys = window.keys;
    let view = `
            <div>
                <h1>Keyboard</h1>
                <ul class="keyboard">
                ${ keyboardKeys.map(keyboardCharacter => 
                    `<li class="key"><a href="#/p/${keyboardCharacter.label}">${keyboardCharacter.key}</a></li>`
                    ).join('\n ')
                }
                </ul>
            </div>
        `
    return view
}

export default Keyboard;