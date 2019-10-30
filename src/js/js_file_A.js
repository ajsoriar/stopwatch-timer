console.log("A!");

const Hello = function() {
    console.log("Hello!");

    var el = document.getElementById("a-zone");
    el.innerHTML = "This is A";
}

export default Hello;