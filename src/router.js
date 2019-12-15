//import Home         from './views/home/home'
import Error404 from './pages/Error404'
import Utils from './services/utils'
import About from './views/about/about'
import Home from './views/home/home'
import ClockView from './views/clockView'
import StopWatch from './views/stopWatchView'
import Timer from './views/timerView'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : ClockView,
    '/clock'      : ClockView,
    '/about'      : About,
    '/stopwatch'      : StopWatch,
    '/timer'      : Timer,

    //'/p/:id'      : PostShow,
    //'/register'   : Register,
    //'/login'      : Login,
    '/home'       : Home
    //'/pictures'   : Pictures,
    //'/videos'     : videos,
    //'/galleries'  : Galleries,
    //'/more'       : More
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = () => {

    console.log("ROUTER!");

    // Lazy load view element:

    //const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    //const footer = null || document.getElementById('footer_container');
    //const sideMenu = null || document.getElementById('side_menu_containes');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = page.render();
    page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);