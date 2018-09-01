document.onload = function () {
    window.isFirstTime = true;
};

function changebg() {

    // deleting previously set rules
    if (window.isFirstTime == false) {
        document.styleSheets[document.styleSheets.length - 1].deleteRule(window.nkRuleIndex);
    }
    window.isFirstTime = false;

    let newurl = document.getElementById("img-input").value;

    // setting bg-image for body
    let elements = document.getElementsByTagName("body");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundImage = "url(" + newurl + ")";
    }

    // setting psudo class for nk-acrylic by using a new class
    let el = document.getElementsByClassName("nk-acrylic");
    for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("nk-new-acrylic");
        el[i].classList.add("nk-new-acrylic");
    }
    window.nkRuleIndex = document.styleSheets[document.styleSheets.length - 1].insertRule('.nk-new-acrylic:before{background-image:url("' + newurl + '");}', 0);
}