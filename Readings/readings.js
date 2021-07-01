$(document).ready(function () {

    // boolean to store side menu behaviour
    var isSideTabOpen = false;

    // store previous window width
    var previousWindowWidth = window.innerWidth;

    //store colors
    const tabColors = ["red", "black", "blue", "green", "yellow"];

    //store previous color
    let previousColor = "red";



    //////////////////// OPEN SIDE MENU ////////////////////////////////////////////////////////////////////////////////////////

    // toggle side tab menu
    $("#menu").click(toggleSideTab);

    // prevent menu from disappearing when resizing window
    //returns inside width of window in px - https://developer.mozilla.org/en-US/docs/Web/API/window/innerWidth
    window.addEventListener("resize", function () {

        // transition from mobile to non-mobile
        if (previousWindowWidth < 768 && window.innerWidth >= 768) {

            $("#sideTabContainer").css("display", "flex");

        }

        // transition from non-mobile to mobile
        else if (previousWindowWidth >= 768 && window.innerWidth < 768) {

            $("#sideTabContainer").css("display", "none");
            $("#menu span").replaceWith("<span class='material-icons-outlined white'>menu</span>")

        }

        previousWindowWidth = window.innerWidth;//update previous window width
    });
    ///////////////// END OF OPEN SIDE MENU //////////////////////////////////////////////////////



    //////////////////// CLICKING TABS TO GET TO THE RESPECTIVE READING SITE //////////////////////////////////////////////////////

    // substitue variables into strings - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    for (let i = 1; i <= 5; i++) {

        $(`#tab${i}`).click(function () {

            // set the icon to white in the first two tabs
            if (i <= 2) {

                $("#menu span").removeClass("black");
                $("#menu span").addClass("white");

            } else {

                $("#menu span").removeClass("white");
                $("#menu span").addClass("black");

            }

            //Update reading section (with active class)
            $(`#reading${i}`).addClass("active");
            $(`#tab${i}`).addClass("active");
            $(`#tab${i} h3`).addClass("active");

            $(window).scrollTop(0);//reset scroll position - https://stackoverflow.com/questions/2009029/restoring-page-scroll-position-with-jquery

            $("#menu").removeClass(previousColor);//remove previous color class
            $("#menu").addClass(tabColors[i - 1]);//add new color class

            previousColor = tabColors[i - 1];//update previous color

            //Remove active class for the other tabs
            for (let j = 1; j <= 5; j++) {

                if (j !== i) {
                    $(`#reading${j}`).removeClass("active");
                    $(`#tab${j}`).removeClass("active");
                    $(`#tab${j} h3`).removeClass("active");
                }

            }
        });
    }
    /// /////////////////END OF CLICKING TABS TO GET TO THE RESPECTIVE READING SITE/////////////////////////////////////////////////// ///



    /// ///////////////// SIDE TAB MENU FUNCTION DECLARATIONS /////////////////////////////////////////////////// ///

    // use boolean to toggle the side tab menu
    function toggleSideTab() {

        if (isSideTabOpen) {

            closeSideTab();
            isSideTabOpen = false

        } else {

            openSideTab();
            isSideTabOpen = true;

        }

    }

    // open the menu (reading tabs)
    function openSideTab() {

        $("#sideTabContainer").css("display", "flex");
        $("#menu span").replaceWith("<span class='material-icons-outlined white'>close</span>")

    }

    // close the menu (reading tabs)
    function closeSideTab() {

        $("#sideTabContainer").css("display", "none");
        $("#menu span").replaceWith("<span class='material-icons-outlined white'>menu</span>")

    }

    /// ///////////////// END OF SIDE TAB MENU FUNCTION DECLARATIONS /////////////////////////////////////////////////// ///



    console.log("ready");

});