const cards = [
    {
        "id": 1,
        "media": "1",
    },
    {
        "id": 1,
        "media": "1",
    },

    {
        "id": 2,     
        "media": "2",
    },
    {
        "id": 2,     
        "media": "2",
    },

    {
        "id": 3,
        "media": "3",
    },
    {
        "id": 3,
        "media": "3",
    },

    {
        "id": 4,   
        "media": "4",
    },
    {
        "id": 4,   
        "media": "4",
    },

    {
        "id": 5,   
        "media": "5"
    },
    {
        "id": 5,   
        "media": "5"
    },

    {
        "id": 6,    
        "media": "6",
    },
    {
        "id": 6,    
        "media": "6",
    },

];
console.log(cards[0]);
const gridGame = document.querySelector(".grid-game");
const square = document.querySelector(".square");


//Creo 12 div e li appendo alla griglia, 
//il contenuto dei div dev'essere id cards


//Ciclo che itera nell'array cards e crea un div contenente
//id delle cards
for(let i = 0; i <= cards.length; i++){ 
    let squareRandom = cards[i];
    const newSquare = createDiv(squareRandom.id);
    gridGame.append(newSquare); 
}

//Funzione crea div
function createDiv(number) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.innerHTML = number; // Aggiungo il numero al contenuto del div
    return newDiv;
  }







