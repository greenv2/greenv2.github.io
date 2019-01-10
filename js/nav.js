$(document).scroll(function() {
      var onHome = $('#home').visible( true );
      var onAbout = $('#aboutme').visible( true );
      var onProj= $('#projects').visible( true );
      var onContact = $('#contact').visible( true );

      console.log(onHome);

      var h = document.getElementById('1');
      var a = document.getElementById('2');
      var p = document.getElementById('3');
      var c = document.getElementById('4');

      if(onHome){
        console.log('onhome');
          h.style.color = '#93D5D2';
          a.style.color = '#222';
          p.style.color = '#222';
          c.style.color = '#222';

      }else if(onAbout){
        console.log('onabout');
          h.style.color = '#222';
          a.style.color = '#93D5D2';
          p.style.color = '#222';
          c.style.color = '#222';
      }else if(onProj){
        console.log('on proj');
          h.style.color = '#222';
          a.style.color = '#222';
          p.style.color = '#93D5D2';
          c.style.color = '#222';
      }else if(onContact){
        console.log('on contact');
          h.style.color = '#222';
          a.style.color = '#222';
          p.style.color = '#222';
          c.style.color = '#93D5D2';
      }

});
