
$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

  console.log("  height   " + height);
  console.log("  width    " + width);
  
  $(window).load(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $(".testUnderImg > h1").remove();
        $(".testUnderImg1 > ul").remove();
        $('.header').addClass("sticky");
        $('.circleImage').addClass('circleImageHeader')
      }
      else{
        $('.header').removeClass("sticky");
        $('.circleImage').removeClass('circleImageHeader')
        $(".testUnderImg > h1").text("Wilson Rondini");
        $(".testUnderImg1 > ul").remove();

      }
    });
  });
});

