$(function(){
  $('.add').click(function() {
    var $answer = $('.front-end');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).text('-');
    }
  });
  $('.add2').click(function() {
    var $answer2 = $('.front-end__contents');
    if($answer2.hasClass('open')) {
      $answer2.removeClass('open');
      $answer2.slideUp();
      $(this).text('+');
    } else {
      $answer2.addClass('open');
      $answer2.slideDown();
      $(this).text('-');
    }
  });
  $('.add3').click(function() {
    var $answer2 = $('.front-end__contents2');
    if($answer2.hasClass('open')) {
      $answer2.removeClass('open');
      $answer2.slideUp();
      $(this).text('+');
    } else {
      $answer2.addClass('open');
      $answer2.slideDown();
      $(this).text('-');
    }
  });
})