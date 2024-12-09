const board = document.getElementById("board");
const resetButton = document.getElementById("reset");
const nextButton = document.getElementById("next");
const stats = document.getElementById("stats");

// Configuración inicial
const numRows = 6;
const numCols = 10;
const seeds = {
  maize: 15, // Crías hembras
  lentil: 15, // Crías machos
  drypea: 15, // Adultos hembras
  greenpea: 15, // Adultos machos
  chickpea: 0, // Viejas hembras
  bean: 0, // Viejos machos
};

let grid = [];
const gensToGetOld = 2;
let currentGeneration = 0;
// Variables globales
let deadSeeds = 0;



// Crear el tablero
function createBoard() {
  board.innerHTML = "";
  grid = [];
  for (let row = 0; row < numRows; row++) {
    const rowArray = [];
    for (let col = 0; col < numCols; col++) {
      const square = document.createElement("div");
      square.classList.add("square", (row + col) % 2 === 0 ? "light" : "dark");
      square.dataset.row = row;
      square.dataset.col = col;
      board.appendChild(square);
      rowArray.push([]);
    }
    grid.push(rowArray);
  }
}

// Distribuir semillas iniciales
function distributeSeeds() {
  const types = Object.keys(seeds);
  for (const type of types) {
    for (let i = 0; i < seeds[type]; i++) {
      const row = Math.floor(Math.random() * numRows);
      const col = Math.floor(Math.random() * numCols);
      const seed = document.createElement("div");
      seed.classList.add("seed", type);
      seed.textContent = type[0].toUpperCase(); // Mostrar inicial
      grid[row][col].push(type);
      const square = document.querySelector(
        `.square[data-row="${row}"][data-col="${col}"]`
      );
      square.appendChild(seed);
    }
  }
}


// Reiniciar el juego
function resetGame() {
    createBoard();
    distributeSeeds();
    deadSeeds = 0;
    
}


function updateStats() {
  const statsDiv = document.getElementById("stats");
  const counts = {
    maize: 0,
    lentil: 0,
    drypea: 0,
    greenpea: 0,
    chickpea: 0,
      bean: 0,
      
  };

  grid.forEach(row => {
    row.forEach(seeds => {
      seeds.forEach(seed => {
        counts[seed]++;
      });
    });
  });

  statsDiv.innerHTML = `
    <h3>Estadísticas</h3>
    <p>Crías Hembras (Maíz): ${counts.maize}</p>
    <p>Crías Machos (Lentejas): ${counts.lentil}</p>
    <p>Adultos Hembras (Arvejas secas): ${counts.drypea}</p>
    <p>Adultos Machos (Arvejas verdes): ${counts.greenpea}</p>
    <p>Viejas Hembras (Garbanzos): ${counts.chickpea}</p>
    <p>Viejos Machos (Frijoles): ${counts.bean}</p>
    <p>Total Muertos: ${deadSeeds}</p>
  `;
}

// // Actualizar las estadísticas
// function updateStats() {
//   const babyCount = grid.flat().flat().filter(seed => seed === "maize" || seed === "lentil").length;
//   const adultCount = grid.flat().flat().filter(seed => seed === "drypea" || seed === "greenpea").length;
//   const elderCount = grid.flat().flat().filter(seed => seed === "chickpea" || seed === "bean").length;
//   const aliveCount = babyCount + adultCount + elderCount;

//   // Actualizar los contadores en la interfaz
//   document.getElementById("babyCount").textContent = babyCount;
//   document.getElementById("adultCount").textContent = adultCount;
//   document.getElementById("elderCount").textContent = elderCount;
//   document.getElementById("aliveCount").textContent = aliveCount;
//   document.getElementById("deadCount").textContent = deadSeeds;
// }

// // Mover semillas a la siguiente generación
// function nextGeneration() {
//   const newGrid = grid.map(row => row.map(() => [])); // Crear nueva matriz vacía
//   const babyBag = []; // Bolsa para nuevas crías generadas en esta generación

