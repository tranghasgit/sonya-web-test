$(window).scroll(function() {
  sessionStorage.scrollTop = $(this).scrollTop();
  // sessionStorage.scrollLeft = $(this).scrollLeft();
});

$(document).ready(function(){
  // keep same scroll position after reload
  if (sessionStorage.scrollTop != "undefined") {
    $(window).scrollTop(sessionStorage.scrollTop);
  }
  // if (sessionStorage.scrollLeft != "undefined") {
  //   $(window).scrollLeft(sessionStorage.scrollLeft);
  // }

  // parallax effect
  var rellax = new Rellax('.parallax-item');

  // randomize image left position based on 4 anchor points
  var arr = [0,1/4,2/4,3/4];
  $(".scroll-item img").each(function(){
    const winW = $(window).width();
    const itemW = $(this).width();
    const offset = (winW-itemW) * arr[Math.floor(Math.random() * arr.length)];
    $(this).css({
      "margin-left" : offset
    });

  }).click(function(){
    $('iframe[id="gallery-popup"]').remove();
    $(".close-button").remove();
    // show gallery view on img click
    var iframe = "<iframe id='gallery-popup' src='gallery.html' width='100%' height='100%'></iframe>";
    var closeButton = "<div class='close-button'><p>close</p></div>";
    $("body").append(iframe).hide().delay(200).fadeIn(600);
    $("body").append(closeButton).hide().delay(200).fadeIn(600);
    $('body').css({'overflow':'hidden'});
    $(document).bind('scroll',function () {
     window.scrollTo(0,0);
     // $(window).scrollTop(sessionStorage.scrollTop);
    });
    $(".close-button").click(function(){
      console.log('click');
      $('iframe[id="gallery-popup"]').fadeOut();
      $(this).fadeOut();
      $(document).unbind('scroll');
      // $('body').css({'overflow':'visible'});
    });
  });



  // add beads to page
  const beadsSet1 = 4;
  for (var i = 0; i < beadsSet1; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 100;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "right": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }
  const beadsSet2 = 8;
  for (var i = beadsSet1; i < beadsSet2; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 800;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "left": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }
  const beadsSet3 = 10;
  for (var i = beadsSet2; i < beadsSet3; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 2600;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "left": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }
  const beadsSet4 = 16;
  for (var i = beadsSet3; i < beadsSet4; i++) {
    var newDiv = "<div class='beads bead-"+i+"'><img src='media/deco/img-"+i+".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 2600;

    $("body").append(newDiv);
    $(".bead-"+i).css({
      "position":"absolute",
      "top": i * beadH + beadsOffsetY,
      "right": 0,
      "width": beadW,
      "height": beadH,
      // "background-color":"#000"
    });
  }










});
