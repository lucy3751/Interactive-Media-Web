window.addEventListener("load", function () {

    // set #overlay width and height to be always the same as #machine-img
    var vendingMachineImgWidth = $("#machine-img").css("width");
    var vendingMachineImgHeight = $("#machine-img").css("height");

    $("#overlay").css("width", `${vendingMachineImgWidth}`);
    $("#overlay").css("height", `${vendingMachineImgHeight}`);

    //change when resizing window as well
    window.addEventListener("resize", function () {

        vendingMachineImgWidth = $("#machine-img").css("width");
        $("#overlay").css("width", `${vendingMachineImgWidth}`);

        vendingMachineImgHeight = $("#machine-img").css("height");
        $("#overlay").css("height", `${vendingMachineImgHeight}`);

    });


    // click to zoom into vending machine (takes to another link)
    // redirect to another webpage (giving the option to go back) - https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
    $("#overlay").click(function () {
        window.location.href = "./index-rotate.html";
    });




    console.log("ready");
});