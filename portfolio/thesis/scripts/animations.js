var hello = ()=>{
  return 'Hello world'
}
 // this is where I will put some of the animations
function scrollDirection(callback){
  var dist = 0;
  var scrollState;
  $(window).scroll(ev=>{
    var newDist = $(window).scrollTop();
    if(newDist>dist && scrollState != "down"){
      scrollState = "down"
      callback(scrollState)
    }
    if(newDist<dist && scrollState != "up"){
      console.log("Scrolled Up");
      scrollState = "up"
      callback(scrollState)
    }
    dist = $(window).scrollTop();
  } )
  setTimeout(()=>{
    scrollState = ""
  }, 100)
}

function bounceDown(target){
  $(target).animate({
    opacity: 0.75,
    marginTop: "5px"
  }, 220, function() {
    setTimeout(bounceReturn(target), 5000)
    // Animation complete.
  });
}
function bounceUp(target){
  $(target).animate({
    opacity: 0.75,
    marginTop: "-80px"
  }, 220);
}
function bounceReturn(target){
  $(target).animate({
    opacity: 1,
    marginTop: "0px"
  }, 120, function() {
    // Animation complete.
  });
}
