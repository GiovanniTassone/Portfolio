// DOM Objects
const mainScreen = document.querySelector('.main-screen'); //associamo la variabile allo schermo dove visualizziamo il pokemon e i suoi dati
const pokeName = document.querySelector('.poke-name'); //associamo la variabile al nome del pokemon
const pokeId = document.querySelector('.poke-id'); //associamo la variabile al numero del pokemon
const pokeFrontImage = document.querySelector('.poke-front-image');//associamo la variabile all'immagine frontale del pokemon
const pokeBackImage = document.querySelector('.poke-back-image');//associamo la variabile all'immagine retro del pokemon
const pokeTypeOne = document.querySelector('.poke-type-one');//associamo la variabile al tipo del pokemon
const pokeTypeTwo = document.querySelector('.poke-type-two');//associamo la variabile al secondo tipo del pokemon
const pokeWeight = document.querySelector('.poke-weight');//associamo la variabile al peso del pokemon
const pokeHeight = document.querySelector('.poke-height');//associamo la variabile all'altezza del pokemon
const pokeListItems = document.querySelectorAll('.list-item');//associamo la variabile all''interno dei div 'list-item'
const leftButton = document.querySelector('.left-button'); //associamo la variabile al bottone 'prev'
const rightButton = document.querySelector('.right-button');//associamo la variabile al bottone 'nect'



let TYPES = [
  'normal', 'fighting', 'flying',       //creo un array con tutti i tipi dei pokemon
  'poison', 'ground', 'rock',
  'bug', 'ghost', 'steel',
  'fire', 'water', 'grass',
  'electric', 'psychic', 'ice',
  'dragon', 'dark', 'fairy'
];
let prevUrl = null; //associo un valore 'null' all'url del pokemon precedente
let nextUrl = null; //associo un valore 'null' all'url del pokemon successivo



const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

const resetScreen = () => {
  mainScreen.classList.remove('hide');
  for (const type of TYPES) {
    mainScreen.classList.remove(type);
  }
};

const fetchPokeList = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const { results, previous, next } = data;
      prevUrl = previous; //associo il parametro 'previous' all'url del pokemon precedente
      nextUrl = next; //associo il parametro 'next' all'url del pokemon successivo

      for (let i = 0; i < pokeListItems.length ; i++) {   //creo un ciclo for che mi permette di generare i pokemon
        const pokeListItem = pokeListItems[i];
        const resultData = results[i];

        if (resultData) {
          const { name, url } = resultData;   //per ogni risultato generato dal ciclo for vado a visualizzare il nome e l'url del pokemon
          const urlArray = url.split('/');    //mi separa ogni url in modo diverso da ogni pokemon
          const id = urlArray[urlArray.length - 2];
          pokeListItem.textContent = id + '. ' + capitalize(name); //numero i pokemon in base al loro ordine nel pokedex
        } else {
          pokeListItem.textContent = '';
        }
      }
    });
};

const fetchPokeData = id => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)  //mi permette di modificare l'API tramite il numero dell'ID del pokemon
    .then(res => res.json())
    .then(data => {
      resetScreen();

      const dataTypes = data['types'];
      const dataFirstType = dataTypes[0];
      const dataSecondType = dataTypes[1];
      pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
      if (dataSecondType) {
        pokeTypeTwo.classList.remove('hide');
        pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
      } else {
        pokeTypeTwo.classList.add('hide');
        pokeTypeTwo.textContent = '';
      }
      mainScreen.classList.add(dataFirstType['type']['name']);

      pokeName.textContent = capitalize(data['name']);
      pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
      pokeWeight.textContent = data['weight'];
      pokeHeight.textContent = data['height'];
      pokeFrontImage.src = data['sprites']['front_default'];
      pokeBackImage.src = data['sprites']['back_default'];
    });
};

const handleLeftButtonClick = () => {
  if (prevUrl) {
    fetchPokeList(prevUrl);
  }
};

const handleRightButtonClick = () => {
  if (nextUrl) {
    fetchPokeList(nextUrl);
  }
};

const handleListItemClick = (e) => {
  if (!e.target) return;

  const listItem = e.target;
  if (!listItem.textContent) return;

  const id = listItem.textContent.split('.')[0];
  fetchPokeData(id);
};



leftButton.addEventListener('click', handleLeftButtonClick);
rightButton.addEventListener('click', handleRightButtonClick);
for (const pokeListItem of pokeListItems) {
  pokeListItem.addEventListener('click', handleListItemClick);
}


fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

let bottoneStart = document.querySelector('#rimuoviIntro')
let intro = document.querySelector('#intro')
function rimuoviIntro() {
  intro.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', (event) => {
  let player = document.querySelector('#player')
  function Set_vol1() { 
  player.volume = 1;
  } 
  Set_vol1();
  console.log(player);
})

