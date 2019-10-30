//import "./sideMenu.scss"
import "./sideMenu.css";
import strMenu from "./sideMenu.html";

(function () {

    var sideMenu = function () {

        var init = (id, op) => render(id, op);

        var render = (id, op) => {
            if (!id) {
                console.error("Side menu needs an id");
                return
            }
            var el = window.document.getElementById(id);
            el.innerHTML = strMenu;

            /*
            `<div id="sideMenu">
                    <div class="mainUser">
                        <div id="userImage"></div>
                        <div id="userName"></div>
                    </div>
                    <ul id="sideMenuItems">
                        <li ></li>
                    </ul>
                    <div id="btnUnlink">Desvincular</div>
                </div>`;

            */
        };

        var hide = function () {
            render();
        };

        var show = function () {
            render();
        };

        return {
            init: init,
            hide: hide,
            show: show
        }
    };

    window.sideMenu = sideMenu();

}());