//   grid.forEach((row, rowIndex) => {
//     row.forEach((seeds, colIndex) => {
//       const isDarkSquare = (rowIndex + colIndex) % 2 === 1; // Determinar si es un cuadro oscuro

//       let adultsF = seeds.filter(seed => seed === "drypea").length; // Adultos hembras
//       let adultsM = seeds.filter(seed => seed === "greenpea").length; // Adultos machos
//       let elders = seeds.filter(seed => seed === "chickpea" || seed === "bean").length; // Viejos

//       // Reproducción en cuadros claros
//       if (!isDarkSquare && adultsF > 0 && adultsM > 0) {
//         const newBabies = Math.min(adultsF * 5, 30 - babyBag.length); // Máximo 30 crías
//         for (let i = 0; i < newBabies; i++) {
//           babyBag.push(i % 2 === 0 ? "maize" : "lentil"); // Alternar hembras y machos
//         }
//       }

//       // Procesar semillas
//       seeds.forEach(seed => {
//         if (seed === "maize" || seed === "lentil") {
//           // Crías
//           if (isDarkSquare && elders === 0) {
//             // Mueren en cuadros oscuros sin viejos
//             deadSeeds++;
//           } else {
//             // Sobreviven o son protegidas
//             newGrid[rowIndex][colIndex].push(seed === "maize" ? "drypea" : "greenpea");
//           }
//         } else if (seed === "drypea" || seed === "greenpea") {
//           // Adultos → Viejos
//           newGrid[rowIndex][colIndex].push(seed === "drypea" ? "chickpea" : "bean");
//         } else if (seed === "chickpea" || seed === "bean") {
//           // Viejos → Mueren si protegen
//           if (isDarkSquare) {
//             if (elders > 0 && seeds.some(s => s === "maize" || s === "lentil")) {
//               elders--; // Sacrifica un viejo por cada cría
//             } else {
//               deadSeeds++;
//             }
//           } else {
//             deadSeeds++;
//           }
//         }
//       });
//     });
//   });

//   // Distribuir nuevas crías en el tablero
//   while (babyBag.length > 0) {
//     const row = Math.floor(Math.random() * 10);
//     const col = Math.floor(Math.random() * 6);
//     newGrid[row][col].push(babyBag.pop());
//   }

//   grid = newGrid; // Actualizar estado del tablero
//   renderBoard(); // Redibujar el tablero
//   updateStats(); // Actualizar estadísticas
// }


function handleAging() {
  grid.forEach(row => {
    row.forEach(seeds => {
      for (let i = seeds.length - 1; i >= 0; i--) {
        const seed = seeds[i];
        if (currentGeneration % gensToGetOld === 0) {
          if (seed === "maize") seeds[i] = "drypea"; // Cría hembra -> Adulta hembra
          else if (seed === "lentil") seeds[i] = "greenpea"; // Cría macho -> Adulto macho
          else if (seed === "drypea") seeds[i] = "chickpea"; // Adulta hembra -> Vieja hembra
          else if (seed === "greenpea") seeds[i] = "bean"; // Adulto macho -> Viejo macho
          else if (seed === "chickpea" || seed === "bean") {
            // Viejas and viejos die, remove from the array
            seeds.splice(i, 1);
            deadSeeds++; // Update the dead seeds counter
          }
        }
      }
    });
  });
}

