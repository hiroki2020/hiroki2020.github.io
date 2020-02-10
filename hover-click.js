$(function(){
  
  // お問い合わせにマウスを当てた時
  $('#contact').hover(function(){
    $(this).css('font-weight', 'bold');
    $('#about, #be-able-to, #works').css('font-weight', 'normal');
  });
  // お問い合わせをクリックした時
  $('#contact, #modal-contact').click(function(){
    $('.contact').fadeIn();
    $('.modal').fadeOut();
    $('.header-icon').html('<i class="fas fa-bars"></i>');
    $('.header-icon').removeClass('open');
    $('.be-able-to, .about, .works, .top').css('display','none');
    $('#about, #works').css('color', 'rgba(0,0,0,0.1)');
    $(this).css('color', 'black');
  });

  // 自己紹介にマウスを当てた時
  $('#about').hover(function(){
    $(this).css('font-weight', 'bold');
    $('#contact, #be-able-to, #works').css('font-weight', 'normal');
  });
  // 自己紹介をクリックした時
  $('#about').click(function(){
    $('.about').fadeIn();
    $('.about').css('display','flex');
    $('.be-able-to, .contact, .works, .top').css('display','none');
    $('#contact, #works').css('color', 'rgba(0,0,0,0.1)');
    $(this).css('color', 'black');
  });
  // スマホの自己紹介をクリックした時
  $('#modal-about').click(function(){
    $('.about').fadeIn();
    $('.modal').fadeOut();
    $('.header-icon').html('<i class="fas fa-bars"></i>');
    $('.header-icon').removeClass('open');
    $('.about').css('display','block');
    $('.be-able-to, .contact, .works, .top').css('display','none');
    $('#contact, #works').css('color', 'rgba(0,0,0,0.1)');
    $(this).css('color', 'black');
  });

  // // できることにマウスを当てた時
  // $('#be-able-to').hover(function(){
  //   $('.be-able-to').fadeIn();
  //   $('.be-able-to').css('display','flex');
  //   $('.about, .contact, .works, .top').css('display','none');
  //   $(this).css('font-weight', 'bold');
  //   $('#about, #contact, #works').css('font-weight', 'normal');
  // });

  // 制作物にマウスを当てた時
  $('#works').hover(function(){
    $(this).css('font-weight', 'bold');
    $('#about, #contact, #be-able-to').css('font-weight', 'normal');
  });
  // 制作物をクリックした時
  $('#works').click(function(){
    $('.works').fadeIn();
    $('.works').css('display','flex');
    $('.about, .contact, .be-able-to, .top').css('display','none');
    $('#about, #contact').css('color', 'rgba(0,0,0,0.1)');
    $(this).css('color', 'black');
  });
  // スマホの制作物をクリックした時
  $('#modal-works').click(function(){
    $('.works').fadeIn();
    $('.works').css('display','block');
    $('.modal').fadeOut();
    $('.header-icon').html('<i class="fas fa-bars"></i>');
    $('.header-icon').removeClass('open');
    $('.about, .contact, .be-able-to, .top').css('display','none');
    $('#about, #contact').css('color', 'rgba(0,0,0,0.1)');
    $(this).css('color', 'black');
  });


});