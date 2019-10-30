console.log("B!");

const Bye = function() {
    console.log("Bye!");

    var el = document.getElementById("b-zone");
    el.innerHTML = "This is B";
}

export default Bye;