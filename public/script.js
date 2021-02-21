
$(document).ready(function() {
    $(".burger").click(function() {
        $("nav.mobile").addClass("show");
    });

    $(".close span").click(function() {
        $("nav.mobile").removeClass("show");
    });
});


// $(".canvas").on("click", function(e) {
//     e.preventDefault();


//     console.log('canvas clicked')
// });

// $(".digital").on("click", function(e) {
//     e.preventDefault()

//     console.log('canvas clicked')
// });

// $(".photograhy").on("click", function(e) {
//     e.preventDefault()

//     console.log('canvas clicked')
// });

