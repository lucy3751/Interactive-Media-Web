$(document).ready(function () {

    //mapping keys
    const allKeys = ["A", "B", "1", "2", "3", "4", "5", "6"];

    //mapping letter combinations to links
    const allCombinations = ["A1", "A2", "A3", "A4", "A5", "A6", "B1", "B2", "B3", "B4", "B5", "B6"];
    const allLinks = [
        //exercises
        "https://lucy3751.github.io/Interactive-Media-Web/Exercises/Exercise1/",
        "https://lucy3751.github.io/Interactive-Media-Web/Exercises/Exercise2/",
        "https://lucy3751.github.io/Interactive-Media-Web/Exercises/Exercise3/exercise3.html",
        "https://lucy3751.github.io/Interactive-Media-Web/Exercises/Exercise4/exercise4.html",
        "https://lucy3751.github.io/Interactive-Media-Web/Exercises/Exercise5/",
        "https://lucy3751.github.io/Interactive-Media-Web/Exercises/Exercise6/ui-style-guide.html",

        //assignments
        "https://lucy3751.github.io/Interactive-Media-Web/Assignments/Assignment1/css-typeface.html",
        "https://lucy3751.github.io/Interactive-Media-Web/Assignments/Assignment1/web-poster.html",
        "https://lucy3751.github.io/Interactive-Media-Web/Assignments/Assignment2/abstract-website.html",

        //reading responses
        "https://lucy3751.github.io/Interactive-Media-Web/Readings/",

        //resource page
        "https://lucy3751.github.io/Interactive-Media-Web/Resource/",

        //reflect
        "https://lucy3751.github.io/Interactive-Media-Web/Reflect/"

    ];

    //store number of digits in the display
    let displayNumberLength = 0;

    //store text in display
    let displayText;



    /////////////// KEYPAD INTERACTION //////////////////////////
    for (let i = 0; i < allKeys.length; i++) {

        let storeIndexString = allKeys[i];


        $(`#keypad-${allKeys[i]}`).click(function () {


            if (displayNumberLength >= 2) {

                //if there are two letters/numbers on the display, the next letter/number typed will clear the previous letters/numbers
                $("#display-text span").remove();
                $("#display-text").append(`<span>${allKeys[i]}</span>`);

            } else {

                $("#display-text").append(`<span>${storeIndexString}</span>`);//add new text

            }

            displayText = $("#display-text span").text(); //update text on display
            displayNumberLength = $("#display-text span").length;//update text length on display

            //light up go button if input text matches letter combination
            activateGoButton();

        });
    }
    /////////////// END OF KEYPAD INTERACTION //////////////////////////



    /////////////// GO BUTTON INTERACTIONS //////////////////////////
    $("#keypad-go").click(function () {

        for (let x = 0; x < allLinks.length; x++) {

            // go button link destination based on which combination is entered
            if (displayText == allCombinations[x]) {

                //open link in new tab - https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
                window.open(allLinks[x], '_blank').focus();

                return; //have to exit immediately after the loop finds the same combination

            }
        }

        //error message if typed the wrong combination
        $("#display-text span").remove();
        $("#display-text").append("<span>ERROR</span><span> </span>");

        displayNumberLength = $("#display-text span").length;//update text length on display

    });
    /////////////// END OF GO BUTTON INTERACTIONS //////////////////////////

    

    /////////////// GO BACK TO LANDING PAGE //////////////////////////
    $("#goBackButton").click(function () {
        window.location.href = "./index-land.html";
    });
    /////////////// END OF GO BACK TO LANDING PAGE //////////////////////////



    /////////////// ANIMATE GO BUTTON //////////////////////////
    function activateGoButton() {

        for (let x = 0; x < allLinks.length; x++) {
            if (displayText == allCombinations[x]) {

                //light up the go button when the inputed text matches the combinations
                $("#keypad-go").addClass("active");

                return;
            }
            else {

                $("#keypad-go").removeClass("active");

            }
        }
    }
    /////////////// END OF ANIMATE GO BUTTON INTERACTION //////////////////////////



    /////////////// TELL USER TO SWITCH TO LANDSCAPE MODE FOR VIEWING //////////////////////////
    // https://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad
    
    // takes user to the rotate page
    if(window.innerHeight > window.innerWidth){
        window.location.href = "./index-rotate.html";
    }
   
    window.addEventListener("resize", function(){

        if(window.innerHeight > window.innerWidth){
            window.location.href = "./index-rotate.html";
        }

    });
    /////////////// END OF TELL USER TO SWITCH TO LANDSCAPE MODE FOR VIEWING  //////////////////////////

    console.log("ready");
});




