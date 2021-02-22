
$(document).ready(function() {
    $(".burger").click(function() {
        $("nav.mobile").addClass("show");
    });

    $(".close span").click(function() {
        $("nav.mobile").removeClass("show");
    });
});

