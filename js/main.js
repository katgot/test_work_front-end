$( document ).ready(function() {

  // 1 СЕКЦИЯ - якорь к карточке товара в 4 секции
  $(function() {
    $(".order-block__btn-pulse").click(function(event) {
      event.preventDefault();
      let id  = $(this).attr('href');
      let top = $(id).offset().top; 
      $('body, html').animate({scrollTop: top}, 800);
          
    });
  });

// 2 СЕКЦИЯ - ВСПЛЫВАЮЩИЕ ПОДСКАЗКИ-ПРЕИМУЩЕСТВА ПРИ НАВЕДЕНИИ

    $(function() {

      $('#first-item').hover(
          function(){
            $("#first-card").fadeIn('300', function() {
              $("#first-card").css("opacity", "1");
            });
          },
          function(){
            $("#first-card").fadeOut('300', function() {
              $("#first-card").css("opacity", "0");
            });
          });

      $('#second-item').hover(
          function(){
            $("#second-card").fadeIn('300', function() {
              $("#second-card").css("opacity", "1");
            });
          },
          function(){
            $("#second-card").fadeOut('300', function() {
              $("#second-card").css("opacity", "0");
            });
          });

      $('#third-item').hover(
            function(){
              $("#third-card").fadeIn('300', function() {
                $("#third-card").css("opacity", "1");
              });
            },
            function(){
              $("#third-card").fadeOut('300', function() {
                $("#third-card").css("opacity", "0");
              });
            });

      });

          
// 3 СЕКЦИЯ - СЛАЙДЕР 
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        fade: false,
        dots: false,
        prevArrow: '<div class="arrow-prev">&#8592;</div>',
        nextArrow: '<div class="arrow-next">&#8594;</div>',
        responsive: [
          {
            breakpoint: 1150, // - от какой ширины изменять настройки(1024 и ниже)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
    });


// 4 СЕКЦИЯ - Переключение товара при клике на навигационные стрелки

    $(function() {
        $(".product__arrow").click(function() {
            $(".product__red-shoe").toggleClass("product__red-shoe_active");
            $(".product__black-shoe").toggleClass("product__black-shoe_active");

            $(".product__title_black").toggleClass("product__title_active");
            $(".product__title_red").toggleClass("product__title_active");

            $(".product__gallery_black").toggleClass("product__gallery_active");
            $(".product__gallery_red").toggleClass("product__gallery_active");

            $(".product__left-shoe").toggleClass("product__left-shoe_active");
            $(".product__right-shoe").toggleClass("product__right-shoe_active");
              
        });
      });

// 4 СЕКЦИЯ - МОДАЛЬНОЕ ОКНО при клике на миниатюры фотографий товара

         $(function(){
            $('.mini-photo').click(function(event) {
              let i_path = $(this).attr('src');
              $('body').append('<div class="overlay"></div><div class="modal"><img alt="image" src="'+i_path+'"><div class="close-modal"><i></i></div></div>');
              $('.modal').css({
                left: ($(document).width() - $('.modal').outerWidth())/2,
                top: ($(window).height() - $('.modal').outerHeight())/2
             });
              $('.overlay, .modal').fadeIn('fast');
            });
            
            $('body').on('click', '.close-modal, .overlay', function(event) {
              event.preventDefault();
              $('.overlay, .modal').fadeOut('fast', function() {
                $('.close-modal, .modal, .overlay').remove();
              });
            });
          });

// 4 СЕКЦИЯ - Замена информации о товаре на форму для заказа

         $(function(){
          //  кнопка, которая переключает с карточки товара на форму
          $('.product__order-btn').click(function(event) {
            $(".product__description").css({"display":"none"});
            $(".product__form-order").css({"display":"block"});
          });
          //  кнопка "назад к характеристикам"
          $('.product__order-cancel').click(function(event) {
            $(".product__description").css({"display":"flex"});
            $(".product__form-order").css({"display":"none"});
          });

          //  отмена автоматической отправки формы, ее очистка и вывод сообщения пользователю в модалке
          $(".order-shoe").submit(function(e) {
            e.preventDefault();
        
            $(".order-shoe")[0].reset();

            $('body').append('<div class="overlay"></div><div class="modal"><div class="message-modal">Ваш заказ отправлен! <br> Оператор свяжется с Вами в ближайшее время!</div><div class="close-modal"><i></i></div></div>');
                $('.modal').css({
                left: ($(document).width() - $('.modal').outerWidth())/2,
                top: ($(window).height() - $('.modal').outerHeight())/2
              });
                $('.overlay, .modal').fadeIn('fast');

                $('body').on('click', '.close-modal, .overlay', function(event) {
                  event.preventDefault();
                  $('.overlay, .modal').fadeOut('fast', function() {
                    $('.close-modal, .modal, .overlay').remove();
                  });
                });
      
           });

        });



    
});