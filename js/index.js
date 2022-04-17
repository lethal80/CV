(function ($) {
    ("use strict");

    // closes the sidebar menu
    $(".menu-toggle").click(function (e) { 
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });
})(jQuery)