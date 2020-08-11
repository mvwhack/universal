$(document).ready(function () {

    var menuButton = $(".navbar-top__hamburger");
    menuButton.on('click', function() {
        $(".navbar__wrapper").toggleClass('navbar__wrapper--visible');
        $("body").toggleClass("scroll-hidden");
    });

    var tabsItem = $(".tabs__item");
    var tabsContent = $(".tabs__content");

    tabsItem.on("click", function (event) {
       var activeContent = $(this).attr("data-target");
       $(tabsItem).removeClass("tabs__item--active");
       $(this).addClass("tabs__item--active");
       $(tabsContent).removeClass("tabs__content--active");
       $(activeContent).addClass("tabs__content--active");
    });
});