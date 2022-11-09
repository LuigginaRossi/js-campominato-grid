// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//trovo bottone nell'html
const btnCreateGrid = document.querySelector(".btn-create-grid");
console.log(btnCreateGrid);

//trovo contenitore griglia:
const gridContainer = document.querySelector(".grid-container");
console.log(gridContainer);

//creo evento al click del bottone
btnCreateGrid.addEventListener("clik", createGrid );

//funzione generatrice della griglia:
createGrid(10, gridContainer);
/**
 * 
 * @param {number} numcells 
 */
function createGrid (numcells, containerGrid ){

    //riazzero il contenuto del mio container:
    containerGrid.innerHTML = "";

    // Al suo interno quante celle voglio creare? 
    //numero totale di celle alla seconda
    totalCells = Math.pow(numcells,2);

    //uso ciclo for:
    for (let i  = 0; i  < totalCells; i ++) {
         
        //creo cella:
        const cellEL = document.createElement("div");
        console.log(cellEL)
        
        //attribuisco clssi e proprietà:
        cellEL.classList.add("cell");
        cellEL.style.flexBasis = `calc(100% / ${numcells}) `;
        cellEL.style.border = `1px solid darkolivegreen`;

        //inserisco elemento creato nel contenitore griglia:
        containerGrid.append(cellEL);
    }

}