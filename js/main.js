$(document).ready(function () {

    var menuButton = $(".navbar-top__hamburger");
    menuButton.on('click', function() {
        $(".navbar__wrapper").toggleClass('navbar__wrapper--visible');
        $("body").toggleClass("scroll-hidden");
    });

});