jQuery(document).ready(function(){
  "use strict"
  $('.one').ripples({
    dropRadius: 11,
    perturbance: 0.01,

  });
  $(".heading").typed({
    strings:["<strong>welcome to </strong>  ", "<strong>Tina's Hairven</strong>"],
    typespeed: 30,
    loop:true
  });

  // $(window).scroll(function(){
  //   var top = $(window).scrollTop();
  //    if(top >= 60){
  //      $('nav').addClass('secondary');
  //    }
  //    else
  //    if($('nav').hasClass('secondary')){
  //      $('nav').removeClass('secondary');
  //    }
  //
  // });
});
