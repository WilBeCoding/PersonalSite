
$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

  console.log("  height   " + height);
  console.log("  width    " + width);
  
  $(window).load(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header').addClass("sticky");
      }
      else{
        $('.header').removeClass("sticky");
      }
    });
  });
});

