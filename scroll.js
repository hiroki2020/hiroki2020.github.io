$(function(){

  
  $('.scroll-arrow').on("click", function(){
    $('html').animate({scrollTop: 0});
  });

  // PCでメニューのリストをクリックした時の位置調整
  $('#about').on("click", function(){
    $('html').animate({scrollTop: 30})
  });

  $('#skill').on("click", function(){
    $('html').animate({scrollTop: 880})
  });

  $('#skill-1').on("click", function(){
    $('html').animate({scrollTop: 970})
  });

  $('#skill-2').on("click", function(){
    $('html').animate({scrollTop: 1860})
  });

  $('#skill-3').on("click", function(){
    $('html').animate({scrollTop: 2720})
  });

  $('#skill-4').on("click", function(){
    $('html').animate({scrollTop: 3440})
  });

  $('#works').on("click", function(){
    $('html').animate({scrollTop: 4360})
  });

  $('#work-1').on("click", function(){
    $('html').animate({scrollTop: 4490})
  });


  $('#work-2').on("click", function(){
    $('html').animate({scrollTop: 5420})
  });

  $('#contact').on("click", function(){
    $('html').animate({scrollTop: 5840})
  });

  // スマホでメニューのリストをクリックした時の位置調整
  $('#modal-about').on("click", function(){
    $('html').animate({scrollTop: 0})
  });

  $('#modal-skill').on("click", function(){
    $('html').animate({scrollTop: 1800})
  });

  $('#modal-skill-1').on("click", function(){
    $('html').animate({scrollTop: 1900})
  });

  $('#modal-skill-2').on("click", function(){
    $('html').animate({scrollTop: 2750})
  });

  $('#modal-skill-3').on("click", function(){
    $('html').animate({scrollTop: 5380})
  });

  $('#modal-skill-4').on("click", function(){
    $('html').animate({scrollTop: 6330})
  });

  $('#modal-works').on("click", function(){
    $('html').animate({scrollTop: 9500})
  });

  $('#modal-work-1').on("click", function(){
    $('html').animate({scrollTop: 9400})
  });


  $('#modal-work-2').on("click", function(){
    $('html').animate({scrollTop: 10400})
  });

  $('#modal-contact').on("click", function(){
    $('html').animate({scrollTop: 11550})
  });

});
