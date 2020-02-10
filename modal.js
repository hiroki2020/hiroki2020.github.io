$(function(){
  // LPの模写コーディング内のボタンをクリックした時
  $('.works-lp button').click(function(){
    $('.modal-wrapper-lp').fadeIn();
  })
  // LPの模写コーディングのボタンをクリックした時(スマホ版)
  $('.works-sp button').click(function(){
    $('.modal-wrapper-sp').fadeIn();
  })
  $('.modal-icon').hover(
    function(){
    var p_props = {
      'background-color': 'rgba(0,0,0,0.1)',
      'color': 'rgba(0,0,0,0.5)'
    }
    $(this).css(p_props)
   },
   function(){
    var p_props = {
      'background-color': 'rgba(255,255,255,1)',
      'color': 'rgba(0,0,0,1)'
    }
    $(this).css(p_props)
   });
  $('.modal-icon').click(function(){
    $('.modal-wrapper-lp, .modal-wrapper-sp').fadeOut();
  })

  // ヘッダーアイコンクリック時
  $('.header-icon').click(function(){
    if($(this).hasClass('open')){
      $('.modal').slideUp();
      $(this).html('<i class="fas fa-bars"></i>');
      $(this).removeClass('open');
    }else{
      $('.modal').slideDown();
      $(this).html('<i class="fas fa-times"></i>');
      $(this).addClass('open');
    }
  })
})