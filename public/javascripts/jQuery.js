
$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

  console.log("  height   " + height);
  console.log("  width    " + width);
  
  $(window).load(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $(".testUnderImg").remove();
        $(".testUnderImg1").remove();
        $(".header").addClass("sticky");
        $(".circleImage").addClass("circleImageHeader");
        $('.spotify').css('visibility','visible').hide().slideDown();
        $('.spotify').css('display','flex');
        // $('.twitterheader').css('visibility','visible').hide().slideDown();
        // $('.twitterheader').css('display','flex');
        // $('.followBttn').css('visibility','visible').hide().slideDown();
        // $('.followBttn').css('display', 'flex');
      }
      else{
        $(".header").removeClass("sticky");
        $(".circleImage").removeClass("circleImageHeader");
      }
    });
  });
});

