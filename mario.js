var marioSteps = 1;
setInterval(function() {
  marioSteps++
  if (marioSteps > 2) {
    marioSteps = 0;
  }
  
  if (marioSteps == 1) {
    $('.mario').css('background-position', '0px')
  } else if (marioSteps == 2) {
    $('.mario').css('background-position', '68px')
    $('.mario').css('left', '-8px')
  } else {
    $('.mario').css('background-position', '120px');
    $('.mario').css('left', '4px')
  }
}, 80)

$('html, body').on('keydown', function(e) {
  if (e.keyCode == 32) {
    $('.mario').addClass('mario_jump');
    setTimeout(function() {
      $('.mario').removeClass('mario_jump')
    }, 800)
  }
})