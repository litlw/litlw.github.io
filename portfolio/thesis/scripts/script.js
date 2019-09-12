// this is my JavaScript
var splash = 0;
var paused
var score = 0;
var message;
var sh = 0.1; // the amount by which the frames will move when pressed.

$(document).ready(function() {
  $('.vid').hide();
  $('#score').hide();
  $('#controls').hide();

  // $(document).keydown(x => {
  //   if (splash == 0) {
  //     splashIn()
  //   } else {
  //     if (x.keyCode == 32) {
  //       x.preventDefault();
  //       playPause();
  //     } else if (x.key == 'q') {
  //       videoShiftIn();
  //       // textMaker()
  //       events.forEach(x => {
  //         m = x.findEvent($('#vid1').prop('currentTime'));
  //         if (typeof m == "string") {
  //           textMaker(m);
  //           score = score+1;
  //           $('#scoreTarget').text(score);
  //         }
  //         // x.findEvent($('#vid1').prop('currentTime'));
  //       });
  //
  //
  //
  //     } else if (x.key == 'x') {
  //       $('#vid1').prop('currentTime', 0);
  //       $('#vid2').prop('currentTime', 0);
  //       $('#test').text('');
  //       score = 0;
  //       $('#scoreTarget').text(score);
  //       events.forEach(x=>{
  //         x.show = true;
  //       })
  //
  //     } else if (x.key == 'a') {
  //       $('#vid1').prop('currentTime', y => {
  //         return $('#vid1').prop('currentTime') - sh;
  //       });
  //       $('#vid2').prop('currentTime', y => {
  //         return $('#vid1').prop('currentTime') - sh;
  //       });
  //     } else if (x.key == 'd') {
  //       $('#vid1').prop('currentTime', y => {
  //         return $('#vid1').prop('currentTime') + sh;
  //       });
  //       $('#vid2').prop('currentTime', y => {
  //         return $('#vid1').prop('currentTime') + sh;
  //       });
  //     }
  //   }
  // });
  // $(document).keyup(x => {
  //   if (splash > 0) {
  //     videoShiftOut();
  //
  //   }
  // })
});

splashIn = () => {
  s_go = 0;
  $('div.splash').fadeOut(300);
  setTimeout(splashRest, 200);
}
splashRest = () => {
  $('.vid').fadeIn(1600);
  $('#controls').fadeIn(1900);
  $('#vid1').get(0).play();
  $('#vid2').get(0).play();
  $('#vid1').hide().prop('muted', true);
  $('#score').fadeIn(300);
  splash += 1;
  console.log(splash);
}
videoShiftIn = () => {
  $('#vid2').hide().prop('muted', true);
  $('#vid1').show().prop('muted', false);
  // console.log();

}
videoShiftOut = () => {
  $('#vid1').hide().prop('muted', true);
  $('#vid2').show().prop('muted', false);
  // console.log('pressed');
}

textMaker = (t) => {

  console.log(t);
  if (typeof t == "string") {
    $('#test').append("<h1 class='text-light'> " + t + "</h1>");
    $('body').blur();
  }
}

playPause = () => {
  pause = $('#vid1').prop('paused');
  if (pause == true) {
    $('#vid1').get(0).play();
    $('#vid2').get(0).play();
  } else if (pause == false) {
    $('#vid1').get(0).pause();
    $('#vid2').get(0).pause();
  }
}