function handleReproduction() {
  grid.forEach((row, rowIndex) => {
    row.forEach((seeds, colIndex) => {
      // Verificar si la casilla es hábitat favorable
      const isFavorable = (rowIndex + colIndex) % 2 === 0;

      // Contar adultos por género
      const adultFemales = seeds.filter(seed => seed === "drypea").length;
      const adultMales = seeds.filter(seed => seed === "greenpea").length;

      if (isFavorable && adultFemales > 0 && adultMales > 0) {
        // Reproducir: Cada hembra adulta da a luz a 5 crías
        for (let i = 0; i < adultFemales * 5; i++) {
          // Asignar género aleatorio a la nueva cría
          const newSeed = Math.random() < 0.5 ? "maize" : "lentil";

          // Determinar una posición aleatoria alrededor de los padres
          const randomRowOffset = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
          const randomColOffset = Math.floor(Math.random() * 3) - 1; // -1, 0, 1

          const newRow = rowIndex + randomRowOffset;
          const newCol = colIndex + randomColOffset;

          // Validar que la nueva posición esté dentro del tablero
          if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
            grid[newRow][newCol].push(newSeed);
          }
        }
      }
    });
  });
}

// bebes nacen en la misma casilla de sus padres
// function handleReproduction() {
//   grid.forEach((row, rowIndex) => {
//     row.forEach((seeds, colIndex) => {
//       // Check if the cell is in a favorable habitat
//       const isFavorable = (rowIndex + colIndex) % 2 === 0;

//       // Count adults by gender
//       const adultFemales = seeds.filter(seed => seed === "drypea").length;
//       const adultMales = seeds.filter(seed => seed === "greenpea").length;

//       if (isFavorable && adultFemales > 0 && adultMales > 0) {
//         // Reproduce: Each female gives birth to 5 new crías
//         for (let i = 0; i < adultFemales * 5; i++) {
//           // Randomly assign gender to new cría
//           const newSeed = Math.random() < 0.5 ? "maize" : "lentil";
//           seeds.push(newSeed);
//         }
//       }
//     });
//   });
// }

function handleHabitatEffects() {
  grid.forEach((row, rowIndex) => {
    row.forEach((seeds, colIndex) => {
      const isFavorable = (rowIndex + colIndex) % 2 === 0;

      if (!isFavorable) {
        // Unfavorable habitat logic
        const crías = seeds.filter(seed => seed === "maize" || seed === "lentil");
        const viejos = seeds.filter(seed => seed === "chickpea" || seed === "bean");

        // Kill crías unless there are viejos to protect them
        const críasToSave = Math.min(crías.length, viejos.length);
        const críasToKill = crías.length - críasToSave;

        // Remove crías to kill
        for (let i = 0; i < críasToKill; i++) {
          const index = seeds.findIndex(seed => seed === "maize" || seed === "lentil");
          if (index !== -1) {
            seeds.splice(index, 1);
            deadSeeds++;
          }
        }

        // Viejos sacrifice themselves to save crías
        for (let i = 0; i < críasToSave; i++) {
          const index = seeds.findIndex(seed => seed === "chickpea" || seed === "bean");
          if (index !== -1) {
            seeds.splice(index, 1);
            deadSeeds++;
          }
        }
      }
    });
  });
}

function nextGeneration() {
  currentGeneration++;

  // Apply game dynamics
  handleAging();
  handleReproduction();
  handleHabitatEffects();

  // Update the UI
  renderBoard();
  updateStats();
}







// Renderizar el tablero según el estado actual
function renderBoard() {
  document.querySelectorAll(".square").forEach(square => (square.innerHTML = "")); // Limpiar tablero

  grid.forEach((row, rowIndex) => {
    row.forEach((seeds, colIndex) => {
      const square = document.querySelector(`.square[data-row="${rowIndex}"][data-col="${colIndex}"]`);
      seeds.forEach(seed => {
        const seedElement = document.createElement("div");
        seedElement.classList.add("seed", seed);
        seedElement.textContent = seed[0].toUpperCase(); // Inicial del tipo
        square.appendChild(seedElement);
      });
    });
  });
}





// Inicializar el juego
resetButton.addEventListener("click", () => {
  resetGame();
  updateStats();
});
nextButton.addEventListener("click", nextGeneration);

// Iniciar la primera generación
resetGame();
updateStats();



// Inicializar el juego
resetButton.addEventListener("click", resetGame);
nextButton.addEventListener("click", nextGeneration);

resetGame();
