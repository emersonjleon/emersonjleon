function createTable() {
  const tableDiv = document.getElementById("table");
  const table = document.createElement("table");
  tableDiv.appendChild(table);

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      const text = document.createTextNode(`${i} x ${j}`);
      cell.appendChild(text);
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
      cell.classList.add("box");
      row.appendChild(cell);
      cell.addEventListener("click", function() {
        selectBox(this);
      });
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

createTable();
