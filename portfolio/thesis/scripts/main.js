$(document).ready(function() {
  $('.navlink').hide()
  toggleNav();
  toggleActive();
  // setBackground();

   // Stuff to do as soon as the DOM is ready
   console.log(hello());
   scrollDirection(ev=>{
     targets = ['#navbox']
     if(ev=='up'){
       bounceDown('#navbox')
       bounceDown('#controls')
     }

     if(ev=='down'){
       bounceUp('#navbox')
       bounceUp('#controls')
     }
   });


});


function toggleNav(){
  t = 100;
  $('.navheader').on("click", ev=>{
    $('.navlink').toggle(t)
  } )
}

function toggleActive(){
  $(".navlink").click(function() {
     // remove classes from all
     $(".navlink").removeClass("active");
     // add class to the one we clicked
     $(this).addClass("active");
     $('.navlink').toggle(100)
  });
}
//
// function setBackground() {
//   $(window).on('scroll', ev=>{
//     thetop = $(window).scrollTop();
//     // for 0-255, the calculation is thetop/100
//     ncx = 255 - (2*thetop/100)
//     $('body').css('background-color', 'rgb('+ncx+', '+ncx+', '+ncx+')')
//   })
// }
