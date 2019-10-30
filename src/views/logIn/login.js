import LoginTemplate from './login.html'
import Keyboard from '../../components/keyboard/keyboard'

// --------------------------------
//  Define Data Sources
// --------------------------------

let Login = {
    render :  () => {

        console.log("Login render!");

        let people = window.people;
        let view =  /*html*/`
            <div>
                <h1>Login</h1>
                <div>
                    ${ LoginTemplate }
                </div>

                ${ Keyboard() }
            </div>
        `
        return view
    }, 
    after_render:  () => {
        
        console.log("Login after_render!");
    }

}

export default Login;