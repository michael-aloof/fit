// ====== 1. Три масиви ======

const array1 = [12, 5, 8, 19, 33];

let array2 = [];
array2[0] = "Один";
array2[1] = 2;
array2[2] = false;
array2[3] = "4";
array2[4] = 5.5;

const array3 = new Array(5);
array3[0] = 100;
array3[1] = 200;
array3[2] = 300;
array3[3] = 400;
array3[4] = 500;

const arrays = [array1, array2, array3];

const foreachArray = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// ====== 2. Двовимірний масив 4x4 ======

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

// ====== 3. Вектор ======

let vectorInputs = [];

// ---------- 1. Масиви ----------

function showFirstLast()
{
  const lines = arrays.map((arr, index) => {
    return `Масив ${index + 1}: перший елемент = ${arr[0]}, останній елемент = ${arr[arr.length - 1]}`;
  });

  const box = document.getElementById("firstLastResult");
  box.style.display = "block";
  box.innerHTML = lines.join("<br>");
}

function showForLoop()
{
  let result = "";

  for (let j = 0; j < arrays.length; j++)
  {
    result += `Масив ${j + 1}: `;

    for (let i = 0; i < arrays[j].length; i++)
    {
      result += arrays[j][i] + " ";
    }

    result += "<br>";
  }

  const box = document.getElementById("forLoopResult");
  box.style.display = "block";
  box.innerHTML = result;
}

function showForEachExample()
{
  let html = "<ul>";

  foreachArray.forEach(function(item, index)
  {
    html += `<li>${index + 1}. ${item}</li>`;
  });

  html += "</ul>";

  const box = document.getElementById("forEachResult");
  box.style.display = "block";
  box.innerHTML = html;
}

function myfunction1()
{
  let html = `<table class="simple-table">`;

  arrays.forEach(function(arr)
  {
    html += "<tr>";

    arr.forEach(function(value)
    {
      html += `<td>${value}</td>`;
    });

    html += "</tr>";
  });

  html += "</table>";

  document.getElementById("arraysTableResult").innerHTML = html;
}

function checkArray()
{
  const a = array1;
  const b = {};
  const c = "не масив";

  const text = `
    array1: Array.isArray = ${Array.isArray(a)}, instanceof Array = ${a instanceof Array}<br>
    {}: Array.isArray = ${Array.isArray(b)}, instanceof Array = ${b instanceof Array}<br>
    "не масив": Array.isArray = ${Array.isArray(c)}, instanceof Array = ${c instanceof Array}
  `;

  const box = document.getElementById("arrayCheckResult");
  box.style.display = "block";
  box.innerHTML = text;
}

// ---------- 2. Двовимірний масив ----------

function showMatrix()
{
  let html = `<table class="matrix-table">`;

  matrix.forEach(function(row)
  {
    html += "<tr>";

    row.forEach(function(cell)
    {
      html += `<td>${cell}</td>`;
    });

    html += "</tr>";
  });

  html += "</table>";

  document.getElementById("matrixResult").innerHTML = html;
}

// ---------- 3. Вектор і сортування ----------

function generateVectorFields()
{
  const n = parseInt(document.getElementById("vectorSize").value, 10);
  const container = document.getElementById("vectorFields");

  if (Number.isNaN(n) || n <= 0)
  {
    alert("Введіть додатну кількість елементів.");
    return;
  }

  container.innerHTML = "";

  for (let i = 0; i < n; i++)
  {
    const input = document.createElement("input");
    input.type = "number";
    input.step = "any";
    input.value = Math.floor(Math.random() * 41) - 20; // від -20 до 20
    input.className = "vector-input";
    container.appendChild(input);
  }

  vectorInputs = Array.from(container.querySelectorAll("input"));
  showVectorStatus("Поля створено.");
}

function getVectorValues(asNumbers)
{
  const inputs = document.querySelectorAll("#vectorFields input");
  const a = [];

  inputs.forEach(function(input)
  {
    if (asNumbers)
    {
      a.push(parseInt(input.value, 10));
    }
    else
    {
      a.push(input.value);
    }
  });

  return a;
}

function writeVectorValues(arr)
{
  const inputs = document.querySelectorAll("#vectorFields input");

  inputs.forEach(function(input, i)
  {
    input.value = arr[i];
  });
}

function showVectorStatus(text)
{
  const box = document.getElementById("vectorStatus");
  box.style.display = "block";
  box.innerHTML = text;
}

function copy_to_array()
{
  const a = getVectorValues(false);
  const before = a.slice();

  a.sort();

  writeVectorValues(a);

  showVectorStatus(
    `<strong>copy_to_array()</strong><br>
    До сортування: ${before.join(", ")}<br>
    Після sort(): ${a.join(", ")}`
  );
}

function copy_to_array_numbers()
{
  const a = getVectorValues(true);
  const before = a.slice();

  a.sort();

  writeVectorValues(a);

  showVectorStatus(
    `<strong>copy_to_array_numbers()</strong><br>
    Значення після parseInt(): ${before.join(", ")}<br>
    Після sort() без compare function: ${a.join(", ")}`
  );
}

function sortAsc()
{
  const a = getVectorValues(true);
  const before = a.slice();

  a.sort(function(a, b) { return a - b; });

  writeVectorValues(a);

  showVectorStatus(
    `<strong>Сортування за зростанням</strong><br>
    До: ${before.join(", ")}<br>
    Після: ${a.join(", ")}`
  );
}

function sortDesc()
{
  const a = getVectorValues(true);
  const before = a.slice();

  a.sort(function(a, b) { return b - a; });

  writeVectorValues(a);

  showVectorStatus(
    `<strong>Сортування за спаданням</strong><br>
    До: ${before.join(", ")}<br>
    Після: ${a.join(", ")}`
  );
}

function sortByLastDigit()
{
  const a = getVectorValues(true);
  const before = a.slice();

  a.sort(function(x, y)
  {
    const lastX = Math.abs(x) % 10;
    const lastY = Math.abs(y) % 10;

    if (lastX === lastY)
    {
      return x - y;
    }

    return lastX - lastY;
  });

  writeVectorValues(a);

  showVectorStatus(
    `<strong>Сортування за останньою цифрою</strong><br>
    До: ${before.join(", ")}<br>
    Після: ${a.join(", ")}`
  );
}

// Автоматичне створення полів вектора при завантаженні
document.addEventListener("DOMContentLoaded", function()
{
  generateVectorFields();
});