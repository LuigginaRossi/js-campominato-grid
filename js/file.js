// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//trovo bottone nell'html
const btnCreateGridEl = document.querySelector(".btn-create-grid");
console.log(btnCreateGridEl);

//trovo contenitore griglia:
const gridContainerEl = document.querySelector(".grid-container");
console.log(gridContainerEl);


//creo evento al click del bottone
btnCreateGridEl.addEventListener("click", function() {

    // //BONUS:

         const selectEL = document.querySelector(".select-hardle");
         console.log(selectEL);
         const opzione = selectEL.value;
         console.log(opzione)
       
         if(opzione === 100){

             createGrid(10, gridContainerEl);
         }else if (opzione === 81){

             createGrid(9, gridContainerEl);
         } else if (opzione === 49){

             createGrid(7, gridContainerEl);
         }
        // //Fine BONUS

    //createGrid(10, gridContainerEl);
} );

/**
 * Crea celle della griglia:
 * @param {number} numcells 
 * @param {Element} containerGrid
 */
function createGrid (numcells, containerGrid ){

    //riazzero il contenuto del mio container:
    //NON FUNZIONA:
    containerGrid.innerHTML = "";

    // Al suo interno quante celle voglio creare? 
    //numero totale di celle alla seconda
    totalCells = Math.pow(numcells,2);

    //uso ciclo for per creare le singole celle:
    for (let i  = 1; i  < totalCells + 1 ; i ++) {

        //creo cella:
        const cellEL = document.createElement("div");
        console.log(cellEL)
        
        //attribuisco clssi e proprietà:
        cellEL.classList.add("cell");
        cellEL.style.flexBasis = `calc(100% / ${numcells})`;
        cellEL.style.border = `1px solid darkolivegreen`;

        

        cellEL.addEventListener("click", function(){
            //mostro numero all'interno della cella:
            cellEL.innerHTML= i;

            this.classList.toggle("bg-primary");
        });


        //inserisco elemento creato nel contenitore griglia:
        containerGrid.append(cellEL);

    }
}




        

