$(function() {
  // ハンバーガーメニューをクリックすると開閉する
  $('.hamburger').click(function() {
      if ($(this).attr('aria-expanded') == 'false') {
          $(this).attr('aria-expanded', 'true');
          $('#js-global-menu').attr('area-hidden', 'false');
          $('#js-global-menu').addClass('slide-in');
      } else {
          $(this).attr('aria-expanded', 'false');
          $('#js-global-menu').attr('area-hidden', 'true');
          $('#js-global-menu').removeClass('slide-in');
      }
  });

  // ハンバーガーメニューのリンクをクリックしたら移動してメニューが閉じる
  $('.hamburger-nav a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        'scrollTop': position
    }, 300);
    $('.hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
    $('#js-global-menu').removeClass('slide-in');
  });

  // ヘッダーメニューのリンクをクリックしたら移動する
  $('.header-nav a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        'scrollTop': position
    }, 300);
  });

});
