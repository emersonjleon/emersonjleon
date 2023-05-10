function createTable() {
  const tableDiv = document.getElementById("table");
  const table = document.createElement("table");
  tableDiv.appendChild(table);

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      const product = i * j;
      const text = document.createTextNode(`${i} x ${j}`);

      const mantissa = Math.abs(Math.log10(product) - Math.floor(Math.log10(product)));
      const hue = mantissa * 360;
      cell.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
      cell.textContent = text;
      cell.product = product;
      cell.classList.add("box");
      cell.style.fontSize = "20px";
      cell.addEventListener("click", function() {
        selectBox(this, i, j);
      });
      row.appendChild(cell);
    }
  }
}

function selectBox(box) {
  const table = box.parentNode.parentNode;
  const rows = table.getElementsByTagName("tr");
  const cells = table.getElementsByTagName("td");

  for (let i = 0; i < cells.length; i++) {
    const row = cells[i].getAttribute("data-row");
    const col = cells[i].getAttribute("data-col");
    cells[i].textContent = `${row} x ${col}`;
    cells[i].classList.remove("selected");
  }

  const row = box.getAttribute("data-row");
  const col = box.getAttribute("data-col");
  const product = row * col;
  box.textContent = product;
  box.classList.add("selected");
}


function displayBox(box, row, col) {
  const table = box.parentNode.parentNode;
  const rows = table.getElementsByTagName("tr");
  const cells = table.getElementsByTagName("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("selected");
  }
  box.classList.add("selected");
  alert(`You clicked the box in row ${row}, column ${col}.`);
}

createTable();
