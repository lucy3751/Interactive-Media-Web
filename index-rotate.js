$(document).ready(function () {

    // take user to index.html (zoomed in vending machine page) when their device is in landscape mode
    if (window.innerHeight < window.innerWidth) {
        window.location.href = "./index.html#landingSection";
    }

    window.addEventListener("resize", function () {

        if (window.innerHeight < window.innerWidth) {
            window.location.href = "./index.html#landingSection";
        }

    });


    // go back to landing page
    $("#goBackButton").click(function () {
        window.location.href = "./index-land.html";
    });

    
    console.log("ready");

});