$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    console.log("smooth scroll should work")
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      var temp = this.hash.slice(1); // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var h = document.getElementById('1');
          var a = document.getElementById('2');
          var p = document.getElementById('3');
          var c = document.getElementById('4');
          switch (temp) {
            case 'home':
              console.log('grr');
              h.style.color = '#93D5D2';
              a.style.color = '#222';
              p.style.color = '#222';
              c.style.color = '#222';

              break;
            case 'aboutme':
              console.log('workit');
              h.style.color = '#222';
              a.style.color = '#93D5D2';
              p.style.color = '#222';
              c.style.color = '#222';
              break;
            case 'projects':
              h.style.color = '#222';
              a.style.color = '#222';
              p.style.color = '#93D5D2';
              c.style.color = '#222';
              break;
            case 'contact':
              h.style.color = '#222';
              a.style.color = '#222';
              p.style.color = '#222';
              c.style.color = '#93D5D2';
              break;
          }
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
