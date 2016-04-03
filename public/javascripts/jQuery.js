$(document).ready(function() {
  var height = $(".header").height();
  var width = $(".header").width();

mouseOutSpotify = false;
  // console.log('  height   ' + height);
  // console.log('  width    ' + width);

  // $("#spotify").hover( function(){
  //   if(mouseOutSpotify == true){
  //     $(this).bind('mouseenter mouseleave');
  //   }
  //   console.log("Triggers")
  //   $("#spotify").animate({
  //     height: 540, 
  //   }, 1000,
  //    function(){
  //     $(this).unbind('mouseenter mouseleave')
  //     console.log(this)
  //    })
  //   return false
  //    // function(){
  //    //  position:fixed;
  //    // });
  //   // $('#spotify').height(700);
  //   // $('#spotify').slideDown('slow');
  // });

 //  $("#spotify").mouseout( function(){
 //    $("#spotify").animate({
 //      height: 98
 //    }, 1000,
 //     function(){
      // $('.followBttn').addClass("hidden");
 //      mouseOutSpotify = true;
 //      console.log(this)
 //      // position: static;
 //     });
 // });

     // $('#spotify').hover(function(){
     //    $(this).addClass("no-flick");
     //    $(this).height(540);
     //    $(this).removeClass("slideOutUp animated")
     //    $(this).addClass("slideInDown animated");
     //    $('.followBttn').removeClass("hidden");
     // }); // <-- this comma is important. 
 //the anonymous function after this will run on mouse out
     // function(){
     //  var $minHeight = 98;
     //  var $spotifyHeight = $('#spotify').height();
     //  console.log($spotifyHeight)
     //  $(this).clearQueue().stop(true,false).slideUp("slow");
     //  if($minHeight == $spotifyHeight) {
     //    $(this).stop();
     //    console.log("height callback")
     //  }
     // });
  // $("#spotify").mouseout(function(){
  //   $(this).height(98);
  //   $(this).removeClass("slideInDown animated");
  //   $(this).addClass("slideOutUp animated");
  //   $('.followBttn').addClass("hidden");
  // })
});