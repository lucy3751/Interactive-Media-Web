$(document).ready(function () {

    // Store links as object for each section
    const stackOverflowLinks = [
        { url: "https://stackoverflow.com/questions/16955019/how-to-reload-a-page-after-the-ok-click-on-the-alert-page", title: "Reload the page after clicking ok on the alert" },
        { url: "https://stackoverflow.com/questions/114543/how-to-horizontally-center-an-element */", title: "Horizontally center an element" },
        { url: "https://stackoverflow.com/questions/45536537/centering-in-css-grid", title: "Centering inside a css grid" },
        { url: "https://stackoverflow.com/questions/2009029/restoring-page-scroll-position-with-jquery", title: "Restore page scroll position" },
        { url: "https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window", title: "Open url in new tab" },
        { url: "https://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad", title: "Detect viewport orientation" }
    ];

    const youtubeLinks = [
        { url: "https://www.youtube.com/watch?v=JN0u2oW3RA0&ab_channel=xinxin", title: "p5.js class" },
        { url: "https://www.youtube.com/watch?v=KzqQXDbDvus&ab_channel=KevinPowell", title: "Self host fonts" },
    ];

    const p5Links = [
        { url: "https://p5js.org/reference/", title: "Reference overview" },
        { url: "https://editor.p5js.org/aferriss/sketches/BJuQLbkcz", title: "Changing color using cursor" },
        { url: "https://editor.p5js.org/codingtrain/sketches/U0R5B6Z88", title: "Draggable objects in p5.js"}
    ];

    const codeOtherLinks = [
        { url: "https://www.w3schools.com/", title: "W3 Schools" },
        { url: "https://p5js.org/examples/interaction-kaleidoscope.html#:~:text=A%20kaleidoscope%20is%20an%20optical,the%20help%20of%20the%20slider.", title: "Kleidoscope" },
        { url: "https://api.jquery.com/", title: "jQuery Reference" },
        { url: "https://css-tricks.com/snippets/css/complete-guide-grid/", title: "CSS Tricks - A Complete Guide to Grid" },
        { url: "https://developer.mozilla.org/en-US/", title: "MDN Web Docs" }
    ];


    // ////INSERTING LINKS INTO THE HTML UNDER EACH SECTION IN "CODE HELP" /// //

    // call a function once for each element in the array - https://www.w3schools.com/jsref/jsref_foreach.asp
    stackOverflowLinks.forEach(function (object) {
        $("#stackOverflow").append(`<a href="${object.url}" target="_blank">${object.title}</a><br>`)
    })

    youtubeLinks.forEach(function (object) {
        $("#youtube").append(`<a href="${object.url}" target="_blank">${object.title}</a><br>`)
    })

    p5Links.forEach(function (object) {
        $("#p5").append(`<a href="${object.url}" target="_blank">${object.title}</a><br>`)
    })

    codeOtherLinks.forEach(function (object) {
        $("#code-other").append(`<a href="${object.url}" target="_blank">${object.title}</a><br>`)
    })




    console.log("ready");
});