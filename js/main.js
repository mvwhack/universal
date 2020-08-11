$(document).ready(function () {

    var menuButton = $(".menu-button");
    menuButton.on('click', function() {
        $(".navbar__wrapper").toggleClass('navbar__wrapper--visible');
        $("body").toggleClass("scroll-hidden");
    });

});