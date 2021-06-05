$(document).ready(function () {

    // store vertical position from top of the webpage
    var fromTop = 0;

    //do the following when scrolling
    $(document).scroll(function () {
        

        // get the vertical position from the top of the webpage
        fromTop = $(document).scrollTop();

        // console.log(fromTop);



        // move "AFTER THE" and "ENVRIONMENT" down using scroll
        if (fromTop < 1400) {
            // "AFTER THE" section
            $("#section4").css("margin-top", "calc(-250px + " + fromTop + "px )"); //control margin with scroll
            $("#section3").css("opacity", "0"); //set section 3 (speakers) opacity to 0 when scrolled back up

            // "ENVRIONMENT" section
            $("#section6").css("margin-top", "calc(-750px + " + fromTop + "px )"); //control margin with scroll
            $("#section5").css("opacity", "0"); //set section 5 (large paragraphs) opacity to 0 when scrolled back up
            
            // make environment fade away at the end of the page (using css)
            $("#section6").addClass("appear"); 
            $("#section6").removeClass("disappear");
        }else {
            // make envrionment appear when scroll back up at the end of the page (using css)
            $("#section6").addClass("disappear");
            $("section6").removeClass("appear");
        }
    
        //when "AFTER THE" is underneath the speakers and ticket paragraph
        if(parseInt($("#section4").css("margin-top")) > -10){
            $("#section4").css("margin-top", "0"); //make it stop moving
            $("#section3").css("opacity", "1"); //set section 3 (speakers) visible
        }

        // when "ENVIRONMENT" is underneath the 4 big paragraphs
        if(parseInt($("#section6").css("margin-top")) > -100){
            $("#section6").css("margin-top", "0"); //make it stop moving
            $("#section5").css("opacity", "1"); //set section 5 (large paragraphs) visible
        }
             


    });




    console.log("ready");
}); 





//NOTES////

///JQUERY CSS SYNTAX
  // $("body").css("background-color","rgb(255, 0, " + fromTop + ")");

//COMPARING LEADING 
//parseInt is converting the string to an integer number - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//   if(parseInt($(".letter").css("margin-top")) < 400){}


// MAKE "ENVRIONMENT" FADE AWAY

// if (fromTop > 1300){
//     $("#section6").addClass("disappear");
//     $("section6").removeClass("appear");
// }else {
//     $("#section6").addClass("appear");
//     $("#section6").removeClass("disappear");
// }