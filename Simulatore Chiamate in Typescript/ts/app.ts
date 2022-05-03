document.addEventListener("DOMContentLoaded", function () {
  interface Smartphone {
    credito: number;
    numeroChiamate: number;
  }
  class User implements Smartphone {
    credito = 0;
    numeroChiamate = 0;
    numeroTelefono: number;
    nomeUtente: string;

    constructor(credito: number, numeroTelefono: number, nomeUtente: string) {
      this.credito = credito;
      this.numeroTelefono = numeroTelefono;
      this.nomeUtente = nomeUtente;
    }

    public ricarica(unaRicarica: number): void {
      //ricarica il telefono
      this.credito = this.credito + unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.numeroChiamate++;
        if((+minutiDurata / 60 * 0.20) <= this.credito) {
            this.credito -= +minutiDurata / 60 * 0.20;
            this.credito = +this.credito.toFixed(2);
        }else{
            alert('Non hai credito, effettua una ricarica per poter chiamare')
            this.numeroChiamate--;
        }
    } //che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    // Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino.
    // Si assuma un costo di 0.20 euro per ogni minuto di chiamata,

    public numero404(creditoRes: number): void{
        alert(`il tuo credito residuo è: ${creditoRes} €`)
    } //che restituisce il valore della carica disponibile.

    public getNumeroChiamate(): void{
        alert (`Oggi hai effettuato: ${this.numeroChiamate} chiamate`)
    } //che restituisce il valore della variabile d'istanza numeroChiamate.

    public azzeraChiamate(): void{
        this.numeroChiamate = 0
    } //che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.
  }

  let FirstUser = new User(0, 3506372997, "Kevin");
  let SecondUser = new User(0, 3654003883, "Jhon");
  let ThirdUser = new User(0, 3955751034, "Mauro");
  console.log(FirstUser);

  let telefono = <HTMLInputElement>document.querySelector("#numero");

  let dieciEuro = <HTMLElement>document.querySelector("#dieci");
  let ventiEuro = <HTMLElement>document.querySelector("#venti");
  let cinqueantaEuro = <HTMLElement>document.querySelector("#cinquanta");
  let centoEuro = <HTMLElement>document.querySelector("#cento");
  let login = <HTMLElement>document.querySelector("#login");
  let logout = <HTMLElement>document.querySelector("#logout");
  let chiamato = <HTMLInputElement>document.querySelector("#numeroChiam");
  let secondi = <HTMLInputElement>document.querySelector("#secondiChiam");
  let inoltra = <HTMLElement>document.querySelector("#inoltraChiam");
  let infoChiam = <HTMLElement>document.querySelector("#infoChiamate");
  let azzera = <HTMLElement>document.querySelector("#azzeraChiam");
  let titoloRicariche = <HTMLElement>document.querySelector("#ricarica");
  let cronologia = <HTMLElement>document.querySelector("#cronologia");
  let para = document.createElement("p");

  if (logout !== null && login !== null ||dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
    login.addEventListener("click", function () {
      if (+telefono.value === FirstUser.numeroTelefono || +telefono.value === SecondUser.numeroTelefono || +telefono.value === ThirdUser.numeroTelefono){
        dieciEuro.style.display = 'inline-block';
        ventiEuro.style.display = 'inline-block';
        cinqueantaEuro.style.display = 'inline-block';
        centoEuro.style.display = 'inline-block';
        login.style.display = 'none';
        telefono.disabled = true;
        logout.style.display = 'inline-block';
        chiamato.style.display = 'block';
        secondi.style.display = 'block';
        inoltra.style.display = 'block';
        infoChiam.style.display = 'inline-block';
        azzera.style.display = 'inline-block';
        titoloRicariche.style.display = 'inline-block';
    }else{
        alert ('Non sei nostro cliente')
    }
    });
  }
  if (logout !== null && login !== null ||dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
    logout.addEventListener("click", function () {
      if (dieciEuro.style.display === 'inline-block'){
        dieciEuro.style.display = 'none';
        ventiEuro.style.display = 'none';
        cinqueantaEuro.style.display = 'none';
        centoEuro.style.display = 'none';
        login.style.display = 'inline-block';
        telefono.disabled = false;
        logout.style.display = 'none';
        chiamato.style.display = 'none';
        secondi.style.display = 'none';
        inoltra.style.display = 'none';
        infoChiam.style.display = 'none';
        azzera.style.display = 'none';
        titoloRicariche.style.display = 'none';
        telefono.value = '';
        cronologia.innerHTML = '';
    }
    });
  }
  dieciEuro.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.ricarica(10);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 10 euro al tuo saldo! Ora il tuo saldo è di ${FirstUser.credito} euro`;
      cronologia.prepend(para);
      console.log(FirstUser);
    } else if (+telefono.value === SecondUser.numeroTelefono) {
      SecondUser.ricarica(10);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 10 euro al tuo saldo! Ora il tuo saldo è di ${SecondUser.credito} euro`;
      cronologia.prepend(para);
      console.log(SecondUser);
    } else if (+telefono.value === ThirdUser.numeroTelefono) {
      ThirdUser.ricarica(10);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 10 euro al tuo saldo! Ora il tuo saldo è di ${ThirdUser.credito} euro`;
      cronologia.prepend(para);
      console.log(ThirdUser);
    } else {
      alert("Non sei un nostro cliente");
    }
  });
  ventiEuro.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.ricarica(20);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 20 euro al tuo saldo! Ora il tuo saldo è di ${FirstUser.credito} euro`;
      cronologia.prepend(para);
      console.log(FirstUser);
    } else if (+telefono.value === SecondUser.numeroTelefono) {
      SecondUser.ricarica(20);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 20 euro al tuo saldo! Ora il tuo saldo è di ${SecondUser.credito} euro`;
      cronologia.prepend(para);
      console.log(SecondUser);
    } else if (+telefono.value === ThirdUser.numeroTelefono) {
      ThirdUser.ricarica(20);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 20 euro al tuo saldo! Ora il tuo saldo è di ${ThirdUser.credito} euro`;
      cronologia.prepend(para);
      console.log(ThirdUser);
    } else {
      alert("Non sei un nostro cliente");
    }
  });
  cinqueantaEuro.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.ricarica(50);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 50 euro al tuo saldo! Ora il tuo saldo è di ${FirstUser.credito} euro`;
      cronologia.prepend(para);
      console.log(FirstUser);
    } else if (+telefono.value === SecondUser.numeroTelefono) {
      SecondUser.ricarica(50);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 50 euro al tuo saldo! Ora il tuo saldo è di ${SecondUser.credito} euro`;
      cronologia.prepend(para);
      console.log(SecondUser);
    } else if (+telefono.value === ThirdUser.numeroTelefono) {
      ThirdUser.ricarica(50);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 50 euro al tuo saldo! Ora il tuo saldo è di ${ThirdUser.credito} euro`;
      cronologia.prepend(para);
      console.log(ThirdUser);
    } else {
      alert("Non sei un nostro cliente");
    }
  });
  centoEuro.addEventListener("click", function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      FirstUser.ricarica(100);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 100 euro al tuo saldo! Ora il tuo saldo è di ${FirstUser.credito} euro`;
      cronologia.prepend(para);
      console.log(FirstUser);
    } else if (+telefono.value === SecondUser.numeroTelefono) {
      SecondUser.ricarica(100);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 100 euro al tuo saldo! Ora il tuo saldo è di ${SecondUser.credito} euro`;
      cronologia.prepend(para);
      console.log(SecondUser);
    } else if (+telefono.value === ThirdUser.numeroTelefono) {
      ThirdUser.ricarica(100);
      para = document.createElement("p");
      para.innerText = `Hai aggiunto 100 euro al tuo saldo! Ora il tuo saldo è di ${ThirdUser.credito} euro`;
      cronologia.prepend(para);
      console.log(ThirdUser);
    } else {
      alert("Non sei un nostro cliente");
    }
  });

  inoltra.addEventListener('click', function (){
      if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value !== 404 && +chiamato.value >= 0) {
      FirstUser.chiamata(Math.abs(+secondi.value))
      para = document.createElement("p");
      para.innerText = `Chiamata inoltrata con successo!`;
      cronologia.prepend(para );
      console.log(FirstUser);
    } else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value !== 404 && +chiamato.value >= 0) {
      SecondUser.chiamata(Math.abs(+secondi.value));
      para = document.createElement("p");
      para.innerText = `Chiamata inoltrata con successo!`;
      cronologia.prepend(para );
      console.log(SecondUser);
    } else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value !== 404 && +chiamato.value >= 0) {
      ThirdUser.chiamata(Math.abs(+secondi.value))
      para = document.createElement("p");
      para.innerText = `Chiamata inoltrata con successo!`;
      cronologia.prepend(para );
      console.log(ThirdUser);
    }else if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value === 404){
      FirstUser.numero404(FirstUser.credito)
      para = document.createElement("p");
      para.innerText = `Il tuo credito residuo è di ${FirstUser.credito} euro`;
      cronologia.prepend(para);
    }else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value === 404){
      SecondUser.numero404(SecondUser.credito)
      para = document.createElement("p");
      para.innerText = `Il tuo credito residuo è di ${SecondUser.credito} euro`;
      cronologia.prepend(para);
    }else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value === 404){
      ThirdUser.numero404(ThirdUser.credito)
      para = document.createElement("p");
      para.innerText = `Il tuo credito residuo è di ${ThirdUser.credito} euro`;
      cronologia.prepend(para);
    }else {
      alert("Chiama un numero valido")
    }
  })
  infoChiam.addEventListener('click', function () {
    if (+telefono.value === FirstUser.numeroTelefono) {
      let para = document.createElement("p");
      para.innerText = `Hai effettuato ${FirstUser.numeroChiamate} chiamate`;
      cronologia.prepend(para);
    }else if(+telefono.value === SecondUser.numeroTelefono){
      let para = document.createElement("p");
      para.innerText = `Hai effettuato ${SecondUser.numeroChiamate} chiamate`;
      cronologia.prepend(para);
    }else if(+telefono.value === ThirdUser.numeroTelefono){
      let para = document.createElement("p");
      para.innerText = `Hai effettuato ${ThirdUser.numeroChiamate} chiamate`;
      cronologia.prepend(para);
    }
    })
    
    azzera.addEventListener("click", function () {
      if (+telefono.value === FirstUser.numeroTelefono) {
        let para = document.createElement("p");
        para.innerText = `Hai azzerato le chiamate`;
        cronologia.prepend(para);
        FirstUser.azzeraChiamate();
      } else if (+telefono.value === SecondUser.numeroTelefono) {
        let para = document.createElement("p");
        para.innerText = `Hai azzerato le chiamate`;
        cronologia.prepend(para);
        SecondUser.azzeraChiamate();
      } else if (+telefono.value === ThirdUser.numeroTelefono) {
        let para = document.createElement("p");
        para.innerText = `Hai azzerato le chiamate`;
        cronologia.prepend(para);
        ThirdUser.azzeraChiamate();
      }
    });
});
