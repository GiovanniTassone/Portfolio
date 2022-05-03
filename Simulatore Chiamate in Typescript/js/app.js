document.addEventListener("DOMContentLoaded", function () {
    var User = /** @class */ (function () {
        function User(credito, numeroTelefono, nomeUtente) {
            this.credito = 0;
            this.numeroChiamate = 0;
            this.credito = credito;
            this.numeroTelefono = numeroTelefono;
            this.nomeUtente = nomeUtente;
        }
        User.prototype.ricarica = function (unaRicarica) {
            //ricarica il telefono
            this.credito = this.credito + unaRicarica;
        };
        User.prototype.chiamata = function (minutiDurata) {
            this.numeroChiamate++;
            if ((+minutiDurata / 60 * 0.20) <= this.credito) {
                this.credito -= +minutiDurata / 60 * 0.20;
                this.credito = +this.credito.toFixed(2);
            }
            else {
                alert('Non hai credito, effettua una ricarica per poter chiamare');
                this.numeroChiamate--;
            }
        }; //che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
        // Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino.
        // Si assuma un costo di 0.20 euro per ogni minuto di chiamata,
        User.prototype.numero404 = function (creditoRes) {
            alert("il tuo credito residuo \u00E8: ".concat(creditoRes, " \u20AC"));
        }; //che restituisce il valore della carica disponibile.
        User.prototype.getNumeroChiamate = function () {
            alert("Oggi hai effettuato: ".concat(this.numeroChiamate, " chiamate"));
        }; //che restituisce il valore della variabile d'istanza numeroChiamate.
        User.prototype.azzeraChiamate = function () {
            this.numeroChiamate = 0;
        }; //che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.
        return User;
    }());
    var FirstUser = new User(0, 3506372997, "Kevin");
    var SecondUser = new User(0, 3654003883, "Jhon");
    var ThirdUser = new User(0, 3955751034, "Mauro");
    console.log(FirstUser);
    var telefono = document.querySelector("#numero");
    var dieciEuro = document.querySelector("#dieci");
    var ventiEuro = document.querySelector("#venti");
    var cinqueantaEuro = document.querySelector("#cinquanta");
    var centoEuro = document.querySelector("#cento");
    var login = document.querySelector("#login");
    var logout = document.querySelector("#logout");
    var chiamato = document.querySelector("#numeroChiam");
    var secondi = document.querySelector("#secondiChiam");
    var inoltra = document.querySelector("#inoltraChiam");
    var infoChiam = document.querySelector("#infoChiamate");
    var azzera = document.querySelector("#azzeraChiam");
    var titoloRicariche = document.querySelector("#ricarica");
    var cronologia = document.querySelector("#cronologia");
    var para = document.createElement("p");
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        login.addEventListener("click", function () {
            if (+telefono.value === FirstUser.numeroTelefono || +telefono.value === SecondUser.numeroTelefono || +telefono.value === ThirdUser.numeroTelefono) {
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
            }
            else {
                alert('Non sei nostro cliente');
            }
        });
    }
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        logout.addEventListener("click", function () {
            if (dieciEuro.style.display === 'inline-block') {
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
            para.innerText = "Hai aggiunto 10 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(FirstUser.credito, " euro");
            cronologia.prepend(para);
            console.log(FirstUser);
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(10);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 10 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(SecondUser.credito, " euro");
            cronologia.prepend(para);
            console.log(SecondUser);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(10);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 10 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(ThirdUser.credito, " euro");
            cronologia.prepend(para);
            console.log(ThirdUser);
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    ventiEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(20);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 20 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(FirstUser.credito, " euro");
            cronologia.prepend(para);
            console.log(FirstUser);
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(20);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 20 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(SecondUser.credito, " euro");
            cronologia.prepend(para);
            console.log(SecondUser);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(20);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 20 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(ThirdUser.credito, " euro");
            cronologia.prepend(para);
            console.log(ThirdUser);
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    cinqueantaEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(50);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 50 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(FirstUser.credito, " euro");
            cronologia.prepend(para);
            console.log(FirstUser);
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(50);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 50 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(SecondUser.credito, " euro");
            cronologia.prepend(para);
            console.log(SecondUser);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(50);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 50 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(ThirdUser.credito, " euro");
            cronologia.prepend(para);
            console.log(ThirdUser);
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    centoEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(100);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 100 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(FirstUser.credito, " euro");
            cronologia.prepend(para);
            console.log(FirstUser);
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(100);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 100 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(SecondUser.credito, " euro");
            cronologia.prepend(para);
            console.log(SecondUser);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(100);
            para = document.createElement("p");
            para.innerText = "Hai aggiunto 100 euro al tuo saldo! Ora il tuo saldo \u00E8 di ".concat(ThirdUser.credito, " euro");
            cronologia.prepend(para);
            console.log(ThirdUser);
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    inoltra.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value !== 404 && +chiamato.value >= 0) {
            FirstUser.chiamata(Math.abs(+secondi.value));
            para = document.createElement("p");
            para.innerText = "Chiamata inoltrata con successo!";
            cronologia.prepend(para);
            console.log(FirstUser);
        }
        else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value !== 404 && +chiamato.value >= 0) {
            SecondUser.chiamata(Math.abs(+secondi.value));
            para = document.createElement("p");
            para.innerText = "Chiamata inoltrata con successo!";
            cronologia.prepend(para);
            console.log(SecondUser);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value !== 404 && +chiamato.value >= 0) {
            ThirdUser.chiamata(Math.abs(+secondi.value));
            para = document.createElement("p");
            para.innerText = "Chiamata inoltrata con successo!";
            cronologia.prepend(para);
            console.log(ThirdUser);
        }
        else if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value === 404) {
            FirstUser.numero404(FirstUser.credito);
            para = document.createElement("p");
            para.innerText = "Il tuo credito residuo \u00E8 di ".concat(FirstUser.credito, " euro");
            cronologia.prepend(para);
        }
        else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value === 404) {
            SecondUser.numero404(SecondUser.credito);
            para = document.createElement("p");
            para.innerText = "Il tuo credito residuo \u00E8 di ".concat(SecondUser.credito, " euro");
            cronologia.prepend(para);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value === 404) {
            ThirdUser.numero404(ThirdUser.credito);
            para = document.createElement("p");
            para.innerText = "Il tuo credito residuo \u00E8 di ".concat(ThirdUser.credito, " euro");
            cronologia.prepend(para);
        }
        else {
            alert("Chiama un numero valido");
        }
    });
    infoChiam.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            var para_1 = document.createElement("p");
            para_1.innerText = "Hai effettuato ".concat(FirstUser.numeroChiamate, " chiamate");
            cronologia.prepend(para_1);
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            var para_2 = document.createElement("p");
            para_2.innerText = "Hai effettuato ".concat(SecondUser.numeroChiamate, " chiamate");
            cronologia.prepend(para_2);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            var para_3 = document.createElement("p");
            para_3.innerText = "Hai effettuato ".concat(ThirdUser.numeroChiamate, " chiamate");
            cronologia.prepend(para_3);
        }
    });
    azzera.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            var para_4 = document.createElement("p");
            para_4.innerText = "Hai azzerato le chiamate";
            cronologia.prepend(para_4);
            FirstUser.azzeraChiamate();
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            var para_5 = document.createElement("p");
            para_5.innerText = "Hai azzerato le chiamate";
            cronologia.prepend(para_5);
            SecondUser.azzeraChiamate();
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            var para_6 = document.createElement("p");
            para_6.innerText = "Hai azzerato le chiamate";
            cronologia.prepend(para_6);
            ThirdUser.azzeraChiamate();
        }
    });
});
