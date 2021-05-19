$(document).ready(function(){

  // IMPROVE IMAGE LOADING and loading screen
  // Images loaded is zero because we're going to process a new set of images.
    var imagesLoaded = 0
    // Total images is still the total number of <img> elements on the page.
    var totalImages = $("img").length;

    // Step through each image in the DOM, clone it, attach an onload event
    // listener, then set its source to the source of the original image. When
    // that new image has loaded, fire the imageLoaded() callback.
    $("img").each(function (idx, img) {
      $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"))
    })

    // Do exactly as we had before -- increment the loaded count and if all are
    // loaded, call the allImagesLoaded() function.
    function imageLoaded() {
      imagesLoaded++
      if (imagesLoaded == totalImages) {
        allImagesLoaded()
      }
    }

    function allImagesLoaded() {
      $("#gallery-popup").hide();
      $("#loading-screen").delay("200").fadeOut("slow");
    }

  $("#loading-screen").click(function(){
    $(this).fadeOut();
  });


  // add beads to page
  const beadsSet1 = 14;
  for (var i = 0; i < beadsSet1; i++) {
    var newDiv = "<div class='beads bead-" + i + "'><img src='media/deco/img-" + i + ".png'></div>";
    const beadW = 50;
    const beadH = 50;
    const beadsOffsetY = 100;

    var posLR = ["left","right"];
    var randPosLR = Math.floor(Math.random() * ($(window).width() - beadW));
    var randPosLH = Math.floor(Math.random() * ($("#scroll-wrapper").height() - beadH));
    var xPos = 50 + 80 * Math.sin((i / 80) * 5 * Math.PI);

    $("body").append(newDiv);
    $(".bead-" + i).css({
      "position":"absolute",
      "top": randPosLH,
      "right" : randPosLR,
      "width": beadW,
      "height": beadH,
    });
  }


  // parallax effect
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });


  // image slider
  var slider = tns({
    container: '.my-slider',
    items: 1,
    "responsive": {
      "600": {
        "items": 3,
        "edgePadding": 50,
        "gutter": 10,
      },
      // "780": {
      //   "items": 5
      // }
    },
    slideBy: 1,
    mouseDrag: false,
    arrowKeys: true,
    controls: false,
    nav: false,
    center: true,
    "edgePadding": 0,
    "lazyload": true,
    autoplay: false
  });

    $(".scroll-item").click(function(){
      var i = $(this).data('index');
      slider.goTo(i);
      $("[data-target="+i+"]").css({"opacity" : 1,});
      $("#gallery-popup").fadeIn("slow");
      $(".close-button").fadeIn("slow");
      $("[data-target]").click(function(){
        $(this).animate({"opacity" : 1,});
      });
    });
    $(".close-button").click(function(){
      $("#gallery-popup").fadeOut("slow");
    });


  $(".dropdown-info-content, .dropdown-about-content, .dropdown-contact-content").hide();
  $(".dropdown-info p:first-child").click(function(ev){
    ev.preventDefault();
    $(".dropdown-info-content").slideToggle("slow");
  });

  $(".dropdown-about p:first-child").click(function(e){
    e.preventDefault();
    $(".dropdown-about-content").slideToggle("slow");
  });

  $(".dropdown-contact p:first-child").click(function(eve){
    eve.preventDefault();
    $(".dropdown-contact-content").slideToggle("slow");
  });

// Ending of document ready function
});
