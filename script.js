$(function() {
  $('.meru-title').hover(function(){
    $('.meru-hide').css('display','block')
  });
  $('.chat-title').hover(function(){
    $('.chat-hide').css('display','block')
  });
  $('.expense-title').hover(function(){
    $('.expense-hide').css('display','block')
    $(this).css('background-color','violet');
  });
  $('').hover(function(){
    $().css('background-color','deepskyblue');
  });
  $('.chat-title').hover(function(){
    $(this).css('background-color','darkturquoise');
  });

});