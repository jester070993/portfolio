$(document).foundation();


// jQuery navigation animation on scroll 
$( () => {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });


  var tStart = 100 // Start transition 100px from top
  , tEnd = 500   // End at 500px
  , cStart =  [227, 225, 227] // Gold
  , cEnd = [52, 50, 57]   // Lime
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});
  
  