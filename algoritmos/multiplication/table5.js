function createTable() {
  const tableDiv = document.getElementById("table");
  const table = document.createElement("table");
  tableDiv.appendChild(table);

    const size = 100;  
  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      const product = i * j;
      const log = Math.log10(product);
      const mantissa = log - Math.floor(log);
        const hue =  mantissa * 360;
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
	cell.classList.add("box");
	cell.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;

      
      const text = document.createTextNode(`${i} x ${j}`);
      cell.appendChild(text);
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
    const product = row * col;
    const text = document.createTextNode(`${row} x ${col}`);
    cells[i].textContent = "";
    cells[i].appendChild(text);
    cells[i].classList.remove("selected");
  }

  const row = box.getAttribute("data-row");
  const col = box.getAttribute("data-col");
  const product = row * col;
  box.textContent = product;
  box.classList.add("selected");
}

createTable();
