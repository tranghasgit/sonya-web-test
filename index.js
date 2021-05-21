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
      } else {
        // notAllImagesLoaded()
      }
    }

    // add beads
    if ($(window).width() < 600) {
      addBeads(10,10,8);
    } else {
      addBeads(20,20,14)
    }

    function allImagesLoaded() {
      $("#gallery-popup").hide();
      $("#loading-screen").delay("200").fadeOut("slow");
    }
  //   function notAllImagesLoaded() {
  //     $("#gallery-popup").hide();
  //     $("#loading-screen").delay("200").fadeOut("slow");
  //   }
  //
  // $("#gallery-popup").hide();
  // $("#loading-screen").delay("200").fadeOut("slow");
  //


  // parallax effect
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });


  // image /slider
  var slider = tns({
    container: '.my-slider',
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    },
    slideBy: 1,
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
      $(".tns-liveregion").hide();
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

    // drop down list
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


$(window).resize(function(){
    if ($(window).width() < 600) {
      addBeads(10,10,8);
    } else {
      addBeads(20,20,14)
    }
})

// function add beads to page
function addBeads (bw,bh,bn){
  for (var i = 0; i < bn; i++) {
    var newDiv = "<div class='beads bead-" + i + "'><img src='media/deco/img-" + i + ".png'></div>";

    var randPosLR = Math.floor(Math.random() * ($(window).width() - bw));
    var randPosLH = Math.floor(Math.random() * ($(window).height() - bh));

    $("body").append(newDiv);
    $(".bead-" + i).css({
      "position":"absolute",
      "top": randPosLH,
      "right" : randPosLR,
      "width": bw,
      "height": bh,
      "pointer-events": "none",
    });
  }
}
