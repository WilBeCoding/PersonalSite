$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

  console.log('  height   ' + height);
  console.log('  width    ' + width);

  $("#spotify").hover( function(){
    $("#spotify").animate({height: 700},
     "slow",
     "swing");
    // $('#spotify').height(700);
    // $('#spotify').slideDown('slow');
  });

  $("#spotify").mouseout( function(){
    $("#spotify").animate({height: 98}, "slow");
 });

});