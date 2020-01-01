$(function() {
  $('.meru-title').hover(function(){
    $('.meru-hide').css('display','block')
  });
  $('.expense-title').hover(function(){
    $('.expense-hide').css('display','block')
    $(this).css('background-color','fuchsia');
  });

  $('#title').hover(function(){
    $(this).css('background-color','deepskyblue');
  });


});