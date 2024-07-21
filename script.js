//VARIABILI
const cards = [1,1,2,2,3,3,4,4,5,5,6,6];
const gridGame = document.querySelector(".grid-game");
const square = document.querySelector(".square");

//START 
shuffle(cards);



//FUNZIONI

//crea div che si aggiungono alla griglia,hanno contenuto parametro 'number'
function createDiv(number) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.innerHTML = number; // Aggiungo il numero al contenuto del div
    return newDiv;
  }

  //Carte random
  function shuffle(array) {
    //ciclo nelle carte, genero un numero random (con indice) e sostituisco indice con numero random
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    
    //creo tanti div quanto sono le cards con contenuto indice array random
    for (let i = 0; i < array.length; i++) {
        const newSquare = createDiv(array[i]);
        newSquare.addEventListener('click', function() {
            console.log(newSquare.innerHTML);
        });
        gridGame.append(newSquare); 
    }
}



