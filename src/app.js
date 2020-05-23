// import sideMenu from './components/sideMenu/sideMenu';
// import menuOptions from './components/sideMenu/options.json';
// import Home from './views/home/home.js'
// import About        from './views/about/About.js'
// import Error404     from './views/pages/Error404.js'
// import PostShow     from './views/pages/PostShow.js'
// import Register     from './views/pages/Register.js'
// import Navbar       from './views/components/Navbar.js'
// import Bottombar    from './views/components/Bottombar.js' 
// import Utils        from './services/Utils.js'

import './router';

let App = {
    render: () => {
        console.log("App render!");
    },
    after_render: () => {
        console.log("App after render!");
    },
    init: () => {
        console.log("App init!");
        nav.reset();
        //nav.map.draw();
    }
}

export default App;

document.addEventListener('keydown', function(e) {

    console.log('Key code : ' + e.keyCode);

    switch(e.keyCode) {
      
        case 37:       
            nav.move.left();
            break;

        case 38:
            nav.move.up();
            break;

        case 39:
            nav.move.right();
            break;

        case 40:
            nav.move.down();
            break;
          
        case 82: // r
            // clear selection
            break;

        case 13:
            nav.action();
            break;

        default: 
            return;
    }

});