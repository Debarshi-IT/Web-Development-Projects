window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });
    var calc = document.getElementById("Button=");
    calc.addEventListener("click",calculate);
    var C = document.getElementById("ButtonC");
    C.addEventListener("click", erase);
    function buttonClick(buttonId) {
        if((buttonId != "ButtonC") && (buttonId != "Button=")) {
            var button = document.getElementById(buttonId);
             var s = buttonId;
             s = s.replace("Button", "");
             entries(s);
        }
    }
    function entries(s) {
        input.value += s;
    }
    function calculate() {
        if(input.value == ".") {
            alert("Please Enter a Mathematical Expression");
        }
        input.value = eval(input.value);
    }
    function erase() {
        input.value = "";
    }
};