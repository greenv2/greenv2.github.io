//scrollreveal
var boxReveal = {
delay    : 300,
mobile : false
//distance : '50px',
//reset :true
// rotate   : { z: 6 }
};

window.sr = ScrollReveal();
sr.reveal('.pages',boxReveal);

//imac gallery
const sShow = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });

  document.querySelector('.prev').addEventListener('click', () => sShow.prev());
  document.querySelector('.next').addEventListener('click', () => sShow.next());

//Modal Setup for Gallery
  var modal = document.getElementById('Trentoniana');

  function viewModal(modal) {
    console.log('function!!!');
    switch (modal) {
      case 1: //trentoniana
        modal = document.getElementById('Trentoniana');
        console.log('Trenton!!!');

        break;
      case 2: //handimations
        console.log('handssssn!!!');
        modal = document.getElementById('Handimations');

        break;
      case 3:
        modal = document.getElementById('Hyperfocus');
        break; //hyperfocus
      case 4:
        modal = document.getElementById('ISU');
        break; //isu reu
      case 5:
        modal = document.getElementById('PaperPlanes');
        break;
    }
    modal.style.display = "block";

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    console.log("made it to the end");
  }


  function closeIt(modal) {
    switch (modal) {
      case 1: //trentoniana
        modal = document.getElementById('Trentoniana');
        console.log('Trenton!!!');

        break;
      case 2: //handimations
        console.log('handssssn!!!');
        modal = document.getElementById('Handimations');

        break;
      case 3:
        modal = document.getElementById('Hyperfocus');
        break; //hyperfocus
      case 4:
        modal = document.getElementById('ISU');
        break; //isu reu
      case 5:
        modal = document.getElementById('PaperPlanes');
        break;
    }
    modal.style.display = "none";

  }
