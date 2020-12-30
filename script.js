// function myFunction() {
//     if ($(this).width() <= 980) {
//         $("nav").addClass("mobile");
//     } else {
//         $("nav").removeClass("mobile");
//     }
// }

$(document).ready(function() {
    // $(window).resize(function() {
    //     myFunction();
    // });
    // myFunction();

    $(".burger").click(function() {
        $("nav.mobile").addClass("show");
    });

    $(".close span").click(function() {
        $("nav.mobile").removeClass("show");
    });
});