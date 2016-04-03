$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

  // console.log('  height   ' + height);
  // console.log('  width    ' + width);

  $("#spotify").hover( function(){
    console.log("Triggers")
    $("#spotify").animate({
      height: 540, 
    }, 1000,
     function(){
      $('.followBttn').removeClass("hidden");
      $(this).unbind('mouseenter mouseleave')
     })
    return false
     // function(){
     //  position:fixed;
     // });
    // $('#spotify').height(700);
    // $('#spotify').slideDown('slow');
  });

  $("#spotify").mouseout( function(){
    $("#spotify").animate({
      height: 98
    }, 1000,
     function(){
      $('.followBttn').addClass("hidden");
      $(this).bind('mouseenter mouseleave')
      // position: static;
     });
 });

});