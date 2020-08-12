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


    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        var body = $("body");

        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        body.addClass("scroll-hidden");
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        var body = $("body");

        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        body.removeClass("scroll-hidden");
        $(".video").empty();
    }

    // Закртие модального окна по нажатию на клавиатуре кнопки ESC
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        closeModal(event);
    });

    // Клик по фону, но не по окну.
	$('.modal__overlay').click(function(e) {
		closeModal(event);
	});

    // Воспроизведение видео в модальном окне
    $('.tabs__video-button').click(function(event){
        console.log($(event.target).attr('id'));
        
        var idVideo = $(this).attr('id');
        var link = "https://www.youtube.com/embed/";
        $('.video').html('<iframe width="100%" height="300px" src="'+link+idVideo+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>');
    });

});