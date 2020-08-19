$(document).ready(function () {

    // Меню гамбургер для мобильной версии
    var menuButton = $(".navbar-top__hamburger");
    menuButton.on('click', function() {
        $(".navbar__wrapper").toggleClass('navbar__wrapper--visible');
        $("body").toggleClass("scroll-hidden");
    });

    // Таб слайдер
    var tabsItem = $(".tabs__item");
    var tabsContent = $(".tabs__content");

    tabsItem.on("click", function (event) {
       var activeContent = $(this).attr("data-target");
       $(tabsItem).removeClass("tabs__item--active");
       $(this).addClass("tabs__item--active");
       $(tabsContent).removeClass("tabs__content--active");
       $(activeContent).addClass("tabs__content--active");
    });

    // Модальное окно
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
        var autoplay = "?autoplay=1";
        $('.video').html('<iframe width="100%" height="300px" src="'+link+idVideo+autoplay+'"frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe>');
    });
    
    // Слайдер
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 3000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: 'true'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.slider-button--next',
            prevEl: '.slider-button--prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });

    // Валидация форм
    $('.newsletter__form').validate({
        errorClass: "invalid",
        messages: {
            email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
            },
            textarea: {
                required: "We need your email address to contact you",
            }
        }
    });

    $('.comments-added__form').validate({
        errorClass: "invalid",
        messages: {
            textarea: {
                required: "The text must be at least 100 characters long",
            }
        }
    });


    // Показать/скрыть коменнтарии
    $('.comments-button__other').click(function(){
		$('.comments-hidden').toggleClass('hide');	
		if ($('.comments-hidden').hasClass('hide')) {
			$('.content_toggle').html('Подробнее');
		} else {
			$('.content_toggle').html('Скрыть');
		}		
		return false;
    });	
    
    // Имитация добавления в закладки на главной странице
    $(".preview-bookmark__img").on("click", function(event) {
        var img1 = "img/bookmark.svg";
        var img2 = "img/bookmark-red.svg";
   
        $(this).attr(
           "src", 
           $(this).attr("src") ===img1 ? img2 : img1
        );
        event.preventDefault();
        return false;
     });

     // Имитация добавления в закладки на остальных страницах
    $(".hero-add").on("click", function(event) {
        var img1 = "img/bookmark.svg";
        var img2 = "img/bookmark-red.svg";
   
        $(this).attr(
           "src", 
           $(this).attr("src") ===img1 ? img2 : img1
        );
        event.preventDefault();
        return false;
     });
});

