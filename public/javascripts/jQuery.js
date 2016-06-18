
$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

  console.log("  height   " + height);
  console.log("  width    " + width);
  
  // $(window).load(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
          $(".testUnderImg").css('visibility','hidden').hide().slideUp();
          $(".testUnderImg1").css('visibility','hidden').hide().slideUp();
          $(".header").addClass("sticky");
          $(".circleImage").addClass("circleImageHeader");
          $(".circleImageHeader").removeClass("circleImage");
          $('.spotifyHide').addClass('spotify');
          $('.spotify').removeClass('spotifyHide')
          $('.spotify').css('display','flex');
          $('.headerName').css('visibility','visible').slideDown();
          $('.headerEmail').css('display','flex');
          $('.headerEmail').css('visibility','visible');
          $('.socialMedia').css('display','flex');
          // $('.followBttn').css('visibility','visible').hide().slideDown();
          // $('.followBttn').css('display', 'flex');
      } else if($(this).scrollTop() <= 1) {
          $(".testUnderImg").css('visibility','visible');
          $(".testUnderImg1").css('visibility','visible');
          $(".testUnderImg").css('display','')
          $(".testUnderImg1").css('display','')
          $(".header").removeClass("sticky");
          $(".circleImageHeader").addClass("circleImage");
          $(".circleImage").removeClass("circleImageHeader");
          $('.spotify').addClass('spotifyHide');
          $('.spotifyHide').removeClass('spotify')
          $('.spotifyHide').css('display','none').hide();
          $('.headerName').css('visibility','hidden');
          $('.headerEmail').css('visibility','hidden');
          $('.socialMedia').css('display','none');
          $('.headerEmail')

        };
      });
});

