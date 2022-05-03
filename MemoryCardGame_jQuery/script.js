const mieImg = [
  "belgium",
  "belgium",
  "brazil",
  "brazil",
  "canada",
  "canada",
  "france",
  "france",
  "germany",
  "germany",
  "italy",
  "italy",
  "spain",
  "spain",
  "united-kingdom",
  "united-kingdom",
];
// creo una variabile che mi contiene le immagini cliccate
$(document).ready(function () {
  shuffle(mieImg);
  function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = a[currentIndex];
      a[currentIndex] = a[randomIndex];
      a[randomIndex] = temporaryValue;
    }
    return a;
  }

  for (let i = 0; i < mieImg.length; i++) {
    let carta =
      '<div class="images"><img id="' +
      i +
      '" src="img/' +
      mieImg[i] +
      '.png"></img> </div>';
    $(carta).appendTo(".game");
    console.log(carta);
  }

  let openArray = [];
  let images = $(".images");
  var counter = 1;
  let coppieGiuste = [];
  $(images).click(function () {
    $(".mosse").html(counter);
    $(this).addClass("girata");
    $(this).removeClass("images");
    counter++;

    openArray.push($(this).children("img").attr("src"));
    if (openArray.length == 2) {
      if (openArray[0] == openArray[1]) {
        coppieGiuste.push(openArray[0], openArray[1]);
        if (coppieGiuste.length == 16) {
          $(".modal").removeClass("modalClose");
          $(".modal").addClass("modalOpen");
          clearInterval(interval);
        }
        openArray = [];
        let cartaGiusta = $(".girata");
        $(cartaGiusta).addClass("giusta");
        $(cartaGiusta).removeClass("girata");
      } else {
        openArray = [];
        setTimeout(function () {
          let cartaGirata = $(".girata");
          $(cartaGirata).addClass("images");
          $(cartaGirata).removeClass("girata");
        }, 500);
      }
    }
  });

  $(".Restart").click(function () {
    location.reload();
  });

  function startTimer() {
    var s = 0;
    var m = 0;

    interval = setInterval(function () {
      $(".timer").html("Tempo: " + m + " min " + s + " sec");
      s++;
      if (s == 60) {
        m++;
        s = 0;
      }
      if (m == 60) {
        h++;
        m = 0;
      } if (m == 0){
        $("#tempoTrascorso").html( s + " secondi");
      }
      if (m >= 2){
        $("#tempoTrascorso").html(m + " minuti e " + s + " secondi");   //se i minuti sono maggiori o uguali di 2
      }else if(m == 1){
        $("#tempoTrascorso").html(m + " minuto e " + s + " secondi");   //se i minuti sono uguali a 1
      }else{
        $("#tempoTrascorso").html( s + " secondi");   //se i minuti sono 0
      }
    }, 1000);
  }
  startTimer();


  $('#cambiare').click(function () {
    $(document.body).toggleClass('cambiaSfondo');
    $('h1').toggleClass('cambiaCaselle')
    $('.images').toggleClass('cambiaCaselle')
  })
});
// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.

// creo una variabile "images" che contiene il selettore della classe "images".
// così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.

// creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

// prendo a caso un elemento dalla mia lista.

// vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
//images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");

// creo la funzione principale "mostraImg"

// creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.

// ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.

// se non sono due visualizzo l'emoji e la inserisco in "clickImgs".

// se sono uguali azzero la mia lista.

// se sono diverse nascondo le due immagini.
