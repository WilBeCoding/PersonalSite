
$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();
  
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
          $('.socialMedia').css('display','flex');
          $('.socialMediaIcons').css('display','flex').show();
          $('.headerName').css('visibility','visible').slideDown();
          $('.headerEmail').css('display','flex');
          $('.headerEmail').css('visibility','visible');
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
          // $('.socialMediaIcons').css('display','none');
          // $('.socialMediaIcons').css('visibility','visible');
        };
      });

    $(window).scroll(function() { 
      if($(window).scrollTop() + $(window).height() == $(document).height()) { 

      } 
    });


    // $('.github').on('hover', function(){
    //   console.log('Does this trigger?')
    // })

    $('.linkedIn').on('click', function(){
      window.open('https://www.linkedin.com/in/wilsonrondiniiv', '_blank');
    })


    $('.github').on('click', function(){
      window.open('https://github.com/WilBeCoding', '_blank');
    })
});