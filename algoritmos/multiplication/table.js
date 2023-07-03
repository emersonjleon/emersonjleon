function createTable() {
  const tableElement = document.getElementById("table");

    // Create a table element with 11 rows and columns
  const size=20;  
  const table = document.createElement("table");
  for (let i = 0; i <= size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j <= size; j++) {
      const cell = document.createElement("td");
      cell.classList.add("box");
      const product = i * j;
      const mantissa = Math.abs(Math.log10(product) % 1);
      if (mantissa >= 0 && mantissa < 0.2) {
        cell.classList.add("box-yellow");
      } else if (mantissa >= 0.2 && mantissa < 0.4) {
        cell.classList.add("box-orange");
      } else if (mantissa >= 0.4 && mantissa < 0.6) {
        cell.classList.add("box-red");
      } else if (mantissa >= 0.6 && mantissa < 0.8) {
        cell.classList.add("box-purple");
      } else if (mantissa >= 0.8 && mantissa < 1) {
        cell.classList.add("box-blue");
      } else {
        cell.classList.add("box-green");
      }
      cell.textContent = product;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableElement.appendChild(table);
}

createTable();
