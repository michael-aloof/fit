let currentRows = 0;
let currentCols = 0;

function createMatrixFields()
{
  const rows = parseInt(document.getElementById("rows").value, 10);
  const cols = parseInt(document.getElementById("cols").value, 10);

  if (Number.isNaN(rows) || Number.isNaN(cols) || rows <= 0 || cols <= 0)
  {
    alert("Введіть коректні значення m та n.");
    return;
  }

  currentRows = rows;
  currentCols = cols;

  let html = '<table class="matrix-input-table">';

  for (let i = 0; i < rows; i++)
  {
    html += "<tr>";

    for (let j = 0; j < cols; j++)
    {
      html += `<td><input type="number" class="matrix-cell" data-row="${i}" data-col="${j}" value="0"></td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  document.getElementById("matrixFields").innerHTML = html;
  document.getElementById("transposeResult").innerHTML = "";
  document.getElementById("rowMinResult").innerHTML = "";
}

function fillRandomMatrix()
{
  const inputs = document.querySelectorAll(".matrix-cell");

  if (inputs.length === 0)
  {
    alert("Спочатку створіть поля матриці.");
    return;
  }

  const minValue = parseInt(document.getElementById("minValue").value, 10);
  const maxValue = parseInt(document.getElementById("maxValue").value, 10);
  const integerMode = document.getElementById("integerMode").checked;

  if (Number.isNaN(minValue) || Number.isNaN(maxValue) || minValue > maxValue)
  {
    alert("Діапазон заповнення задано некоректно.");
    return;
  }

  inputs.forEach(function(input)
  {
    if (integerMode)
    {
      input.value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
    else
    {
      const value = minValue + Math.random() * (maxValue - minValue);
      input.value = value.toFixed(2);
    }
  });
}

function readMatrix()
{
  const inputs = document.querySelectorAll(".matrix-cell");

  if (inputs.length === 0)
  {
    return null;
  }

  const matrix = Array.from({ length: currentRows }, () => Array(currentCols).fill(0));

  inputs.forEach(function(input)
  {
    const row = parseInt(input.dataset.row, 10);
    const col = parseInt(input.dataset.col, 10);
    matrix[row][col] = parseFloat(input.value);
  });

  return matrix;
}

function renderTable(matrix, containerId, tableClass)
{
  let html = `<table class="${tableClass}">`;

  for (let i = 0; i < matrix.length; i++)
  {
    html += "<tr>";

    for (let j = 0; j < matrix[i].length; j++)
    {
      html += `<td>${matrix[i][j]}</td>`;
    }

    html += "</tr>";
  }

  html += "</table>";

  document.getElementById(containerId).innerHTML = html;
}

function showTranspose()
{
  const matrix = readMatrix();

  if (matrix === null)
  {
    alert("Спочатку створіть матрицю.");
    return;
  }

  const transposed = [];

  for (let j = 0; j < currentCols; j++)
  {
    transposed[j] = [];
    for (let i = 0; i < currentRows; i++)
    {
      transposed[j][i] = matrix[i][j];
    }
  }

  renderTable(transposed, "transposeResult", "simple-result-table");
}

function subtractRowMinimums()
{
  const matrix = readMatrix();

  if (matrix === null)
  {
    alert("Спочатку створіть матрицю.");
    return;
  }

  const result = matrix.map(function(row)
  {
    const minValue = Math.min(...row);
    return row.map(function(value)
    {
      return value - minValue;
    });
  });

  renderTable(result, "rowMinResult", "simple-result-table");
}

function buildSpecialMatrix()
{
  const rows = 12;
  const cols = 10;

  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  let value = 1;

  for (let col = 0; col < cols; col++)
  {
    if (col % 2 === 0)
    {
      for (let row = 0; row < rows; row++)
      {
        matrix[row][col] = value++;
      }
    }
    else
    {
      const temp = [];
      for (let row = 0; row < rows; row++)
      {
        temp.push(value++);
      }
      for (let row = 0; row < rows; row++)
      {
        matrix[row][col] = temp[rows - 1 - row];
      }
    }
  }

  renderTable(matrix, "specialMatrixResult", "special-table");
}

document.addEventListener("DOMContentLoaded", function()
{
  createMatrixFields();
});