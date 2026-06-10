function taskA() {
  const university = prompt("У якому вузі Ви навчаєтеся?");
  const box = document.getElementById("answerA");

  if (university === null) {
    box.style.display = "block";
    box.innerHTML = "Введення скасовано.";
    return;
  }

  const text = `Я вчуся в ${university}.`;
  box.style.display = "block";
  box.innerHTML = `<strong>Відповідь:</strong> ${text}`;
  alert(text);
  console.log(text);
}

function taskB() {
  const a = parseFloat(prompt("Введіть довжину поля (метри):"));
  const b = parseFloat(prompt("Введіть ширину поля (метри):"));
  const n = parseFloat(prompt("Скільки кіл пробіг спортсмен?"));

  const box = document.getElementById("answerB");

  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(n) || a <= 0 || b <= 0 || n <= 0) {
    const msg = "Потрібно ввести додатні числа.";
    box.style.display = "block";
    box.innerHTML = `<strong>Помилка:</strong> ${msg}`;
    alert(msg);
    console.log("Task B: некоректні дані");
    return;
  }

  const perimeter = 2 * (a + b);
  const distance = perimeter * n;

  const message =
    `Периметр поля = ${perimeter.toFixed(2)} м.\n` +
    `Відстань за ${n} кіл = ${distance.toFixed(2)} м.`;

  box.style.display = "block";
  box.innerHTML = `
    <strong>Розв’язання:</strong><br>
    Периметр поля: 2 × (${a} + ${b}) = ${perimeter.toFixed(2)} м<br>
    Відстань: ${n} × ${perimeter.toFixed(2)} = ${distance.toFixed(2)} м
  `;

  alert(message);
  console.log("Task B:", message);
}

function taskC() {
  const input = prompt("Введіть тризначне натуральне число:");
  const box = document.getElementById("answerC");

  if (input === null) {
    box.style.display = "block";
    box.innerHTML = "Введення скасовано.";
    return;
  }

  const str = input.trim();

  if (!/^\d{3}$/.test(str) || Number(str) < 100) {
    const msg = "Потрібно ввести саме тризначне натуральне число.";
    box.style.display = "block";
    box.innerHTML = `<strong>Помилка:</strong> ${msg}`;
    alert(msg);
    console.log("Task C: некоректні дані");
    return;
  }

  const reversed = str.split("").reverse().join("");
  const text = `Число, прочитане справа наліво: ${reversed}`;

  box.style.display = "block";
  box.innerHTML = `
    <strong>Розв’язання:</strong><br>
    Вхідне число: ${str}<br>
    Перевернуте число: ${reversed}
  `;

  alert(text);
  console.log("Task C:", text);
}

function taskD() {
  const a = parseFloat(document.getElementById("aInput").value);
  const b = parseFloat(document.getElementById("bInput").value);
  const box = document.getElementById("answerD");
  const table = document.getElementById("resultTable");

  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Введіть коректні значення a і b.");
    return;
  }

  if (b < 0) {
    alert("Дані не задовольняють умову: b повинно бути не менше 0.");
    return;
  }

  const denominator = Math.sqrt(b) + (a + b) / 2;

  if (denominator === 0) {
    alert("Дані не задовольняють умову: знаменник не може дорівнювати нулю.");
    return;
  }

  const numeratorPart = a / (a * a + 25) + b;
  const z = Math.sin(a * a + b * b) * numeratorPart / denominator;
  const zRounded = z.toFixed(2);

  box.style.display = "block";
  box.innerHTML = `
    <strong>Розв’язання:</strong><br>
    a = ${a}<br>
    b = ${b}<br>
    z = sin(${a}² + ${b}²) · (${a} / (${a}² + 25) + ${b}) / (√${b} + (${a} + ${b}) / 2)<br>
    z = ${zRounded}
  `;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${a}</td>
    <td>${b}</td>
    <td>${zRounded}</td>
  `;
  table.appendChild(row);

  alert(`z = ${zRounded}`);
  console.log("Task D: a =", a, "b =", b, "z =", zRounded);
}