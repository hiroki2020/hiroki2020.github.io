$(function(){
  
  $('.menu-icon').click(function() {
    $('.modal').addClass('modal-active');
  });

  $('.modal').click(function(){
    $('.modal').removeClass('modal-active');
  });
  
});