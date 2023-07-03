function createTable() {
  const tableDiv = document.getElementById("table");
  const table = document.createElement("table");
  tableDiv.appendChild(table);

    const size=100;
  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      const product = i * j;
      const mantissa = Math.abs(Math.log10(product) - Math.floor(Math.log10(product)));
      const hue = mantissa * 360;
      cell.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
      cell.textContent = product;
      row.appendChild(cell);
    }
  }
}

createTable();
